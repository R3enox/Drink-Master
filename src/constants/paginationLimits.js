import { DeviceTypes } from './deviceTypes';

const HomeDrinksLimit = {
  [DeviceTypes.MOBILE]: 1,
  [DeviceTypes.TABLET]: 2,
  [DeviceTypes.DESKTOP]: 3,
};

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
  HomeDrinksLimit,
  DrinksLimit,
  MyDrinksLimit,
  FavoriteDrinksLimit,
  CountPagesOfPagination,
};
