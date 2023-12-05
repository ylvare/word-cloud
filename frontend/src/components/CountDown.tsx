// src/components/Countdown.tsx
import React, { useState, useEffect } from "react";

interface CountdownProps {
  initialCountdown: number;
  onComplete: () => void;
}

const Countdown: React.FC<CountdownProps> = ({
  initialCountdown,
  onComplete,
}) => {
  const [countdown, setCountdown] = useState<number>(initialCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(interval);
      onComplete();
    }

    return () => clearInterval(interval);
  }, [countdown, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-full text-pink-400 text-lg">
      <p>{`Waking up server`}</p>
      <div className="relative pt-1 w-1/3 md:w-1/4 lg:w-1/6 ">
        <div className="flex h-2 mb-4 overflow-hidden text-xs bg-pink-200 rounded">
          <div
            style={{ width: `${100 - (countdown / initialCountdown) * 100}%` }}
            className="flex flex-col justify-center bg-pink-500 rounded"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
