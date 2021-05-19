import ToDo from './ToDo'

const List = (props) => {

  console.log(props);

  const mappedToDo = props.todolist.map((todo, i) => {
    return <ToDo todo={todo} key={i} />
  });

  return (
    <div>{mappedToDo}</div>
  )
} 

export default List;