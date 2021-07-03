import React from "react";

// reactstrap components
import {
  Col,
  Row,
  Card,
  CardTitle,
  CardHeader,
} from "reactstrap";



class UnderConstruction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <div className="content underConstruction">
          <Row className="mt-5">
            <Col className="ml-auto mr-auto mt-5" md="6">
              <Card className="card card-subcategories mt-5 mb-0">
                <CardHeader className="">
                  <CardTitle className="text-center" >
                    <h1 className="title text-center mt-1">UNDER CONSTRUCTION &nbsp; <i className="tim-icons icon-settings-gear-63 mb-1"></i> </h1>
                    <h3 className="text-center mt-1">This page will be available soon!</h3>
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UnderConstruction;
