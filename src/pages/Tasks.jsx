import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FetchData } from "../utils/axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteModal from "../components/modal/DeleteModal";
import DetailsModal from "../components/modal/DetailsModal";

const Tasks = () => {
  const [allTask, setAllTaks] = useState([]);
  const [singleTask, setSingleTask] = useState({});

  // call Fetch function
  useEffect(() => {
    FetchData("/tasks", setAllTaks);
  }, [allTask]);

  // loading state
  if (allTask.length === 0) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto mt-5">
      {/* --- Heading --- */}
      <div className="card bg-violet-500 p-3 mb-5">
        <h2 className="card-tittle text-2xl text-white font-bold text-center">
          All Task
        </h2>
      </div>

      <Link className="flex justify-end mb-5" to="/add-task">
        <button className="btn btn-success px-10 text-white">Add Task</button>
      </Link>

      {/* ----- All task Grid---- */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        {allTask.map((task) => (
          <div key={task._id}>
            <div className="card glass bg-slate-200 hover:bg-slate-300">
              <div className="card-body text-left ">
                <h2 className="card-title">
                  {task.title?.length < 20
                    ? task.title
                    : `${task.title?.slice(0, 20)}...`}
                </h2>
                <p className="break-all">
                  Description :
                  {task.description?.length < 100
                    ? task.description
                    : `${task.description?.slice(0, 100)}...`}
                </p>
                <h6>Status : {task.status}</h6>
                <p className="text-sm text-success font-semibold">
                  Due Date : {task.dueDate}
                </p>
                <div className="card-actions justify-between items-center mt-3">
                  <div className="flex items-center">
                    <Link to={`/tasks/${task._id}`}>
                      <span className="text-2xl">
                        <CiEdit />
                      </span>
                    </Link>
                    <label
                      htmlFor="delete-modal"
                      className="text-error text-xl btn p-0 min-h-0 h-full ml-3 bg-transparent hover:bg-transparent border-0"
                      onClick={() => setSingleTask(task)}
                    >
                      <RiDeleteBinLine />
                    </label>
                  </div>
                  <label
                    htmlFor="details-modal"
                    className="btn btn-primary btn-sm"
                    onClick={() => setSingleTask(task)}
                  >
                    Details
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ----- Details modal ----- */}
      <input type="checkbox" id="details-modal" className="modal-toggle" />
      <DetailsModal singleTask={singleTask} />

      {/* ----- Delete modal ----- */}
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <DeleteModal singleTask={singleTask} />
    </div>
  );
};

export default Tasks;
