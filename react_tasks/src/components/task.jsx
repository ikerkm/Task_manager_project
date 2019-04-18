import React, { useState, Component } from 'react';
//import './css/board.css/';


/*
const Task = () => {
    const [newText, setNewText] = useState();
    const handleChange = ev => {
        setNewText(ev.target.value);
    }



return (
    <div>



    </div>

);
}
*/



class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task_name: this.props.task_name,
            task_desc: this.props.task_desc,
            task_date: this.props.task_date,
            task_stimated: this.props.task_stimated,
            task_color: { backgroundColor: this.props.task_color, },

        }

    }


    render() {


        //  console.log(this.state.task_name);



        return (
            <div className="the_task" style={this.state.task_color}><input type="text" className="input_task" value={this.state.task_name}></input>
                <input className="input_task" type="text" value={this.state.task_desc}></input>
                <input className="input_task" type="text" value={this.state.task_date}></input>
                <input className="input_task" type="text" value={this.state.task_stimated}></input>



            </div>
        )


    }


}
export default Task;