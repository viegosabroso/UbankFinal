import React from 'react';
import './Motivation.css';

const Motivation: React.FC = () => (
    <div className="motivation-card">
        <h2>
            You are doing <span className="highlight">amazing!!</span>
        </h2>
        <p>Keep going to reduce your minor expenses</p>
        <div className="image-placeholder">
            <img src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FPig.png?alt=media&token=638e9e45-609a-4ca3-8855-4aa84c1483b4" alt="" height={210}/>
        </div>
    </div>
);

export default Motivation;
