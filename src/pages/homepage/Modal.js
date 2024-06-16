import React from 'react';
import './Modal.css'; 
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose }) => {
  

  const navigate = useNavigate();

  if (!isOpen) return null;

  const resumePage = () => {
    navigate('/Resume');
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>To learn more about me, click on the words on the cards.</p>
        <button className="play-button" onClick={onClose}><h2>Start playing: Samragyee's Solitaire</h2></button>
        <p>If you want to see my resume in full, click here:</p>
        <button className="resume-button" onClick={resumePage}><h2>Resume</h2></button>
      </div>
    </div>
  );
};

export default Modal;