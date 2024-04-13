//Part - 1 React 1 Check N Check

// const container=document.getElementById('react-container');
// ReactDOM.render("Hello! Welcome to React",container);

//Part - 1 React 2 Is it a Function

// const Container=()=>{
//     return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,React.createElement(`div`,null,`Let's rock and roll`));
// }
// const container=document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container),container);

//Part - 1 React 3 Now it's Class Time

class ReactContainer extends React.Component{
    // constructor - to initialize the state 
  
    // render method to render the react dom 
      render(){
          return React.createElement(`div`,null,`Hey Kalvians`,
          React.createElement(`div`,null,`Let's rock and roll with classes`)
          );
      }
    
  }
  const container = document.getElementById('react-container');
  ReactDOM.render(React.createElement(ReactContainer),container);
