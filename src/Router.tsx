import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home.page";
import { ContactPage } from "./pages/Contact.page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/contact",
        element: <ContactPage />,
    },
]);

export function Router() {
    return <RouterProvider router={router} />;
}
