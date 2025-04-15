import React, { useEffect, useState } from 'react';

const CountUpNumber = ({ target, duration, increment }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(target.toString().replace(/[^0-9.]/g, ''));
    if (start === end) return;

    const incrementTime = Math.floor(duration);
    const timer = setInterval(() => {
      start += increment;
      setCount(start >= end ? end : start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  const formatNumber = () => {
    if (typeof target === 'string' && target.includes('M')) {
      return (count / 100000).toFixed(1) + 'M+';
    }
    if (typeof target === 'string' && target.includes('K')) {
      return (count ).toFixed(0) + 'K+';
    }
    return count.toLocaleString();
  };

return <>{formatNumber()}</>;
};

export default CountUpNumber;
