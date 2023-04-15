import React from "react";


function WithStorageListener(WrappedComponent:any) {
    return function WrappedComponentWithStorageListener(props:any) {
        const [storageChange, setStorageChange] = React.useState(false);
        
        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS') {
                setStorageChange(true);
            }
        })

        const toggleShow = () => {
            props.sincronize();
            setStorageChange(false);
        }

        return (
            <WrappedComponent 
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}

export { WithStorageListener }