const Part = (props) => {
    return(
        <li>
            <p>{props.value.id}: {props.value.name}, {props.value.exercises}</p>   
        </li>
    )
}

export default Part