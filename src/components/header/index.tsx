import type { ComponentPropsWithoutRef, FC } from 'react';
import { NavLink } from 'react-router';
import { menuLinks } from '@/core/constants';
import { cn } from '@/core/utils/tailwind-utils';

export const Header: FC<ComponentPropsWithoutRef<'header'>> = ({
  className,
}) => {
  const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
    cn(
      'text-white transition-all hover:font-bold',
      isActive && 'text-[#F15B07]',
    );

  return (
    <header className={cn('p-14', className)}>
      <div className="app-container">
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2.5">
            {menuLinks.map(({ text, href }) => (
              <li key={text}>
                <NavLink className={getNavLinkClassName} to={href}>
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
