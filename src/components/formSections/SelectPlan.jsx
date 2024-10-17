import React from 'react';
import ArcadeIcon from '../../assets/images/icon-arcade.svg';
import AdvancedIcon from '../../assets/images/icon-advanced.svg';
import ProIcon from '../../assets/images/icon-pro.svg';

function SelectPlan() {
  return (
    <>
      <h2>Select Your Plan</h2>
      <p className="description">You have the option of monthly or yearly billing.</p>
      <div id="plans">
        <div className="plan-cards">
          <label htmlFor="arcade" className="plan-card">
            <input type="radio" name="plan" id="arcade" />
            <img src={ArcadeIcon} alt="Arcade Icon" />
            <div className="content">
              <p className="option">Arcade</p>
              <p className="price monthly">$9/mo</p>
              <p className="price yearly hidden">$90/yr</p>
              <p className="promo yearly hidden">2 months free</p>
            </div>
          </label>

          <label htmlFor="advanced" className="plan-card">
            <input type="radio" name="plan" id="advanced" />
            <img src={AdvancedIcon} alt="Advanced Icon" />
            <div className="content">
              <p className="option">Advanced</p>
              <p className="price">$12/mo</p>
              <p className="price yearly hidden">$120/yr</p>
              <p className="promo yearly hidden">2 months free</p>
            </div>
          </label>

          <label htmlFor="pro" className="plan-card">
            <input type="radio" name="plan" id="pro" />
            <img src={ProIcon} alt="Pro Icon" />
            <div className="content">
              <p className="option">Pro</p>
              <p className="price">$15/mo</p>
              <p className="price yearly hidden">$150/yr</p>
              <p className="promo yearly hidden">2 months free</p>
            </div>
          </label>
        </div>

        <div className="toggle-div">
          <span id="monthly-switch" alt="Switch label - monthly">
            Monthly
          </span>
          <input type="checkbox" id="switch" name="label-checkbox-billing" value="yearly" />
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
