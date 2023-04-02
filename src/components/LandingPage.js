import React from 'react';
import './LandingPage.css';
import notification_icon from '../images/notification_icon.png';
import learning_icon from '../images/learning_icon.png';
import dataviz_icon from '../images/dataviz_icon.png';


const LandingPage = () => {
    const sections = [
    {
        title: 'Learning',
        icon: learning_icon,
        description: 'All you need to get started with Crypto Arbitrage'
    },
    {
        title: 'Notifications',
        icon: notification_icon,
        description: 'Be the first to know when the opportunity arise'
    },
    {
        title: 'Data Visualization',
        icon: dataviz_icon,
        description: 'Access the data you need to make the best decisions'
    }
    ];
  
    return (
      <div className="landing-page">
        <header className="header">
          <h1>Coinsight</h1>
          <h2>One-stop solution for all your investment needs</h2>
        </header>
        <div className="section-container">
          {sections.map((section, index) => (
            <div key={index} className="section">
              <h3>{section.title}</h3>
              <img src={section.icon} alt={`${section.title} icon`} />
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default LandingPage;