import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";

import Coin from "../../components/Coin";
import Microwave from "../../components/Microwave";

const CoinDrop = () => {
    const [audio] = useState(typeof Audio !== "undefined" && new Audio("/coin-drop.mp3"));

    const handleDrop = (item, dropResult) => {
        audio.play();
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
    };

    return (
        <Flex
            minHeight="500px"
            border="3px black solid"
            borderRadius={12}
            justifyContent="space-between"
            alignItems="center"
            px={{base: 3, sm: 12}}
            my={{base: 3, sm: 6}}
        >
            <Coin onDrop={handleDrop} />
            <Microwave />
        </Flex>
    );
}

export default CoinDrop;