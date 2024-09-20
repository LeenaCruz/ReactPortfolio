function Projects(props) {
    return(
        <div className="repo-grid">
        {props.repos.map(repo => (
            <div className="repo-card" key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <div
                        className="repo-image"
                        style={{
                            backgroundColor: '#635CA0'
                    }}
                    >
                    <span className="repo-name"> {repo.name} </span>
                    </div>
                </a>
            </div>
        ))}
</div>
    );
}

export default Projects;