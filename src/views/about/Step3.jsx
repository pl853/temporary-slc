import React from "react";
import classnames from "classnames";

import Fade from "react-reveal/Fade";
// reactstrap components
import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Card

} from "reactstrap";

const INITIAL_STATE = {
  firstname: "",
  lastname: "",
  email: "",
  subject: "",
  message:"",
  firstnameState: "",
  lastnameState: "",
  emailState: "",
  subjectState: "",
};

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE
    };
  }
  // function that returns true if value is email, false otherwise
  verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  // function that verifies if a string has a given length or not
  verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  // function that verifies if value contains only numbers
  verifyNumber = value => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };
  change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "number":
        if (this.verifyNumber(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  };
  isValidated = () => {
    if (
      this.state.firstnameState === "has-success" &&
      this.state.lastnameState === "has-success" &&
      this.state.emailState === "has-success" &&
      this.state.subjectState === "has-success"
    ) {
      this.setState({ ...INITIAL_STATE });
      return true;
    } else {
      if (this.state.firstnameState !== "has-success") {
        this.setState({ firstnameState: "has-danger" });
      }
      if (this.state.lastnameState !== "has-success") {
        this.setState({ lastnameState: "has-danger" });
      }
      if (this.state.emailState !== "has-success") {
        this.setState({ emailState: "has-danger" });
      }
      if (this.state.subjectState !== "has-success") {
        this.setState({ subjectState: "has-danger" });
      }
      
      return false;
      
    }
  };
  render() {
    // const {
    //   firstname,
    //   lastname,
    //   email,
    //   subject,
    //   message,
    // } = this.state;
    return (
      <>
      <iframe name="hidden_iframe" id="hidden_iframe" style={{display:"none"}} title="removeForm" onLoad="if(submitted){}"></iframe>
      <Fade left>
      <Card className="card-chart">
        <h5 className="info-text">
          Let's get in touch!
        </h5>

        <Row className="justify-content-center mt-5">

          <Col sm="5">
        
            <InputGroup
              className={classnames(this.state.firstnameState, {
                "input-group-focus": this.state.firstnameFocus
              })}
            >

              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-single-02" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="entry.2053066882"
                placeholder="First Name..."
                type="text"
                //value={firstname}
                id="entry.2053066882"
                onChange={e => this.change(e, "firstname", "length", 1)}
                onFocus={e => this.setState({ firstnameFocus: true })}
                onBlur={e => this.setState({ firstnameFocus: false })}
              />
              {this.state.firstnameState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>
            <InputGroup
              className={classnames(this.state.emailState, {
                "input-group-focus": this.state.emailFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-email-85" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="entry.2112273848"
                placeholder="Email..."
                type="email"
                //value={email}
                id="entry.2112273848"
                onChange={e => this.change(e, "email", "email")}
                onFocus={e => this.setState({ emailFocus: true })}
                onBlur={e => this.setState({ emailFocus: false })}
              />
              {this.state.emailState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>
          </Col>
          <Col sm="5">
            <InputGroup
              className={classnames(this.state.lastnameState, {
                "input-group-focus": this.state.lastnameFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-caps-small" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="entry.615299969"
                placeholder="Last Name..."
                type="text"
                //value={lastname}
                id="entry.615299969"
                onChange={e => this.change(e, "lastname", "length", 1)}
                onFocus={e => this.setState({ lastnameFocus: true })}
                onBlur={e => this.setState({ lastnameFocus: false })}
              />
              {this.state.lastnameState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>
            <InputGroup
              className={classnames(this.state.subjectState, {
                "input-group-focus": this.state.subjectFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-attach-87" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="entry.1340986275"

                placeholder="Message Subject"
                type="text"
                //value={subject}
                id="entry.1340986275"
                onChange={e => this.change(e, "subject", "length", 1)}
                onFocus={e => this.setState({ subjectFocus: true })}
                onBlur={e => this.setState({ subjectFocus: false })}
              />
              {this.state.subjectState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>
          </Col>
          <Col sm="10">
            <InputGroup
              className={classnames({
                "input-group-focus": this.state.addressFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-chat-33" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                cols="80"
                name="entry.805004906"
                //value={message}
                placeholder="Here you can type your message"
                rows="20"
                type="textarea"
                id="entry.805004906"
                onChange={e => this.change(e, "message", "length", 1)}
                onFocus={e => this.setState({ addressFocus: true })}
                onBlur={e => this.setState({ addressFocus: false })}
              />
            </InputGroup>
            
           
          </Col>
        </Row>
        </Card>
        </Fade>
      </>
    );
  }
}

export default Wizard;
