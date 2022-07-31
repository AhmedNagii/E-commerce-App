import React, { useState, useEffect } from "react";

const Context = React.createContext();

function AppContextProvider({ children }) {
  const [allPhotes, setAllPhotes] = useState([]);

  const URL =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setAllPhotes(data);
      });
  }, []);
  console.log(allPhotes);

  return <Context.Provider value={{ allPhotes }}>{children}</Context.Provider>;
}

export { AppContextProvider, Context };

//When you pass a value to an object you
//can writ once onstead of {ahmed: ahmed} it can be {ahmed}
