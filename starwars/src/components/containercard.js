import React, {useState, useEffect} from "react";
import Axios from "axios";
import InfoCard from './infocard.js';
import { Container, Row } from "reactstrap";
import './StarWars.css';



export default function ContainerCard()
{
    const [swChars, setSwChars] = useState([]);
    useEffect(() => 
    {
        async function fetchData() {
        try {
          const returnData = await Axios.get(
            "https://swapi.co/api/people/"
          );

          setSwChars(returnData.data.results);
          
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, []);

    console.log(swChars);

return (
    <Container className='container'>
       {
       swChars.map(element =>
        
       <>
       <Row className='row-content'>
   
       <InfoCard name={element.name} birthYear={element.birth_year} gender={element.gender} eyeColor={element.eye_color} hairColor={element.hair_color} height={element.height} mass={element.mass} skinColor={element.skin_color}/>
       </Row>
       
       </>
        
       )
       }
       </Container>
       );
    };