import React from 'react';
import '../stylesheets/header.css'

function Header(){
    return(
        <div className="directoryHeader">
            <header className="directoryTitle">Employee Directory</header>
            <p className="directoryParagraph">Click on carrots to filter by heading or use search box to narrow your results.</p>
        </div>
    )
}

export default Header;