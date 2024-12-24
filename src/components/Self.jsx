import React from 'react';
import { Options } from './Options';

export function Self() {
  return (
    <div className="flex flex-col items-center w-full gap-5 md:px-4 md:pb-4">
      <Options
        img="/assets/gitlab.png"
        text="Self Hosted Gitlab"
        onClick="/app/repositories"
      />
      <Options
        img="/assets/key.png"
        text="Sign in with SSO"
        onClick="/app/repositories"
      />
    </div>
  );
}

