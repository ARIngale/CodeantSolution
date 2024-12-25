import React, { useState } from "react";

const repositoriesData = [
  { name: "design-system", access: "Public", languages: "React", size: "2.6 MB", updates: "3" },
  { name: "codeant-ci-app", access: "Private", languages: "Javascript", size: "1.2 MB", updates: "2" },
  { name: "analytics-dashboard", access: "Public", languages: "Python", size: "4521 KB", updates: "5" },
  { name: "mobile-app", access: "Private", languages: "Swift", size: "4.6 MB", updates: "3" },
  { name: "e-commerce-website", access: "Private", languages: "React", size: "2.6 MB", updates: "3" },
  { name: "blog-website", access: "Public", languages: "Javascript", size: "16120 KB", updates: "4" },
  { name: "social-network", access: "Private", languages: "PHP", size: "5432 KB", updates: "3" },
];

function Repositories({ isSidebarOpen }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRepositories = repositoriesData.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`w-full min-h-screen mt-16 md:mt-0`}>
      <div className={`w-full h-full transition-colors duration-200 ease-in-out ${
        isSidebarOpen ? 'bg-[#6C6C6C] md:bg-[#fafafa]' : 'bg-[#fafafa]'
      }`}>
        <div className="mx-2 sm:mx-4 md:mx-6 pt-4">
          <div className="bg-white rounded-lg shadow-sm mb-4">
            <div className="p-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
                <div>
                  <h1 className="text-2xl font-semibold">Repositories</h1>
                  <p className="text-gray-500">{repositoriesData.length} total repositories</p>
                </div>
                <div className="flex gap-2 sm:gap-4">
                  <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
                    <img src="/assets/refresh.png" alt="Refresh icon" className="w-5 h-5" />
                    <span>Refresh All</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#1470ef] text-white rounded-lg">
                    <img src="/assets/plus.png" alt="Add icon" className="w-5 h-5" />
                    <span>Add Repository</span>
                  </button>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search repositories"
                  className="w-full md:w-1/4 p-2 pl-10 border border-gray-300 rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                  src="/assets/search.png"
                  alt="Search icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
              </div>
            </div>
            <div className={`divide-y divide-gray-200 ${
        isSidebarOpen ? 'bg-[#6C6C6C] md:bg-[#fafafa]' : 'bg-[#fafafa]'
      }`}>
              {filteredRepositories.map((repo) => (
                <RepositoryItem key={repo.name} {...repo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RepositoryItem({ name, access, languages, size, updates }) {
  return (
    <div className="px-4 hover:bg-[#D5D7DA] transition-colors py-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-medium">{name}</h2>
          <span className={`text-xs px-2 py-1 rounded-full bg-[#EFF8FF] text-blue-800`}>
            {access}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 md:gap-8 text-md md:text-lg text-[#181D27] md:mt-3">
        <div className="flex items-center gap-2">
          <span>{languages}</span>
          <div className="w-2 h-2 rounded-full bg-[#1470ef]"></div>
        </div>
        <div className="flex items-center gap-2">
          <img src="/assets/database.png" alt="Size icon" className="w-4 h-4" />
          <span>{size}</span>
        </div>
        <p>Updated {updates} days ago</p>
      </div>
    </div>
  );
}

export default Repositories;

