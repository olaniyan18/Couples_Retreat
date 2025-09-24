/** @format */

import React, { createContext, useState } from "react";

export const DetailsContext = createContext();

export default function Context({ children }) {
  const [paymentData, setPaymentData] = useState(null);

  return (
    <DetailsContext.Provider value={{ paymentData, setPaymentData }}>
      {children}
    </DetailsContext.Provider>
  );
}
