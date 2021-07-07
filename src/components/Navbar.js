import React from 'react'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <p className="navbar-brand">GetWeather</p>
                <form className="d-flex" onSubmit={(e) => { props.changeLocation(e) }}>
                    <input className="form-control me-2" type="search" placeholder="Enter Location" aria-label="Search" onChange={(e)=>{props.changeRegion(e.target.value)}}/>
                    <button className="btn btn-outline-secondary" type="submit"><i class="fas fa-search-location"></i></button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar
