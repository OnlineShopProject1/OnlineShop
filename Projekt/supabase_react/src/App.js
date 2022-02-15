//import './App.css';
import { supabase } from './supabaseClient'

import {useState} from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Category from './components/Category'
import { Supabase } from './supabaseClient'


import { AppContextProvider } from './appContext'

function App() {

  async function test() {
  const { data, error } = await Supabase
  .from('Produkte')
  .select()
  console.log(data)}
  test()
  return (
    <AppContextProvider>
      <AppContainer>
        <Header />
        <Category />
        <Main />
        <Footer />
      </AppContainer>
    </AppContextProvider>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  display: grid; 
  grid-template-columns: 0.7fr 1fr 1fr 1fr 1fr 0.7fr; 
  grid-template-rows: 40px 300px 1000px 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "Header Header Header Header Header Header"
    "Category Category Category Category Category Category"
    ". Main Main Main Main ."
    "Footer Footer Footer Footer Footer Footer"; 

    @media screen and (max-width: 768px) {
      grid-template-columns: 0.05fr 1fr 1fr 0.05fr; 
    }
`