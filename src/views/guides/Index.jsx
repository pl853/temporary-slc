import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class Guides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verticalTabsIcons: "brain",
      openedCollapses: [""]
    };
  }
  collapsesToggle = (e, collapse) => {
    e.preventDefault();
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: openedCollapses.filter(item => item !== collapse)
      });
    } else {
      openedCollapses.push(collapse);
      this.setState({
        openedCollapses: openedCollapses
      });
    }
  };
  changeActiveTab = (e, tabState, tadName) => {
    e.preventDefault();
    this.setState({
      [tabState]: tadName
    });
  };
  render() {
    return (
      <>
        <div className="content guides">
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
             
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="2" md="4">
                    {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
                    <Nav
                      className="nav-pills-primary nav-pills-icons flex-column"
                      pills
                    >
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            this.state.verticalTabsIcons === "brain"
                              ? "active"
                              : ""
                          }
                          onClick={e =>
                            this.changeActiveTab(
                              e,
                              "verticalTabsIcons",
                              "brain"
                            )
                          }
                        >
                          <i className="tim-icons icon-molecule-40" />
                          Brain
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            this.state.verticalTabsIcons === "Touch"
                              ? "active"
                              : ""
                          }
                          onClick={e =>
                            this.changeActiveTab(
                              e,
                              "verticalTabsIcons",
                              "Touch"
                            )
                          }
                        >
                          <i className="tim-icons icon-tap-02" />
                          Touch
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            this.state.verticalTabsIcons === "Speech"
                              ? "active"
                              : ""
                          }
                          onClick={e =>
                            this.changeActiveTab(
                              e,
                              "verticalTabsIcons",
                              "Speech"
                            )
                          }
                        >
                          <i className="tim-icons icon-chat-33" />
                          Speech
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            this.state.verticalTabsIcons === "Gesture"
                              ? "active"
                              : ""
                          }
                          onClick={e =>
                            this.changeActiveTab(
                              e,
                              "verticalTabsIcons",
                              "Gesture"
                            )
                          }
                        >
                          <i className="tim-icons icon-user-run" />
                          Gesture
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            this.state.verticalTabsIcons === "Gaze"
                              ? "active"
                              : ""
                          }
                          onClick={e =>
                            this.changeActiveTab(e, "verticalTabsIcons", "Gaze")
                          }
                        >
                          <i className="tim-icons icon-satisfied" />
                          Gaze
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="10">
                    <TabContent className="guide-content" activeTab={this.state.verticalTabsIcons}>
                      <TabPane tabId="brain">
                        <Card>
                          <CardHeader>
                            {/* <img
                              alt="..."
                              className=""
                              src={require("assets/img/logo.png")}
                            /> */}

                            <CardTitle tag="h3">Security Guides:</CardTitle>
                            <p>
                                In this Tab you can find all the guides related to 
                            </p>
                          </CardHeader>
                          <div
                            aria-multiselectable={true}
                            className="card-collapse"
                            id="accordion"
                            role="tablist"
                          >
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseOne"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseOne")
                                  }
                                >
                                  Verleden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseOne"
                                )}
                              >
                                <CardBody>
                                  <h4>Hoe werkt de NUI?</h4>
                                  <p>blablabla</p>
                                  <h4>
                                    Waarom is de desbetreffende NUI instinctief?
                                  </h4>
                                  <p>blablabla</p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseTwo"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseTwo")
                                  }
                                >
                                  Heden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseTwo"
                                )}
                              >
                                <CardBody>
                                  <h4>Op welke manieren word de NUI momenteel gebruikt?</h4>
                                  <p>blablabla</p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseThree"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseThree")
                                  }
                                >
                                  Toekomst van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseThree"
                                )}
                              >
                                <CardBody>
                                  <h4>Is er nog ruimte voor innovatie binnen deze NUI?</h4>
                                  <p>blablabla</p>
                                </CardBody>
                              </Collapse>
                            </Card>
                          </div>
                        </Card>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </div>
      </>
    );
  }
}

export default Guides;
