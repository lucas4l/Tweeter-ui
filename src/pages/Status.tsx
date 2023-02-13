import { FormEvent, KeyboardEvent, useState } from 'react'

import './Status.css'

import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import { PaperPlaneRight } from 'phosphor-react'


export function Status(){
  const [newAnswers, setNewAnswers] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido',
    'Parabens pelo progresso'
  ])

  function createNewAnswers(event: FormEvent){
    event.preventDefault()

    setAnswers([newAnswers, ...answers])
    setNewAnswers('')
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswers, ...answers])
      setNewAnswers('')
    }
  }
  
  return(
    <main className='status'>
      <Header title='Tweet'/>

      <Tweet content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quae veniam ut eveniet, vitae quidem, eius modi sunt nemo saepe itaque a ex provident hic, esse earum totam delectus laboriosam.' />

      <Separator /> 

      <form onSubmit={createNewAnswers} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/lucas4l.png" alt="lucas Barbosa" />
          <textarea 
            id= "tweet" 
            placeholder="Tweet your answer"
            value={newAnswers}
            onKeyDown={handleHotKeySubmit} 
            onChange={(event) => {
              setNewAnswers(event.target.value)
            }}
          />
        </label>
        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>  
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}

    </main>
  )
}