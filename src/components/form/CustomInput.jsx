/* eslint-disable react/prop-types */
const CustomInput = ({
  type,
  register,
  fieldName,
  placeholder,
  defaultValue,
}) => {
  return (
    <input
      type={type}
      placeholder={`Enter Task ${placeholder}`}
      defaultValue={defaultValue}
      className="input input-bordered input-md w-full max-w-xs mb-3"
      {...register(fieldName, { required: true })}
    />
  );
};

export default CustomInput;
