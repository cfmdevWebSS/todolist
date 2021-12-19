import React from "react";
import { TodoItemInterface } from "../interfaces";

//Todo item component
export const TodoItem = (props: TodoItemInterface) => {
    return (
        <div className="todo-item">
            <div onClick={() => props.handleTodoComplete(props.todo.id)}>
                {props.todo.isCompleted ? (
                    <span className="todo-item-checked">&#x02713;</span>
                ) : (<span className="todo-item-unchecked" />)}
            </div>

            <div className="todo-item-input-wrapper">
                <input 
                    value={props.todo.text} 
                    onBlur={props.handleTodoBlur} 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}
                />
            </div>

            <div className="item-remove" onClick={() => props.handleTodoRemove(props.todo.id)}>x</div>
        </div>
    )
}