import { CheckedItem } from "@/lib/interfaces";
import { useEffect } from "react";

const renderCheckedItemsList = (
  checkedItems: CheckedItem[],
  category: string,
  countOf250: number
) => {
  return checkedItems.length > 0 ? (
    <ul className="grid gap-3">
      {checkedItems.map((item, index) => {
        return (
          <li className="flex items-center justify-between" key={item.key}>
            <span className="text-muted-foreground">{item.name}</span>
            {item.amount === 250 ? (
              index % 4 === 0 ? (
                `${Math.floor(countOf250 / 4) + 1}x 250`
              ) : (
                ""
              )
            ) : (
              <span>
                {"\u20B9"}
                {item.amount}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  ) : (
    <p className="text-muted-foreground">No {category} events selected</p>
  );
};

export default renderCheckedItemsList;
