import { v4 as uuidv4 } from "uuid";
const KoderListItem = ({ kodersList, myProp1 }) => {
  /*
  props = {
    kodersList: ["Dámaris", "Robert", "Manu U-24", "Manu U-25"]
  }
  */
  return kodersList.map((item, index) => {
    const uuid = uuidv4();
    console.log(uuid);
    return (
      <li>
        {item} {uuid}
      </li>
    );
  });
};

export default KoderListItem;
