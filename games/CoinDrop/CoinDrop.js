import React, { useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";

import Coin from "../../components/Coin";
import Microwave from "../../components/Microwave";

const CoinDrop = () => {
    const [audio] = useState(typeof Audio !== "undefined" && new Audio("/coin-drop.mp3"));

    const handleDrop = (item, dropResult) => {
        audio.play();
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
    };

    return (
        <>
            <Heading ml={6}>Coin Drop</Heading>
            <Flex
                minHeight="500px"
                minWidth="80%"
                border="1px black solid"
                borderRadius={12}
                justifyContent="space-between"
                alignItems="center"
                px={{base: 0, md: 12}}
            >
                <Coin onDrop={handleDrop} />
                <Microwave />
            </Flex>
        </>
    );
}

export default CoinDrop;