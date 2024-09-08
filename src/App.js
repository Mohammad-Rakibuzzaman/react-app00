// import React from 'react';
// import './App.css';
// // import { Header } from './components/header'
// import Header from './components/header';
// import Footer from './components/footer';
// import { Route, BrowserRouter } from 'react-router-dom';

// // to create a different component
// // function OurText(){
// //   return <p>This is our text</p>
// // }

// function createAlert(){
//   alert('hello. you clicked here');
// }


// function ShowMessage(props){

//   if(props.toShow){
//     return <h2> Hi there </h2>
//   } else {
//     return <h2> Forbidden  </h2>
//   }
    

// }



// // function App() {
// //   const userLogin = true;
// //   if (userLogin){
// //     return (
// //       <div className="App">
// //         <Header info="this is a message" myNumber="6"/>
// //         <Header info="Another info" myNumber="8"/>
// //         <p>Main Content</p>
// //         <Footer tradeMark="page by Ratul"
// //           myAlert={createAlert}/>

// //         {/* we can use ternary operator */}
        
// //         { this.state.age === 27 ? "yes" : "no" }



// //         <ShowMessage toShow={false} />
// //       </div>
// //     );
// //   } else {
// //     return <h2> Forbidden  </h2>
// //   }
  
// // }
// function App() {
//   return (
//     <div className="App">
//       <Header info="this is a message" myNumber="6"/>
//       <Header info="Another info" myNumber="8"/>
//       <p>Main Content</p>
//       <Footer tradeMark="page by Ratul"
//         myAlert={createAlert}/>

//       {/* we can use ternary operator */}
      
      

//       </div>

//     )

  
// }

// export default App;


import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Numbers from './components/numbers';
import styled from 'styled-components'


function createAlert() {
  alert('hello. you clicked here');
}

//inline
const pStyle = {
  fontSize: '2em',
  color: 'skyblue'
}

//extra library
const Paragraph = styled.p`
  font-size: 3em;
  color: grey;   
`;



function App() {
  return (
    <div className="App">
      {/* <Header info="this is a message" myNumber="6" />
      <Header info="Another info" myNumber="8" />
      
      
      <p style={pStyle}>Main Content</p>
      
      <Paragraph>New styled component</Paragraph>



      <Footer tradeMark="page by Ratul" myAlert={createAlert} />
       */}

      <Numbers />

    </div>
  );
}

export default App;
