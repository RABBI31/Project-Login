import React, { Component } from 'react';
import FacebookLogInBtn from 'react-facebook-login'

import "./login.css";

class Login extends Component {
    state = {
        auth: false,
        name: '',
        picture: '',
        email: '',
        pwd: ''
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })

    }
    handleSubmit = (e) => {


    }
    render() {
        let facebookData;

        this.state.auth ?
            facebookData = (
                <div>
                    Hi!
                </div>
            ) :
            facebookData = (
                <FacebookLogin
                    appId="359086325420822"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick = {componentClicked}
                    callback={responseFacebook}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook"
                />

            )
        return (
            <>
               {facebookData}
            </>
            // <div className="login">

            //     <div >
            //         <form onSubmit={this.handleSubmit} >
            //             <input type="email" name="email" placeholder="Enter your email.." required onChange={this.handleChange} />
            //             <input type="password" name="pwd" placeholder="Enter your password.." required onChange={this.handleChange} />
            //             <button onSubmit={this.handleSubmit} >Log In</button>
            //         </form>
            //     </div>

            // </div>
            

        );
    }
}

export default Login;