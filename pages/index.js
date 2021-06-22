import Head from 'next/head'
import { Button, Box, Heading } from "@chakra-ui/react";

const Home = () => (
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
  </>
);

export default Home;
