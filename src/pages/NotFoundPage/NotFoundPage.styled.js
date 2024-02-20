import styled from 'styled-components';

export const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 604px;

  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 768px) {
    & {
      min-height: 571px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      min-height: 540px;
    }
  }

  /* placeholder mobile */
  @media screen and (max-width: 767px) {
    background-size: 123px 156px;

    @media screen and (max-device-pixel-ratio: 1.99),
      screen and (-webkit-max-device-pixel-ratio: 1.99),
      screen and (max-resolution: 191dpi),
      screen and (max-resolution: 1.99dppx) {
      & {
        background-image: url('./src/assets/img/notFound/mobile_not-found.png');
      }
    }

    @media screen and (min-device-pixel-ratio: 2),
      screen and (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      & {
        background-image: url('./src/assets/img/notFound/mobile_not-found@2x.png');
      }
    }
  }

  /* placeholder tablet */
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-size: 158px 201px;

    @media screen and (max-device-pixel-ratio: 1.99),
      screen and (-webkit-max-device-pixel-ratio: 1.99),
      screen and (max-resolution: 191dpi),
      screen and (max-resolution: 1.99dppx) {
      & {
        background-image: url('./src/assets/img/notFound/tablet_not-found.png');
      }
    }

    @media screen and (min-device-pixel-ratio: 2),
      screen and (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      & {
        background-image: url('./src/assets/img/notFound/tablet_not-found@2x.png');
      }
    }
  }

  /* placeholder desktop */
  @media screen and (min-width: 1280px) {
    background-size: 158px 201px;

    @media screen and (max-device-pixel-ratio: 1.99),
      screen and (-webkit-max-device-pixel-ratio: 1.99),
      screen and (max-resolution: 191dpi),
      screen and (max-resolution: 1.99dppx) {
      & {
        background-image: url('./src/assets/img/notFound/desktop_not-found.png');
      }
    }

    @media screen and (min-device-pixel-ratio: 2),
      screen and (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      & {
        background-image: url('./src/assets/img/notFound/desktop_not-found@2x.png');
      }
    }
  }
`;

export const NotFoundPageTitle = styled.h1`
  font-weight: 600;
  font-size: 120px;
  line-height: 1.025;
  text-align: center;
  /* color: black; */
  color: rgba(243, 243, 243, 0.1);

  @media screen and (min-width: 768px) {
    & {
      font-size: 150px;
      line-height: 0.82;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      font-size: 200px;
      line-height: 1;
    }
  }
`;
