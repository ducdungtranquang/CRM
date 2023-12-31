"use client";
import React, { RefCallback, useContext, useEffect, useRef } from "react";
import MessageButtonHeader from "./message";
import WarningBtnHeader from "./warning";
import NotifyButtonHeader from "./notify_icon";
import SettingButtonHeader from "./setting_icon";
import style from "./header.module.css";
import { SidebarContext } from "../context/resizeContext";

export default function Header({ toggleModal }: any) {
  const { isOpen } = useContext<any>(SidebarContext);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      headerRef.current?.classList.add("content_resize");
    } else {
      headerRef.current?.classList.remove("content_resize");
    }
  }, [isOpen]);

  return (
    <div ref={headerRef} className={style.header}>
      <div className={style.main}>
        <div className="mMenu__header">
          <img
            onClick={toggleModal}
            className="icon_menu_nav"
            src="https://crm.timviec365.vn/assets/img/sel.png"
            alt="icon-menu-nav"
          />
        </div>
        {/* Desktop */}
        <div>
          <h3>Trang chủ</h3>
        </div>
        <div className={style.header_btn}>
          <div className={`${style.header_btn_items} ${style.message_btn} btn`}>
            <MessageButtonHeader />
          </div>
          <div className={`${style.header_btn_items} ${style.message_btn} btn`}>
            <WarningBtnHeader />
          </div>
          <div className={`${style.header_btn_items} ${style.message_btn} btn`}>
            <NotifyButtonHeader />
          </div>
          <div className={`${style.header_btn_items} ${style.message_btn} btn`}>
            <SettingButtonHeader />
          </div>
        </div>
      </div>
    </div>
  );
}
