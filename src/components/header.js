import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => (
    <header>
        <NavLink to="/" activeClassName="is-active" exact={true} > Dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-active" > Create Expense </NavLink>
        {/* <NavLink to="/edit" activeClassName="is-active" exact={true} > Edit Expense </NavLink> */}
        <NavLink to="/help" activeClassName="is-active" exact={true} > Help </NavLink>
    </header>
)

export default Header;