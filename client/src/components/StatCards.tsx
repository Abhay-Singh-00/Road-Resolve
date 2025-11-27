import React from "react";

interface CardInfo {
  title: string;
  value: string | number;
  color?: "blue" | "green" | "amber";
}

interface StatCardsProps {
  cards: CardInfo[];
}

const StatCards: React.FC<StatCardsProps> = ({ cards }) => {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-400 hover:bg-blue-500 border-blue-600",
    green: "bg-green-400 hover:bg-green-500 border-green-600",
    amber: "bg-amber-400 hover:bg-amber-500 border-amber-600",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`shadow rounded-lg p-6 border-s-4 text-white ${colorMap[card.color || "blue"]}`}
        >
          <div className="text-2xl font-bold">{card.value}</div>
          <div className="text-sm opacity-80">{card.title}</div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
