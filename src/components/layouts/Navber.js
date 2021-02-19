/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
// import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';

function Navber() {
    return (
<Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
        <Link className="navbar-brand ml-5" to="/"><img src={logo} alt="logo" style={{ width:"35px" }}/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link exact active text-white text-uppercase ml-5" aria-current="page" to="/">Home&nbsp;<i class="fas fa-home"></i></Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link exact text-white text-uppercase ml-5" to="/news">news</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link exact text-white text-uppercase ml-5" to="/contact">Contact</Link>
            </li>
        </ul>
        <form className="d-flex">
            <input className="form-control me-1" my-sm-type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary ml-1 my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
</Fragment>
    )
}

export default Navber;
