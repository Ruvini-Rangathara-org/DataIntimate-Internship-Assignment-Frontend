import React from "react";
import styles from "./cardRow.module.css";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const CardRow = () => {
    return (
        <div className={styles.cardRow}>
            <div className={styles.card}>
                <div className={styles.cardText}>
                    <MdOutlineDashboardCustomize className={'w-[50%] h-[50%] mr-4 mt-4 opacity-[70%]'}/>
                    <div>
                        <h1>Orders</h1>
                        <p>38</p>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardText}>
                    <MdOutlineDashboardCustomize className={'w-[50%] h-[50%] mr-4 mt-4 opacity-[70%]'}/>
                    <div>
                        <h1>Orders</h1>
                        <p>38</p>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardText}>
                    <MdOutlineDashboardCustomize className={'w-[50%] h-[50%] mr-4 mt-4 opacity-[70%]'}/>
                    <div>
                        <h1>Orders</h1>
                        <p>38</p>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardText}>
                    <MdOutlineDashboardCustomize className={'w-[50%] h-[50%] mr-4 mt-4 opacity-[70%]'}/>
                    <div>
                        <h1>Orders</h1>
                        <p>38</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardRow;