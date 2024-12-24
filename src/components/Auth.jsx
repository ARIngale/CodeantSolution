import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export function Auth() {
  return (
    <div className="bg-[#fafafa] md:flex md:flex-row md:justify-center md:items-center h-screen border border-[#f3f2f2]">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="bg-white h-screen md:flex flex-col items-center justify-center w-1/2 hidden">
      <div className="flex flex-col items-end relative">
        <StatisticsCard />
      </div>
      <IssuesFixedCard />
      <img
        src="/assets/Subtract.png"
        alt="Background decoration"
        className="hidden md:block absolute bottom-0 left-0"
      />
    </div>
  );
}

function StatisticsCard() {
  return (
    <div className="flex flex-col bg-white rounded-xl h-max shadow-xl pb-4">
      <div className="p-4 font-semibold text-lg pr-20 flex flex-row items-center justify-center font-[inter] gap-2">
        <img src="/assets/logo.png" alt="CodeAnt AI Logo" />
        <p>AI to Detect & Autofix Bad Code</p>
      </div>
      <hr className="h-px w-full bg-[#f3f2f2]" />
      <div className="flex flex-row gap-6 p-4 items-center">
        <StatItem value="30+" label="Language Support" />
        <StatItem value="10K+" label="Developers" />
        <StatItem value="100K+" label="Hours Saved" />
      </div>
    </div>
  );
}

function StatItem({ value, label }) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <p className="font-bold">{value}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

function IssuesFixedCard() {
  return (
    <div className="bg-white w-60 relative -top-8 left-24 shadow-xl p-5 rounded-2xl flex flex-col gap-2 mt-4 border border-[#f3f2f2]">
      <div className="flex flex-row items-center justify-between">
        <img src="/assets/signin.png" alt="Sign in" />
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row items-center text-[#0049c6] justify-center">
            <img src="/assets/arrow.png" alt="Arrow up" />
            <p>14%</p>
          </div>
          <p className="text-gray-600 text-sm pl-2">This week</p>
        </div>
      </div>
      <p className='font-semibold'>Issues Fixed</p>
      <p className="text-2xl font-semibold">500K+</p>
    </div>
  );
}

function RightPanel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2 md:w-1/2 w-full">
      <div className="bg-white h-[32rem] md:h-[35rem] rounded-md flex flex-col items-center w-full md:w-[95%] pt-5 gap-5 border border-[#f3f2f2]">
        <div className="flex flex-row items-center justify-center font-[inter] text-3xl font-light gap-2">
          <img src="/assets/logo.png" alt="CodeAnt AI Logo" />
          <p>CodeAnt AI</p>
        </div>
        <h1 className="font-semibold text-3xl">Welcome to CodeAnt AI</h1>
        <div className="flex flex-row gap-1 items-center md:p-4 bg-white md:w-full">
        <NavLink
            to="/auth/saas"
            end
            className={({ isActive }) =>
              `${
                isActive || location.pathname === '/auth'
                  ? 'bg-[#1470ef] text-white'
                  : 'bg-[#fafafa] text-black'
              } text-center text-xl p-2 w-40 md:w-full md:mx-2 rounded-md font-semibold`
            }
          >
            SAAS
          </NavLink>
          <NavLink
            to="self-hosted"
            className={({ isActive }) =>
              `${
                isActive ? 'bg-[#1470ef] text-white' : 'bg-[#fafafa] text-black'
              } text-center text-xl p-2 w-40 md:w-full md:mx-2 rounded-md font-semibold`
            }
          >
            Self Hosted
          </NavLink>
        </div>
        <hr className="h-px w-full bg-[#f3f2f2]" />
        <Outlet />
      </div>
      <p className='md:mt-5'>
        By signing up you agree to the{' '}
        <span className="font-semibold">Privacy Policy.</span>
      </p>
    </div>
  );
}

