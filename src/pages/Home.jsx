import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome To Todo Application</h2>
      <h3>
        <Link to="/todos">Go To Task List</Link>
      </h3>
    </div>
  );
};

export default Home;
