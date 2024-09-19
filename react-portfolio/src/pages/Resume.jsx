export default function Resume() {
    return (
        <div className="resume">
            <h1> Resume </h1>
            <p>Download my <a href="/assets/CVLeena.pdf" download>Resume </a></p>
            <h4> Front End</h4>
            <ul className="resume-list">
                <li>HTML</li>
                <li>CSS</li>
                <li> Javascript</li>
                <li> React </li>
            </ul>
            <h4>Back End</h4>
            <ul className="resume-list">
                <li>Node</li>
                <li>Express</li>
                <li> MongoDB</li>
                <li>MySQL</li>
            </ul>
        </div>
    )
}