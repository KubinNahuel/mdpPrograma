export function Card(props){
    return(
        <div className="card">
            <h1>{props.name}</h1>
            <p>{props.id}</p>
            <p>{props.age}</p>
        </div>
    )
}