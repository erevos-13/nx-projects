import React from 'react';
import { render } from '@testing-library/react-native';

import ButtonUi from './button-ui';

describe('ButtonUi', () => {
  it('should render successfully', () => {
    const { container } = render(<ButtonUi />);
    expect(container).toBeTruthy();
  });
});
