import Part from "./Part"

const Content = (props) => {
    const parts = props.parts
    return(
        <ul>
            {parts.map((value, index) =>{
                return <Part key={index} value={value}/>
            })}
        </ul>
    )
}

export default Content