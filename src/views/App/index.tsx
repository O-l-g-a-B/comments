import React from 'react';

import { useToDoStore } from '../../data/stores/useToDoStore';
import { InputPlus } from '../components/InputPlus';
import { InputTask } from '../components/InputTask';


import styles from './index.module.scss'

export const App: React.FC = () => {
    const [
        tasks,
        createTask
    ] = useToDoStore(state => [
        state.tasks,
        state.createTask
    ]);

    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>Сomments</h1>
            <section className={styles.articleSection}>
                {!tasks.length && (
                    <p className={styles.articleText}>There is no one comment.</p>
                )}
                {tasks.map((task) => (
                    <InputTask
                        key={task.id}
                        id={task.id}
                        title={task.title}
                    />
                ))}
            </section>
            <section className={styles.articleSection}>
                <InputPlus
                    onAdd={(title) => {
                        if (title) {
                            createTask(title)
                        }
                    }}
                />
            </section>
        </article>
    );
}