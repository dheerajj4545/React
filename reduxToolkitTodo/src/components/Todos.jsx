import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");
    return (
        <>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        {editId === todo.id ? (
                            <input
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="bg-gray-700 text-white px-2 py-1 rounded"
                            />
                        ) : (
                            <div className="text-white">{todo.text}</div>
                        )}
                        <div className="flex gap-2">
                            {editId === todo.id ? (
                                <button
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 rounded"
                                    onClick={() => {
                                        dispatch(updateTodo({
                                            id: todo.id,
                                            text: editText
                                        }))
                                        setEditId(null)
                                    }}
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded"
                                    onClick={() => {
                                        setEditId(todo.id)
                                        setEditText(todo.text)
                                    }}
                                >
                                    Edit
                                </button>
                            )}

                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos