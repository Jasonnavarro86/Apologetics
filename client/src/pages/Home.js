import React from 'react'
// import API from '../utils/API'
// import { Nav } from '../components/Nav'

export class Home extends React.Component{

  constructor(props){
    super(props)

      this.state = {
      }
  }
  
 
render(){

    return(
      <div id='mainDiv'>
       <div className="container">
        <div className="row"> 
          <div className="col">
             <div className="card">
              <input value="test"/>
             </div>           
          </div>
        </div>
       </div>
       <br/>
       <a href="/TestPage">Test Page found at '/TestPage'</a>
      </div>
          )

 }
}
