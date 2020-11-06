import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: "",
        error: "",
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.title !== ""){
            this.props.addTodoProps(this.state.title)
            this.setState({
                title: "",
                error: ""
            });
        }
        else{
            this.setState({
                title: "",
                error: "You have to enter a title for your todo."
            });
        }

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text" 
                    className="input-text"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    name = "title"
                    onChange={this.onChange}
                />
                <input type="submit" className="input-submit" value="Submit" />
            </form>
        )
    }
}

export default InputTodo