import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { AuthProvider } from '@/context/authcontext';

// http://localhost:8080/api/persons

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    );
}

export default App;
