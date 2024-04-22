import { CheckedItem } from "@/lib/interfaces";
import { useEffect } from "react";

const renderCheckedItemsList = (
  checkedItems: CheckedItem[],
  category: string,
  countOf250: number,
  setTeamCount?: (count: number) => void
) => {
  useEffect(() => {
    if (setTeamCount) {
      const teamItems = checkedItems.filter((item) => item.team === true);
      const count = teamItems.length;
      setTeamCount(count);
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
