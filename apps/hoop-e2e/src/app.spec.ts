import { device, element, by, expect } from 'detox';

describe('Hoop', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display welcome message', async () => {
    await expect(element(by.id('heading'))).toHaveText('Welcome to Hoop');
  });

  it('should open nx link', async () => {
    await expect(element(by.id('nx-link'))).toBeVisible();
    element(by.id('nx-link')).tap();
  });
});
