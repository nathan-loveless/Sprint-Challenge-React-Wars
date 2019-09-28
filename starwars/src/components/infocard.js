import React from 'react';
import { Card, CardText, CardBody, CardTitle, Col } from "reactstrap";

export default function InfoCard(props)
{
    return (

        <Col className='column' xs="12" lg="16" height="100%">
<Card height="100%">
<CardBody className='card-body' height="100%">
            <CardTitle className='card-title'>{props.name}</CardTitle>
            <CardText className='card-subtitle'>{props.birthYear}</CardText>
            <hr />
            <CardText className='card-info'>Gender: {props.gender}</CardText>
            <CardText className='card-info'>Height: {props.height}</CardText>
            <CardText className='card-info'>Mass: {props.mass}</CardText>
            <CardText className='card-info'>Eye Color: {props.eyeColor}</CardText>
            <CardText className='card-info'>Hair Color: {props.hairColor}</CardText>
            <CardText className='card-info'>Skin Color: {props.skinColor}</CardText>
 </CardBody>
</Card>
</Col>
    );
}