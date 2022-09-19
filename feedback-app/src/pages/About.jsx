import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function About() {
  return (
    <Card>
      <h1>About this project</h1>
      <p>This project is a React App created with the functionalities of a feedback page. It can be used for any kind of product or service. The user can select the rating on a scale from 1 to 10, then leave a message as well as, see the average rating of the product, the number of ratings and the content of the other ratings. </p>

      <p>
        <Link to='/'>Back to Home</Link>
      </p>
    </Card>
  )
}

export default About