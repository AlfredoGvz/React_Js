import "./App.css";
//In versions previous to v17, it is needed to import react
//imprt react from 'react'

function App() {
  //All of this that looks like HTML is actully called JSX
  //Babel converts this JSX into HTML in the background when we save the file
  //Then it is rendered to teh DOM
  return (
    <div className="App">
      <div className="content">
        <h1>React Component</h1>
      </div>
    </div>
  );
}

export default App;
