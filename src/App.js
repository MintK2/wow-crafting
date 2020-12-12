import React, { useState } from 'react'
import axios from 'axios'
import {Header} from './components/Header'
import {Recipe} from './components/Recipe'

import './App.css';



function App() {

  const [token, setToken] = useState("");

  const postAuth = () => {
    axios.post('https://us.battle.net/oauth/token', null, { params: {
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      grant_type: 'client_credentials'
    }}).then((res) => {
      setToken(res.data.access_token)
    })
  }

  return (
    <div>
      < Header/>
      <button onClick={postAuth}>PostAuth</button>
      < Recipe/>
    </div>
  );
}

export default App;
