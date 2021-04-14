import Content from "./Content"
import Header from "./Header"

const Course = (props) => {
    const parts = props.course.parts
    const total = parts.reduce((s, {exercises}) => s + exercises,0 )
    return (
        <div>
            <Header titulo={props.course.name}/>
            <Content parts={props.course.parts}/>
            <p>Total de los Exercises: {total}</p>
        </div>
    )
}

export default Course