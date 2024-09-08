import React, { Component } from 'react';

class Footer extends Component{
    // createAlert(){
    //     alert('hello. you clicked here');
    // }


    // changed(evt){
    //     console.log(this.state.name)
    //     // console.log("Changed", evt)
    // }
 

    state = {
        // name: 'Ratul',
        name: '',
        age: 27,
        isLogin: true

    }

    //for fetching data from APi
    componentDidMount(){
        this.setState({name: 'MyName'})
        // subscribe
    }

    componentWillUnmount(){
        // unsubscribe
    }


    changed = evt => {
        // console.log(this.state.name)
        // console.log("Changed", evt.target.value)
       
        this.setState({name: evt.target.value})
        console.log(this.state.name);
       
    }

    
    render() {
        // return <h2>This is our footer</h2>
        // return <h2 onClick={this.createAlert}>

        return (
            <div>
               
                { this.state.isLogin ? (
                    <React.Fragment>
                        <h2 onClick={this.props.myAlert}>
                            {this.props.tradeMark}
                        </h2>
                        {/* <input onChange={this.changed} type="text" /> */}
                        <input value={this.state.name}
                            onChange={this.changed} type="text" />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <h2>
                            You cant see this content sorry
                        </h2>
                        <h2>
                            You must have to login
                        </h2>
                       
                    </React.Fragment>
                )}

            </div> 
        )
    }
}

export default Footer;