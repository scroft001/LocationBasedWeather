import React from "react";
import ReactDOM  from "react-dom";

const App = () =>{
    // call to geo api
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position), //Success callback
        (err) => console.log(err)
    );

    return <div>Hi There</div>
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);