import styles from './chip.module.scss'
import React from "react";

export interface Chip {
  title: String
}

const Chip: React.FC<Chip> =({title}) => {
  return (
    <div className={styles.chip}>
      <h5>{title}</h5>
    </div>
  );
}

export default Chip;
