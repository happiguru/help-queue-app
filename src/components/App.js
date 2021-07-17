import React from 'react';
import Header from './Header';
import TicketControl from './TicketControl';
import { Container } from 'react-bootstrap';

// function App(){
//   return (
//     <React.Fragment>
//       <h1>Help Queue</h1>
//       <h3>3a</h3>
//       <h3>Thato and Haley</h3>
//       <p><em>Firebase entries not saving!</em></p>
//       <hr />
//     </React.Fragment>
//   );
// }

const App = () => {

  return (
    <React.Fragment>
      <Container>
        <Header />
        <TicketControl />
      </Container>
    </React.Fragment>
  );
}

export default App;