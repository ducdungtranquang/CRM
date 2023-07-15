import styles from "../potential.module.css";

export default function FooterStep({currentStep,setCurrentStep}: any) {
  return (
    <div className={styles.main__footer}>
      <button type="button">Hủy</button>
      <button type="button">Quay lại</button>
      <button className={`${styles.save} ${styles.submit_step2}`} type="button">
        Tiếp theo
      </button>
    </div>
  );
}
