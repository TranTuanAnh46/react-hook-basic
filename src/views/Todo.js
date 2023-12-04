
const Todo = (props) => {

    //prop chỉ đc dùng để truyền dữ liệu từ cha tới con
    const todos = props.myData
    return (
        <div className="todos-container">
            {todos.map(todo => {
                return (
                    <li className="todo-child" key={todo.id}>{todo.title}</li>
                )
            })}

        </div>
    )
}

export default Todo