"use client";

import React, { useState, useEffect } from 'react';
import Lottie, { LottieComponentProps } from 'lottie-react';

interface LottieAnimationProps extends Omit<LottieComponentProps, 'animationData'> {
  animationPath: string;
  width?: string | number;
  height?: string | number;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ 
  animationPath, 
  width = '100%', 
  height = '100%', 
  loop = true, 
  autoplay = true, 
  ...rest 
}) => {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/animations/${animationPath}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setAnimationData(data);
      })
      .catch(err => {
        console.error("Error fetching animation:", animationPath, err);
        setError(`Failed to load animation: ${animationPath}`);
      });
  }, [animationPath]);

  if (error) {
    return <div style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'red', fontSize: '0.8em' }}>{error}</div>;
  }

  if (!animationData) {
    return <div style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'grey' }}>Loading...</div>; 
  }

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={{ width, height }}
      {...rest}
    />
  );
};

export default LottieAnimation; 