import React,{Component} from 'react';
import Cardlist from '../compenents/Cardlist';
import SearchBox from '../compenents/SearchBox';
import Scoll from '../compenents/Scoll';
import ErrorBoundry from '../compenents/ErrorBoundry'

class App extends Component{
    constructor(){
    super();
    this.state = {
        robots : [],
        serachField : ''
    }


    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({robots:users}))
    
    }
    onSearchChange = (event) => {
        this.setState({serachField:event.target.value})           
    }
    

    render(){
        const {robots,serachField}=this.state;
        const filterrobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(serachField.toLowerCase())
        })

            return  !robots.length ? <h1>Faild To Load ..</h1> : (

                
        <div className='tc'>
            <h1>Robot Firends :</h1>
            <SearchBox searchCahnge={this.onSearchChange}/>
            <Scoll>
                <ErrorBoundry>
                <Cardlist robots={filterrobots}/>

                </ErrorBoundry>
            </Scoll>
        </div>
        );}
    
}

export default App;
