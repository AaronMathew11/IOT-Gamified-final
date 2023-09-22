import React, { useState } from 'react';
import plus from "../../Images/plus.png"

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
          <div className='accordion-question'>
              <div>
                  <span className={`accordion-icon ${isOpen ? 'minus' : 'plus'}`}></span>
                  {question}
              </div>
              {!isOpen && <img src={plus} alt="" onClick={toggleAccordion} style={{height: "25px", width: "25px"}}/>}
              {isOpen && <div style={{height: "20px", width:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}><div className='minus' onClick={toggleAccordion}></div></div>}
          </div>
          {isOpen && <div className="accordion-content">{answer}</div>}
    </div>
  );
}

export default AccordionItem;
