import './App.css'
import React, { Component } from 'react'




class App extends React.Component {


        state = {
        Person:{
        fullName:"Sarra Ben Jdida",
        bio:"Licence mkg/Master mkg",
        src: "./images.jpg",
        profession:"Etudiante"
      },
      Show:false,
      count:0,
    
    };
    
        
        handleClick=()=>this.setState({Show:!this.state.Show})
        
        componentDidMount(){



          setInterval(() => {
            this.setState({count:this.state.count++})
          },1000);
        }
        

  render() {
    return(
    
    <div className='parent'>

  {this.state.Show?  
  <> 
    <h5 >Full Name: {this.state.Person.fullName}</h5>
      <h5 > Bio: {this.state.Person.bio}</h5>
      <h5 > Profession: {this.state.Person.profession}</h5>
  <img src={this.state.Person.src} alt="images"/>
  <p className='count'>Counter: {this.state.count}</p>

  </> :  <></> }
  
    <button className='button' onClick={this.handleClick}>Show </button>

    </div>
    )
  }
}


export default App;



