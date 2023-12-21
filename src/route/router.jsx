import App from "../App.jsx";
import Tasks from "../pages/Tasks.jsx";
import EditTask from "../pages/EditTask.jsx";
import { createBrowserRouter } from "react-router-dom";
import AddTask from "../pages/AddTask.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/tasks/:id",
    element: <EditTask />,
  },
  {
    path: "/add-task",
    element: <AddTask />,
  },
]);
export default router;
