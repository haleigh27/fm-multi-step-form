import React from 'react';
import { plans } from '../../data';

function SelectPlan({ plan, updateFields, onValidate }) {
  const handlePlanChange = (type) => {
    updateFields({ plan: { ...plan, type } });
  };

  const handlePeriodChange = () => {
    const newPeriod = plan.period === 'monthly' ? 'yearly' : 'monthly';
    updateFields({ plan: { ...plan, period: newPeriod } });
  };

  return (
    <>
      <h2>Select Your Plan</h2>
      <p className="description">You have the option of monthly or yearly billing.</p>
      <div id="plans">
        <div className="plan-cards">
          {plans.map((planOption) => (
            <label key={planOption.type} className="plan-card">
              <input
                type="radio"
                name="plan"
                checked={plan.type === planOption.type}
                onChange={() => handlePlanChange(planOption.type)}
              />
              <img src={planOption.icon} alt={`${planOption.type} icon`} />
              <div className="content">
                <p className="option">
                  {planOption.type.charAt(0).toUpperCase() + planOption.type.slice(1)}
                </p>
                {plan.period === 'monthly' ? (
                  <p className="price">${planOption.monthly}/mo</p>
                ) : (
                  <>
                    <p className="price yearly">${planOption.yearly}/yr</p>
                    <p className="promo yearly">2 months free</p>
                  </>
                )}
              </div>
            </label>
          ))}
        </div>

        <div className="toggle-div">
          <span id="monthly-switch" alt="Switch label - monthly">
            Monthly
          </span>
          <input
            type="checkbox"
            id="switch"
            checked={plan.period === 'yearly'}
            onChange={handlePeriodChange}
          />
          <label htmlFor="switch" id="label-checkbox-billing"></label>
          <span id="yearly-switch" alt="Switch label - yearly">
            Yearly
          </span>
        </div>
      </div>
    </>
  );
}

export default SelectPlan;
