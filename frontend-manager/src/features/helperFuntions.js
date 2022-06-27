export const errorMessage = error => {
  console.log(error);
  return (
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString()
  );
};

export const axiosConfig = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};
