import React from 'react';
import { SpinWheel, ISpinWheelProps } from 'spin-wheel-game';  // Ensure these imports are correct

const segments = [
  { segmentText: 'Iphone', segColor: 'red' },
  { segmentText: 'Car Hyundai', segColor: 'blue' },
  { segmentText: 'Machine', segColor: 'green' },
  { segmentText: 'Auto Mode', segColor: 'grey' },
  // Add more segments as needed
];

const MySpinWheel: React.FC = () => {
  const handleSpinFinish = (result: string) => {
    console.log(`Spin Result is : ${result}`);
    // Handle the result as needed
  };

  const spinWheelProps: ISpinWheelProps = {
    segments,
    onFinished: handleSpinFinish,
    primaryColor: 'black',
    contrastColor: 'white',
    buttonText: 'Spin',
    isOnlyOnce: false,
    size: 200,
    upDuration: 100,
    downDuration: 600,
    fontFamily: 'Arial',
    arrowLocation: 'top',
    showTextOnSpin: true,
    isSpinSound: true,
  };

  return <SpinWheel {...spinWheelProps} />; // SpinWheel as a component (value)
};

export default MySpinWheel;
