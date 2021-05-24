import './App.css';
import {PromptGenerator} from "./Prompts";
import React from "react";

class App extends React.Component {
  generator = new PromptGenerator();

  constructor(props) {
    super(props);
    this.state = {text: '...'};
    this.newPrompt()
  }

  newPrompt = () => {
    this.setState({
      text: this.generator.generate(),
    })
  }

  render() {
    return (
      <div className="App">
       <header className="App-header">
         <h1>Journaling Prompts</h1>
       </header>
         <p className="App-prompt">
           {this.state.text}
         </p>
        <p className="App-buttons">
          <button onClick={this.newPrompt}>Click to Generate</button>
        </p>
        <footer className="App-footer">
          <a href="https://github.com/bradsk88/journalprompt.space">Source Code</a>
        </footer>
      </div>
    );
  }
}

export default App;
