import styles from './GradientBackground.module.css'
export default function GradientBackground({children}) {
    return (
        <div className={styles.background}>
            {children}
        </div>
    )
}