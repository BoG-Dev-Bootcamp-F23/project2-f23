import React, { useState, useEffect } from 'react';
import title from "../images/Title.png";

export default function SearchBar(props) {
    const { searchTerm, setSearchTerm } = props;
    return (
        <div>
            <img src={title} alt="Title" />
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
    );
};
  