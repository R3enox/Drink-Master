import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <ul className="flex flex-col gap-y-[14px] font-medium text-[14px] leading-[1.6] text-primary-text-color">
      <li className="">
        <Link>Drinks</Link>
      </li>
      <li className="">
        <Link>Add drink</Link>
      </li>
      <li className="">
        <Link>My drinks</Link>
      </li>
      <li className="">
        <Link>Favorites drinks</Link>
      </li>
    </ul>
  );
};
