import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import styles from '@/styles/Alert.module.scss';

const CustomAlert = (props) => {
  const {
    children,
    textColor = '#333',
    backgroundColor = 'aquamarine',
    textAlign,
    margin,
    padding,
    border = '1px solid #333',
    borderRadius = '10px',
    closeIconColor,
    height = 'auto',
    clickHandler = () => null,
  } = props;

  return (
    <div
      style={{
        color: textColor,
        backgroundColor: backgroundColor,
        textAlign: textAlign,
        margin: margin,
        padding: padding,
        border: border,
        borderRadius: borderRadius,
        height: height,
      }}
      className={`${styles.alertContainer}`}
    >
      <div className={`${styles.childrenSection} `}>
        <div className={styles.left}>{children}</div>
      </div>

      <div className={`${styles.childrenSection}`}>
        <div className={styles.right}>
          <RiCloseLine
            onClick={clickHandler}
            style={{ color: closeIconColor }}
            className={styles.closeIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
