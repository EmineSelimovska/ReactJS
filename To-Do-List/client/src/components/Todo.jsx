export default function Todo({text, isCompleted}) {
    return (
   
            <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
                <td>{text}</td>
                <td>{isCompleted ? 'Completed' : 'Incompleted'}</td>
                <td className="todo-action">
                    <button className="btn todo-btn">Change status</button>
                </td>
            </tr>


    )
}