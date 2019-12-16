import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";

export default () => (
    <Layout>
        <Header headerText="About Gatsby" arbitraryPhrase="Santa" />
        <Header headerText="Blue Blue Christmas" />
        <p>The world needs more celery for LA people to juice.</p>
    </Layout>
);
