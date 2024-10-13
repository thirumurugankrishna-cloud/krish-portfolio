"use client";

import React from "react";

const ClientComponent = ({ children }) => {
  console.log("Client component");
  return (
    <div>
      <p>Krishna thirumurugan</p>
      {children}
    </div>
  );
};

export default ClientComponent;
