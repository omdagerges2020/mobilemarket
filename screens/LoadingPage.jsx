import React from "react";
import Spinner from "react-native-loading-spinner-overlay";

const LoadingPage = () => {
  return (
    <Spinner
      visible={true}
      textContent={"Loading..."}
      textStyle={{ color: "#FFF" }}
    />
  );
};

export default LoadingPage;
