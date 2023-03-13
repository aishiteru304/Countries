import './App.css';
import Header from './Components/Header'
import MainContent from './Components/MainContent/index';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from './Components/ThemeContext/themeContext';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom'
import CountryDetail from "../src/Components/MainContent/CountryDetail/index"
import CountryCode from "../src/Components/MainContent/CountryDetail/CountryCode"



function App() {
  const themeContext = useContext(ThemeContext)
  return (
    <AppContainer className={themeContext.theme}>
      <Header />
      <ContentContainer>
        <Routes>

          <Route exact path='/' element={<MainContent />} />
          <Route exact path='/all' element={<MainContent />} />
          <Route path='/region/:regionName' element={<MainContent />} />
          <Route path='/country/:countryName' element={<CountryDetail />} />
          <Route path='/alpha/:code' element={<CountryCode />} />


        </Routes>
      </ContentContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  overflow: hidden;
`
const ContentContainer = styled.div`
  max-width: 1220px;
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
`