const ErrorMessage = ({ message }) => {
    return (
      <div className="error-message">
        <p>Error: {message || 'Something went wrong'}</p>
      </div>
    );
  };
  
  export default ErrorMessage;