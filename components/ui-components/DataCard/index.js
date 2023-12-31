import styles from "./style.module.css";
import { FaUserAlt } from "react-icons/fa";

const DataCard = ({
  label = null,
  value = null,
  percentageValue = null,
  Icon = null,
  inverse = null,
}) => {
  return (
    <div
      className={`${styles["data-container"]} ${
        inverse ? styles["inverse"] : ""
      }`}
      style={{ boxShadow: '0 4px 8px rgba(138, 43, 226, 0.1)'}}
    >
      <div className={styles["data-row"]}>
        {label && <p>{label}</p>}
        {Icon && <FaUserAlt />}
      </div>
      <div className={styles["data-row"]}>
        {value && <p className={styles["data-value"]}>{value}</p>}
        {percentageValue && (
          <p className={styles["data-percentage"]}>
            {percentageValue > 0
              ? `+${percentageValue}%`
              : `-${percentageValue}%`}
          </p>
        )}
      </div>
    </div>
  );
};

export default DataCard;
