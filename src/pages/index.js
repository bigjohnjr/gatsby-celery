import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default () => (
    <div style={{ margin: `3rem auto`, maxWidth: 600, color: `purple` }}>
        <Link to="/contact/">Contact</Link>
        <Header headerText="Hello Gatsby!" />
        <h1>Celery Juicing</h1>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
);
