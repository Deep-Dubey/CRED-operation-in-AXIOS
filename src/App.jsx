import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";
import Read from "./Read";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/create", element: <Create /> },
    { path: "/update/:id", element: <Update /> },
    { path: "/read/:id", element: <Read /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
