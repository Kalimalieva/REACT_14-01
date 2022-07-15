import logo from './logo.svg';
import './App.css';

function AboutUs(props) {
    return (
        <>
            <h1>JavaScript REACT</h1>
            <div>{props.title}</div>
        </>
    )
}


function App() {
    return (
        <div className="App">
            <AboutUs title="HomeWork"/>
        </div>
    );
}

export default App;
