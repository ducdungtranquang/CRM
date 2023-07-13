import TableData from "../table/table";
import PotentialInputGroup from "./potential_input_group";
import styleHome from "../home/home.module.css"

export default function Potential() {
  return (
    <div className={styleHome.main}>
      <PotentialInputGroup />
      <TableData />
    </div>
  );
}
