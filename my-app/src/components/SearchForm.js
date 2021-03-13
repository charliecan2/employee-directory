import React from 'react';

function SearchForm (props){
    return (
        <form className="search">
            <div className="form-group">
                <input
                value={props.search}
                onChange={props.handleInputChange}
                type="text"
                className="form-control"
                placeholder="Type in employee info to begin search"
                id="term"
                />
            </div>
        </form>
    )
}

export default SearchForm;