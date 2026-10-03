import { useState } from 'react';

export default function CreateAccountView() {
  const [form, setForm] = useState({ username: '', password: '', email: '', street: '', city: '', state: '', zip: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setMessage('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {};
    // Validate required form fields
    if (!form.username.trim()) newErrors.username = 'Username is required.';
    if (!form.password.trim()) newErrors.password = 'Password is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) newErrors.email = 'Enter a valid email address.';
    if (form.zip.trim() && !/^\d{5}$/.test(form.zip.trim())) newErrors.zip = 'ZIP must be 5 digits.';
    const phone = form.phone.trim();
    const phoneDigits = phone.replace(/\D/g, '');
    if (phone && (!/^\+?[\d\s().-]+$/.test(phone) || phoneDigits.length < 10 || phoneDigits.length > 15)) {
      newErrors.phone = 'Enter a phone number with 10–15 digits, using spaces, +, -, or parentheses.';
    }
    setErrors(newErrors);
    setMessage(Object.keys(newErrors).length === 0 ? 'Account information is valid.' : '');
  }

  return (
    <section className="account-form mx-auto">
      <h1 className="mb-4">Create Account</h1>
      <form onSubmit={handleSubmit} noValidate>
        {['username', 'password', 'email', 'street', 'city', 'state', 'zip', 'phone'].map(field => {
          const required = ['username', 'password', 'email'].includes(field);
          const label = field === 'zip' ? 'ZIP' : field.charAt(0).toUpperCase() + field.slice(1);
          return (
            <div className="mb-3" key={field}>
              <label className="form-label" htmlFor={field}>{label} {required ? '(required)' : '(optional)'}</label>
              <input id={field} name={field} value={form[field]} onChange={handleChange} required={required}
                type={field === 'password' ? 'password' : field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                className={`form-control${errors[field] ? ' is-invalid' : ''}`}
                aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `${field}-error` : undefined} />
              {errors[field] && <div className="invalid-feedback" id={`${field}-error`}>{errors[field]}</div>}
            </div>
          );
        })}
        <button className="btn btn-primary" type="submit">Create Account</button>
        {message && <p className="text-success mt-3" role="status">{message}</p>}
      </form>
    </section>
  );
}
