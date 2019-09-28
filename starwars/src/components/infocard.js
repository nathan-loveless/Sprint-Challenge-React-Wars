import React from 'react';

export default function InfoCard(props)
{
    return (

        <div>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Eye Color: {props.eyeColor}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>Skin Color: {props.skinColor}</p>
        </div>
    );
}