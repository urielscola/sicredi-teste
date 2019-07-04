import React from 'react';
import { GridContainer } from '../../components/Grid';
import Head from '../../components/Head';
import DisplayList from '../../components/DisplayList';

const Home = () => {
  return (
    <GridContainer>
      <Head title="Home" />
      <DisplayList />
    </GridContainer>
  );
};

export default Home;
