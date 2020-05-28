import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';


const Links = [
  {
    label: 'Miestnosti',
    href: '#rooms',
  },
  {
    label: 'Referencie',
    href: '#testimonials',
  },
  // {
  //   label: 'Cenník',
  //   href: '',
  // },
  {
    label: 'Kontakt',
    href: '',
  }
]

const Header = () => (
  <header className="sticky top-0 bg-gray-800 shadow text-orange-400">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl font-extrabold">
       
        <AnchorLink className="w-12 mr-3" href={'/'}>  
           <LogoIcon /> 
        </AnchorLink>
           
        {/* TIME TO ESCAPE */}
      </div>
      <div className="flex mt-4 sm:mt-0">
        {
          Links.map(link => 
            <AnchorLink className="px-4 tex-bold" href={link.href}>
              {link.label}
            </AnchorLink>
          )
        }
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Rezervácia</Button>
      </div>
    </div>
  </header>
);

export default Header;
