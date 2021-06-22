import React from "react";
import { Flex } from "@chakra-ui/react";

import Coin from "../Coin";
import Microwave from "../Microwave";

const CoinDrop = () => {

    return (
        <Flex
            height="500px"
            border="1px black solid"
            borderRadius={12}
            justifyContent="space-between"
            alignItems="center"
            mx={{base: 0, md: 12}}
            px={{base: 0, md: 12}}
        >
            <Coin />
            <Microwave />
        </Flex>
    );
}

export default CoinDrop;