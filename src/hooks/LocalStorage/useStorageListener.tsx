import React from "react";


function useStorageListener(sincronize:any) {
    const [storageChange, setStorageChange] = React.useState(false);
    
    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS') {
            setStorageChange(true);
        }
    })

    const toggleShow = () => {
        sincronize();
        setStorageChange(false);
    }

    return ({
        show: storageChange,
        toggleShow
    })
}

export { useStorageListener }