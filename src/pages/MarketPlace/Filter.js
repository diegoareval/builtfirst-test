import { useState } from "react";
import CardPrimary from "../../components/CardPrimary";
const Filter = ({ filter, onChangeFilter }) => {
  const [recommendOptions] = useState([
    { id: 1, name: "A-Z" },
    { id: 2, name: "Z-A" },
    { id: 3, name: "Geatest-Savings" }
  ]);

  const [sellerOptions] = useState([
    { id: 1, name: "Bednar Reiger" },
    { id: 2, name: "Bear and sons" },
    { id: 3, name: "Beier and sons" },
    { id: 4, name: "beier-leches" },
    { id: 5, name: "Descents" }
  ]);



  /**
   * It takes in an itemSize and returns a boolean value based on whether or not the itemSize exists in
   * the filter.menSizes array
   * @param itemSize - the size of the item that is being added to the list
   */
  const addSizeToList = (itemSize, key = "menSizes") => {
    try {
      const existItem = Boolean(
        filter[key].find(({ id }) => itemSize?.id === id)
      );

      if (existItem) {
        onChangeFilter({
          [key]: filter[key].filter(({ id }) => itemSize?.id !== id),
        });
      } else {
        onChangeFilter({
          [key]: [...filter[key], itemSize],
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isSiseIsSelected = (itemSize, array) => {
    if (array?.length > 0) {
      return Boolean(array.find(({ id }) => itemSize?.id === id));
    }
    return false;
  };

  return (
    <div>
      {/* recommend */}
      <div className="mt-9">Recommend Options</div>
      <div className="h-60 overflow-y-auto flex flex-col gap-5 mt-3">
        {recommendOptions.map((item, index) => (
          <div
            onClick={() => addSizeToList(item, "models")}
            className="text-lg opacity-50 hover:opacity-75 flex gap-2 items-center cursor-pointer"
            key={index}
          >
            <CardPrimary
              onClick={() => addSizeToList(item, "models")}
              className="h-[20px] w-[20px] rounded-[5px]"
              borderActive={isSiseIsSelected(item, filter?.models)}
              key={index}
            />
            {item.name}
          </div>
        ))}
      </div>

        {/* seller */}
        <div className="mt-9">Seller Options</div>
      <div className="h-60 overflow-y-auto flex flex-col gap-5 mt-3">
        {sellerOptions.map((item, index) => (
          <div
            onClick={() => addSizeToList(item, "models")}
            className="text-lg opacity-50 hover:opacity-75 flex gap-2 items-center cursor-pointer"
            key={index}
          >
            <CardPrimary
              onClick={() => addSizeToList(item, "models")}
              className="h-[20px] w-[20px] rounded-[5px]"
              borderActive={isSiseIsSelected(item, filter?.models)}
              key={index}
            />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
