import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([{}]);
  return <RouterProvider router={router} />;
}

export default App;
