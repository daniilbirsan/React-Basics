import { useState } from 'react';
import './Modal.css'

const Modal = (props) => {
    const [toDoItem, setToDoItem] = useState('')

    const handleAddItem = () => {
        if (toDoItem.length > 0) {
            props.addListItem(toDoItem)
            setToDoItem('')
        }
    }

    return (
        <div className='modal'>
            <p><strong>Add</strong></p>
            <input value={toDoItem} onChange={(e) => setToDoItem(e.target.value)} type="text" />
            <button onClick={() => handleAddItem()}>Add todo</button>
        </div>
    );
}

export default Modal;
