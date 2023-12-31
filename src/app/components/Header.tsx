import { useState } from 'react';
import { Navbar, Button } from 'flowbite-react';
import Link from 'next/link';

type HeaderProps = {
  home?: string;
  todos?: string;
  about?: string;
};

export const Header = ({ home, todos, about }: HeaderProps) => {
  const [activeLink, setActiveLink] = useState<number>();

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
  };

  const hasOptions = home || todos || about;

  return (
    <Navbar className="w-full bg-slate-300" fluid>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
          Web Dev Assignment
        </span>
      </Navbar.Brand>
      {hasOptions && (
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
      )}
      <Navbar.Collapse>
        <Navbar.Link
          active={activeLink === 0}
          onClick={() => handleLinkClick(0)}
        >
          {home && (
            <Link href={'/'}>
              <p>{home}</p>
            </Link>
          )}
        </Navbar.Link>
        <Navbar.Link
          active={activeLink === 1}
          onClick={() => handleLinkClick(1)}
        >
          {todos && (
            <Link href={'/todos'}>
              <p>{todos}</p>
            </Link>
          )}
        </Navbar.Link>
        <Navbar.Link
          active={activeLink === 2}
          onClick={() => handleLinkClick(2)}
        >
          {about && (
            <Link href={'/about'}>
              <p>{about}</p>
            </Link>
          )}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
