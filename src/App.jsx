import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
  <div className='h-sceen w-full flex flex-col items-center justify-center p-6 mt-6'>
    <h1 className='text-3xl'>Learning Redus Toolkit</h1>
    <AddTodo />
    <Todos />
  </div>    

  )
}

export default App