import { Footer } from 'flowbite-react';

export default function PageFooter() {
  return (
    <Footer className="rounded-none  shadow-none	bg-transparent" container>
      <Footer.Copyright
        className="text-slate-300"
        by="Flowbite™"
        href="#"
        year={2023}
      />
      <Footer.LinkGroup>
        <Footer.Link className="text-slate-300" href="#">
          About
        </Footer.Link>
        <Footer.Link className="text-slate-300" href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link className="text-slate-300" href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
