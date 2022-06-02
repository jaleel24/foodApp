// ? this is highlighted
import { Fragment } from "react";
import classes from './Modal.module.css';
import  ReactDOM  from 'react-dom';

const Backdrop = (props) => {
  return <div className={ classes.backdrop } />;
};
const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById('overlays');
const Modal = (props) => {
    
  return (
    <Fragment>
      {/* <Backdrop />
      <ModalOverlays /> */}
      {/* 
        //? we are going to use a portal here so that our html content is not all over the place 
        //? 2 arguments 
      //? 1- what to portal
      //? 2- where to portal
      */}
      {ReactDOM.createPortal(<Backdrop />, portalElement )}
      {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
    </Fragment>
  );
};
export default Modal;
