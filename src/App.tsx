// App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvaider } from "./auth/AuthProvaider";
import Layout from "./components/Layout";
import ProtectectRout from "./routes/ProtectedRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvaider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<Layout />}>
            <Route element={<ProtectectRout />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvaider>
  );
}

export default App;
