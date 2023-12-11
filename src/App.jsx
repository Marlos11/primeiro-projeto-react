import { v4 } from 'uuid'
import { useState } from 'react'
import { Conteiner, SecundaryContainer, InputTask, AddButton, ListeItem } from '../styles'
import { IoIosRocket } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";


function App() {

  const [myTaskList, setMyTaskList] = useState([{ id: v4(), task: 'nada' , finished:true}])
  const [addTask, setAddTask] = useState('')




  const inputChange = (event) => {
    setAddTask(event.target.value)
  }
  const btnAddTask = () => {
    setMyTaskList([...myTaskList, { id: v4(), task: addTask, finished:false}])
  }
  return (
    <Conteiner>
      <SecundaryContainer >
        <InputTask onChange={inputChange} placeholder="Digite sua tarefa ..." />
        <AddButton onClick={btnAddTask}>Adcionar tarefa </AddButton>

        <ul>


          {myTaskList.map(item => (
            <>
            <ListeItem  isFinished={item.finished}>
              <IoIosRocket />
              <li key={item.id}>{item.task} {item.finished}</li>
              <FaRegTrashAlt />
            </ListeItem>
            </>
          ))}



        </ul>
      </SecundaryContainer>
    </Conteiner>
  )
}

export default App
