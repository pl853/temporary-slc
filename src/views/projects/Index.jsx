import React, { Component } from "react";
//import classNames from "classnames";
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";
import Fade from "react-reveal/Fade";
// reactstrap components
import { Col, Row } from "reactstrap";

import { withFirebase } from "../../components/Firebase";
import UnderConstruction from "../UnderConstruction";

import Loader from "../../components/Loading";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "allprojects"
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
        <div className="content projects">
          <Col className="ml-auto mr-auto mt-5" md="12">
            <Projects></Projects>
          </Col>
        </div>
      </>
    );
  }
}

class ProjectsBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      imgUrl: "",
      loading: false,
      projects: [],
      limit: 3
    };
  }

  componentDidMount() {
    this.onListenForProjects();
  }

  onListenForProjects = () => {
    this.setState({ loading: true });

    this.props.firebase
      .projects()
      .limitToLast(this.state.limit)
      .on("value", snapshot => {
        const projectObject = snapshot.val();

        if (projectObject) {
          const projectList = Object.keys(projectObject).map(key => ({
            ...projectObject[key],
            uid: key
          }));

          this.setState({
            projects: projectList,
            loading: false
          });
        } else {
          this.setState({ projects: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
    this.props.firebase.projects().off();
  }
  onNextPage = () => {
    //this.setState({ projects: null, loading: true});
    this.setState(
      state => ({ limit: state.limit + 3 }),
      this.onListenForProjects
    );
  };

  render() {
    const { projects, loading } = this.state;

    return (
      <div>
        <div className="flex">
          <a href="#more" className="bttn" onClick={this.onNextPage}>
            More
          </a>
        </div>

        {loading && (
          <Loader/>
        )}
        {projects !== 0 && (
          <ProjectList
            projects={projects.map(project => ({
              ...project
            }))}
          />
        )}
        {!projects && (
          <div>
            <UnderConstruction />
          </div>
        )}
      </div>
    );
  }
}

const ProjectList = ({ projects }) => (
  <Row>
    {projects.map(project => (
      <ProjectItem key={project.uid} project={project} />
    ))}
  </Row>
);

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagsinput: [
        this.props.project.tag1,
        this.props.project.tag2,
        this.props.project.tag3,
        this.props.project.tag4
      ] //GOTTA MAP THOSE TAGS
    };
  }

  handleTagsinput = tagsinput => {
    this.setState({ tagsinput });
  };

  render() {
    const { project } = this.props;

    return (
      <Col className="ml-auto mr-auto" md="6" sm="8" lg="4">
        <Fade left>
          <Col>
            <div className="card box">
              <div className="card__image-container column">
                <img className="card__image" src={project.urlPreview} alt="" />
              </div>

              <svg className="card__svg" viewBox="0 0 800 500">
                <path
                  d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                  stroke="transparent"
                  fill="#333"
                />
                <path
                  className="card__line"
                  d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                  stroke="pink"
                  strokeWidth="3"
                  fill="transparent"
                />
              </svg>
              <div className="card__content ">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <TagsInput
                  onChange={this.handleTagsinput}
                  tagProps={{ className: "react-tagsinput-tag primary" }}
                  value={this.state.tagsinput}
                />
              </div>
            </div>
          </Col>
        </Fade>
      </Col>
    );
  }
}

const Projects = withFirebase(ProjectsBase);

export default ProjectPage;
