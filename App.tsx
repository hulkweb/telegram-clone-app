import React from 'react'
import reducer, { initialState } from './reducer'
import Root from './Root'
import { StateProvider } from './StateProvider'

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer} >
       <Root/>
    </StateProvider>
  )
}

export default App;
