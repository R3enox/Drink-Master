import { DeviceTypes } from './deviceTypes';

const DrinksLimit = {
  [DeviceTypes.MOBILE]: 10,
  [DeviceTypes.TABLET]: 10,
  [DeviceTypes.DESKTOP]: 9,
};

const MyDrinksLimit = {
  [DeviceTypes.MOBILE]: 8,
  [DeviceTypes.TABLET]: 8,
  [DeviceTypes.DESKTOP]: 9,
};
const FavoriteDrinksLimit = {
  [DeviceTypes.MOBILE]: 8,
  [DeviceTypes.TABLET]: 8,
  [DeviceTypes.DESKTOP]: 9,
};

const CountPagesOfPagination = {
  [DeviceTypes.MOBILE]: 5,
  [DeviceTypes.TABLET]: 8,
  [DeviceTypes.DESKTOP]: 8,
};

export {
  DrinksLimit,
  MyDrinksLimit,
  FavoriteDrinksLimit,
  CountPagesOfPagination,
};
