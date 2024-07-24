
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props)
        //console.log("Parent Constructor");
    }

    componentDidMount(){
        //console.log("Parent component Did Mount");
    }

    render(){
        //console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <UserClass ide="First" location="Bangalore"/>
            </div>
        );
    }
}

export default About;