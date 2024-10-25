import { useEffect, useState } from 'react';
import styles from '../styles/QuoteOfTheDay.module.css';

const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Peace comes from within. Do not seek it without. – Buddha",
  "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate. – Ralph Waldo Emerson",
  "Let your faith be bigger than your fear.",
];

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Function to update the quote
    const updateQuote = () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    };

    // Initial quote set
    updateQuote();

    // Set an interval to change the quote every 10 seconds
    const intervalId = setInterval(updateQuote, 10000); // 10000 ms = 10 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.quoteContainer}>
      <p className={styles.quoteText}>{quote}</p>
    </div>
  );
};

export default QuoteOfTheDay;
