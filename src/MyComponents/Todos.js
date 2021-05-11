import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className="container">
            <h2 className="">Todos list</h2>
            {props.todos.length === 0 ? "No todos to display" :

                props.todos.map((todo) => {
                    return (
                        <>
                            <TodoItem className="my-3" key={todo.sno} todo={todo} onDelete={props.onDelete} />
                            <hr />
                        </>
                    )
                })


            }


        </div>
    )
}
