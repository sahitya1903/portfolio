import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from './emailjs.config';

const EMPTY = { from_name: '', from_email: '', subject: '', message: '' };

const validate = (fields) => {
  const e = {};
  if (!fields.from_name.trim()) e.from_name = 'Name is required';
  if (!fields.from_email.trim()) e.from_email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(fields.from_email)) e.from_email = 'Enter a valid email';
  if (!fields.subject.trim()) e.subject = 'Subject is required';
  if (!fields.message.trim()) e.message = 'Message is required';
  else if (fields.message.trim().length < 20) e.message = 'Message should be at least 20 characters';
  return e;
};

/**
 * useContactForm — owns the contact form's field state, client-side validation,
 * and EmailJS submit. `status` is one of: idle | sending | success | <error text>.
 */
const useContactForm = () => {
  const formRef = useRef(null);
  const [fields, setFields] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      setFields(EMPTY);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus(err?.text || err?.message || 'Unknown error occurred');
    }
  };

  const reset = () => setStatus('idle');

  return { formRef, fields, errors, status, handleChange, handleSubmit, reset };
};

export default useContactForm;
