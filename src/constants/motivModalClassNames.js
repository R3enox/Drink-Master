const BgMotivModalKeys = {
  FIRST: 'First',
  SECOND: 'Second',
  THIRD: 'Third',
};

const BgMotivModalClassNames = {
  [BgMotivModalKeys.FIRST]: {
    MOBILE: 'bg-motiv-modal-first-mobile',
    TABLET: 'md:bg-motiv-modal-first-tablet-desktop',
    DESKTOP: '',
  },
  [BgMotivModalKeys.SECOND]: {
    MOBILE: 'bg-motiv-modal-second-mobile',
    TABLET: 'md:bg-motiv-modal-second-tablet-desktop',
    DESKTOP: '',
  },
  [BgMotivModalKeys.THIRD]: {
    MOBILE: 'bg-motiv-modal-third-mobile',
    TABLET: 'md:bg-motiv-modal-third-tablet-desktop',
    DESKTOP: '',
  },
};

export { BgMotivModalKeys, BgMotivModalClassNames };
