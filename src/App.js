import React , {useState} from 'react';
import './App.css';

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Strawberry",
  "Grapes",
  "Pineapple",
  "Mango",
  "Blueberry",
  "Kiwi",
  "Watermelon",
  "Peach",
  "Cherry",
  "Pomegranate",
  "Pear",
  "Lemon",
];

function App() {
  const [searchitem, setSearchItem] = useState("");

    const searchFruits = (e) => {
    setSearchItem(e.target.value);
  };

  const filteredItems = fruits.filter((fruit)=> fruit.toLowerCase().includes(searchitem.toLowerCase()));

  return (
    <div className='background'>
      <div className='header'> 
      <p>Yathavakilla's Fruit Shop</p>
      <p>Welcome to Fresh Fruit Exotica!</p>
      </div>
    <div className="container">   
      <input type='text' className='search-input' placeholder='Search here....' onChange={searchFruits}/>
      {filteredItems.map((fruit, index)=> (<p key={index} className='fruit-item'>{fruit}</p>))}
    </div>
    </div>
  );
}

export default App;
