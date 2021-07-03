import React from "react";
import Fade from "react-reveal/Fade";
// reactstrap components
import {
  Col,
  Row,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Modal,
  ModalBody
} from "reactstrap";

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClassic: false
    };
  }
  toggleModalClassic = () => {
    this.setState({
      modalClassic: !this.state.modalClassic
    });
  };
  render() {
    return (
      <>
        <Fade top>
          <div className="content start">
            <Row>
              <Col className="ml-auto mr-auto mt-5" md="7">
                <Card className="card-plain text-center">
                  <CardHeader>
                    <CardTitle className="p-0" tag="h1">
                      PIETER LEMS
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="p-0">
                    <img
                      style={{ width: "40px" }}
                      alt="..."
                      src={require("assets/img/logo.png")}
                    />
                    <h3 className="mt-2" style={{ fontWeight: "200" }}>
                      Computer Science student at the Rotterdam University of
                      Applied Sciences, Freelance Website & Web application
                      developer, Freelance security consultant.
                    </h3>
                  </CardBody>
                  <CardFooter>
                    <div className="button-container">
                      <Button
                        className="btn"
                        color="primary"
                        onClick={this.toggleModalClassic}
                      >
                        <i className="tim-icons icon-badge mb-1" /> &nbsp;
                        Resume
                      </Button>

                      <Button
                        className="btn"
                        color="primary"
                        href="https://github.com/PieterLems"
                      >
                        <i className="fab fa-github" /> &nbsp; Github
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </div>
        </Fade>
        <Modal
          isOpen={this.state.modalClassic}
          toggle={this.toggleModalClassic}
          className="resume"
        >
          <div className="modal-header justify-content-center">
            <button
              aria-hidden={true}
              className="close "
              data-dismiss="modal"
              type="button"
              onClick={this.toggleModalClassic}
            >
              <i className="tim-icons icon-simple-remove" />
            </button>
<a className="mb-5" href="https://pieterlems.github.io/Downloadable-Files/Pieter_Lems_Resume.pdf">Download <i aria-hidden="true" className="tim-icons icon-cloud-download-93"/></a>
          </div>

          <ModalBody className="text-center">
            <iframe
              src="https://pieterlems.github.io/Downloadable-Files/Pieter_Lems_Resume.pdf"
              frameBorder="0"
              className="frame"
              title="resume"
            ></iframe>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Start;
