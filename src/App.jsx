import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Service";
import MainLayout from "./layout/MainLayout";
import Service from "./pages/Service";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "service", element: <Service /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
