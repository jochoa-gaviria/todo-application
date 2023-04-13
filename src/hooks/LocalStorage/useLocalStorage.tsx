import React from 'react';

export const useLocalStorage = (itemName:string, initialValue:any) => {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false)
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          let localStorageItem = localStorage.getItem(itemName);
          let parsedItem:any;
          if (!localStorageItem){
            localStorageItem = JSON.stringify([])
            parsedItem = JSON.parse(localStorageItem);
            localStorage.setItem(itemName, JSON.stringify(initialValue))
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(true);
        }
      }, 3000)
    }, []);
  
    const saveItem = (newItem:any) => {
      try {
        setItem(newItem);
        localStorage.setItem(itemName, JSON.stringify(newItem));
      } catch (error) {
        setError(true);
      }
    }
    return {
      item, 
      saveItem,
      loading,
      error
    }
  }