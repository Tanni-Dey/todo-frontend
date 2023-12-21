import { FetchData } from "../utils/axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import AlertMessage from "../components/AlertMessage";
import CustomForm from "../components/form/CustomForm";

const EditTask = () => {
  const [singleTask, setSingleTask] = useState({});
  const [isResponse, setIsResponse] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  // fetchData function call
  useEffect(() => {
    FetchData(`/tasks/${id}`, setSingleTask);
  }, [id]);

  return (
    <div>
      {isLoading && <Loading />}
      <CustomForm
        apiMethod="put"
        url={`/tasks/${id}`}
        setIsResponse={setIsResponse}
        setError={setError}
        setIsLoading={setIsLoading}
        singleTask={singleTask}
        formTitle="Edit Your Task"
        buttonText="Update Task"
      />
      {isResponse && <AlertMessage>Task Updated</AlertMessage>}
      {isError && (
        <AlertMessage>Something went wrong. Task Not Updated</AlertMessage>
      )}
    </div>
  );
};

export default EditTask;
