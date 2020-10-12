import React from "react"
import styled, { keyframes } from "styled-components"
import { ReactComponent as Cloudy } from "../weatherIcon/weather-cloud.svg"

const breatheAnimation = keyframes`
  0% { transform: scale(1); opacity: .3 }
 30% { transform: scale(1.5); opacity: 1 }
 40% { transform: scale(1.5); opacity: 1; }
 100% { transform: scale(1); ; opacity: .3; }
`

const AnimatedCloudy = styled(Cloudy)`
  width: 20vw;
  height: 20vh;
  animation-name: ${breatheAnimation};
  animation-delay: 1s;
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Loading = () => {
  return (
    <LoadingContainer>
      <AnimatedCloudy />
    </LoadingContainer>
  )
}
