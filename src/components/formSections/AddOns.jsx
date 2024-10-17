import React from 'react';

const addOns = [
  {
    item: 'Online service',
    desc: 'Access to multiplayer games',
    price: '+$1/mo',
  },
  {
    item: 'Larger Storage',
    desc: 'Extra 1TB of cloud save',
    price: '+$2/mo',
  },
  {
    item: 'Customizable Profile',
    desc: 'Custom theme on your profile',
    price: '+$2/mo',
  },
];

function AddOns() {
  const label = (item) => item.toLowerCase().split(' ').join('-');

  return (
    <>
      <h2>Pick add-ons</h2>
      <p className="description">Add-ons help enhance your gaming experience.</p>
      <div className="add-ons-container">
        {addOns.map((addOn, index) => (
          <label htmlFor={label(addOn.item)} className="add-on" key={index}>
            <input
              type="checkbox"
              name={label(addOn.item)}
              id={label(addOn.item)}
              value={label(addOn.item)}
            />
            <span>
              <p className="addOn-item">{addOn.item}</p>
              <p className="addOn-desc">{addOn.desc}</p>
            </span>
            <p className="addOn-price">{addOn.price}</p>
          </label>
        ))}
      </div>
    </>
  );
}

export default AddOns;
