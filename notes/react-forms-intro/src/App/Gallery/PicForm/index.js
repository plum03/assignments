import React, {Component} from "react";

class PicForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                imgUrl: "",
                caption: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        let {value, name} = e.target;
        this.setState((prevState) => {
            return {
                inputs : {
                ...prevState.inputs,
                [name]: value
            }}
        })
    }

    handleSubmit(e){
        e.preventDefault();

       this.props.addPic(this.state.inputs);
        alert("Your photo has been added to your gallery")
    }

    render(){
        let { imgUrl, caption} = this.state.inputs;
        return (
            <form action="" onSubmit={this.handleSubmit} >
                <input onChange = {this.handleChange} value={imgUrl} name="imgUrl" type="text" placeholder="Image Url"/>
                {/*here the name must match those defined in the inputs */}
                <input onChange = {this.handleChange} value={caption} name="caption" type="text" placeholder="Caption"/>
                <button>Add Photo</button>
            </form>
        )
    }
}

export default PicForm;