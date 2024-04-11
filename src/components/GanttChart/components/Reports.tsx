import styles from '../styles.module.css';
import { CheckCircleTwoTone, ExclamationCircleTwoTone, RightOutlined } from '@ant-design/icons';

function Reports({ selectedTask }: any) {

    return (
        <div className={styles.Reports}>

            <div className={styles.top}>
                <div className={styles.card}>
                    <div className={styles.start}>
                        <h2><CheckCircleTwoTone twoToneColor={"#84dd94"} /> {selectedTask.name}</h2>
                        <h3>Progress - {selectedTask.progress} %</h3>
                    </div>
                    <div className={styles.end}>
                        <RightOutlined />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.start}>
                        <h2><CheckCircleTwoTone twoToneColor={"#84dd94"} /> Test data 1</h2>
                        <h3>Progress - {selectedTask.progress} %</h3>
                    </div>
                    <div className={styles.end}>
                        <RightOutlined />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.start}>
                        <h2><ExclamationCircleTwoTone twoToneColor={"red"} /> Test data 2</h2>
                        <h3>Delay - Owner</h3>
                    </div>
                    <div className={styles.end}>
                        <RightOutlined />
                    </div>
                </div>
            </div>

            <div className={styles.btn}>
                Add Report
            </div>

        </div>
    )
}

export default Reports