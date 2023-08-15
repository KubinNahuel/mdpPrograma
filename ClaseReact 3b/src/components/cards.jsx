export function Card(props){
    return(
        <div className="card" key={props.key}>
            <h1>{props.title}</h1>
            <p>{props.id}</p>
            <p>{props.body}</p>
        </div>
    )
}