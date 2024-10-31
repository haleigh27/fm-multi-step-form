import React from 'react';
import { plans, addOnOptions } from '../../data';

function Summary({ plan, addOns }) {
  // Find the selected plan's price
  const selectedPlan = plans.find((p) => p.type === plan.type);
  const planPrice = plan.period === 'monthly' ? selectedPlan.monthly : selectedPlan.yearly;

  // Calculate the total cost including add-ons
  const addOnPrices = addOns.map((addOn) => {
    const option = addOnOptions.find((o) => o.item === addOn);
    return plan.period === 'monthly' ? option.monthly : option.yearly;
  });

  const totalAddOnCost = addOnPrices.reduce((acc, price) => acc + price, 0);
  const totalCost = planPrice + totalAddOnCost;

  return (
    <>
      <h2>Finishing up</h2>
      <p className="description">Double-check everything looks OK before confirming.</p>
      <div className="summary-details">
        <div className="confirm-plan">
          <p className="confirm-plan-type">
            {plan.type.charAt(0).toUpperCase() + plan.type.slice(1)} ({plan.period})
          </p>
          <p className="confirm-plan-price">
            ${planPrice}/{plan.period === 'monthly' ? 'mo' : 'yr'}
          </p>
        </div>

        <ul className="confirm-addOn-container">
          {addOns.length > 0 ? (
            addOns.map((addOn) => {
              const option = addOnOptions.find((o) => o.item === addOn);
              const addOnPrice = plan.period === 'monthly' ? option.monthly : option.yearly;
              return (
                <li key={addOn} className="confirm-addOn">
                  <p>{addOn}</p>
                  <p>
                    +${addOnPrice}/{plan.period === 'monthly' ? 'mo' : 'yr'}
                  </p>
                </li>
              );
            })
          ) : (
            <li className="confirm-addOn">No add-ons selected</li>
          )}
        </ul>
        <div className="total-container">
          <p className="total">Total (per {plan.period === 'monthly' ? 'month' : 'year'})</p>
          <p className="total-price">
            +${totalCost}/{plan.period === 'monthly' ? 'mo' : 'yr'}
          </p>
        </div>
      </div>
    </>
  );
}

export default Summary;
