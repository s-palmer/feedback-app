import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 7
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 2
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 10
    }
  ])

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true
    })
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
  }}
  >
    {children}
  </FeedbackContext.Provider> 
}

export default FeedbackContext