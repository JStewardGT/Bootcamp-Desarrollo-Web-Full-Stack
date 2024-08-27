import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import Employee from "../components/Employee";
import About from "../components/About";
import CreateEmployee from "../components/CreateEmployee";
import EditEmployee from "../components/Editemployee";

const routes = [
  {
    path: "/",
    element: <Home />,
    protected: false,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    protected: false,
  },
  {
    path: "/employees",
    element: <Employee />,
    protected: true,
  },
  {
    path: "/about",
    element: <About />,
    protected: false,
  },
  {
    path: "/create-employee",
    element: <CreateEmployee />,
    protected: false,
  },
  {
    path: "/edit-employee/:id",
    element: <EditEmployee />,
    protected: false,
  },
];

export default routes;
