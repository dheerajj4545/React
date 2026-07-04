import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
  <div className="flex justify-center mt-12">
    <form onSubmit={addTodoHandler} className="flex gap-3">
      <input
        type="text"
        className="w-80 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-white py-2 px-3 outline-none"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded"
      >
        Add Todo
      </button>
    </form>
  </div>
)
}

export default AddTodo