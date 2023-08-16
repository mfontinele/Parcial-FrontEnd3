import { useState } from 'react'
import { Form } from './Components/Form';
import { Card } from './Components/Card';
import styles from './App.module.css';

function App() {

  const [showCard, setShowCard] = useState(false);
  const [name, setName] = useState('');
  const [favoriteSport, setFavoriteSport] = useState('');

  const handleSubmit2 = (inputName, inputFavoriteSport) => {
    setName(inputName);
    setFavoriteSport(inputFavoriteSport);
    setShowCard(true);
  };

  return (
    <div className = {styles.appContainer}>

    <h1 className = {styles.appTitle}>Encuesta</h1>

    <Form onSubmit = {handleSubmit2}></Form>

    {showCard && <Card name = {name} favoriteSport = {favoriteSport}></Card>}
     
    </div>
  )
}

export default App
