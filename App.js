import React from 'react';
import Header from './commons/Header';
import TimeLine from './components/TimeLine';

class App extends React.Component {
   render() {
      return (
         <div>
         	<center>
         	<Header/>
            <TimeLine/>
            </center>
         </div>
      );
   }
}

export default App;

