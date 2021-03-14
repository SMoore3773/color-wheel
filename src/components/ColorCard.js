import React from 'react';
import styled from 'styled-components';


function ColorCard(props) {
    const {color} = props;
    const Card = styled.div`
        width: 70px;
        height: 70px;
        padding: 20px;
        margin: 10px;
        border-radius:50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${(color.active ? color.background : '#EEEEEE')};
        color: ${(color.active ? color.text : 'gray')};
    `;

    return(
        <Card>{color.color}</Card>
    )
}

export default ColorCard;