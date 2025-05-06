import React from "react";
import { Wrapper, CatCard } from "../Components";
import ICT from "../assets/Ewaste_Category/ICT_Devices.jpg";
import LA from "../assets/Ewaste_Category/Large_House_Appliances.jpg";
import SA from "../assets/Ewaste_Category/Small_House_Appliances.jpg";
import { useContext } from "react";
import Context from "../context/Context";

const category1 = [
  {
    key: 1,
    name: "Information And Communication Equipment: ICT",
    image: ICT,
    items: [
      "Personal computers",
      "Laptops",
      "Monitors",
      "Keyboards",
      "Printers",
      "TV sets",
      "Smartphones",
      "Tablets",
      "Old Phones",
      "Video cameras",
    ],
  },
  {
    key: 2,
    name: "Large Household Appliances: Large HA",
    image: LA,
    items: [
      "Refrigerators",
      "Freezers",
      "Air conditioners",
      "Washing machines",
      "Clothes dryers",
      "Dish washing machines",
      "Electric stoves",
      "Microwave ovens",
      "Electric heating appliances",
      "Electric radiators",
      "Electric fans",
      "Electric space heaters",
      "Electric hot plates",
      "Electric toasters",
      "Electric coffee machines",
      "Electric fryers",
      "Electric grinders",
      "Electric food processors",
      "Electric knives",
      "Electric can openers",
      "Electric irons",
      "Electric shavers",
      "Electric water heaters",
      "Electric pumps",
      "Electric vacuum cleaners",
      "Electric sewing machines",
      "Electric massagers",
      "Electric lawn mowers",
      "Electric hedge trimmers",
      "Electric edge trimmers",
      "Electric chain saws",
      "Electric snow blowers",
      "Electric leaf blowers",
      "Electric snow shovels",
      "Electric snow plows",
      "Electric snow sweepers",
      "Electric snow throwers",
      "Electric snow melters",
      "Electric snow pushers",
      "Electric snow cutters",
      "Electric snow crushers",
      "Electric snow grinders",
      "Electric snow chippers",
      "Electric snow compactors",
      "Electric snow rollers",
      "Electric snow loaders",
      "Electric snow dozers",
    ],
  },
  {
    key: 3,
    name: "Small Household Appliances: Small HA",
    image: SA,
    items: [
      "Vacuum cleaners",
      "Carpet sweepers",
      "Floor polishers",
      "Kitchen waste disposers",
      "Food grinders",
      "Coffee grinders",
      "Electric knives",
      "Electric can openers",
      "Electric irons",
      "Electric shavers",
      "Electric tooth brushes",
      "Electric hair clippers",
      "Electric hair curlers",
      "Electric hair dryers",
      "Electric massagers",
      "Electric clocks",
      "Electric watches",
      "Electric calculators",
      "Electric scales",
      "Electric sewing machines",
      "Electric lawn mowers",
      "Electric hedge trimmers",
      "Electric edge trimmers",
      "Electric chain saws",
      "Electric snow blowers",
      "Electric leaf blowers",
      "Electric snow shovels",
      "Electric snow plows",
      "Electric snow sweepers",
      "Electric snow throwers",
      "Electric snow melters",
      "Electric snow pushers",
      "Electric snow cutters",
      "Electric snow crushers",
      "Electric snow grinders",
      "Electric snow chippers",
      "Electric snow compactors",
      "Electric snow rollers",
      "Electric snow loaders",
      "Electric snow dozers",
    ],
  },
  {
    key: 4,
    name: "Small Household Appliances: Small HA",
    image: SA,
    items: [
      "Vacuum cleaners",
      "Carpet sweepers",
      "Floor polishers",
      "Kitchen waste disposers",
      "Food grinders",
      "Coffee grinders",
      "Electric knives",
      "Electric can openers",
      "Electric irons",
      "Electric shavers",
      "Electric tooth brushes",
      "Electric hair clippers",
      "Electric hair curlers",
      "Electric hair dryers",
      "Electric massagers",
      "Electric clocks",
      "Electric watches",
      "Electric calculators",
      "Electric scales",
      "Electric sewing machines",
      "Electric lawn mowers",
      "Electric hedge trimmers",
      "Electric edge trimmers",
      "Electric chain saws",
      "Electric snow blowers",
      "Electric leaf blowers",
      "Electric snow shovels",
      "Electric snow plows",
      "Electric snow sweepers",
      "Electric snow throwers",
      "Electric snow melters",
      "Electric snow pushers",
      "Electric snow cutters",
      "Electric snow crushers",
      "Electric snow grinders",
      "Electric snow chippers",
      "Electric snow compactors",
      "Electric snow rollers",
      "Electric snow loaders",
      "Electric snow dozers",
    ],
  },
  {
    key: 5,
    name: "Small Household Appliances: Small HA",
    image: LA,
    items: [
      "Vacuum cleaners",
      "Carpet sweepers",
      "Floor polishers",
      "Kitchen waste disposers",
      "Food grinders",
      "Coffee grinders",
      "Electric knives",
      "Electric can openers",
      "Electric irons",
      "Electric shavers",
      "Electric tooth brushes",
      "Electric hair clippers",
      "Electric hair curlers",
      "Electric hair dryers",
      "Electric massagers",
      "Electric clocks",
      "Electric watches",
      "Electric calculators",
      "Electric scales",
      "Electric sewing machines",
      "Electric lawn mowers",
      "Electric hedge trimmers",
      "Electric edge trimmers",
      "Electric chain saws",
      "Electric snow blowers",
      "Electric leaf blowers",
      "Electric snow shovels",
      "Electric snow plows",
      "Electric snow sweepers",
      "Electric snow throwers",
      "Electric snow melters",
      "Electric snow pushers",
      "Electric snow cutters",
      "Electric snow crushers",
      "Electric snow grinders",
      "Electric snow chippers",
      "Electric snow compactors",
      "Electric snow rollers",
      "Electric snow loaders",
      "Electric snow dozers",
    ],
  },
];

const Explore = () => {
  const { category } = useContext(Context);

  return (
    <Wrapper>
      <h1 className="mt-[5vh] font-montserrat font-bold text-2xl ">
        Select Your Category
      </h1>
      <div className="mt-[10vh] px-[-1vw]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <CatCard 
            name="Small Household Appliances"
            link="/small-appliances"
            cardid="1"
          />
          <CatCard 
            name="ICT Devices"
            link="/market"
            cardid="2"
          />
          <CatCard 
            name="Large Household Appliances"
            link="/large-appliances"
            cardid="3"
          />
          <CatCard 
            name="Accessories"
            link="/accessories"
            cardid="4"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Explore;
