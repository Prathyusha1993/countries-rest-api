import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            countries: {},
            err: null,
            isLoading: false,
            search: "",
            region: ""
        }
    }
   
    render() { 
        return ( 
        <div>

        </div> );
    }
}
 
export default Home;



