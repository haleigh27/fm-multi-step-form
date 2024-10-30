import React from 'react';
import { addOnOptions } from '../../data';

function AddOns({ addOns, updateFields, plan }) {
  const handleAddOnChange = (addOn) => {
    const updatedAddOns = addOns.includes(addOn)
      ? addOns.filter((item) => item !== addOn)
      : [...addOns, addOn];

    updateFields({ addOns: updatedAddOns });
  };

  const label = (item) => item.toLowerCase().split(' ').join('-');

  return (
    <>
      <h2>Pick add-ons</h2>
      <p className="description">Add-ons help enhance your gaming experience.</p>
      <div className="add-ons-container">
        {addOnOptions.map((addOn) => (
          <label htmlFor={label(addOn.item)} className="add-on" key={label(addOn.item)}>
            <input
              type="checkbox"
              id={label(addOn.item)}
              checked={addOns.includes(addOn.item)}
              onChange={() => handleAddOnChange(addOn.item)}
            />
            <span>
              <p className="addOn-item">{addOn.item}</p>
              <p className="addOn-desc">{addOn.desc}</p>
            </span>
            <p className="addOn-price">
              ${plan.period === 'monthly' ? addOn.monthly : addOn.yearly}/
              {plan.period === 'monthly' ? 'mo' : 'yr'}
            </p>
          </label>
        ))}
      </div>
    </>
  );
}

export default AddOns;
