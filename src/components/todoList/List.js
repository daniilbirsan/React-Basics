import './List.css'

const List = (props) => {
    return ( 
        <div className="single-list-element">
            <p>{props.toDoItem.singleElement}</p>
            <button onClick={() => props.deleteListItem(props.toDoItem.index)}><strong>Delete</strong></button>
        </div>
    );
}
 
export default List;