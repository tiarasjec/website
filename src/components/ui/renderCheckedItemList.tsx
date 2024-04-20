
import { CheckedItem } from "@/lib/interfaces";
const renderCheckedItemsList = (checkedItems: CheckedItem[], category: string) => {
    return (
      checkedItems.length > 0 ? (
        <ul className="grid gap-3">
          {checkedItems.map((item) => (
            <li className="flex items-center justify-between" key={item.key}>
              <span className="text-muted-foreground">{item.name}</span>
              <span>
                {"\u20B9"}
                {item.amount}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground">No {category} events selected</p>
      )
    );
  }

export default renderCheckedItemsList;