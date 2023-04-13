import React from "react";


function WithStorageListener(WrappedComponent:any) {
    return function WrappedComponentWithStorageListener(props:any) {
        const [storageChange, setStorageChange] = React.useState(false);

        return (
            <WrappedComponent 
                show={storageChange}
                toggleShow={setStorageChange}
            />
        )
    }
}

export { WithStorageListener }