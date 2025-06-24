import type { ComponentPropsWithoutRef, FC } from 'react';
import { cn } from '@/core/utils/tailwind-utils';

const menuLinks = [
  { text: 'Home', href: '#' },
  { text: 'Features', href: '#' },
];

export const Header: FC<ComponentPropsWithoutRef<'header'>> = ({
  className,
}) => {
  return (
    <header className={cn('p-14', className)}>
      <div className="app-container">
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2.5">
            {menuLinks.map(({ text, href }) => (
              <li key={text}>
                <a
                  className="text-white transition-colors hover:text-[#F15B07]"
                  href={href}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
