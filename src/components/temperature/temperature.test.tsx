import React from 'react';
import { render } from '@testing-library/react';
import { Temperature } from "./index";

test('should render a formated celcius temperature given a kelvin one', () => {
  const { getByText } = render(<Temperature value={200} />);
  const linkElement = getByText("-73°");
  expect(linkElement).toBeInTheDocument();
});
