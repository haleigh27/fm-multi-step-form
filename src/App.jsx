import React, { useState } from 'react';
import UserInfo from './components/formSections/UserInfo';
import SelectPlan from './components/formSections/SelectPlan';
import AddOns from './components/formSections/AddOns';
import Summary from './components/formSections/Summary';
import Confirmation from './components/formSections/Confirmation';

import { plans } from './data';

import { useMultiStepForm } from './hooks/useMultiStepForm';
import { useWindowSize } from './hooks/useWindowSize';

function App() {
  const initialData = {
    name: '',
    email: '',
    contact: '',
    plan: {
      type: plans[0].type,
      period: 'monthly',
    },
    addOns: [],
  };

  const [data, setData] = useState(initialData);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isUserInfoValid, setIsUserInfoValid] = useState(false);

  const { width } = useWindowSize();

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const handleUserInfoValidation = (isValid) => {
    setIsUserInfoValid(isValid);
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
    <UserInfo {...data} updateFields={updateFields} onValidate={handleUserInfoValidation} />,
    <SelectPlan {...data} updateFields={updateFields} />,
    <AddOns {...data} updateFields={updateFields} />,
    <Summary plan={data.plan} addOns={data.addOns} updateFields={updateFields} />,
  ]);

  function onSubmit(e) {
    e.preventDefault();

    // Prevent moving forward if UserInfo is invalid
    if (currentStepIndex === 0 && !isUserInfoValid) {
      return; // Do not proceed
    }

    // Check if on Summary page and confirm
    if (currentStepIndex === steps.length - 1) {
      setIsConfirmed(true);
    } else {
      next(); // Proceed to next step
    }
  }

  return (
    <div className="container">
      <div id="form-sidebar">
        <div className="form-sidebar-content">
          {steps.map((_, index) => (
            <div key={index} className="form-sidebar-details">
              <p className={`step-num ${currentStepIndex === index ? 'active-step' : ''}`}>
                {index + 1}
              </p>
              {width >= 768 && (
                <p className="step-description">
                  STEP {index + 1}
                  <br />
                  <span>
                    {['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY', 'CONFIRM'][index]}
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      {!isConfirmed ? (
        <form onSubmit={onSubmit}>
          <div id="form">
            <div className="form-content">{step}</div>
            <div className="nav-buttons-container">
              {!isFirstStep && (
                <button type="button" className="nav-button-back" onClick={back}>
                  Go Back
                </button>
              )}

              <button type="submit" className="nav-button-next">
                {isLastStep ? 'Confirm' : 'Next Step'}
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="confirm">
          <div className="form-content">
            <Confirmation data={data} onReset={() => setIsConfirmed(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
