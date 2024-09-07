import React, { Component } from 'react';

class Footer extends Component{
    
    
    // createAlert(){
    //     alert('hello. you clicked here');
    // }

    changed(){
        console.log("Changed")
    }


    
    render() {
        // return <h2>This is our footer</h2>
        // return <h2 onClick={this.createAlert}>

        return (
            <div>
                <h2 onClick={this.props.myAlert}>
                    {this.props.tradeMark}
                </h2>
                <input onChange={this.changed} type="text" />
            </div>
        )
    }
}

export default Footer;