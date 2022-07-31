import React, { useState, useEffect } from "react";

const Context = React.createContext();

function AppContextProvider({ children }) {
  const [allPhotes, setAllPhotes] = useState([]);
  const [cartItems, setCartItems] = useState([]);


  const URL =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setAllPhotes(data);
      });
  }, []);

  function toggleFavorite(imgId) {
    const updatedArray = allPhotes.map((photo) => {
      if (photo.id === imgId ) {
        return {...photo, isFavorite: !photo.isFavorite};
      } 
        return photo;
      
    });

    setAllPhotes(updatedArray) 
  }

  function addToCart (newItem){
   
    setCartItems(prevItems => [...prevItems, newItem])
  }

  function removeItem (id){
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  return (
    <Context.Provider value={{ allPhotes, toggleFavorite, addToCart  , cartItems , removeItem}}>
      {children}
    </Context.Provider>
  );
}

export { AppContextProvider, Context };

//When you pass a value to an object you
//can writ once onstead of {ahmed: ahmed} it can be {ahmed}
