import { Link } from "react-router-dom";
import Menu from "../../../../components/menu";
import { useState } from "react";
import menu_items from "./config";
import PropFirmCard from "../../../../components/cards/propfirmCard";
import Logo from "../../../../assets/images/logo.jpg";

const PropFirms = () => {
  const [filter, setFilter] = useState(null);

  const cards = [
    {
      title: "FTMO",
      subtitle:
        "Unlock a world of possibilities within the expanding ecosystem.",
      logo: Logo,
    },
    {
      title: "FTMO",
      subtitle:
      "Unlock a world of possibilities within the expanding ecosystem.",
      logo: Logo,
    },
  ];

  return (
    <section className="space-y-6">
      <Menu items={menu_items} setSelectedItem={setFilter} />
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-3xl sm:text-5xl font-bold">Propfirms</h1>
        <Link
          to={"/contact"}
          className="text-primary font-semibold hover:underline"
        >
          See all {">"}
        </Link>
      </div>
      {
        <div className="flex flex-col">
          {cards.map((card, index) => (
            <PropFirmCard key={index} title={card.title} subtitle={card.subtitle} logo={card.logo} />
          ))}
        </div>
      }
    </section>
  );
};

export default PropFirms;
