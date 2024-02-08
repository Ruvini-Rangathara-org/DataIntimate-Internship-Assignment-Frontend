import React from "react";
import styles from "./chartRow.module.css";
import DoughnutChart from "@/app/component/DougnutChart";
import LineChart from "@/app/component/LineChart";

const ChartRow = () => {
    return (
        <>
            <div className={styles.chartRow}>

                <div className={styles.chartCard}>
                    <h1 className={styles.chartTopic}>Chart 01</h1>
                    <LineChart/>
                </div>

                <div className={styles.chartCard}>
                    <h1 className={styles.chartTopic}>Section 02</h1>
                    <div className={styles.chartBody}>
                        <div className={styles.bgImage}/>
                        {/*<img src={'https://static.ditdot.hr/images/info/ux-ui/ux-ui-00.png'} alt={'sample image'} className={'w-[100%] h-[50%]'}/>*/}
                        <p className={'text-[14px] text-[gray]'}>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

            </div>
            <br/>
            <div className={styles.chartRow}>
                <div className={styles.chartCard}>
                    <h1 className={styles.chartTopic}>Progress Bar</h1>

                    <div className={styles.chartBody}>
                        <p className={'text-[gray] w-[100%] pl-6'} style={{textAlign: 'left'}}>Progress Bar 01</p>
                        <progress className="progress progress-success w-[90%]" value="5" max="100"></progress>
                        <p className={'text-[gray] w-[100%] pl-6 mt-4'} style={{textAlign: 'left'}}>Progress Bar 02</p>
                        <progress className="progress progress-success w-[90%]" value="10" max="100"></progress>
                        <p className={'text-[gray] w-[100%] pl-6 mt-4'} style={{textAlign: 'left'}}>Progress Bar 03</p>
                        <progress className="progress progress-success w-[90%]" value="40" max="100"></progress>
                        <p className={'text-[gray] w-[100%] pl-6 mt-4'} style={{textAlign: 'left'}}>Progress Bar 04</p>
                        <progress className="progress progress-success w-[90%]" value="70" max="100"></progress>
                        <p className={'text-[gray] w-[100%] pl-6 mt-4'} style={{textAlign: 'left'}}>Progress Bar 05 </p>
                        <progress className="progress progress-success w-[90%]" value="100" max="100"></progress>

                    </div>

                </div>
                <div className={styles.chartCard}>
                    <h1 className={styles.chartTopic}>Chart 02</h1>
                    <DoughnutChart/>
                </div>


            </div>
            <br/>
            <div className={styles.chartRow}>

                <div className={styles.chartCard} style={{backgroundColor:"transparent", boxShadow:"none"}}>
                    <div className={styles.buttonGrid}>
                        <button style={{backgroundColor:"#4e73df"}}>Button 1</button>
                        <button style={{backgroundColor:"#1cc88a"}}>Button 2</button>
                        <button style={{backgroundColor:"#36b9cc"}}>Button 3</button>
                        <button style={{backgroundColor:"#f6c23e"}}>Button 4</button>
                        <button style={{backgroundColor:"#e74a3b"}}>Button 5</button>
                        <button style={{backgroundColor:"#858796"}}>Button 6</button>
                        <button style={{backgroundColor:"#9a00d6"}}>Button 7</button>
                        <button style={{backgroundColor:"#5a5c69"}}>Button 8</button>
                    </div>

                </div>

                <div className={styles.chartCard}>
                    <h1 className={styles.chartTopic}>Development Approach</h1>
                    <div className={styles.chartBody}>
                        <p className={'text-[14px] text-[gray]'}>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <br/>

                        <p className={'text-[14px] text-[gray]'}>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <br/>
                    </div>
                </div>

            </div>

        </>
    );

}

export default ChartRow;