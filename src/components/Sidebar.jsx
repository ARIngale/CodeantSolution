import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const navItems = [
  { img: "/assets/home.png", text: "Repositories", path: "/app/repositories" },
  { img: "/assets/code.png", text: "AI Code Review", path: "/app/code-review" },
  { img: "/assets/cloud.png", text: "Cloud Security", path: "/app/cloud-security" },
  { img: "/assets/book.png", text: "How to use", path: "/app/how-to-use" },
  { img: "/assets/gear.png", text: "Settings", path: "/app/settings" },
];

const bottomNavItems = [
  { img: "/assets/phone.png", text: "Report", path: "/app/report" },
  { img: "/assets/logout.png", text: "Logout", path: "/auth/saas" },
];

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/auth/saas');
  };

  return (
    <div
      className={`pl-2 pr-2 pt-5 z-[999] flex flex-col border-r border-gray-200 fixed md:relative
       md:justify-between md:items-center overflow-hidden transition-all ease-linear duration-200 ${
         isOpen ? "h-[32rem]" : "h-[5rem]"
       } md:h-[100vh] bg-white w-full md:w-[250px]`}
    >
      <div className="flex flex-col gap-4 md:gap-8 items-center w-full">
        <SidebarHeader isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="md:hidden w-full h-px bg-gray-200 my-2"></div>
        <UserSelect />
        <NavItems items={navItems} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="flex flex-col gap-2 md:gap-4 mt-2 md:mt-8 w-full">
        <NavItems items={bottomNavItems.slice(0, -1)} isOpen={isOpen} setIsOpen={setIsOpen} />
        <button
          onClick={handleSignOut}
          className="w-full border-0 flex flex-row items-center justify-start pl-5 pr-8 bg-white text-black gap-4 p-2 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          <div className="text-xl">
            <img src="/assets/logout.png" alt="Logout" className="w-5 h-5" />
          </div>
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
}

function SidebarHeader({ isOpen, setIsOpen }) {
  return (
    <div className="flex flex-row justify-between w-full items-center h-[2rem]">
      <div className="flex flex-row items-center justify-center font-[inter] text-2xl font-light gap-2">
        <img src="/assets/logo.png" alt="CodeAnt AI Logo" className="w-8 h-8" />
        <p>CodeAnt AI</p>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="w-6 h-6 md:hidden">
        <img 
          src={isOpen ? "/assets/close.png" : "/assets/bars.png"} 
          alt="Toggle menu" 
          className="w-full h-full"
        />
      </button>
    </div>
  );
}

function UserSelect() {
  return (
    <select className="w-full md:w-[90%] text-lg border border-gray-300 rounded-lg p-2">
      <option value="UtkarshDhairy">UtkarshDhairy</option>
      <option value="Aulakh">Atharva</option>
      <option value="Grewal">Ramesh</option>
      <option value="Randhawa">Chandan</option>
    </select>
  );
}

function NavItems({ items, isOpen, setIsOpen }) {
  return (
    <div className="flex flex-col w-full gap-2">
      {items.map((item, index) => (
        <NavItem 
          key={index} 
          img={item.img} 
          text={item.text} 
          path={item.path} 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
        />
      ))}
    </div>
  );
}

function NavItem({ img, text, path, isOpen, setIsOpen }) {
  return (
    <NavLink
      onClick={() => setIsOpen(!isOpen)}
      to={path}
      className={({ isActive }) =>
        `w-full border-0 flex flex-row items-center justify-start pl-5 pr-8
        ${isActive 
          ? "md:bg-[#1470ef] md:text-black text-[#1470ef]" 
          : " text-black"}
        gap-4 p-2 rounded-lg cursor-pointer  hover:text-black`
      }
    >
      <div className="text-xl">
        <img src={img} alt={text} className="w-5 h-5" />
      </div>
      <p>{text}</p>
    </NavLink>
  );
}

export default Sidebar;

