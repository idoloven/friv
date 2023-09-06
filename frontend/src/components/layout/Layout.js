import React from "react";
import DataWindow from '../dataWindow/DataWindow';
import Navbar from "../navbar/Navbar";
import Waves from "../waves/Waves";

import styled, { keyframes } from 'styled-components';

export default function Layout() {
  const gradient = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;
  const AnimatedBackground = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  overflow: auto;
  background: linear-gradient(315deg, #400080 3%, #00003d 38%, #004d80 68%, #00708c 98%); /* Adjust color stops */
  animation: ${gradient} 90s ease infinite;
  background-size: 400% 400%;
  background-attachment: fixed;
`;
  return (
    <>
      <AnimatedBackground>
        <Navbar />
        <DataWindow />
        <Waves/>
      </AnimatedBackground>
    </>
  );
}