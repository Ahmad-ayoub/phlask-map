import styles from './HalfModalInfo.module.scss';
import React from 'react';
import { Button } from '@mui/material';
import directionButton from '../images/ArrowElbowUpRight.svg'

function HalfModalInfo(props) {

  const {nameOfPlace, addressOfPlace, imageOfPlace, estWalkTime, iconSrc } = props;

  const btnstyle =  {
      padding: '6px 20px 6px 25px',
      margin: '10px 0',
      fontSize: 16,
      borderRadius: '8px',
      textTransform: 'none',
      backgroundColor: '#00A5EE',
  }

  const RightArrow = () => {
    return <img src={directionButton} alt='' />
  }

  return (
    <div className={styles.halfInfo}>
        <span className={styles.swipeIcon}></span>
        <img src={imageOfPlace} className={styles.locationImage}  alt='' />
        <div className={styles.mainHalfInfo}>
          { iconSrc && <img src={iconSrc} alt='' /> }
            <div className={styles.mainHalfInfoText}>
                <h2 className={styles.nameOfPlace}>{nameOfPlace}</h2>
                <p className={styles.addressOfPlace}>{addressOfPlace}</p>
                {/* <p><span className={styles.locationOpen}>Open</span> - Closes 10PM</p> */}
                {props.children}
                <Button variant="contained" disableElevation sx={btnstyle} startIcon={<RightArrow />}>
                  Directions</Button>
                <p className={styles.estWalkTime}>Est. walking time: <span className={styles.walkTime}>{estWalkTime}min</span></p>
            </div>
        </div>
    </div>
  );
}

export default HalfModalInfo;
