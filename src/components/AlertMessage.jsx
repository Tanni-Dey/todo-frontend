import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const AlertMessage = ({ children }) => {
  const [isShowed, setIsShowed] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowed(false);
    }, 2000);
  }, []);

  return isShowed ? (
    <div className="toast toast-top toast-end">
      <div className="alert alert-error">
        <div>
          <span>{children}</span>
        </div>
      </div>
    </div>
  ) : null;
};

export default AlertMessage;
