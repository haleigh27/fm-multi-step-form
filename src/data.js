import ArcadeIcon from './assets/images/icon-arcade.svg';
import AdvancedIcon from './assets/images/icon-advanced.svg';
import ProIcon from './assets/images/icon-pro.svg';

export const plans = [
  { type: 'arcade', monthly: 9, yearly: 90, icon: ArcadeIcon },
  { type: 'advanced', monthly: 12, yearly: 120, icon: AdvancedIcon },
  { type: 'pro', monthly: 15, yearly: 150, icon: ProIcon },
];

export const addOnOptions = [
  { item: 'Online service', desc: 'Access to multiplayer games', monthly: 1, yearly: 10 },
  { item: 'Larger storage', desc: 'Extra 1TB of cloud save', monthly: 2, yearly: 20 },
  { item: 'Customizable profile', desc: 'Custom theme on your profile', monthly: 2, yearly: 20 },
];
