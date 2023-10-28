// packages
import React, { useState } from 'react';

// components
import Test from '../components/Test.tsx';

// styles
import styles from '../css/app.module.css';

export default function App(): React.ReactElement {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.app}>
            <h1 className={styles.mainpage_title}>React TS App</h1>

            <hr className={styles.separator} />

            <p data-testid='counter'>Count: {count}</p>

            <button
                className={styles.increment_btn}
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>

            <Test />

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                cupiditate veniam quos assumenda tempore amet at facere laborum,
                ducimus quis harum perferendis expedita, illum iure nobis iste
                numquam molestias tempora quaerat consectetur, quia libero odit
                nulla nemo! Provident repellendus similique suscipit asperiores
                voluptatibus delectus eos sit sunt vel, blanditiis adipisci?
            </p>
        </div>
    );
}
