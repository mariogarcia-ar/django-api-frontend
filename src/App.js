import React, {Component} from 'react';

const list = [
  {id:1, title:'1st title', body:'body1'},
  {id:2, title:'2st title', body:'body2'},
  {id:3, title:'3st title', body:'body3'}
];

class App extends Component{
  constructor(props){
    super(props);
    this.state = {list};
  }

  render(){
    return(
      <div>
        {this.state.list.map( item => (
          
          <div key={item.id} >
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        )

        )}
      </div>
    )
  }
}

export default App;