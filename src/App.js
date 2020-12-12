import React, { useState, useRef } from 'react'
import axios from 'axios'
import {Header} from './components/Header'
import {Recipe} from './components/Recipe'

import './App.css';



function App() {

  let itemInput = React.createRef();
  
  const [token, setToken] = useState("");
  const [itemID, setItemID] = useState(0);
  

  const postAuth = () => {
    axios.post('https://us.battle.net/oauth/token', null, { params: {
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      grant_type: 'client_credentials'
    }}).then((res) => {
      setToken(res.data.access_token)
    })
  }

  const getItem = (itemID, token) => {
    console.log(`https://us.api.blizzard.com/data/wow/recipe/${itemID}?namespace=static-us&locale=en_US&access_token=${token}`)
    axios.get(`https://us.api.blizzard.com/data/wow/recipe/${itemID}?namespace=static-us&locale=en_US&access_token=${token}`).then((res) => {
      console.log(res.data)
    })
  }

  function handleClick() { 
    setItemID(itemInput.current.value);
    console.log(itemID)
    getItem(itemID, token)
  }

  postAuth()

  return (
    <div>
      < Header/>
      <div>
      <input ref={itemInput} placeholder="Type a message..." />
      <button onClick={handleClick} className="icon">
        <i className="fa fa-play" />
      </button>
    </div>
      < Recipe/>
    </div>
  );
}

export default App;
