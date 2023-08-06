import { useState } from 'react';
import { Navbar, Button } from 'flowbite-react';

export const Header = () => {
  const [activeLink, setActiveLink] = useState<number>(0);

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
  };

  return (
    <Navbar className="w-full bg-slate-300" fluid>
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="/favicon.svg"
          /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-green-600">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active={activeLink === 0}
          onClick={() => handleLinkClick(0)}
          href="#"
        >
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link
          active={activeLink === 1}
          onClick={() => handleLinkClick(1)}
          href="#"
        >
          <p>To Dos</p>
        </Navbar.Link>
        <Navbar.Link
          active={activeLink === 2}
          onClick={() => handleLinkClick(2)}
          href="#"
        >
          <p>About</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
