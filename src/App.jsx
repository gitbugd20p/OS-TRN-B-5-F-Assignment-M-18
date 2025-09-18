import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Service";
import MainLayout from "./layout/MainLayout";
import Service from "./pages/Service";
import Team from "./pages/Team";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "service", element: <Service /> },
            { path: "team", element: <Team /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
