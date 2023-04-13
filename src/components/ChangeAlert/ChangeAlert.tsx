import React from 'react'
import { WithStorageListener } from './WithStorageListener'

function ChangeAlert({ show, toggleShow }:any) {
    if (show)
        return <p>Hubo cambios</p>
    
}

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }