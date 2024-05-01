import Card from "../shared/Card"
import { FaTimes } from "react-icons/fa";


const Feedbackitem = ({item,handleDelete}) => {

    const handleClick = (id) => {
        handleDelete(id);
    }

    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <div className='text-display'>{item.text}</div>
            <button className="close" onClick={() => handleClick(item.id)}>
                <FaTimes color="red"/>
            </button>
        </Card>
    )
}

export default Feedbackitem