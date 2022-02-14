import React from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </div>
  );
}
