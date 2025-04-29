import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Store from "./pages/Store";
import { AuthProvider } from "./auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/registro" element={<SignUp />} />
            <Route path="/tienda" element={<Store />} />
            <Route element={<ProtectedRoute />}>
              {/* <Route path="/tienda" element={<Store />} /> */}
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
