import React from 'react';

export default function TitleCard(props)
{
    return (

        <div>
            <h2>{props.name}</h2>
            <h3>{props.birthYear}</h3>
        </div>
    );
}