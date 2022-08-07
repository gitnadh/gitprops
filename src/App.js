import "./App.css";
import Profil from "../src/Components/Profile/Profil";
import Pict from "../src/Components/image/3bef9442-f7f3-447e-a536-34f5198a4075-132993676442528526.jpg"


function App() {

  // object person

  const person = {
    alt: "Im Nidhal",
    pro: "Web designer",
    Bio: "I'am a logo designer and this is some of my logo",
    age:25,
    beauty:true
  }

//fonction handleName 

  const handleName = _ => {
    return alert(`Welcom to ${person.alt} `);
    
  };

  return (
    <div className="App">
      <Profil
        fullName={person.pro}
        affiche={handleName}
        Bio={person.Bio}
        alt={person.alt}
        age={person.age}
        beauty={person.beauty}
      >
        {Pict}
      </Profil>
    </div>
  );
}

export default App;

