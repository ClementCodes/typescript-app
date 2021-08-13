import React,{FunctionComponent} from 'react';


//FC :signifie :function componnent 
  
const App: FunctionComponent = () => {
 const name: String = 'React';
    
 return (
  <h1>Bonjour, {name} !</h1>
 )
}
  
export default App;