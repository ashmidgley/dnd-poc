import React from "react";
import { Image } from "@chakra-ui/react";

import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../../ItemTypes';

const Microwave = ({ canDrop, isOver, connectDropTarget }) => (
    <Image
        ref={connectDropTarget}
        src="/microwave.jpg"
        height={{base: "100px", md: "200px"}}
        role="Microwave"
        transition="all 150ms ease-out"
        transform={canDrop && isOver && "scale(1.25)" }
    />
);

export default DropTarget(ItemTypes.COIN, {
    drop: () => ({ name: 'Microwave' }),
}, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))(Microwave);
