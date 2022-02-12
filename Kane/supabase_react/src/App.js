//import './App.css';
import { supabase } from './supabaseClient'

import {useState} from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


import { AppContextProvider } from './appContext'

function App() {

  //async function test() {
  //const { data, error } = await supabase
  //.from('Produkte')
  //.select()
  //console.log(data)}
  //test()
  return (
    <AppContextProvider>
      <AppContainer>
        <Header />
        <Main />
        <Footer />
      </AppContainer>
    </AppContextProvider>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: #5EB5BF;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
`