
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import { useState } from "react"

const App = () => {

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Hello this is a sample 1",
      rating: 2
    },
    {
      id: 2,
      text: "Hello this is a sample 2",
      rating: 3
    },
    {
      id: 3,
      text: "Hello this is a sample 3",
      rating: 1
    }
  ]);

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id))
  } 

  return (
    <>
      <Header text="Feedback App" bgColor="#cecece" />

      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>

    </>
  )
}

export default App