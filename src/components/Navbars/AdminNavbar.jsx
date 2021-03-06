import React from "react";
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
import SignOutButton from "../SignOut";
import { AuthUserContext } from "../Session";
import * as ROLES from "../../roles";
import * as ROUTES from '../../routes';
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  UncontrolledTooltip
} from "reactstrap";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      modalSearch: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateColor);
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: "bg-white"
      });
    } else {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  // this function opens and closes the collapse on small devices
  toggleCollapse = () => {
    if (this.state.collapseOpen) {
      this.setState({
        color: "navbar-transparent"
      });
    } else {
      this.setState({
        color: "bg-white"
      });
    }
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // this function is to open the Search modal
  toggleModalSearch = () => {
    this.setState({
      modalSearch: !this.state.modalSearch
    });
  };

  notify = place => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            <b>Logged out successfully !</b>
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
        <Navbar
          className={classNames("navbar-absolute", {
            [this.state.color]:
              this.props.location.pathname.indexOf("full-screen-map") === -1
          })}
          expand="lg"
        >
          <Container fluid>
          <div className="rna-container">
          <NotificationAlert ref="notificationAlert" />
        </div>
            <div className="navbar-wrapper">
              <div className="navbar-minimize d-inline">
                <Button
                  className="minimize-sidebar btn-just-icon"
                  color="link"
                  id="tooltip209599"
                  onClick={this.props.handleMiniClick}
                >
                  <i className="tim-icons icon-align-center visible-on-sidebar-regular" />
                  <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini" />
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  target="tooltip209599"
                  placement="right"
                >
                  Sidebar toggle
                </UncontrolledTooltip>
              </div>
              <div
                className={classNames("navbar-toggle d-inline", {
                  toggled: this.props.sidebarOpened
                })}
              >
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={this.props.toggleSidebar}
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                {this.props.brandText}
              </NavbarBrand>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <Collapse navbar isOpen={this.state.collapseOpen}>
              <Nav className="ml-auto" navbar>
                <InputGroup className="search-bar" tag="li">
                  <Button
                    color="link"
                    data-target="#searchModal"
                    data-toggle="modal"
                    id="search-button"
                    onClick={this.toggleModalSearch}
                  >
                    <i className="tim-icons icon-zoom-split" />
                    <span className="d-lg-none d-md-block">Search</span>
                  </Button>
                </InputGroup>
                <AuthUserContext.Consumer>
                  {authUser =>
                    authUser ? (
                      
                      <UserDropdownAuth authUser={authUser} notify={this.notify}/> 
                    ) : (
                      <UserDropdownNonAuth />
                    )
                  }
                </AuthUserContext.Consumer>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Modal
          modalClassName="modal-search"
          isOpen={this.state.modalSearch}
          toggle={this.toggleModalSearch}
        >
          <div className="modal-header">
            <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={this.toggleModalSearch}
            >
              <i className="tim-icons icon-simple-remove" />
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

const UserDropdownAuth = ({ authUser, notify }) => (
  <UncontrolledDropdown nav>
    <DropdownToggle
      caret
      color="default"
      data-toggle="dropdown"
      nav
      onClick={e => e.preventDefault()}
    >
      <div className="photo">
        <img alt="..." src={require("assets/img/pf.jpg")} />
      </div>
      <b className="caret d-none d-lg-block d-xl-block" />
    </DropdownToggle>
    <DropdownMenu className="dropdown-navbar" right tag="ul">

      {authUser.roles.includes(ROLES.ADMIN) && (
        <NavLink tag="li">
          <Link to={ROUTES.ADMIN}><DropdownItem className="nav-item">Administrator</DropdownItem></Link>
        </NavLink>
      )}
      <DropdownItem divider tag="li" />
      <NavLink tag="li" >
        <span onClick={() => notify("tc")}>
        <SignOutButton  />
        </span>
      </NavLink>
    </DropdownMenu>
  </UncontrolledDropdown>
);

const UserDropdownNonAuth = () => (
  <UncontrolledDropdown nav>
    <DropdownToggle
      caret
      color="default"
      data-toggle="dropdown"
      nav
      onClick={e => e.preventDefault()}
    >
      <div className="photo">
        <img alt="..." src={require("assets/img/default-avatar.png")} />
      </div>
      <b className="caret d-none d-lg-block d-xl-block" />
    </DropdownToggle>
    <DropdownMenu className="dropdown-navbar" right tag="ul">
      <NavLink tag="li">
        <Link to={ROUTES.LOGIN}><DropdownItem className="nav-item">Login</DropdownItem></Link>
      </NavLink>
      <NavLink tag="li">
        <Link to={ROUTES.REGISTER}><DropdownItem className="nav-item">Register</DropdownItem></Link>
      </NavLink>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default AdminNavbar;
