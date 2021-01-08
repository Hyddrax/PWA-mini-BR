import React from 'react';
import React, { useState } from 'react';

const player = () => {

  const [name, setName] = useState('John');
  const [armor, setArmor] = useState(50);
  const [weapon, setWeapon] = useState('XXX');
  const [position,setPosition] = useState(44)
  const [health, setHealth] = useState(100)

  return (
    <div>
      <img src="" alt="" />
    </div>
  );
}

export default player;
