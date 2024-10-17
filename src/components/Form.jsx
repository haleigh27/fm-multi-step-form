import React from 'react';
import UserInfo from './formSections/UserInfo';
import SelectPlan from './formSections/SelectPlan';
import AddOns from './formSections/AddOns';
import Summary from './formSections/Summary';
import Confirmation from './formSections/Confirmation';

function Form() {
  return (
    <>
      <div className="form-container">
        <UserInfo />
      </div>
    </>
  );
}

export default Form;
