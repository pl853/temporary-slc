import React from "react";
import Fade from 'react-reveal/Fade'

// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";

class Timeline extends React.Component {
  render() {
    return (
      <>

        <div className="content time">

          <Row>
            <Col md="12">
              <Card className="card-timeline card-plain">
                <CardBody>
                <Fade top cascade>
                  <ul className="timeline mt-3">
                    <li className="timeline-inverted">
                      <div className="timeline-badge primary">
                        <i className="tim-icons icon-planet" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="primary" pill>
                            Work
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                          </p>
                        </div>
                        <h6>
                          <i className="ti-time" />
                        </h6>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-badge primary">
                        <i className="tim-icons icon-user-run" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="primary" pill>
                            Work
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge primary">
                        <i className="tim-icons icon-user-run" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="primary" pill>
                            School
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-badge primary">
                        <i className="tim-icons icon-user-run" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="primary" pill>
                            Work
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge primary">
                        <i className="tim-icons icon-user-run" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="primary" pill>
                            School
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                          </p>
                        </div>
                      </div>
                    </li>   
                  </ul>
                  

          </Fade>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>

      </>
    );
  }
}

export default Timeline;
