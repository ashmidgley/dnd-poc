import React from "react";
import { Image } from "@chakra-ui/react";

import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../ItemTypes';

const Microwave = () => {

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.COIN,
        drop: () => ({ name: 'Microwave' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

    return (
        <Image
            ref={drop}
            src="/microwave.jpg"
            height={{base: "100px", md: "200px"}}
            role="Microwave"
            transition="all 150ms ease-out"
            transform={canDrop && isOver && {base: "scale(1.125)", sm: "scale(1.25)"}}
        />
    );
};

export default Microwave;
