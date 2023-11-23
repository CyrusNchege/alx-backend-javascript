function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      if (success) {
        resolve({ data: 'Successful response from the API' });
      } else {  
        resolve();
      }
    }, 1000); 
  });
}

module.exports = getPaymentTokenFromAPI;
