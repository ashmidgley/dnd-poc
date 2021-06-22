import Head from 'next/head'
import { Button, Box, Heading } from "@chakra-ui/react";

import CoinDrop from '../games/CoinDrop';

const Home = () => {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box m={6}>
        <Heading mb={3}>ERANZ POC</Heading>
        <Button>
          Testing 1 2, 1 2
        </Button>
      </Box>
      <CoinDrop />
    </>
  );
}


export default Home;
