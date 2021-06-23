import React, { useRef, useState } from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";

import WorldCountries from "../../components/WorldCountries";
import AfricaCountries from "../../components/AfricaCountries";
import ArrowRight from "../../components/ArrowRight";

const ISpy = () => {
    const [showAfrica, setShowAfrica] = useState(false);

    const zambiaRef = useRef(null);

    const handleAfricaClick = () => {
        setShowAfrica(true);
    };

    const handleItemClick = (name) => {
        zambiaRef.current.style.fill = "yellow";
        alert(`You found ${name}!`);
    }

    const handleArrowClick = () => {
        setShowAfrica(false);
    }

    return (
        <>
            <Heading ml={6}>I Spy</Heading>
            <Flex
                minHeight="500px"
                minWidth="80%"
                border="1px black solid"
                borderRadius={12}
                justifyContent="center"
                alignItems="center"
                px={{base: 0, md: 12}}
            >
                {showAfrica ?
                    <Box position="relative">
                        <AfricaCountries height={"400px"} width={"100%"} onItemClick={handleItemClick} zambiaRef={zambiaRef} />
                        <ArrowRight position="absolute" top="0" right="0" fontSize={"32px"} cursor="pointer" onClick={handleArrowClick} />
                    </Box>
                    :
                    <WorldCountries height={"100%"} width={"700px"} onAfricaClick={handleAfricaClick} />
                }
            </Flex>
        </>
    );
};

export default ISpy;