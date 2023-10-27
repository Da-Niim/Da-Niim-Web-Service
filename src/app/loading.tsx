import React from "react"
import styles from "./Loading.module.css"

const Loading: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <img src="/direct-flight 3.png" alt="air" className={styles.airImage} />
      <img src="/direct-flight 2.png" alt="point" className={styles.pointImage} />
    </div>
  )
}

export default Loading
