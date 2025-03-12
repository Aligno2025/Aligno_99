import React from 'react'


const faqs = [
  {
    question: 'Does Aligno Incur any charge?',
    answer: 'Yes, Aligno has a free plan with core features. You need to subscribe to one of our paid plans for using more advanced features.'
  },
  {
    question: 'How do I sign up?',
    answer: 'Simply hit the “Get started for free” button on the home page, enter your email address and follow the simple registration process.'
  },
  {
    question: 'Does Aligno integrate with other tools?',
    answer: 'Yes. Aligno integrates well with tools like Google Calendar, Slack, and Microsoft Teams so that everything stays connected.'
  },
  {
    question: 'What if I need help using Aligno?',
    answer: 'We are here to help you! You can find our Help Centre, FAQs or even reach out to our support team via email or live chat right on the site.'
  }
];




const Frequent_support = () => {
  return (
    <div className='bg-linear-to-t from-arrow-purple-104 to-light-red-181 min-h-100 md:mt-10 '>


<<<<<<< HEAD
      <div className="p-6 max-w-2xl mx-auto bg-white relative text-center mb-10">
        <div className='mb-10'>
=======
      <div className="p-6 max-w-2xl mx-auto bg-white relative text-center md:mb-20 mb-10">
        <div class='mb-10'>
>>>>>>> ced7316 (new ajustment)
          <h2 className="md:text-4xl text-2xl font-bold text-red-400 mb-2">Frequently Asked Questions</h2>
          <p>Here are some frequently asked questions on Aligno</p>
        </div>
        <ul className="space-y-10">
          {faqs.map((faq, index) => (
            <li key={index} className='text-sm'>
              <div>
                <h3 className="text-lg font-semibold"> <span className='p-1.5 rounded-2xl inline-block mr-1 md:mx-4 bg-amber-48 '></span>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>



        );


}

export default Frequent_support