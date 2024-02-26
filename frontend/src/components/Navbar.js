import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <navbar>
      <div className="container">
        <Link to="/">
          <h1>Work Out Buddy</h1>
        </Link>
      </div>
    </navbar>
  );
};
export default Navbar;
