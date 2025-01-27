import React from 'react';
import ReactDOM from 'react-dom/client';



const Header = () => {
    return (
        <div className='header'>

        </div>
    )
}
const App = () => {
    return (    
        <div className='app-container'>
            <Header/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);