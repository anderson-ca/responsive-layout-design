import React from 'react';

const Example = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li className={`${styles.flex2}`}>2  Lorem ipsum dolor sit amet.</li>
                <li>3</li>
                <li>4 Lorem ipsum dolor sit amet.</li>
                <li className={`${styles.flex2}`}>5</li>
                <li>6</li>
            </ul>
        </div>
    );
};

export default Example;
