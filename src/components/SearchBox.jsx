import React from "react";


const SearchBox = (props) => {
return (
    <div>
        <input type="text" name="searchfield" placeholder="search robots" onChange = {props.barChange} className="pa3 ba b--green bg-lightest-blue" />
    </div>
)
};


export default SearchBox;