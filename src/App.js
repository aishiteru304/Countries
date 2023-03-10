import './App.css';
import Header from './Components/Header'
import MainContent from './Components/MainContent/index';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from './Components/ThemeContext/themeContext';

function App() {
  const themeContext = useContext(ThemeContext)
  return (
    <AppContainer className={themeContext.theme}>
      <Header />
      <ContentContainer>
        <MainContent />
      </ContentContainer>
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