import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

  };
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">
        <img src="https://bespoketechinc.com/wp-content/uploads/2018/10/cropped-horizontal_logo_web_header-300x88.png" width={100}/>
      </div>

      <div className="flex gap-2 items-center">
      <input
        type="text"
        placeholder="Search issues..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 rounded text-black border border-gray-300"
      />
      <Link to={`/search?q=${searchTerm}`} >
        Search
      </Link>
      </div>
      <p className="text-lg flex items-center">
            Profile
      </p>
    </header>
  );
};

export default Header;
