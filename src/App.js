import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ContactUs from "./screens/ContactUs/ContactUs";
import IndustrialServices from "./screens/IndustrialServices/IndustrialServices";
import CommercialServices from "./screens/CommercialSrvices/CommercialServices";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ContactUs",
      element: <ContactUs />,
    },
    {
      path: "/IndustrialServices",
      element: <IndustrialServices />,
    },
    {
      path: "/CommercialServices",
      element: <CommercialServices />,
    },
  ]);
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
