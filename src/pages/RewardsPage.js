import React, { useState } from 'react';
import './RewardsPage.css';

const RewardsPage = () => {
  const [reward, setReward] = useState('');
  const [spinReward, setSpinReward] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);

  const rewards = [
    '🎉 10% off on next toll 🎉',
    '🎉 Free coffee voucher 🎉',
    '🎉 5% off on public transport 🎉',
    '🎉 Surprise gift for cycling! 🎉',
    '🎉 Eco-friendly badge for walking 🎉',
  ];

  const spinRewards = [
    '🎉 15% off on next toll 🎉',
    '🎉 Surprise gift for cycling! 🎉',
    '🎉 Free public transport day pass 🎉',
  ];

  const triggerAnimation = () => {
    const animationElement = document.createElement('div');
    animationElement.textContent = '🎉';
    animationElement.classList.add('celebration-animation');
    document.body.appendChild(animationElement);

    setTimeout(() => {
      animationElement.style.opacity = 0;
    }, 2000);

    setTimeout(() => {
      animationElement.remove();
    }, 2500);
  };

  const handleRewardButtonClick = () => {
    const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
    setReward(randomReward);
    triggerAnimation();
  };

  const handleSpinButtonClick = () => {
    setIsSpinning(true);

    setTimeout(() => {
      setIsSpinning(false);
      const randomSpinReward = spinRewards[Math.floor(Math.random() * spinRewards.length)];
      setSpinReward(randomSpinReward);
      triggerAnimation();
    }, 3000); 
  };

  return (
    <div className="rewards-container">
      <h1>Travel Smart, Earn Rewards!</h1>
      <p>Use public transport, carpool, cycle, or walk to earn discounts and rewards.</p>

      {/* Reward Reveal Button */}
      <button onClick={handleRewardButtonClick} className="reward-button">
        Click to Reveal Your Reward!
      </button>
      {reward && <div className="reward-display">{reward}</div>}

      {/* Spin the Wheel */}
      <div className="spin-wheel-container">
        <button onClick={handleSpinButtonClick} className="spin-button">
          Spin the Wheel
        </button>
        <div className="spin-wheel">
          {isSpinning && <img src="spinthewheel.webp" alt="Spin the Wheel" className="spin-wheel-gif" />}
          {spinReward && <div className="reward-display">{spinReward}</div>}
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;