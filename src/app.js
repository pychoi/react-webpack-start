import { render } from 'react-dom'
import React from 'react'
import './styles.css'

import Greeting from './components/greeting'
import Todo from './components/todo'

var root = document.getElementById('react-root')

render(
  <div>
    <Greeting name="Raven"/>
    <Todo name=""/>
  </div>,
  root
)
