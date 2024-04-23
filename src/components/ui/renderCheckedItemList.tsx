import { CheckedItem } from "@/lib/interfaces";
import { useEffect } from "react";


interface Teams{
  name:string;
  event:string;
  id:number;
}

const renderCheckedItemsList = (
  checkedItems: CheckedItem[],
  category: string,
  countOf250: number,
  setTeamCount?: (object: Teams[]) => void
) => {
  useEffect(() => {
    if (setTeamCount) {
      const teamItems = checkedItems.filter((item) => item.team === true);
      console.log(teamItems);
      // const teams = {name:teamItems.name,team:teamItems.team};
      const listOfteams = teamItems.map((item, index) => ({
        id: index,
        name: "",
        event:item.name
      }));
      console.log(listOfteams);
      setTeamCount(listOfteams);
    }
  }, [checkedItems,setTeamCount]);
  return checkedItems.length > 0 ? (
    <ul className="grid gap-3">
      {checkedItems.map((item, index) => {
        return (
          item.amount !== 250 && (
            <li className="flex items-center justify-between" key={item.key}>
              <span className="text-muted-foreground">{item.name}</span>
              <span>
                {"\u20B9"}
                {item.amount}
                {item.team? "/team":"/person"}
              </span>
            </li>
          )
        );
      })}
    </ul>
  ) : (
    <p className="text-muted-foreground">No {category} events selected</p>
  );
};

export default renderCheckedItemsList;
