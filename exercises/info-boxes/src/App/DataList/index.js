import React, {Component} from "react";

class DataList extends Component {
    constructor(props) {
        this.state = {
            data: [],
            filter: "all"
        };
    }

    componentDidMount() {
        //fetch data from API with data, set state to contain array of data
    }

    render() {
        let data = this.state.data;
        let filteredData = data.filter((item) => {
            switch (this.state.filter) {
                case "all":
                    return true;
                case "black":
                    return item.color === black;
            }
        });
        return (
            <div>
                {filteredData.map((item)=>{
                    return <Data {...item} />
                })}
            </div>
        )
    }
}
