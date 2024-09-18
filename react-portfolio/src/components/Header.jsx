import Nav from './Navbar';

export default function Header() {
    // const linkStyle = {border: '1px black', padding: '5px'};
    return (
        <>
        <header className='header'> 
        <div className='header-content'> 
            <h1>Leena Cruz</h1>
        <Nav />
        </div>
        </header>
        </>
    );
}