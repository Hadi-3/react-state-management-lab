// src/App.jsx

import { useState } from "react";
import './App.css';


const App = () => {


  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100)
  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0)
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0)

    
    const handleAddFighter = (fighter) => {
      if (money < fighter.price) {
        console.log('Not enough money')
        return;
      }

      setZombieFighters((prevFighters) =>
          prevFighters.filter((f) => f.id !== fighter.id)
      )

      setTeam([...team, fighter])
      setMoney(money - fighter.price)
    }

    const handleRemoveFighter = (fighter) => {
      setTeam((prevTeam => prevTeam.filter((f) => f.id !== fighter.id)))
      setZombieFighters((prevFighters) => [...prevFighters, fighter])
      setMoney((prevMoney) => prevMoney + fighter.price)
    }



  const [zombieFighters, setZombieFighters] = useState([
    {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]);

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <h2>Money {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team</h2>

        {team.length > 0 ?
        team.map((fighter, index) => (
          <li key={index}>{fighter.name}
            <p>Name: {fighter.name}</p>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <img src={fighter.img} alt={fighter.name}  />
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </li>
        ))
        :
        <p>Pick some team members!</p>       
        }

      <h2>Fighters</h2>
      
      <ul>
      {zombieFighters.map((fighter, index) => (
       <li key={index}>
          <p>Name: {fighter.name}</p>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <img src={fighter.img} alt={fighter.name}  />
          <br /> 
          <button onClick={()=> handleAddFighter(fighter)}>Add</button>
       </li>
      ))}
      </ul>

      
    
    </div>
  );
}

export default App