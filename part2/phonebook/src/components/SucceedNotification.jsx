const SucceedNotification = ({ message}) => {
  if (message === null) {
    return null;
  }


  return (
    <>
      <div className="succeed">{message}</div>
    </>
  );
};

export default SucceedNotification;
