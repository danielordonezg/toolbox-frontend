import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/Header';
const toolboxLogo = require('../../assets/images/logo_toolbox.jpeg');

describe('Header component', () => {
  beforeEach(() => {
    jest.mock('../../assets/images/logo_toolbox.jpeg', () => 'toolbox-logo');
  });

  test('should render the logo', () => {
    const { getByAltText } = render(<Header logo={toolboxLogo} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const logo = getByAltText('Logo de toolbox');
    expect(logo).toBeInTheDocument();
  });

  test('should render the name', () => {
    const { getByText } = render(<Header logo={toolboxLogo} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const name = getByText('Daniel Alexander Gomez');
    expect(name).toBeInTheDocument();
  });

});