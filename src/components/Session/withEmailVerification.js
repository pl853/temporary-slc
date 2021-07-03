import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

import { Card, CardBody,Col, Button } from "reactstrap";

const needsEmailVerification = authUser =>
  authUser &&
  !authUser.emailVerified &&
  authUser.providerData
    .map(provider => provider.providerId)
    .includes('password');

const withEmailVerification = Component => {
  class WithEmailVerification extends React.Component {
    constructor(props) {
      super(props);

      this.state = { isSent: false };
    }

    onSendEmailVerification = () => {
      this.props.firebase
        .doSendEmailVerification()
        .then(() => this.setState({ isSent: true }));
    };

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            needsEmailVerification(authUser) ? (
              <div class="content">
              <Col className="ml-auto mr-auto" md="6">
              <Card>
                <CardBody className="text-center py-5">
                  {this.state.isSent ? (
                    <p>
                      E-Mail confirmation sent: Check you E-Mails (Spam
                      folder included) for a confirmation E-Mail.
                      Refresh this page once you confirmed your E-Mail.
                    </p>
                  ) : (
                    <p>
                      Verify your E-Mail: Check you E-Mails (Spam folder
                      included) for a confirmation E-Mail or send
                      another confirmation E-Mail.
                    </p>
                  )}
                  <Button
                    color="primary"
                    type="button"
                    onClick={this.onSendEmailVerification}
                    disabled={this.state.isSent}
                  >
                    RE-send verification email
                  </Button>
                </CardBody>
              </Card>
            </Col>
            </div>
            ) : (
              <Component {...this.props} />
            )
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return withFirebase(WithEmailVerification);
};

export default withEmailVerification;
