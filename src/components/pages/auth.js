import React, {Component} from 'react';
import Login from "../auth/login"
import loginImage from "../../../static/assets/images/auth/login.jpg"
export default class Auth extends Component{
    constructor(props){
        super(props)
        this.handleSuccessfullAuth= this.handleSuccessfullAuth.bind(this)
        this.handleUnSuccessfullAuth= this.handleUnSuccessfullAuth.bind(this)
    }
    handleSuccessfullAuth(){
        this.props.handleSuccessfullLogin()
        // Push to route (homepage)
        this.props.history.push("/")
    }
    handleUnSuccessfullAuth(){
        this.props.handleUnSuccessfullLogin()
    }
    render() {
        return (
            <div className="auth-page-wrapper">
                <div 
                className="left-column" 
                style={{
                    backgroundImage: `url(${loginImage})`
                }}
                />
                <div className="right-column">
                    <Login
                        handleSuccessfullAuth= {this.handleSuccessfullAuth}
                        handleUnSuccessfullAuth= {this.handleUnSuccessfullAuth}
                    />
                </div>
            </div>
        )
    }
}