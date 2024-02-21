import { DeviceTypes } from 'constants/deviceTypes';
import { Breakpoints } from 'constants/breakpoints';

export const getDeviceType = () => {
  if (window.innerWidth >= Breakpoints.DESKTOP) {
    return DeviceTypes.DESKTOP;
  }

  if (window.innerWidth >= Breakpoints.TABLET) {
    return DeviceTypes.TABLET;
  }

  return DeviceTypes.MOBILE;
};
