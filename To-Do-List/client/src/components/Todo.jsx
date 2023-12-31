export default function Todo({
    _id,
    text, 
    isCompleted,
    changestatusHandler
    }) {
    
    const onChangeStatusClick = () => {
        changestatusHandler(_id);
    }
    
    return (
   
            <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
                <td>{text}</td>
                <td>{isCompleted ? 'Completed' : 'Incompleted'}</td>
                <td className="todo-action">
                    <button onClick={onChangeStatusClick} className="btn todo-btn">Change status</button>
                </td>
            </tr>


    )
}