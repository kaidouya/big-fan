import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Seo from '../components/Seo';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Seo title="綠捷傳動" />
    <Header />
    <Landing />
    <About />
    <Projects />
    <Writing />
    <Footer />
  </Layout>
);

export default IndexPage;
