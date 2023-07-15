import styles from "./potential.module.css";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import Link from "next/link";
import { dataActionPotential } from "../ultis/consntant";

export default function PotentialAction() {
  const items: MenuProps["items"] = [];
  for (let i = 0; i < dataActionPotential.length; i++) {
    items.push({
      key: i,
      label: (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={dataActionPotential[0].link}
          className="flex-start-btn"
          //   href="https://www.antgroup.com"
        >
          <i className={dataActionPotential[i].img}></i>
          {dataActionPotential[i].name}
        </Link>
      ),
    });
  }
  return (
    <div className={styles.div__thaotac}>
      <div>
        <label>Đã chọn:</label>
        <b className={styles.checked_count}>0</b>
      </div>
      <Dropdown
        menu={{ items }}
        placement="bottomLeft"
        disabled={false}
        className={"opacity"}
      >
        <button className={styles.button_thaotac}>
          <img src="https://crm.timviec365.vn/assets/icons/bacham_xanh.svg" />
          Thao tác
        </button>
      </Dropdown>
    </div>
  );
}
