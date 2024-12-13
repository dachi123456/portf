import { useRef, useState, useCallback } from 'react';
import useScrollVisibility from '../../hooks/useScrollVisibility';
import './contact.css';
import emailjs from '@emailjs/browser';
import MyButton from '../button/MyButton';

const Contact = () => {
  const isVisible = useScrollVisibility('contact', 0.5);
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formStatuss, setFormStatus] = useState('');
  const [text, setText] = useState('');
<<<<<<< HEAD
  const [fieldsIsEmpty, setFieldsIsEmpty] = useState(false);
=======
>>>>>>> 11f3499dcedb769588ea19d489f6033a5b652011

  const resetInputs = useCallback(() => {
    setEmail('');
    setName('');
    setText('');
  }, []);

<<<<<<< HEAD
 
  
  const sendEmail = (e) => {
    e.preventDefault();
    if(!email || !name) {
      setFieldsIsEmpty(true)
      setTimeout(() => {
        setFieldsIsEmpty(false);
      }, 2700);
      
    }
    else if(email){
      emailjs
      .sendForm('service_kpi5gfr', 'template_6ks118k', form.current, {
        publicKey: import.meta.env.VITE_APP_KEY,
=======
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yim7i6i', 'template_r2zb4l4', form.current, {
        publicKey: 'gwOj99S-ug_UfGu0I',
>>>>>>> 11f3499dcedb769588ea19d489f6033a5b652011
      })
      .then(() => {
        setFormStatus('success');
        resetInputs();
        setTimeout(() => {
          setFormStatus('');
        }, 2000);
      })
      .catch(() => {
        setFormStatus('error');
        resetInputs();
        setTimeout(() => {
          setFormStatus('');
        }, 2000);
      });
  };
<<<<<<< HEAD
    }
    

    
=======
>>>>>>> 11f3499dcedb769588ea19d489f6033a5b652011

  return (
    <div className={`contact-div pt-5 pb-5 overflow-x-hidden ${isVisible ? 'isVisible' : ''}`} id='contact'>
      <div className='p-4'>
        <h2 className='text-center'>CONTACT</h2>
        <div className='line m-auto'></div>
        <p className='text-center mt-3'>
          Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
        </p>
      </div>
      <div className='form-div m-auto'>
        <form onSubmit={sendEmail} ref={form}>
          <div className='p-3'>
            <label htmlFor='name'>name</label>
            <br />
            <div className='border-div mt-2'>
              <input type='text' placeholder='Enter Your Name' name='user_name' onChange={(e) => setName(e.target.value)} value={name} />
            </div>
          </div>
          <div className='p-3'>
            <label htmlFor='email'>email</label>
            <br />
            <div className='border-div mt-2'>
              <input type='email' placeholder='Enter Your Email' name='user_email' onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
          </div>
          <div className='p-3'>
            <label htmlFor='message'>message</label>
            <br />
            <div className='border-div text-area mt-2'>
              <textarea name='message' placeholder='Enter Your Message' className='pt-3' value={text} onChange={(e) => setText(e.target.value)}></textarea>
            </div>
          </div>
<<<<<<< HEAD
          <div className='d-inline'>
              {fieldsIsEmpty && <p className='text-$red-400 fw-bold ms-3'>Please Input Your Email Or Name</p>}
              {formStatuss === 'success' && <p className='text-success fw-bold ms-2'>Email Sent Successfully!</p>}
              {formStatuss === 'error' && <p className='text-danger fw-bold ms-3'>Something Went Wrong. Please Try Again!</p>}
              
=======
          <div>
              {formStatuss === 'success' && <p className='text-success fw-bold ms-2'>Email sent successfully!</p>}
              {formStatuss === 'error' && <p className='text-danger fw-bold ms-3'>Something went wrong. Please try again!</p>}
>>>>>>> 11f3499dcedb769588ea19d489f6033a5b652011
            </div>
          <div className='w-100 d-flex justify-content-end pe-3 pt-2'>
            <div>
              <MyButton text={'Submit'} width={'10rem'} padding='1rem' value='Send' />
            </div>
           
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
