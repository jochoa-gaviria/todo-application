import  ReactDOM  from "react-dom";
import './Modal.css'

function Modal({ children }:any){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal') as HTMLElement
    );
}

export { Modal }