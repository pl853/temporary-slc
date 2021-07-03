import React from "react";
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";
import Fade from "react-reveal/Fade";
// reactstrap components
import { Col, Form} from "reactstrap";
import NotificationAlert from "react-notification-alert";
// wizard steps
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";

var steps = [
  {
    stepName: "About",
    stepIcon: "tim-icons icon-single-02",
    component: Step1
  },
  {
    stepName: "Skills",
    stepIcon: "tim-icons icon-trophy",
    component: Step2
  },
  {
    stepName: "Contact",
    stepIcon: "tim-icons icon-send",
    component: Step3
  }
];

class Wizard extends React.Component {
  submitForm() {
    var x = document.getElementsByName("gform");
    var submitText = "submitted=true";
    x[0].submit();
    this.notify("tc");
    return submitText;
  }

  notify = place => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            <b>Message sent, I'll get back to you soon!</b>
          </div>
        </div>
      ),
      type: "primary",
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  render() {
    return (
      <>
        <div className="rna-container">
          <NotificationAlert ref="notificationAlert" />
        </div>

        <div className="content about">
          <Form
            name="gform"
            id="gform"
            encType="text/plain"
            action="https://docs.google.com/forms/d/e/1FAIpQLSeoU44kzeJddnl45ZnxqGKGLLThCik1Wh4ta6GbiiyvpfWCZw/formResponse?usp=sf_link"
            target="hidden_iframe"
            onSubmit={this.submitFormText}
          >
            <Fade top>
              <Col className="mr-auto ml-auto mt-0" md="10">
                <ReactWizard
                  steps={steps}
                  navSteps
                  validate
                  title=""
                  headerTextCenter
                  previousButtonText={<i aria-hidden="true" className="tim-icons icon-double-left"></i>}
                  nextButtonText={<i aria-hidden="true" className="tim-icons icon-double-right"></i>}
                  finishButtonText={<i aria-hidden="true" className="tim-icons icon-send"></i>}
                  finishButtonClick={() => this.submitForm()}
                  finishButtonClasses="btn-wde"
                  nextButtonClasses="btn-wde"
                  previousButtonClasses="btn-wde "
                  progressbar
                  color="primary"
                />
              </Col>
            </Fade>
          </Form>
        </div>
      </>
    );
  }
}

export default Wizard;
