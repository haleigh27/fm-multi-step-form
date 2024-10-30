import React, { useState } from 'react';

function UserInfo({ name, email, contact, updateFields, onValidate }) {
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};
    // Name validation: required, at least 2 characters, only letters
    if (!name) {
      newErrors.name = 'This field is required';
    } else if (name.length < 2) {
      newErrors.nameInvalid = 'Name must be at least 2 characters';
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.nameInvalid = 'Name must contain only letters';
    }

    // Email validation: required, must include "@" for basic email validation
    if (!email) {
      newErrors.email = 'This field is required';
    } else if (!/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
      newErrors.emailInvalid = 'Please enter a valid email address';
    }

    // Contact validation: required, must be a valid phone number format
    if (!contact) {
      newErrors.contact = 'This field is required';
    } else if (!/^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/.test(contact)) {
      newErrors.contactInvalid = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    onValidate(Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    updateFields({ [e.target.name]: e.target.value });
    if (errors[e.target.name] || errors[`${e.target.name}Invalid`]) {
      setErrors({ ...errors, [e.target.name]: undefined, [`${e.target.name}Invalid`]: undefined });
    }
  };

  const handleBlur = () => {
    validateFields();
  };

  return (
    <>
      <h2>Personal info</h2>
      <p className="description">Please provide your name, email address, and phone number.</p>

      <div className="personal-info">
        {/* Name */}
        <div>
          <div className="label">
            <label htmlFor="name">Name</label>
            {errors.name && (
              <p id="name-error-required" className="error" aria-live="polite" aria-hidden="true">
                {errors.name}
              </p>
            )}
          </div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            autoFocus
            autoComplete="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.nameInvalid && (
            <p id="name-error-invalid" className="error" aria-live="polite">
              {errors.nameInvalid}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <div className="label">
            <label htmlFor="email">Email Address</label>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.emailInvalid && (
            <p id="email-error-invalid" className="error" aria-live="polite">
              {errors.emailInvalid}
            </p>
          )}
        </div>

        {/* Contact */}
        <div>
          <div className="label">
            <label htmlFor="contact">Phone Number</label>
            {errors.contact && <p className="error">{errors.contact}</p>}
          </div>
          <input
            type="tel"
            id="contact"
            name="contact"
            placeholder="e.g. +1 234 567 890"
            value={contact}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.contactInvalid && (
            <p id="contact-error-invalid" className="error" aria-live="polite">
              {errors.contactInvalid}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default UserInfo;
