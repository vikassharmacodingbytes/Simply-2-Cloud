import { Search } from '@mui/icons-material';
import { Autocomplete } from '@mui/material';
import React from 'react';
import NmAutoCmpSrc from './NmAutoCmp/NmAutoCmpSrc';

const SearchBar = () => {
  return (
    <div className="flex md:w-[90%] w-full md:mx-10 mt-8 relative">
      {/* <input
        type="text"
        className="w-full px-4 py-4 rounded-l outline-none"
        placeholder="Search For any Services"
      /> */}
      <NmAutoCmpSrc />
      <button className="bg-green-500 text-white px-4 py-2 rounded-r">
      <Search />
      </button>
    </div>
  );
}

export default SearchBar;