import React from 'react';

const TestComponent: React.FC = () => {
  const animationStyle: React.CSSProperties = {
    animation: 'fadeInZoom 2s ease-in-out infinite',
    textAlign: 'center',
    fontSize: '1.5rem',
    marginTop: '2rem',
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeInZoom {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            50% {
              opacity: 1;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(0.8);
            }
          }
        `}
      </style>
      <div style={animationStyle}>
        This must be Gibberish
      </div>
    </>
  );
};

export default TestComponent;