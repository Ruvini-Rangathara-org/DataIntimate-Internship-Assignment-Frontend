import React from "react";
import Sidebar from "@/app/view/sidebar/sidebar";
import SearchBar from "@/app/view/searchbar/searchbar";
import styles from "./dashboard.module.css";
import { FaDownload } from "react-icons/fa";
import CardRow from "@/app/view/cardRow/cardRow";

const Dashboard = () => {
  return (
    <main className={styles.dashboardMain}>
        <Sidebar />
        <div className={'w-[100%]'}>
            <SearchBar />
            <div className={styles.Div}>
                <span className={'text-[40px] text-[gray] ml-8'}>Dashboard</span>

                <div className={styles.reportButton}>
                    <FaDownload className={'w-[11%] h-[11%] mr-4'}/>
                    <span>Generate Report</span>
                </div>
            </div>

            <CardRow />





        </div>
    </main>
  );
};

export default Dashboard;