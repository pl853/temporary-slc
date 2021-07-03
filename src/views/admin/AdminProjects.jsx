import React, { Component } from 'react';
import { compose } from 'recompose';

import * as ROLES from "../../roles";
import {
  Container,
  Col,
} from "reactstrap";
import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from '../../components/Session';
import { withFirebase } from '../../components/Firebase';

class AdminProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      this.setState({
        users: snapshot.val(),
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    return (
      <div className="content">
        
        <Container>
            <Col className="ml-auto mr-auto" lg="12" md="12">
            <AdminProjects users={this.state.users} />
            </Col>
          </Container>
      </div>
    );
  }
}

class AdminProjectsBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      imgUrl:'',
      loading: false,
      projects: [],
      limit: 5,
    };
  }

  componentDidMount() {
    this.onListenForProjects();
  }

  onListenForProjects = () => {
    this.setState({ loading: true });

    this.props.firebase
      .projects()
      .orderByChild('createdAt')
      .limitToLast(this.state.limit)
      .on('value', snapshot => {
        const projectObject = snapshot.val();

        if (projectObject) {
          const projectList = Object.keys(projectObject).map(key => ({
            ...projectObject[key],
            uid: key,
          }));

          this.setState({
            projects: projectList,
            loading: false,
          });
        } else {
          this.setState({ projects: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
    this.props.firebase.projects().off();
  }

  onChangeTitle = event => {
    this.setState({ title: event.target.value });
  };
  onChangeDescription = event => {
    this.setState({ description: event.target.value });
  };

  onCreateProject = (event, authUser) => {
    this.props.firebase.projects().push({
      title: this.state.title,
      description: this.state.description,
      userId: authUser.uid,
      createdAt: this.props.firebase.serverValue.TIMESTAMP,
    });

    this.setState({ title: '' });
    this.setState({ description: '' });

    event.preventDefault();
  };

  onEditProject = (project, title,description) => {
    this.props.firebase.project(project.uid).set({
      ...project,
      title,
      description,
      editedAt: this.props.firebase.serverValue.TIMESTAMP,
    });
  };

  onRemoveProject = uid => {
    this.props.firebase.project(uid).remove();
  };

  onNextPage = () => {
    this.setState(
      state => ({ limit: state.limit + 5 }),
      this.onListenForProjects,
    );
  };

  render() {
    const { users } = this.props;
    const { title,description, projects, loading } = this.state;

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            {!loading && projects && (
              <button type="button" onClick={this.onNextPage}>
                {authUser.uid}
              </button>
            )}

            {loading && <div>Loading ...</div>}

            {projects && (
              <AdminProjectList
                projects={projects.map(project => ({
                  ...project,
                  user: users
                    ? users[project.userId]
                    : { userId: project.userId },
                }))}
                onEditProject={this.onEditProject}
                onRemoveProject={this.onRemoveProject}
              />
            )}

            {!projects && <div>There are no projects ...</div>}

            <form
              onSubmit={event =>
                this.onCreateProject(event, authUser)
              }
            >
              <input
                type="title"
                value={title}
                onChange={this.onChangeTitle}
              />

                <input
                type="description"
                value={description}
                onChange={this.onChangeDescription}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const AdminProjectList = ({
  projects,
  onEditProject,
  onRemoveProject,
}) => (
  <ul>
    {projects.map(project => (
      <AdminProjectItem
        key={project.uid}
        project={project}
        onEditProject={onEditProject}
        onRemoveProject={onRemoveProject}
      />
    ))}
  </ul>
);

class AdminProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editTitle: this.props.project.title,
    };
  }

  onToggleEditMode = () => {
    this.setState(state => ({
      editMode: !state.editMode,
      editTitle: this.props.project.title,
    }));
  };

  onChangeEditTitle = event => {
    this.setState({ editTitle: event.target.value });
  };

  onSaveEditTitle = () => {
    this.props.onEditProject(this.props.project, this.state.editTitle);

    this.setState({ editMode: false });
  };

  render() {
    const { project, onRemoveProject } = this.props;
    const { editMode, editTitle } = this.state;

    return (
      <li>
        {editMode ? (
          <input
            type="title"
            value={editTitle}
            onChange={this.onChangeEditTitle}
          />
        ) : (
          <span>
            <strong>
              {project.title || project.user.userId}
            </strong>{' '}
            {project.title} {project.editedAt && <span>(Edited)</span>}
          </span>
        )}

                {editMode ? (
          <input
            type="title"
            value={editTitle}
            onChange={this.onChangeEditTitle}
          />
        ) : (
          <span>
            {project.description} {project.editedAt && <span>(Edited)</span>}
          </span>
        )}

        {editMode ? (
          <span>
            <button onClick={this.onSaveEditText}>Save</button>
            <button onClick={this.onToggleEditMode}>Reset</button>
          </span>
        ) : (
          <button onClick={this.onToggleEditMode}>Edit</button>
        )}

        {!editMode && (
          <button
            type="button"
            onClick={() => onRemoveProject(project.uid)}
          >
            Delete
          </button>
        )}
      </li>
    );
  }
}

const AdminProjects = withFirebase(AdminProjectsBase);

const condition = authUser =>
  authUser && authUser.roles.includes(ROLES.ADMIN);

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(AdminProjectPage);
