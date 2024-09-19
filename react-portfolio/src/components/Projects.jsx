function Projects(props) {
    return(
        <ul className="list-group">
            {props.results.map((result) => (
                <li className="list-group-item" key= {result.id}>
                    <p>{result.name}</p>
                </li>
            ))}
        </ul>
    );
}

export default Projects;