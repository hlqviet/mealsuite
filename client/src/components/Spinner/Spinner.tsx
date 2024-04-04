import styles from './Spinner.module.css';

const Spinner = () => {
  return <span className={styles['spinner']} role="progressbar" />;
};

export default Spinner;
