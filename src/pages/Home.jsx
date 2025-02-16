import Header from "../componenets/Header";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");

  return (
    <>
      <Header />
      <div>Home Sweet Home, {name}</div>
    </>
  );
};

export default Home;
