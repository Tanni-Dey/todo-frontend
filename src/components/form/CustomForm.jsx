/* eslint-disable react/prop-types */
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import { axiosNonSecureInstance } from "../../utils/axios";

const CustomForm = ({
  apiMethod,
  url,
  setIsResponse,
  setError,
  setIsLoading,
  formTitle,
  singleTask,
  buttonText,
}) => {
  // rhf form hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //rhf submit form
  const onSubmit = async (data) => {
    //loading state
    setIsLoading(true);

    try {
      const response = await axiosNonSecureInstance[apiMethod](url, data);

      if (response.status === 200) {
        setIsResponse(true);
        setIsLoading(false);
      }
      return response.data;
    } catch (error) {
      console.log(error);

      // handle error
      if (error) {
        setError(true);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="card sm:w-96 w-60 glass bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="card-body">
          <h2 className="card-title text-2xl text-white mb-5 capitalize">
            {formTitle}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.title && <p className="text-error">Title is required</p>}
            <CustomInput
              type="text"
              register={register}
              fieldName="title"
              placeholder="Title"
              defaultValue={singleTask?.title}
            />
            {errors.status && <p className="text-error">Status is required</p>}
            <select
              defaultValue={singleTask?.status}
              type="select"
              {...register("status", { required: true })}
              placeholder="Enter Task Status"
              className="select select-bordered select-md w-full max-w-xs mb-3"
            >
              <option value="">Select an option</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            {errors.dueDate && <p className="text-error">Date is required</p>}
            <CustomInput
              type="date"
              register={register}
              fieldName="dueDate"
              placeholder="Date"
              defaultValue={singleTask?.dueDate}
            />

            {errors.description && (
              <p className="text-error">Description is required</p>
            )}
            <textarea
              type="text"
              {...register("description", { required: true })}
              placeholder="Enter Task Description"
              defaultValue={singleTask?.description}
              className="textarea textarea-bordered textarea-md w-full max-w-xs mb-3"
            />
            {/* {isLoading?} */}
            <input
              type="submit"
              value={buttonText}
              className="btn w-full hover:opacity-70 text-white bg-gradient-to-r from-violet-800 to-fuchsia-800 border-0"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
