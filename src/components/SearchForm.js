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
                placeholder="Type employee's first or last name to search for them"
                id="term"
                />
            </div>
        </form>
    )
}

export default SearchForm;