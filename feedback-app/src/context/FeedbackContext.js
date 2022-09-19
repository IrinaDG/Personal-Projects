import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    
const [feedback, setFeedback] = useState([
{
    id:1,
    text: 'This is feedback 1',
    rating: 10
},
{
    id:2,
    text: 'This is feedback 2',
    rating: 7
},
{
    id:3,
    text: 'This is feedback 3',
    rating: 5
},
{
    id:4,
    text: 'This is feedback 4',
    rating: 8
},
])

const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
})

//Add feedback
const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
}

// Delete Feedback
const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this comment?'))  
        setFeedback(feedback.filter((item) => item.id !==id))
}

// Set item to be updated
const editFeedback = (item) => {
    setFeedbackEdit({
        item,
        edit:true
    })
}

//Update feedback item
const updateFeedback = (id, updItem) =>{
  setFeedback(feedback.map((item)=> item.id === id ? {...item, ...updItem} : item))
}
    
return( 
<FeedbackContext.Provider value = {{
      feedback,
      deleteFeedback,
      addFeedback,
      editFeedback,
      feedbackEdit, 
      updateFeedback
    }}>
        {children}
</FeedbackContext.Provider>
    )
}

export default FeedbackContext