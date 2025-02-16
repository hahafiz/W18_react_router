import { routeList } from "../routes/Root";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/profile">Profile</a>
      <a href="/contact">Contact</a> */}
      {routeList.map((routeItem) => (
        // <a href={routeItem.path} key={routeItem.path}>
        //   {routeItem.name}
        // </a>
        <Link to={routeItem.path} key={routeItem.path}>
          {routeItem.name}
        </Link>
      ))}
    </header>
  );
};

export default Header;
