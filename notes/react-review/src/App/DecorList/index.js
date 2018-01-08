import React, {Component} from "react";
import items from "../../shared/decor.json";
import Item from "./Item";
import Form from "./Form";

class DecorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: items
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.edit = this.edit.bind(this);
    }

    addItem(item){
        this.setState((prevState) => {
            let newItems = [item, ...prevState.items];
            return {
                items: newItems
            }
        })
    }

    deleteItem(i) {
        this.setState((prevState) => {
            let newItems = [...prevState.items];
            newItems.splice(i,1)
            return {
                items: newItems
            }
        })
    }

    edit(editedItem, i) {
        this.setState((prevState) => {
            let newItems = [...prevState.items];
            newItems[i] = editedItem;
            return {
                item: newItems
            }
        })
    }
    render(){
        let {items} = this.state;
        return (
            <div>
                <Form submit={this.addItem}></Form>
                {items.map((item, i) => {
                    return (
                        <Item index={i} edit={this.edit} deleteItem = {this.deleteItem} addItem={this.addItem} {...item} key={i}></Item>
                    )
                })}
            </div>
        )
    }
}

export default DecorList;