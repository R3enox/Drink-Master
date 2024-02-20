import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <ul className="flex flex-col gap-y-[14px] font-medium text-[14px] leading-[1.6] text-primary-text-color md:gap-y-[20px]">
      <li className="hover:text-hover-text-color transition-colors">
        <Link>Drinks</Link>
      </li>
      <li className="hover:text-hover-text-color transition-colors">
        <Link>Add drink</Link>
      </li>
      <li className="hover:text-hover-text-color transition-colors">
        <Link>My drinks</Link>
      </li>
      <li className="hover:text-hover-text-color transition-colors">
        <Link>Favorites drinks</Link>
      </li>
    </ul>
  );
};
