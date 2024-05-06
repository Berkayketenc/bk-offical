import React from 'react'
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_wkttc6q";
const TEMPLATE_ID = "template_q9kuuqz";
const PUBLIC_KEY = "BI03uW_ahk_Pe3Bk6";

const Contactform = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            alert('Message Sent Successfully')
          }, (error) => {
            console.log(error.text);
            alert('Something went wrong!')
          });
        e.target.reset()
      };
    return (
        <div style={{display:'flex'}}>
            <form className="formContainer" onSubmit={handleOnSubmit}>
                <h2>Please send me emails regarding freelance, remote work, and hybrid work opportunities from here.</h2>
                <div className="formElement">
                    <label htmlFor="from_name">Name</label>
                    <input type="text" id="from_name" name="from_name" placeholder="Your name.." required />
                </div>

                <div className="formElement">
                    <label>E-mail</label>
                    <input type="email" id="from_email" name="from_email" placeholder="Your email.." required />
                </div>

                <div className="formElement">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="8" cols="30" placeholder="Your message.." required />
                </div>
                <button type='submit' className='formButton'>SEND</button>
            </form>
        </div>
    )
}

export default Contactform;