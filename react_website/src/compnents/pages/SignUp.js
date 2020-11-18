import React from 'react';
import '../../App.css';
import Form from '../../Form/Form'
import Footer from '../Footer'

export default function SignUp() {
  return (
    <>
    <div className="sign-up-container">
      <Form/>
      <img src="/images/design-min-1-1.jpg" alt="" width="40%" height="500vh"/>
  </div>
  <Footer />
  </>
  );
}