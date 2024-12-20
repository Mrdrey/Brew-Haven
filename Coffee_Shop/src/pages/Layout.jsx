import { Outlet, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import './css/Layout.css'
const Layout = () => {
  return (
    <>
    <div className="Container">
    <Header/>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>

    </div>
      <Outlet />
    </>
  )
};

export default Layout;