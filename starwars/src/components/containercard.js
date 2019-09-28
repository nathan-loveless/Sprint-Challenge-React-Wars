import React, {useState, useEffect} from "react";
import Axios from "axios";
import TitleCard from './titlecard';
import InfoCard from './infocard';



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
    <div>
       {
       swChars.map(element =>
        
       <>
       <TitleCard name={element.name} birthYear={element.birth_year}/>
       <InfoCard gender={element.gender} eyeColor={element.eye_color} hairColor={element.hair_color} height={element.height} mass={element.mass} skinColor={element.skin_color}/>
       </>
        
       )
       }
       </div>
       );
    };