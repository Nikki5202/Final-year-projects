import React from "react";
import Helmet from "react-helmet";

const MetaData = ({ DigiShop }) => {
  return (
    <Helmet>
      <title>{DigiShop}</title>
    </Helmet>
  );
};

export default MetaData;
