import TableDataPotential from "../table/table-potential";
import PotentialInputGroup from "./potential_input_group";
import styleHome from "../home/home.module.css";
import { SidebarContext } from "../context/resizeContext";
import { useContext, useEffect, useRef } from "react";

export default function Potential() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);

  useEffect(() => {
    if (isOpen) {
      mainRef.current?.classList.add("content_resize");
    } else {
      mainRef.current?.classList.remove("content_resize");
    }
  }, [isOpen]);
  return (
    <div ref={mainRef} className={styleHome.main}>
      <PotentialInputGroup />
      <TableDataPotential />
    </div>
  );
}
