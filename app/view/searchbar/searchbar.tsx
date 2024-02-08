import React from "react";
import styles from "./searchBar.module.css"
import {RiTableLine} from "react-icons/ri";

const SearchBar = () => {
    return (
        <div className={styles.searchBarTop}>
            <input type="text" placeholder="Search.." className={styles.searchInput}/>


            <div className={'flex justify-center items-center'}>
                <div className={'flex justify-center items-center'}>
                    <RiTableLine className={'w-[10%] h-[10%] mr-2 opacity-[50%] mr-6'}/>
                    <RiTableLine className={'w-[10%] h-[10%] mr-2 opacity-[50%] mr-10'}/>

                    <span className={'text-[gray] w-[180px] '}>Ms. Ruvini</span>
                    <div className={'w-[100%]'}>
                        <button className={styles.searchBarEndBtn}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;