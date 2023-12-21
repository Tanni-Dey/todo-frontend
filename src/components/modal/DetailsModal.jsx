/* eslint-disable react/prop-types */

const DetailsModal = ({ singleTask }) => {
  const { title, description, dueDate, status } = singleTask;
  return (
    <div className="modal modal-middle card glass">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{description}</p>
        <p className="py-4">Due Date : {dueDate}</p>
        <p className="py-4">Status : {status}</p>
        <div className="modal-action">
          <label
            htmlFor="details-modal"
            className="btn hover:bg-violet-600 border-0 bg-violet-500"
          >
            Ok
          </label>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
