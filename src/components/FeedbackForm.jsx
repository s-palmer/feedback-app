import Card from "./shared/Card"
import { useState } from 'react'

function FeedbackForm() {
  const [text, setText] = useState('')
  
  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <Card>
      <form >
        <h2>How would you rate our services?</h2>
        {/* @todo - ratings select component */}
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
