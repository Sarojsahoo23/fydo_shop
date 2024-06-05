import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Contact from "./components/pages/Contact.js";
import Navbar from "./components/nav/Navbar.js";
import NotFound from "./components/pages/NotFound.js";
import { Toaster } from 'react-hot-toast';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <NotFound/> },

      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster/>
    
     
    </>
  );
}

export default App;
