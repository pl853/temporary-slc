import React from "react";

import Fade from "react-reveal/Fade";
// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "Programming"
    };
  }
  changeActiveTab = (e, tabState, tadName) => {
    e.preventDefault();
    this.setState({
      [tabState]: tadName
    });
  };
  render() {
    return (
      <>
        <div className="skills">
          <Col className="mr-auto ml-auto mt-3" md="10">
            <h5>HOVER THE SKILL FOR MORE INFO</h5>
            <Fade left>
              <Row>
                <Col className="mr-auto ml-auto mt-2" sm="6" md="6" lg="3">
                  <div className="card">
                    <h4 className="title">.NET Core</h4>
                    <div className="bar">
                      <div className="emptybar"></div>
                      <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke" cx="60" cy="60" r="50"></circle>
                      </svg>
                      <Col>
                        <img
                          className="bootimg"
                          alt=""
                          src={require("assets/img/p-netcoreframe.png")}
                        />
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto ml-auto" sm="6" md="6" lg="3">
                  <div className="card">
                    <h4 className="title">Python</h4>
                    <div className="bar">
                      <div className="emptybar"></div>
                      <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke" cx="60" cy="60" r="50"></circle>
                      </svg>
                      <Col>
                        <img
                          className="bootimg"
                          alt=""
                          src={require("assets/img/p-python.png")}
                        />
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto ml-auto" sm="6" md="6" lg="3">
                  <div className="card">
                    <h4 className="title">ReactJS</h4>
                    <div className="bar">
                      <div className="emptybar"></div>
                      <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke" cx="60" cy="60" r="50"></circle>
                      </svg>
                      <Col>
                        <img
                          className="bootimg"
                          alt=""
                          src={require("assets/img/p-react-logo.png")}
                        />
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto ml-auto" sm="6" md="6" lg="3">
                  <div className="card">
                    <h4 className="title">VueJS</h4>
                    <div className="bar">
                      <div className="emptybar"></div>
                      <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke" cx="60" cy="60" r="50"></circle>
                      </svg>
                      <Col>
                        <img
                          className="bootimg"
                          alt=""
                          src={require("assets/img/p-vue.png")}
                        />
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto ml-auto" sm="6" md="6" lg="3">
                  <div className="card">
                    <h4 className="title">HTML</h4>
                    <div className="bar">
                      <div className="emptybar"></div>
                      <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke" cx="60" cy="60" r="50"></circle>
                      </svg>
                      <Col>
                        <img
                          className="bootimg"
                          alt=""
                          src={require("assets/img/p-html.png")}
                        />
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto ml-auto" sm="6" md="6" lg="3">
                  <div className="card">
                    <h4 className="title">C#</h4>
                    <div className="bar">
                      <div className="emptybar"></div>
                      <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke" cx="60" cy="60" r="50"></circle>
                      </svg>
                      <Col>
                        <img
                          className="bootimg"
                          alt=""
                          src={require("assets/img/p-csharp.png")}
                        />
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto ml-auto" sm="6" md="6" lg="3">
                  <div className="card">
                    <h4 className="title">Linux</h4>
                    <div className="bar">
                      <div className="emptybar"></div>
                      <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke" cx="60" cy="60" r="50"></circle>
                      </svg>
                      <Col>
                        <img
                          className="bootimg"
                          alt=""
                          src={require("assets/img/p-linux.png")}
                        />
                      </Col>
                    </div>
                  </div>
                </Col><Col className="mr-auto ml-auto" sm="6" md="6" lg="3">
                  <div className="card">
                    <h4 className="title">Git</h4>
                    <div className="bar">
                      <div className="emptybar"></div>
                      <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke" cx="60" cy="60" r="50"></circle>
                      </svg>
                      <Col>
                        <img
                          className="bootimg"
                          alt=""
                          src={require("assets/img/p-git.png")}
                        />
                      </Col>
                    </div>
                  </div>
                </Col>
              </Row>
            </Fade>
          </Col>
        </div>
      </>
    );
  }
}

export default Wizard;
