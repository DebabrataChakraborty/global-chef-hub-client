import { useRouteError } from "react-router-dom";
import ChefNavbar from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <ChefNavbar/>
    <div className="d-flex justify-content-center align-items-center" id="error-page">
      <img className="img-fluid" src="https://lh5.ggpht.com/_9F9_RUESS2E/SpV5Yi8Vv5I/AAAAAAAAA4E/W9-J8eMLokM/s800/50-Cool-and-Creative-404-Error-Pages-25.jpg" alt="" />
    </div>
    <Footer/>
    </>
  );
}