import React from 'react';
import QRCode from 'qrcode.react';
import './TelegramBotPage.css';

const TelegramBotPage = () => {
  const telegramBotUsername = 'coinsightbot';

  const handleClick = () => {
    window.open(`https://t.me/${telegramBotUsername}`, '_blank');
  };

  return (
    <div className="telegram-bot-page">
      <h1>CoinsightBot: Arbitrage Opportunities at Your Fingertips</h1>
      <div className="qrcode-container">
        <QRCode
          value={`https://t.me/${telegramBotUsername}`}
          size={256}
          renderAs="png"
          includeMargin={true}
        />
      </div>      
      <h2>{telegramBotUsername}</h2>
      <button className="telegram-button" onClick={handleClick}>
        Open in Telegram
      </button>
      <h2>How it works</h2>
      <p>
      Every 10 minutes, we query all coins traded in at least two of the exchanges supported
      (currently Binance, Binance Futures, and Kucoin), and notify you which coins currently 
      have opportunities for arbitrage.
      </p>
      <h2>What do we consider an arbitrage opportunity?</h2>
      <p>
        A situation where, with taker orders (instantly), you could buy X coins
        in one exchange, sell X in another, and have more money than you started
        with, even considering the fees (a baseline of 0.1% on each exchange).
      </p>
      <p>PS: We also include perpetual futures in the notifications, learn more about them <a href="https://apex-6.gitbook.io/coinsight/learning/perpetual-futures" target="_blank">here</a>.</p>
    </div>
  );
};

export default TelegramBotPage;
