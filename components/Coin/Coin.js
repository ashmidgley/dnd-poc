import React from "react";
import { Image } from "@chakra-ui/react";
import { DragSource } from 'react-dnd';

import { ItemTypes } from '../../ItemTypes';

const Coin = ({isDragging, connectDragSource}) => (
    <Image
        ref={connectDragSource}
        src="/dollar.jpg"
        height={{base: "50px", md: "100px"}}
        cursor='move'
        opacity={isDragging ? "0" : "1"}
        role="Coin"
    />
);

export default DragSource(ItemTypes.COIN, {
    beginDrag: (props) => {
        return { name: props.name };
    },
    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
        if (dropResult) {
            new Audio('/coin-drop.mp3').play();
            alert(`You dropped ${item.name} into ${dropResult.name}!`);
        }
    },
}, (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    };
})(Coin);