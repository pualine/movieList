import NavBar from './pages/navbar';
import Movies from './pages/movies';
import Trail from './pages/tcss.jsx/trail';
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"


function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Movies />
    },
    {
      path: "/movies", element: <Movies />
    },
    {
      path: "/trail", element: <Trail />
    },
    {
      path: "/trail/movies", element: <Movies />
    }

  ])
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
