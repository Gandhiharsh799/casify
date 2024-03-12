import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/Root";
import Landing from "../components/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ReportLayout from "../pages/Report";
import Dashboard from "../components/Dashboard";
import CaseDetails from "../components/CaseDetails";
import Cases from "../components/Cases";
import CaseList from "../components/CaseList";
import UserProfile from "../components/UserProfile";
import ServiceDetails from "../components/ServiceDetails";
import Services from "../components/Services";
import ServiceList from "../components/ServiceList";
import Setting from "../components/Setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Register />,
  },
  {
    path: "report",
    element: <ReportLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "cases",
        element: <Cases />,
        children: [
          {
            index: true,
            element: <CaseList />,
          },
          {
            path: "/report/cases/:caseId",
            element: <CaseDetails />,
          },
        ],
      },
      {
        path: "services",
        element: <Services />,
        children: [
          {
            index: true,
            element: <ServiceList />,
          },
          {
            path: "/report/services/:id",
            element: <ServiceDetails />,
          },
        ],
      },
      {
        path: "setting",
        element: <Setting />,
        children: [
          {
            path: "userprofile",
            element: <UserProfile />,
          },
        ],
      },
    ],
  },
]);

export default router;
