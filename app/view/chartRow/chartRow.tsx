import React from "react";
import styles from "./chartRow.module.css";

const ChartRow = () => {
    return (
        <>
            <div className={styles.chartRow}>
                <div className={styles.chartCard}>
                    <h1 className={styles.chartTopic}>Chart 01</h1>
                </div>

                <div className={styles.chartCard}>
                    <h1 className={styles.chartTopic}>Chart 02</h1>
                </div>

            </div>

            <br/>
{/*==========================================================================================*/}

            <div className={styles.chartRow}>
                <div className={styles.chartCard}>
                    <h1 className={styles.chartTopic}>Chart 01</h1>

                    <div className={styles.chartBody}>
                        <div className={'flex flex-col w-[100%]'}>
                            <p className={'text-[gray]'}>Progress Bar 01</p>
                            <div className={styles.progressBar}></div>
                            <p className={'text-[gray]'}>Progress Bar 02</p>
                            <div className={styles.progressBar}></div>
                            <p className={'text-[gray]'}>Progress Bar 03</p>
                            <div className={styles.progressBar}></div>
                            <p className={'text-[gray]'}>Progress Bar 04</p>
                            <div className={styles.progressBar}></div>
                        </div>
                    </div>

                </div>

                <div className={styles.chartCard}>
                    <h1 className={styles.chartTopic}>Chart 02</h1>
                    <div className={styles.chartBody}>
                        <img src={'public/asset/1.png'} alt={'sample image'} className={'w-32 h-32'}/>
                        <p className={'text-[14px] text-[gray]'}>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );

}

export default ChartRow;