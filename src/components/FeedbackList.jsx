import Feedbackitem from "./Feedbackitem"



const FeedbackList = ({feedback,handleDelete}) => {
   
 
  return (
    <>
     {feedback.map((item) => (
        <Feedbackitem key={item.id} item={item} handleDelete={handleDelete}/>
     ))}
    </>
  )
}

export default FeedbackList