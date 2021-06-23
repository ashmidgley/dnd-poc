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
    <Flex justifyContent="center" flexDirection="column" mx={{base: 2, sm: 12}}>
      <CoinDrop />
      <ISpy />
    </Flex>
  </>
);

export default Home;
