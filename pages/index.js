import Head from 'next/head'
import { Flex } from "@chakra-ui/react";

import CoinDrop from '../games/CoinDrop';
import ISpy from "../games/ISpy";

const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Flex justifyContent="space-between" alignItems="center" my={12} >
      <CoinDrop />
    </Flex>
    <Flex justifyContent="space-between" alignItems="center" my={12}>
      <ISpy />
    </Flex>
  </>
);

export default Home;
