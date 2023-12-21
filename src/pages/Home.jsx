import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" flex justify-center items-center h-[100vh]">
      <div className="py-10 px-20 rounded-lg bg-blue-200">
        <h2 className="text-[#336699] text-center mb-5 text-xl">
          Welcome To Todo Application
        </h2>
        <h3 className="text-center">
          <Link
            className=" bg-green-400 border-0 text-white px-10 py-5 text-xl rounded-lg m-1 inline-block"
            to="/tasks"
          >
            Go To Task List
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Home;
