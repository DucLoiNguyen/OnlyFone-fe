import { RouterProvider } from "react-router-dom";
import router from "./routes";

// http://localhost:8080/api/persons

function App() {
  return <RouterProvider router={router} />;
}

export default App;
