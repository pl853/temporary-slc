import SignInPage from "views/account/Login.jsx"
import SignUpPage from "views/account/Register.jsx"
import Start from "views/Start.jsx";
import Wizard from "views/about/Index.jsx"
import ProjectPage from "views/projects/Index.jsx"
import Timeline from "views/timeline/Index.jsx"
//import Guides from "views/guides/Index.jsx"
import AdminProjectPage from "views/admin/AdminProjects.jsx"

import UnderConstruction from "views/UnderConstruction.jsx";


//EXPORTED ROUTES FOR INAPP USE
export const START_PAGE = '/home/start';
export const REGISTER ='/auth/register';
export const LOGIN = '/auth/login';
export const ADMIN = '/auth/admin/manageProjects';


const routes = [
  {
    path: "/start",
    name: "Start",
    icon: "",
    component: Start,
    layout: "/home",
    isHidden: true
  },
  {
    path: "/login",
    name: "login",
    icon: "",
    component: SignInPage,
    layout: "/auth",
    isHidden: true
  },
  {
    path: "/register",
    name: "register",
    icon: "",
    component: SignUpPage,
    layout: "/auth",
    isHidden: true
  },
  {
    path: "/aboutme",
    name: "About Me",
    icon: "tim-icons icon-badge",
    component: Wizard,
    layout: "/home"
  },
  {
    path: "/projects",
    name: "My Projects",
    icon: "tim-icons icon-molecule-40",
    component: ProjectPage,
    layout: "/home"
  },
  {
    path: "/timeline",
    name: "Timeline",
    icon: "tim-icons icon-watch-time",
    component: Timeline,
    layout: "/home"
  },
  {
    path: "/guides",
    name: "Guides",
    icon: "tim-icons icon-zoom-split",
    component: UnderConstruction,
    layout: "/home"
  },
  {
    path: "/downloads",
    name: "Downloads",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-cloud-download-93",
    component: UnderConstruction,
    layout: "/home"
  },
  {
    path: "/admin/manageProjects",
    name: "Manage Projects",
    icon: "",
    component: AdminProjectPage,
    layout: "/auth",
    isHidden: true
  }, 

];
export default routes;
