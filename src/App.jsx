import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Andy"} lastName={"Lim"} age={39} hairColor={"black"} />
      <PersonCard firstName={"John"} lastName={"Doe"} age={40} hairColor={"white"} />
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={41} hairColor={"grey"} />
      <PersonCard firstName={"Funky"} lastName={"Monkey"} age={42} hairColor={"brown"} />
      </div>
  );
}

export default App;
