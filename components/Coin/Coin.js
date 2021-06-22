import React from "react";
import PropTypes from "prop-types";
import { Image } from "@chakra-ui/react";
import { useDrag } from 'react-dnd';

import { ItemTypes } from '../../ItemTypes';

const Coin = ({onDrop}) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.COIN,
        item: { name: "Coin" },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                onDrop(item, dropResult);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));

    return (
        <Image
            ref={drag}
            src="/dollar.jpg"
            height={{base: "50px", md: "100px"}}
            cursor='move'
            opacity={isDragging ? "0" : "1"}
            role="Coin"
        />
    );
};

Coin.propTypes = {
    onDrop: PropTypes.func,
};
Coin.defaultProps = {
    onDrop: () => {},
};

export default Coin;