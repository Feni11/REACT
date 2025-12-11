import logo from "./logo.svg";
import "./App.css";
// import First from './First'
// import PropsEX from "./Props/props1";
// import Result from "./Props/Result";
import Rick_morty from "./Props/Rick_morty";
// import State1 from "./State/State1";


function App() {
  return (
    <div className="App">
      {/* <First></First> */}

      {/* <PropsEX value="Hello"></PropsEX> */}

      {/* <PropsEX value={{name: 'demo', surname: 'cdmi'}}></PropsEX> */}

      {/* <PropsEX
        value={[
          { name: "demo", surname: "cdmi" },
          { name: "demo", surname: "cdmi" },
          { name: "demo", surname: "cdmi" },
          { name: "demo", surname: "cdmi" },
          { name: "demo", surname: "cdmi" },
        ]}
      ></PropsEX> */}

      {/* <Result
        value={[
          { name: "Feni", maths: "48", sci: "43", eng: "45", ss: "40" },
          { name: "Yashvi", maths: "46", sci: "43", eng: "44", ss: "41" },
          { name: "ABC", maths: "43", sci: "41", eng: "41", ss: "40" },
          { name: "XYZ", maths: "41", sci: "38", eng: "42", ss: "46" },
        ]}
      ></Result> */}

      <Rick_morty
        value={[
          {
            id: 131,
            name: "Gar Gloonch",
            status: "Dead - Alien",
            location: "Nuptia 4",
            seen: "Mortynight Run",
            image: "https://rickandmortyapi.com/api/character/avatar/131.jpeg",
          },
          {
            id: 231,
            name: "Morty Rick",
            status: "unknown - Human",
            location: "Citadel of Ricks",
            seen: "The Rickshank Rickdemption",
            image: "https://rickandmortyapi.com/api/character/avatar/231.jpeg",
          },
          {
            id: 331,
            name: "Rick K-22",
            status: "Alive - Human",
            location: "Earth (Replacement Dimension)",
            seen: "The Ricklantis Mixup",
            image: "https://rickandmortyapi.com/api/character/avatar/292.jpeg",
          },
          {
            id: 431,
            name: "Vance Maximus",
            status: "Dead - Alien",
            location: "Worldender's lair",
            seen: "Vindicators 3: The Return of Worldender",
            image: "https://rickandmortyapi.com/api/character/avatar/375.jpeg",
          },
          {
            id: 531,
            name: "Vermigurber",
            status: "Alive - Human",
            location: "Gorgon Quadrant",
            seen: "The Old Man and the Seat",
            image: "https://rickandmortyapi.com/api/character/avatar/543.jpeg",
          },
          {
            id: 631,
            name: "Japheth's Grandson",
            status: "Dead - Humanoid",
            location: "Narnia Dimension",
            seen: "Mort Dinner Rick Andre",
            image: "https://rickandmortyapi.com/api/character/avatar/679.jpeg",
          },
        ]}
      ></Rick_morty>

        {/* <State1></State1> */}

    </div>
  );
}

export default App;
