import React from "react";
import ReactDOM  from "react-dom";


class App extends React.Component{
    constructor(props){
        super(props);

        // the only time we do direct assignment to this.state
        this.state = { lat: null, errorMessage: "" };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude});
            }, //Success callback
            (err) => {
                this.setState({errorMessage: err.message})
            }
        );
    }

    //React says we  have to define render
    render(){
        return (
            <div>
                Latitude: {this.state.lat}
                <br/>
                Error: {this.state.errorMessage}
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);