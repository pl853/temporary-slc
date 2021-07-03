import React from "react";

// reactstrap components
import { Row, Col, Card, CardBody, CardText, CardFooter, Button } from "reactstrap";


class Wizard extends React.Component {
  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Col className="text-center" lg="8">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/pf.jpg")}
                    />
                    <h5 className="title">Pieter Lems</h5>
                  </a>
                  <p className="description">Full-stack web developer / security consultant</p>
                </div>
                <div className="card-description">
                  Hello and welcome to my website! My name is Pieter Lems, I'm a student at the University of Applied Sciences. Next to my study I like to develop websites and Full-Stack web applications for people in need of them. I'm also a security consultant who can give feedback and information about security related issues. To see my work go to the project page in this web application. If you're intrested in working togheter you can get in touch with me by using the contact form!
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Wizard;
