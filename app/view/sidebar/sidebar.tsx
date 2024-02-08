import React from "react";
import styles from "./sideBar.module.css"
import { AiOutlineSmile } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { RiPagesLine } from "react-icons/ri";
import { IoBarChartSharp } from "react-icons/io5";
import { RiTableLine } from "react-icons/ri";
import { IoKeyOutline } from "react-icons/io5";


const Sidebar = () => {
  return (
      <div className={styles.main}>
        <div className={styles.mainDiv}>

          <div className={'flex'}>
              <AiOutlineSmile className={'w-[15%] h-[15%] mr-4'}/>
              <h1 className={'text-[22px]'} style={{fontWeight: 'bold'}}>Frontend</h1>
          </div>

          <hr className={styles.sideBarHr}/>

          <div className={'flex'}>
              <AiOutlineDashboard className={'w-[11%] h-[11%] mr-4'}/>
              <h1 className={'text-[16px]'}>Dashboard</h1>
          </div>

          <hr className={styles.sideBarHr}/>
          <p className={styles.sideBarTopics}>INTERFACE</p>

          <div className={styles.sideBarButton}>
              <CiSettings className={'w-[10%] h-[10%] mr-2 opacity-[50%]'}/>
              <button>Components</button>
          </div>

          <div className={styles.sideBarButton}>
              <IoKeyOutline className={'w-[10%] h-[10%] mr-2 opacity-[50%]'}/>
              <button>Utilities</button>
          </div>

          <hr className={styles.sideBarHr}/>

          <p className={styles.sideBarTopics}>ADDONS</p>

          <div className={styles.sideBarButton}>
              <RiPagesLine className={'w-[10%] h-[10%] mr-2 opacity-[50%]'}/>
              <button>Pages</button>
          </div>

          <div className={styles.sideBarButton}>
              <IoBarChartSharp className={'w-[10%] h-[10%] mr-2 opacity-[50%]'}/>
              <button>Charts</button>
          </div>

          <div className={styles.sideBarButton}>
              <RiTableLine className={'w-[10%] h-[10%] mr-2 opacity-[50%]'}/>
              <button>Tables</button>
          </div>

          <hr className={styles.sideBarHr}/>

          <div className={'w-[100%]'}>
              <button className={styles.sideBarEndBtn}> </button>
          </div>

      </div>
      </div>
  );
};

export default Sidebar;