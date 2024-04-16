"use client";
import React, { useState } from "react";

interface Event {
  name: string;
  key: string;
  amount: number;
}

interface CheckedItem extends Event {
  checked: boolean;
}

interface CheckboxProps {
  className: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  value,
  checked,
  onChange,
}) => {
  return (
    <input
      type="checkbox"
      className={className}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};

const events: Event[] = [
  { name: "SyncLine Sprint", key: "syncLineSprint", amount: 30 },
  { name: "DirtDash RC", key: "dirtDashRC", amount: 330 },
  { name: "BlitzBot Soccer", key: "blitzBotSoccer", amount: 220 },
  { name: "RoboClash", key: "roboClash", amount: 220 },
  { name: "ONE PIECE", key: "onePiece", amount: 330 },
  { name: "ZenFlow", key: "zenFlow", amount: 220 },
  { name: "TYPING TITANS", key: "typingTitans", amount: 110 },
  { name: "HYDROBLAST", key: "hydroBlast", amount: 340 },
  { name: "Drone Clash", key: "droneClash", amount: 110 },
  { name: "BUSINESS BAY", key: "businessBay", amount: 1120 },
  { name: "BLACK MIRROR", key: "blackMirror", amount: 220 },
  { name: "CADventures", key: "cadventures", amount: 10 },
];

const Register: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<CheckedItem[]>([]);
  const [amount, setAmount] = useState<number>(0);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      const selectedEvent = events.find((event) => event.key === key);
      if (selectedEvent) {
        setCheckedItems([...checkedItems, { ...selectedEvent, checked: true }]);
      }
    } else {
      setCheckedItems(checkedItems.filter((item) => item.key !== key));
    }
  };

  const sumOfCheckedItemsAmount = checkedItems.reduce(
    (acc, item) => (item.checked ? acc + item.amount : acc),
    0
  );

  return (
    <div className="flex">
      <div className="w-1/3 border rounded-sm border-gray-600">
        {events.map((event) => (
          <div
            key={event.key}
            className="flex justify-between items-center p-4 mb-2"
          >
            <span className="mr-4">{event.name}</span>
            <Checkbox
              className="w-4 h-4"
              value={event.key}
              checked={checkedItems.some((item) => item.key === event.key)}
              onChange={handleCheckboxChange}
            />
          </div>
        ))}
      </div>
      <div className="w-1/3 border rounded-sm border-gray-600">
        {checkedItems.map((item) => (
          <div
            className="flex justify-between items-center p-4 mb-2"
            key={item.key}
          >
            <p>{item.name}</p>
            <p>{item.amount}</p>
          </div>
        ))}
        <div className="absolute bottom-2">
          Total amount: {sumOfCheckedItemsAmount}
        </div>
      </div>
    </div>
  );
};

export default Register;
