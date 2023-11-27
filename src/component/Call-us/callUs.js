
import { Button, Container ,Spinner} from 'react-bootstrap'
import "./style.css"
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
const CallUs = () => {
  
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_3kn4q06', 'template_w2wohvf', form.current, 'TyETergG5Mfn803PQ')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail}> 
   <div className='backGround' >
    <Container>
     <div className='text text-center align-center'>
      <h1>Be the first to know
         <br/> when the <span>new version</span>  is <span>available</span> </h1>
         
          <input className="input" type="text" spellCheck="false" 
          name='user_email' placeholder="Enter your email" required
          pattern='[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}'/>
           {loading ? (
              <Button variant="warning" type='submit' disabled>
                <Spinner animation="border" size="sm" /> Sending...
              </Button>
            ) : (
              <Button variant="warning" type='submit'>SEND</Button>
            )}
     </div>
    </Container>
    </div>
    </form>
  )
}

export default CallUs;
