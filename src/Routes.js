import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/Home"
import ProductPage from "./pages/Product"
import RootLayout from "./layouts/RootLayout"
import ErrorPage from "./pages/Error"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductPage /> }
    ]
  },
])

function Routes() {
  return <RouterProvider router={router} />
}

export default Routes
