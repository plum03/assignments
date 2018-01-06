import React, {Component} from "react";
import PicForm from './PicForm';


class Gallery extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pictures: []
        }
        this.addPic = this.addPic.bind(this); 
    }

    addPic(pic){
        // This function is stemming from changes taking place in PicForm (child of parent Gallery)
        this.setState((prevState) => {
            return {
                pictures: [...prevState.pictures, pic] 
                // this statement returns an array of the pics from previous state and adds the the current pic to the end
                // can also place new pic in front by writing as [pic, ...prevState]
            }
        })
    }

    render() {
        console.log(this.state.pictures);
        return (
            <div>
                <PicForm addPic={this.addPic}></PicForm>
            </div>
        )
    }
}

export default Gallery;