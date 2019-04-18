import React, { Component } from 'react';
//import './css/board.css/';
import Task from '../components/task.jsx'
import '../css/board.css';
const Tasks = require('../models/Tasks')

class Board extends Component {


    constructor(props) {
        super(props);

        this.state = {
            task_name: '',
            task_desc: "",
            task_date: "",
            task_stimated: "",
            task_color: "",
            show_task_creator: false,
            task_created: false,
            task_holder: [],

            data_to_db: {
                task_name: "",
                task_desc: "",
                task_date: "",
                task_stimated: "",
                task_color: "",
            },
        }

    }


    openTaskCreator = () => {

        this.setState({ show_task_creator: true, });




    }

    handleChange = (e) => {
        console.log(e.target);
        e.persist();
        this.setState({


            [e.target.name]: e.target.value,




        }, () => {
            console.log("New state in ASYNC callback:", e.target.name);
        })

        this.setState({


            data_to_db: {
                task_name: this.state.task_name,
                task_desc: this.state.task_desc,
                task_date: this.state.task_date,
                task_stimated: this.state.task_stimated,
                task_color: this.state.task_color,

            }


        }, () => {
            //  console.log("New state in ASYNC callback:", e.target);
        })

        console.log(this.state);


    }

    createTask = () => {


        this.state.task_holder.push(<Task task_name={this.state.data_to_db.task_name} task_desc={this.state.data_to_db.task_desc} task_date={this.state.data_to_db.task_date} task_stimated={this.state.data_to_db.task_stimated} task_color={this.state.data_to_db.task_color} ></Task>)
        /*  new Tasks(this.state.data_to_db).save().then(tasks => {
              console.log(this.state.data_to_db);
  
          }).catch(err => {
              console.log("Something went wrong");
          })*/
        this.setState({
            show_task_creator: false,
            task_created: true,
            //task_holder: <Task task_name={this.state.task_name}></Task>,

        });

    }
    render() {
        console.log(this.props.match.params.id)
        let styler = "";
        if (this.state.show_task_creator) {

            styler = { display: 'flex' };

        } else {

            styler = { display: "none" };

        }


        console.log(this.state.task_holder);
        return (
            <div className="container">
                <div className="Task_manager">
                    <div className="board_div">

                        <span>   New task   <input value="+" onClick={this.openTaskCreator} className="button_creator" type="button"></input></span>

                    </div>
                    <div className="task_creator_div" style={styler}>
                        <form className="task_creator_form">
                            <text>Task Name</text>
                            <input name="task_name" ref="task_name" onChange={this.handleChange} type="text" value={this.state.task_name}></input>
                            <text>Description</text>
                            <textarea value={this.state.task_desc} onChange={this.handleChange} name="task_desc" ref="task_desc"></textarea>
                            <text>Date limit</text>
                            <input value={this.state.task_date} name="task_date" ref="task_date" onChange={this.handleChange} type="date"></input>
                            <text>Estimated time</text>
                            <input value={this.state.task_stimated} name="task_stimated" ref="task_stimated" onChange={this.handleChange} type="number"></input>
                            <text>Task color</text>
                            <input value={this.state.task_color || "#400040"} name="task_color" ref="task_color" onChange={this.handleChange} type="color"></input>
                            <input type="button" onClick={this.createTask} value="Create task"></input>
                        </form>
                    </div>
                </div>

                {this.state.task_holder.map(function (x) {
                    return x;
                })}

            </div>
        )


    }


}
export default Board;

/*
añadir tarea
borrar tarea
editar texto tarea
marcar como completada */