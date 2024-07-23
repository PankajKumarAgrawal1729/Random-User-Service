import { Container, SearchContainer } from "../index";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-cyan-400 h-14">
      <Container>
        <div className="flex justify-center items-center">
          <Link className="text-red-700 text-lg shadow-md" to="/">Random User Service</Link>
        </div>
        <SearchContainer />
      </Container>
    </header>
  );
}

export default Header;
