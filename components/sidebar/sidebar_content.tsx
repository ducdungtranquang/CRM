import { sidebar_button_group } from "../ultis/consntant";
import Link from "next/link";
import style from "./sidebar.module.css";
import { useEffect, useRef } from "react";

export default function SiebarContent({ isOpen, toggleModal }: any) {
  const btnResize = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 1024) {
        btnResize.current?.classList.remove("active_resize");
        btnResize.current?.querySelector("img")?.classList.remove("rotateBtn");
        document?.querySelectorAll(".none")?.forEach((node) => {
          node.classList.remove("none");
        });
      }
    }
  };
  const handleResizeSIdeBar = () => {
    toggleModal(!isOpen);
  };

  useEffect(() => {
    if (!isOpen) {
      btnResize.current?.classList.remove("active_resize");
      btnResize.current?.querySelector("img")?.classList.remove("rotateBtn");
    } else {
      btnResize.current?.classList.add("active_resize");
      btnResize.current?.querySelector("img")?.classList.add("rotateBtn");
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={style.sidebar_content}>
        {sidebar_button_group?.map((items, i) => (
          <li className={style.item_parent} key={i}>
            <Link href={items.link} className={style.item_link}>
              <img src={items.img_link} className={style.img_link} />
              <div className={`${style.title} ${!isOpen ? null : "none"}`}>
                {items.content}
              </div>
            </Link>
          </li>
        ))}
      </div>
      <button
        ref={btnResize as any}
        type="button"
        className={style.btn_zoom}
        onClick={handleResizeSIdeBar}
      >
        <img
          src="https://crm.timviec365.vn/assets/icons/navBarZoom.svg"
          alt="btn"
        />
      </button>
    </>
  );
}
