import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import {useState} from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import {v4 as uuidv4} from 'uuid'
import About from './pages/About'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutIcon from './components/AboutIcon'

function App(){

  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this comment?'))  
    setFeedback(feedback.filter((item) => item.id !==id))
  }

  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
    setFeedback([newFeedback,...feedback])
  }

    
  return(
    <Router>
    <Header />
      <div className = "container">
        <Routes>
        <Route exact path='/' element={ <>
          <FeedbackForm handleAdd={addFeedback}/>
          <FeedbackStats feedback ={feedback} />
        <FeedbackList feedback={feedback} handleDelete= {deleteFeedback} />
        </>
        }>

        </Route>
        <Route path='/about' element={<About />} />

       </Routes>
       <AboutIcon />
      </div>
    </Router>
    )

}



export default App