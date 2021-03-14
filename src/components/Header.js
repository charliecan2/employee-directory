import React from 'react';
import '../stylesheets/header.css'

function Header(){
    return(
        <div className="directoryHeader">
            <header className="directoryTitle">Employee Directory</header>
            <p className="directoryParagraph">Click on First or Last Name to sort employee's by their names in alphabetical order.</p>
            <p className="directoryParagraph">You can even search for an employee by typing their name onto the search bar.</p>
        </div>
    )
}

export default Header;