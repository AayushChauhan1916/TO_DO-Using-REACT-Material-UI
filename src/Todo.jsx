import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './ToDo.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function TO_DO() {
    let [Todo,setTodo] = useState([{list:"Krishna",id:uuidv4(),mark:false}]);
    let [addToDO,setaddToDO] = useState("");

    function addItem(){
        if(addToDO===""){
            alert("please add Some task")
        }else{setTodo(()=>{
            return ([...Todo,{list:addToDO,id:uuidv4(),mark:false}])

        })
        }
        setaddToDO("")
    }

    function newToDO(event){
        setaddToDO(event.target.value)
    }

    function deleteTask(id){
       let newTodo =  Todo.filter((el)=>el.id != id);
       setTodo(newTodo);
    }

    function uppercase(){
        setTodo(Todo.map((element)=>{
            return {
                ...element, list : element.list.toUpperCase()
            }
        }))
    }
    function lowercase(){
        setTodo(Todo.map((element)=>{
            return {
                ...element, list : element.list.toLowerCase()
            }
        }))
    }

    function upperCaseOne(id){
        setTodo(Todo.map((element)=>{
            if(id == element.id){
                return {
                    ...element, list : element.list.toUpperCase()
                }
            }else{
                return {...element}
            }
        }))
    }
    function lowerCaseOne(id){
        setTodo(Todo.map((element)=>{
            if(id == element.id){
                return {
                    ...element, list : element.list.toLowerCase()
                }
            }else{
                return {...element}
            }
        }))
    }

    function markDone(id){
        setTodo(Todo.map((element)=>{
            if(element.id == id){
                return {
                    ...element,mark:!element.mark
                }
            }else{
               return{...element} 
            }
        }))
    }

    function markAll(){
        setTodo(Todo.map((element)=>{
            return {
                ...element, mark : true
            }
        }))
    }

    return (
        <div className="todo-container">
            <h3>TO_DO List</h3>

            <input type="text" value={addToDO} onChange={newToDO} />
            <br /> <br />
            <Button variant="contained" className="add-button"  onClick={addItem}  endIcon={<SendIcon />}>Add Task</Button>
            <hr />
            <ul>
                {
                    Todo.map((el) => (
                        <div className="activity" key={uuidv4()}>
                            <li key={el.id}>
                                <span className={el.mark ? "completed" : ""}>{el.list}</span>
                                &nbsp;&nbsp;
                                <Button variant="outlined" className="delete-button" onClick={() => deleteTask(el.id)} startIcon={<DeleteIcon />}>Delete</Button>
                                &nbsp;&nbsp;
                                
                                <button type="button" className="btn btn-light" onClick={() => markDone(el.id)} >Markasdone</button>
                                &nbsp;&nbsp;
                               
                                <button type="button" className="btn btn-light" onClick={() => upperCaseOne(el.id)}>Uppercase</button>
                                &nbsp;&nbsp;
                                
                                <button type="button" className="btn btn-light" onClick={() => lowerCaseOne(el.id)}>Lowercase</button>

                            </li>
                        </div>
                    ))
                }
            </ul>
           
            <button type="button" className="btn btn-light" onClick={uppercase}>Uppercase All</button>
            &nbsp;&nbsp; &nbsp;&nbsp;
           
            <button type="button" className="btn btn-light"  onClick={lowercase} >Lowercase All</button>
            &nbsp;&nbsp; &nbsp;&nbsp;
            
            <button type="button" className="btn btn-light" onClick={markAll} >All Done</button>
        </div>
    )
}
