import Card from "./shared/Card"
import Button from "./shared/Button"
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
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
