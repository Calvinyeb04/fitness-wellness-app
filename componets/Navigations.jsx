import React from "react";
import {Link} from "react-router-dom";
import "./Navigations.css";

const Navigations = () => {
    return (
        <div className="navigations">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
    );
    }