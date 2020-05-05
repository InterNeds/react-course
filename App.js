import React from 'react';
import ReactDOM from 'react-dom';


function PercentageStat({ label, score = 0, total = Math.max(1, score) }) {
    return (
        <div>
            <h6>{label} </h6>
            <span>{Math.round(score / total * 100)}% </span>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>Female Population</h1>
            <div>
                <PercentageStat label="Class 1" total={360} score={203} />
                <PercentageStat label="Class 2" total={206} />
                <PercentageStat label="Class 3" score={107} />
                <PercentageStat label="Class 4" />
            </div>
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);