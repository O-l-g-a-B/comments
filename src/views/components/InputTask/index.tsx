import styles from './index.module.scss';

interface InputTaskProps {
    id: string;
    title: string;
}

export const InputTask: React.FC<InputTaskProps> = ({
    title,
}) => {

    return (
        <div className={styles.inputTask}>
           <h3 className={styles.inputTaskTitle}>{title}</h3>
        </div>
    )
}