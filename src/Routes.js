import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/Home"
import ProductDetailPage from "./pages/ProductDetail"
import ProductPage from "./pages/Product"
import RootLayout from "./layouts/RootLayout"
import ErrorPage from "./pages/Error"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> },
    ]
  },
])

function Routes() {
  return <RouterProvider router={router} />
}

export default Routes
