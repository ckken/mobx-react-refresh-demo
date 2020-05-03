import React, { useContext } from "react";
import { useLocalStore } from "mobx-react-lite";
const langStore = () => {
  return {
    $l: {},
    country: "",
    lang: "",
    rtl: false,

    async getLang() {
      console.log("change val here!!"); //change here is no work
    }
  };
};

const storeContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const Stores = useLocalStore(langStore);

  return (
    <storeContext.Provider value={Stores}>{children}</storeContext.Provider>
  );
};

export const useStores = () => {
  const stores = useContext(storeContext);
  if (!stores) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return stores;
};
