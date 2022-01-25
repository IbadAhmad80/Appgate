import React from "react";
import styles from "./drawer.module.scss";
import { VscCollapseAll } from "react-icons/vsc";
import { BiCollapse } from "react-icons/bi";

const SideDrawer = () => {
  return (
    <div>
      <div className={styles.sidebar_wrapper}>
        <div className={styles.sidebar_items_wrapper}>
          <div className={styles.sidebar_item}>
            <p>appgate</p>
            <span>
              <VscCollapseAll />
            </span>
          </div>
          <div className={styles.sidebar_item}>
            <p>Watch SDP Video</p>
            <span>
              <BiCollapse />
            </span>
          </div>
          <div className={styles.sidebar_item}>
            <p>Use Cases</p>
            <span>
              <VscCollapseAll />
            </span>
          </div>
          <div className={styles.sidebar_item}>
            <p>Zero Bs Challenge</p>
            <span>
              <BiCollapse />
            </span>
          </div>
          <div className={styles.sidebar_item}>
            <p>See Demo Now</p>
            <span>
              <VscCollapseAll />
            </span>
          </div>
          <div className={styles.sidebar_element}>
            <p>Schedule Demo</p>
            <span>
              <BiCollapse />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
