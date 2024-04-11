import styles from '../styles.module.css';

function Summary({ selectedTask }: any) {

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className={styles.title}>Task</td>
                        <td className={styles.desc}>{selectedTask.name}</td>
                    </tr>
                    <tr>
                        <td className={styles.title}>Progress</td>
                        <td className={styles.desc}>{selectedTask.progress} %</td>
                    </tr>
                    <tr>
                        <td className={styles.title}>Start</td>
                        <td className={styles.desc}>{new Date(selectedTask.start).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
                    </tr>
                    <tr>
                        <td className={styles.title}>End</td>
                        <td className={styles.desc}>{new Date(selectedTask.end).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Summary