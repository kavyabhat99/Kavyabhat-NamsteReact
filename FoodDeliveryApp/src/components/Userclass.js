import React, { useState } from "react";
class Userclass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //     count1:1,
            //     count2:2
            userInfo: {
                name: "",
                bio: "",
                avatar_url: ""
            }
        }

    }
    async componentDidMount() {
        //Api call
        const data = await fetch("https://api.github.com/users/kavyabhat99")
        const json = await data.json();
        this.setState({ userInfo: json })
        console.log(json)
    }

    render() {
        // const {count1,count2} = this.state
        const { name, bio, avatar_url } = this.state.userInfo
        return (<>
            {/* <h2>name:{this.props.name}</h2>
            <h2>{count1}</h2>
            <h2>{count2}</h2>
            <button onClick={()=>{this.setState({
                count1:this.state.count1+1
                })}}>Count Increase</button> */}
            <h2>Name: {name}</h2>
            <img src={avatar_url} height="200px" width="200px"></img>
            <h4>Bio: {bio}</h4>

        </>)
    }

}

export default Userclass;