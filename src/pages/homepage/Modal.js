import React from 'react';
import './Modal.css'; 
import {Link } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>To learn more about me, click on the words on the cards.</p>
        <button className="play-button" onClick={onClose}><h2>Start playing: Samragyee's Solitaire</h2></button>
        <p>If you want to see my resume in full, click here:</p>
        <Link to ="src\pages\homepage\Resume.js"><button className="resume-button"><h2>Resume</h2></button></Link>
      </div>
    </div>
  );
};

export default Modal;