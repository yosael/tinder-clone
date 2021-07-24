import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

const TinderCards = () => {

    const [people, setPeople] = useState([
        {
            name: "Gal Gadot",
            url: "https://i.insider.com/6082fd9d1041d50019f2df60?width=700"
        },
        {
            name: "Scarlett Johansson",
            url: "https://i1.wp.com/lanacion.com.sv/wp-content/uploads/2021/07/scarlett-johansson-1-poss-feature.jpeg?fit=2000%2C1333&ssl=1"
        }
    ]);

    const swiped = (direction,nameToDelete) =>{
        console.log("removing: ",nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name,"lett the screen!");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {
                    people.map( (person) => (
                        <TinderCard 
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up","down"]}
                            onSwipe={(dir)=> swiped(dir,person.name)}
                            onCardLeftScreen={()=>outOfFrame(person.name) }
                        >
                        <div
                        style={{ backgroundImage: `url(${person.url})` }}
                         className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                        </TinderCard>
                        
                    ))
                }
            </div>
        </div>
    )
}

export default TinderCards;
