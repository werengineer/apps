import { useState, useEffect } from "react";

const useSessionStorage = (name) => {
    const [value, setValue] = useState('');
  // set props data to session storage or local storage  
  useEffect(() => {
            setValue(sessionStorage.getItem(name));
            
        }, [])

        return value;
}

export default useSessionStorage;