/* eslint-disable react/prop-types */
import { useState } from "react";
import AlertMessage from "../AlertMessage";
import { axiosNonSecureInstance } from "../../utils/axios";

const DeleteModal = ({ singleTask }) => {
  const [isDeleted, setDeleted] = useState(false);
  const [isError, setError] = useState(false);

  // task delete function
  const handleDelete = async (id) => {
    try {
      const response = await axiosNonSecureInstance.delete(`/tasks/${id}`);
      if (response.status === 200) {
        setDeleted(true);
      }
      return response.data;
    } catch (error) {
      // handle error
      setError(true);
    }
  };

  //Deleted alert message
  if (isDeleted) {
    return <AlertMessage>Task Deleted</AlertMessage>;
  }

  //error message
  if (isError) {
    return <AlertMessage>Something went wrong. Task Not Deleted</AlertMessage>;
  }

  return (
    <div className="modal modal-middle card glass">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Are You Delete This Task ?</h3>
        <div className="modal-action">
          <label htmlFor="delete-modal" className="btn btn-error">
            No
          </label>
          <label
            htmlFor="delete-modal"
            className="btn btn-success"
            onClick={() => handleDelete(singleTask._id)}
          >
            Yes
          </label>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
