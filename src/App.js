import pizza from './pizza.jpg';
import pizza2 from './pizza2.jpg';
import './App.css';
import styled from 'styled-components';
import PizzaCard from './components/PizzaCard';

function App() {

  const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
`;

  return (
    <div className="App">
      <Container>
        <PizzaCard image={pizza}></PizzaCard>
        <PizzaCard image={pizza2}></PizzaCard>
        <PizzaCard image={pizza}></PizzaCard>
        <PizzaCard image={pizza2}></PizzaCard>
      </Container>
    </div>
  );
}

export default App;
