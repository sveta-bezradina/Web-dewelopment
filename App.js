import logo from './logo.svg';
import './App.css';
import { HelloMessage } from './components/Text';
import { Card } from './components/Card';
import { Input } from './components/Search';

function App() {
  return (
    <body>
      <header>
        <HelloMessage name="Svitlana" />
        <Input/>
      </header>
      <div className="mainPage">
      <Card 
            link="img\pictures.png"
            title="Text"
            text="Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco."/>    
      <Card 
            link="img\pictures.png"
            title="Text"
            text="Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco."/>              
      <Card 
            link="img\pictures.png"
            title="Text"
            text="Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco."/>      
      <Card 
            link="img\pictures.png"
            title="Text"
            text="Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco."/>      
      <Card 
            link="img\pictures.png"
            title="Text"
            text="Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco."/>                     
      <Card 
            link="img\pictures.png"
            title="Text"
            text="Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco."/>        
      <Card 
            link="img\pictures.png"
            title="Text"
            text="Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco."/>              
      <Card 
            link="img\pictures.png"
            title="Text"
            text="Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco."/>               
        <Card 
            link="img\pictures.png"
            title="Text"
            text="Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco."/>      
      </div>
      <footer>309</footer>
    </body>
  );
}

export default App;
