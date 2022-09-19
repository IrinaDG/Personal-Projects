import React from 'react'
import {useState} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    
   /*  const handleClick = () => {
        setRating((prev) => {
            return prev+1
        })
    } */

  return (
    <Card>
        <div className="num-display">
         {item.rating} 
        </div>
        <button className='close' onClick={() => deleteFeedback(item.id)}>
            <FaTimes color = 'purple' />
        </button>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color= 'purple' />
        </button>
        <div className="text-display">
            {item.text}
        </div>
        {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
  }


export default FeedbackItem