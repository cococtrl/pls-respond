import React from 'react';
import styles from './Home.module.css';

const Home = (props) => {
    return (
        <main className={styles.home}>
            <h1>Public Events:</h1>
            {
                props.featuredEvents.map(({title, description, _id}) => (
                 <section key={_id}>
                     <h1>{title}</h1>
                     <p>{description}</p>
                 </section>   
                ))
            }
        </main>
    );
};

export default Home;