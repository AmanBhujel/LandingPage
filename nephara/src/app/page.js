'use client'
import styles from './page.module.css'
import { toast } from "react-toastify";
import { app } from './config'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import axios from 'axios'; // Import axios to make the HTTP request

export default function Home() {
  const [email, setEmail] = useState('');
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = async () => {
    try {
      if (!isEmailValid(email)) {
        toast.error('Invalid email format!', { hideProgressBar: true, autoClose: 2000 });
        return;
      }

      const db = getFirestore(app); // Access Firestore instance correctly
      const userEmailsCollection = collection(db, 'userEmails'); // Reference to the "userEmails" collection
      const docRef = await addDoc(userEmailsCollection, { email: email }); // Add a new document to the collection

      await axios.post('http://localhost:5000/email/getemail', { email: email }); // Send email data to the backend
      toast.success('Signed up successfully!', { hideProgressBar: true, autoClose: 2000 });
      setEmail('');
    } catch (error) {
      console.error('Error adding document:', error);
      toast.error('Error signing up. Please try again later.', { hideProgressBar: true, autoClose: 2000 });
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendEmail();
    }
  };

  return (
    <>
      <main className={styles.Home}>
        <div className={styles.Layer}>
        </div>

          <h1 className={styles.HomeTitle}>
            <i>N</i>
            <i>e</i>
            <i>p</i>
            <i>h</i>
            <i>a</i>
            <i>r</i>
            <i>a</i>
          </h1>
          <div className={styles.HomeDescription}>
            <h6>Nephara store is Launching soon.</h6>
            <p className={styles.HomeDescriptionParagraph}>Sign up to be the first to know when we launch.</p>
            <p className={styles.HomeDescriptionParagraphSecond}>Enter your email here*</p>
            <input onKeyDown={handleKeyDown} value={email} type='text' onChange={(e) => setEmail(e.target.value)} />
            <button onClick={sendEmail}>Sign Up!</button>
          </div>
      </main>
    </>
  )
}
