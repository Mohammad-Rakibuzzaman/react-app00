import React from 'react';
import './App.css';
// import { Header } from './components/header'
import Header from './components/header';
import Footer from './components/footer';

// to create a different component
// function OurText(){
//   return <p>This is our text</p>
// }

function createAlert(){
  alert('hello. you clicked here');
}


function ShowMessage(props){

  if(props.toShow){
    return <h2> Hi there </h2>
  } else {
    return <h2> Forbidden  </h2>
  }
    

}



// function App() {
//   const userLogin = true;
//   if (userLogin){
//     return (
//       <div className="App">
//         <Header info="this is a message" myNumber="6"/>
//         <Header info="Another info" myNumber="8"/>
//         <p>Main Content</p>
//         <Footer tradeMark="page by Ratul"
//           myAlert={createAlert}/>

//         {/* we can use ternary operator */}
        
//         { this.state.age === 27 ? "yes" : "no" }



//         <ShowMessage toShow={false} />
//       </div>
//     );
//   } else {
//     return <h2> Forbidden  </h2>
//   }
  
// }
function App() {
  return (
    <div className="App">
      <Header info="this is a message" myNumber="6"/>
      <Header info="Another info" myNumber="8"/>
      <p>Main Content</p>
      <Footer tradeMark="page by Ratul"
        myAlert={createAlert}/>

      {/* we can use ternary operator */}
      
      

      </div>

    )

  
}

export default App;
