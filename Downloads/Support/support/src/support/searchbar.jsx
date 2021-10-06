import React from 'react';
import './support.css';
// import { AiOutlineSearch } from "react-icons/ai";
// import InputAdornment from '@mui/material/InputAdornment';


const SearchBar = ({keyword,setKeyword}) => {
    return (
        <input 
         className="search"
         key="random1"
         value={keyword}
         placeholder= {" Search"}
         onChange={(e) => setKeyword(e.target.value)}
        //  startAdornment={
        //   <InputAdornment position="start">
        //  <AiOutlineSearch />
        //  </InputAdornment> 
        //  }
         />
      );
    }
    export default SearchBar 