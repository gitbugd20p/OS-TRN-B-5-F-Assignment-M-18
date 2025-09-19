import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Service";
import MainLayout from "./layout/MainLayout";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Project from "./pages/Project";
import Testimonial from "./pages/testimonial";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "team", element: <Team /> },
            { path: "service", element: <Service /> },
            { path: "projects", element: <Project /> },
            { path: "testimonials", element: <Testimonial /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
