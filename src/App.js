import "./App.css";
import Profil from "../src/Components/Profile/Profil";
import Tunisie from "../src/Components/image/3bef9442-f7f3-447e-a536-34f5198a4075-132993676442528526.jpg"
import PropTypes from "prop-types";

function App() {

  // object person

  const person = {
    alt: "Im Tunisia",
    name: "Web designer",
    Bio: "I'am a logo designer and this is some of my logo",
    age:25,
    beauty:true
  }

//fonction handleName 

  const handleName = _ => {
    return alert(`Welcom to ${person.name} `);
    
  };

  return (
    <div className="App">
      <Profil
        fullName={person.name}
        affiche={handleName}
        Bio={person.Bio}
        alt={person.alt}
        age={person.age}
        beauty={person.beauty}
      >
        {Tunisie}
      </Profil>
    </div>
  );
}

export default App;

