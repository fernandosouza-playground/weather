import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { createGlobalStyle } from "styled-components"
import "./typography/typography.css"
import { WeatherDataProvider } from "./weatherData/useWeatherData"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 40%;

    @media screen and (min-width: 768px) {
      font-size: 30%;
    }

    @media screen and (min-width: 992px) {
      font-size: 40%;
    }

    @media screen and (min-width: 1400px) {
      font-size: 62.5%;
    }
  }

  button {
    outline: none;
  }

  body {
    margin: 0;
    font-family: "Roboto";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: #262a59;
  }

  html, body, #root {
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <WeatherDataProvider>
      <App />
    </WeatherDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
