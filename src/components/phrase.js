import styles from './Phrase.module.css'

function Phrase() {

    return (
      <div className={styles.fraseContainer}>
        <p className={styles.fraseContent}>
          Este componente é apenas uma frase!
        </p>
      </div>
    );
}

export default Phrase
