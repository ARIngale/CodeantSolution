import React from 'react';
import { Options } from './Options';

const data = [
  { img: '/assets/github.png', text: 'Sign in with Github', onClick: '/app/repositories' },
  { img: '/assets/bitbucket.png', text: 'Sign in with Bitbucket', onClick: '/app/repositories' },
  { img: '/assets/azure.png', text: 'Sign in with Azure DevOps', onClick: '/app/repositories' },
  { img: '/assets/gitlab.png', text: 'Sign in with Gitlab', onClick: '/app/repositories' },
];

export function SAAS() {
  return (
    <div className="flex flex-col items-center w-full gap-6 md:px-4">
      {data.map((item, index) => (
        <Options key={index} img={item.img} text={item.text} onClick={item.onClick} />
      ))}
    </div>
  );
}

