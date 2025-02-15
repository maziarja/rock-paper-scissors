import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Play from "./pages/Play";
import GlobalStyles from "./styles/globalStyles";
import AppMain from "./pages/AppMain";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <AppMain />,
      },
      {
        path: "/play",
        element: <Play />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
