import { routeList } from "../routes/Root";

const Header = () => {
  return (
    <header>
      {/* <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/profile">Profile</a>
      <a href="/contact">Contact</a> */}
      {routeList.map((routeItem) => (
        <a href={routeItem.path} key={routeItem.path}>
          {routeItem.name}
        </a>
      ))}
    </header>
  );
};

export default Header;
