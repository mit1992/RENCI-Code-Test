import React from "react";
import './App.css';
import { Container } from "semantic-ui-react";
import { Table} from "./components/Table";


// Want to build this App?
//    $ npm start
// Inside the directory with the src/ directory
function App() {
  return (
    <div className="App">
      <Container>
        <Table/>
      </Container>
    </div>
  );
}
export default App;
