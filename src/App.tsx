import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TaskList from "./components/task/TaskList";
import BugList from "./components/bug/BugList";
import TaskForm from "./components/task/TaskForm";
import BugForm from "./components/bug/BugForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TaskList />,
    },
    {
      path: "/bugs",
      element: <BugList />,
    },
    {
      path: "/create-task",
      element: <TaskForm />,
    },
    {
      path: "/report-bug",
      element: <BugForm />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
