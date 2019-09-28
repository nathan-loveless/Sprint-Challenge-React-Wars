import React from 'react';
import { Card, CardText, CardBody, CardTitle, Col } from "reactstrap";

export default function InfoCard(props)
{
    return (

        <Col xs="8" lg="6" height="100%">
<Card height="100%">
<CardBody className='card-body' height="100%">
            <CardTitle>{props.name}</CardTitle>
            <CardText>{props.birthYear}</CardText>
            <hr />
            <CardText>Gender: {props.gender}</CardText>
            <CardText>Height: {props.height}</CardText>
            <CardText>Mass: {props.mass}</CardText>
            <CardText>Eye Color: {props.eyeColor}</CardText>
            <CardText>Hair Color: {props.hairColor}</CardText>
            <CardText>Skin Color: {props.skinColor}</CardText>
 </CardBody>
</Card>
</Col>
    );
}