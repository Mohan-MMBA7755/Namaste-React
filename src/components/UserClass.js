import React from "react"

class UserClass extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            userInfo:{}
        }
        console.log(this.props.ide+"Constructor");
    }

    async componentDidMount(){
        console.log(this.props.ide+"component Did Mount");

        const data= await fetch("https://api.github.com/users/Mohan-MMBA7755");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
    }
    componentDidUpdate(){
        console.log("component Did Update");
    }

    componentWillUnmount(){
        console.log("component will Unmount");
    }
    render(){
        console.log(this.props.ide+"Render");
        const {name,location} = this.state.userInfo;
        return (
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h4>Location:{location}</h4>
        </div>
        );
    }
}

export default UserClass;