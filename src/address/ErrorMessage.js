import React from 'react';

const ErrorMessage = () => {
  const errorMessage = {
    fontSize: '24px',
  };

  return(
    <div className='zx-address__error-message' style={errorMessage}>
      <p>
        No stores found :(
      </p>
      <p>
        Please try another address.
      </p>
    </div>
  );
}


export default ErrorMessage;
