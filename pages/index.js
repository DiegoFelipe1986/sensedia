import React from 'react';
import Layout from '@/components/layouts/Layout'
import Users from '../components/layouts/Users';
import dotenv from 'dotenv';
dotenv.config();

const Home = () => {
  return (
  <>
    <Layout>
      <Users/>
    </Layout>
  </> );
}

export default Home;
