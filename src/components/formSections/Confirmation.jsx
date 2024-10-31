import React from 'react';
import IconThankYou from '/images/icon-thank-you.svg';

function Confirmation() {
  return (
    <>
      <div className="thank-you">
        <img src={IconThankYou} alt="Thank you icon" />
        <h2>Thank you!</h2>
        <p className="thank-you-message">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you
          ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </>
  );
}

export default Confirmation;
