import { useState } from "react";
import Loading from "../components/Loading";
import AlertMessage from "../components/AlertMessage";
import CustomForm from "../components/form/CustomForm";

const AddTask = () => {
  const [isResponse, setIsResponse] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      {isLoading && <Loading />}
      <CustomForm
        apiMethod="post"
        url={"/tasks"}
        setIsResponse={setIsResponse}
        setError={setError}
        setIsLoading={setIsLoading}
        formTitle="Add New Task"
        buttonText="Add Task"
      />
      {isResponse && <AlertMessage>Task Added</AlertMessage>}
      {isError && (
        <AlertMessage>Something went wrong. Task Not Added</AlertMessage>
      )}
    </div>
  );
};

export default AddTask;
