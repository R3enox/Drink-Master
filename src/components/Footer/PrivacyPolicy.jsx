import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => {
  return (
    <div className="flex flex-wrap gap-x-[153px] lg:gap-x-[689px]">
      <p className="text-grey-text-color text-[12px] leading-[1.33] mb-[8px] md: top-[443px] left-[32px] md:text-[14px] md:leading-[1.29] lg:-[388px]">
        ©2023 Drink Master. All rights reserved.
      </p>
      <ul className="flex gap-x-[14px] text-grey-text-color text-[12px] leading-[1.33] md:text-[14px] md:leading-[1.29]">
        <li>
          <Link to={'/'}>
            <p>Privacy Policy</p>
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <p>Terms of Service</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
