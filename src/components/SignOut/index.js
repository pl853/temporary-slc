import React from 'react';

import { withFirebase } from '../Firebase';

import {
  DropdownItem,
} from "reactstrap";

const SignOutButton = ({ firebase }) => (
  <DropdownItem className="nav-item" onClick={firebase.doSignOut}>Sign out</DropdownItem>
);

export default withFirebase(SignOutButton);
