import styled, { keyframes } from 'styled-components';

function Waves() {
  const wave = keyframes`
  2% {
    transform: translateX(1);
  }
  25% {
    transform: translateX(-25%);
  }
  50% {
    transform: translateX(-50%);
  }
  75% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(1);
  }
`;
  const AnimatedDiv_1 = styled.div`
  background: rgb(255 255 255 / 25%);
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 12em;
  animation: ${wave} 10s -3s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.8;
  bottom: 0;
  left: 0;
  z-index: 5;
`;

const AnimatedDiv_2 = styled.div`
  background: rgb(255 255 255 / 25%);
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 12em;
  transform: translate3d(0, 0, 0);
  left: 0;
  z-index: 5;

  bottom: -1.25em;
  animation: ${wave} 30s linear reverse infinite;
  opacity: 0.8;
`;

const AnimatedDiv_3 = styled.div`
  background: rgb(255 255 255 / 25%);
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 12em;
  transform: translate3d(0, 0, 0);
  left: 0;
  z-index: 5;

  bottom: -2.5em;
  animation: ${wave} 20s -1s reverse infinite;
  opacity: 0.9;
`;
  
  return (
    <div>
      <AnimatedDiv_1 ></AnimatedDiv_1>
      <AnimatedDiv_2 ></AnimatedDiv_2>
      <AnimatedDiv_3 ></AnimatedDiv_3>
    </div>
  );
}

export default Waves;
  