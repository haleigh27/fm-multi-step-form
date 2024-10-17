import React from 'react';

function UserInfo() {
  return (
    <>
      <h2>Personal info</h2>
      <p className="description">Please provide your name, email address, and phone number.</p>

      <div className="personal-info">
        {/* Name */}
        <div>
          <div className="label">
            <label htmlFor="name">Name</label>
            <p
              id="name-error-required"
              className="error hidden"
              aria-live="polite"
              aria-hidden="true"
            >
              This field is required
            </p>
          </div>
          <input type="text" id="name" name="name" placeholder="e.g. Stephen King" />
          <p
            id="name-error-invalid"
            className="error hidden"
            aria-live="polite"
            aria-hidden="true"
          ></p>
        </div>

        {/* Email */}
        <div>
          <div className="label">
            <label htmlFor="email">Email Address</label>
            <p
              id="email-error-required"
              className="error hidden"
              aria-live="polite"
              aria-hidden="true"
            >
              This field is required
            </p>
          </div>
          <input type="email" id="email" name="email" placeholder="e.g. stephenking@lorem.com" />
          <p
            id="email-error-invalid"
            className="error hidden"
            aria-live="polite"
            aria-hidden="true"
          ></p>
        </div>

        {/* Contact */}
        <div>
          <div className="label">
            <label htmlFor="contact">Phone Number</label>
            <p
              id="contact-error-required"
              className="error hidden"
              aria-live="polite"
              aria-hidden="true"
            >
              This field is required
            </p>
          </div>
          <input type="tel" id="contact" name="contact" placeholder="e.g. +1 234 567 890" />
          <p
            id="contact-error-invalid"
            className="error hidden"
            aria-live="polite"
            aria-hidden="true"
          ></p>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
