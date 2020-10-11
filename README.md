# Weather React APP

This SPA application shows a sample of 5 days weather information provided by [openweathermap](https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22).

## Software Design

The scope of the application is composed by one entity **WeatherData** described in `types.ts` file and exemplifed bellow.

```typescript
export interface WeatherData {
  timestamp: string;
  city: string;
  temperature: number;
  max: number;
  min: number;
  weather: WeatherConditions;
  id: string;
}
```

This interface describes the data representation the application will use to hydrate the view. This interface is implemented and scoped by the data layer **weatherData** in `src/weatherData/useWeatherData.tsx`.

The application has access to the Weather data via the **IWeatherContext** implemented in `src/weatherData`. React components can access it **useWeatherData** in the same module.

UI components can be found in `src/components/`. They represent a piece of the view and they have their own interfaces and tests scoped in. They are:

- `src/components/temperature`
- `src/components/weatherButton`
- `src/components/weatherDetails`
- `src/components/weatherIcons`


## Installing dependencies

In the project directory, run **yarn** or **npm install**.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode and a proxy server used to load the Weather information.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn test:coverage`

Launches the test runner and shows a coverage table afterwards.

### `yarn proxy`

Runs the node proxy server used to skip the CORS constraints to the data.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


