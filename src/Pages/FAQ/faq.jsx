import React from 'react';
import AccordionItem from './AccordionItem';
import "./faq.css"

const faqData1 = [
  {
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
  {
    question: 'Question 3',
    answer: 'Answer 3',
  },
  {
    question: 'Question 4',
    answer: 'Answer 4',
  },
  {
    question: 'Question 5',
    answer: 'Answer 5',
  },
];

const faqData2 = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
    },
    {
      question: 'Question 4',
      answer: 'Answer 4',
    },
    {
      question: 'Question 5',
      answer: 'Answer 5',
    },
  ];

function Faq() {
  return (
    <div className="faq-page">
      <h1 className='faq-header'>Have a question?</h1>
      <h4 className='faq-subheader'>Our FAQs will answer most of your doubts and queries</h4>
      <div className='categories'>
        <div className="category-1">
        {faqData1.map((faq, index) => (
          <AccordionItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="category-2">
        {faqData2.map((faq, index) => (
          <AccordionItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default Faq;