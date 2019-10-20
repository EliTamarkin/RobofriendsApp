import React from "react";


class ErrorBoundry extends React.Component{
    constructor(){
        super();
        this.state = {
            error: false
        }
    }
    componentDidCatch(error,info){
        this.setState({
            error: true
        })
    }
    render(){
        if(this.state.error){
            return <h1>Oops, something went wrong!</h1>
        }else {
            return (
                this.props.children
            )
        }
    }

}


export default ErrorBoundry;