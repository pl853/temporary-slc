import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../../components/Firebase";
import * as ROLES from "../../roles";
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

const SignUpPage = () => (
  <>
    <SignUpForm />
  </>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  agree: false,
  isAdmin: false,
  error: null
};

const ERROR_CODE_ACCOUNT_EXISTS = "auth/email-already-in-use";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  notify = place => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            <b>Succesfully registered, Please verify your email!</b>
          </div>
        </div>
      ),
      type: "primary",
      icon: "tim-icons icon-bell-55",
      autoDismiss: 15
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  onSubmit = event => {
    const { username, email, passwordOne, isAdmin, agree } = this.state;
    const roles = [];

    if (isAdmin) {
      roles.push(ROLES.HACKER);
    }
    else{
      roles.push(ROLES.CLIENT);
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          roles,
          agree
        });
      })
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.notify("tc");
        this.props.firebase.doSignOut();
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  componentDidMount() {
    document.body.classList.toggle("register-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
  }
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      agree
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "" ||
      agree === false;
    return (
      <>
        <div className="content">
          <div className="rna-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <Container>
            <Row>
              <Col className="ml-auto" md="5">
                <div className="info-area info-horizontal mt-5">
                  <div className="icon icon-warning">
                    <i className="tim-icons icon-wifi" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Download files</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras at ex dapibus, condimentum eros at, suscipit felis.
                      Aliquam quis imperdiet ex.
                    </p>
                  </div>
                </div>
                <div className="info-area info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-triangle-right-17" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Full guides</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras at ex dapibus, condimentum eros at, suscipit felis.
                      Aliquam quis imperdiet ex.
                    </p>
                  </div>
                </div>
                <div className="info-area info-horizontal">
                  <div className="icon icon-info">
                    <i className="tim-icons icon-trophy" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Up to date with work</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras at ex dapibus, condimentum eros at, suscipit felis.
                      Aliquam quis imperdiet ex.
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" md="7">
                <Form className="form" onSubmit={this.onSubmit}>
                  <Card className="card-register card-light-gray">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("assets/img/card-danger.png")}
                      />
                      <CardTitle tag="h4">Register</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="username"
                          value={username}
                          onChange={this.onChange}
                          type="text"
                          placeholder="Full Name"
                        />
                      </InputGroup>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="email"
                          value={email}
                          onChange={this.onChange}
                          type="text"
                          placeholder="Email Address"
                        />
                      </InputGroup>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-lock-circle" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="passwordOne"
                          value={passwordOne}
                          onChange={this.onChange}
                          type="password"
                          placeholder="Password"
                        />
                      </InputGroup>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-lock-circle" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="passwordTwo"
                          value={passwordTwo}
                          onChange={this.onChange}
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </InputGroup>
                      <FormGroup check className="text-left">
                        <Label check>
                          <Input
                            name="agree"
                            type="checkbox"
                            checked={agree}
                            onChange={this.onChangeCheckbox}
                          />
                          <span className="form-check-sign" />I agree to the{" "}
                          <a href="#pablo">terms and conditions</a>.
                        </Label>
                      </FormGroup>
                    </CardBody>
                    <CardFooter>
                      {error && <h6>{error.message}</h6>}
                      <Button
                        className="btn-round"
                        color="primary"
                        disabled={isInvalid}
                        type="submit"
                        onClick={this.onSubmit}
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={"auth/Register"}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
