import React from 'react';
import { Github, LinkedIn, DevTo, Mail } from '../ui/Icons';

interface LinkProps {
  icon: JSX.Element,
  url: string,
}

const iconClass = "h-10 w-10 text-white";

const myLinks: LinkProps[] = [{
  icon: <Github className={iconClass} />,
  url: 'https://github.com/SoorajSNBlaze333',
}, {
  icon: <LinkedIn className={iconClass} />,
  url: 'https://www.linkedin.com/in/sooraj-s-nair-a81543172/',
}, {
  icon: <DevTo className={iconClass} />,
  url: 'https://dev.to/soorajsnblaze333',
}, {
  icon: <Mail className={iconClass} />,
  url: 'mailto:soorajsnblaze333@gmail.com',
}]

const IconTray = () => {
  const renderLink = (link: LinkProps, index: number) => {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        key={index}
        className="h-1/2 w-1/2 flex items-center justify-center z-10"
      >{link.icon}</a>
    )
  }

  return (
    <div className="fixed overflow-hidden bottom-1 h-16 w-1/2 rounded-xl ring-1 ring-gray-400 flex items-center">
      <div className="absolute z-0 h-full w-full bg-gray-600 bg-opacity-70 filter blur-md"></div>
      {myLinks.map(renderLink)}
    </div>
  )
}

export default IconTray;