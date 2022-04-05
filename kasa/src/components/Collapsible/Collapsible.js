import React, {useState} from 'react'
import "./Collapsible.css";

const Collapsible = ({ text, title }) => {
    
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="container">
        <div className='toggle' onClick={() => setIsOpen(!isOpen)}>
            <p>{title}</p>
            <i className={isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
        </div>
  
        <div className={isOpen ? 'content show' : 'content'}><p>{text}</p></div>
      </div>
    );
  }; 

export default Collapsible;
