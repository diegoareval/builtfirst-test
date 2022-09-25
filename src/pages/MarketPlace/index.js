import React, { useEffect, useState } from "react";
import LandingPageLayout from "../../components/LayoutMain";
import AppContainer from "../../components/AppContainer";
import useBooleanToggler, {
  useWorkingIndicator,
} from "../../hooks/useBooleanToggler";
import ImageIcon, { ICONS } from "../../components/ImageIcon";
import Badge from "../../components/Badge";
import CardList from "../../components/CardList";
import { dummyDisccounts, searchInArray } from "../../utils";
import Filter from "./Filter";


const MarketPlace = () => {
  const { isToggled: isToggleFilter, toggle: toggleFilter } =
    useBooleanToggler();
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState([]);
  const { isWorking, startWork, finishWork } = useWorkingIndicator({
    initialValue: true,
  });

  // state filter
  const [filter, setFilter] = useState({
    sort: 'asc',
    recommendOptions: [],
    sellerOptions: []
  });


  const handlerChangeFilter = (filterNew) => {
    setFilter({
      ...filter,
      ...filterNew,
    });
  };

  useEffect(() => {
    const loadData = async () => {
      // TODO: fetch data from API
      startWork();
      setTimeout(() => {
        setProducts(dummyDisccounts);
        finishWork();
      }, 2000);
    };

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  // const handleSort = (sort) => {
  //   setFilter({
  //     ...filter,
  //     sort,
  //   });
  //   closeSort();
  // };

  const items = searchInArray(search, products, "providerName")

  return (
    <LandingPageLayout>
      <AppContainer className="my-8">
        <div className="flex justify-between">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div
              onClick={toggleFilter}
              className="flex gap-3  flex-wrap items-center cursor-pointer"
            >
              <ImageIcon nameIcon={ICONS.filterIcon} />
              <span className="opacity-50 text-lg">FILTER</span>
              {products?.length > 0 && <Badge label={products.length} />}
            </div>

            <div
              className="text-lg cursor-pointer md:ml-[70px]"
            >
             <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              type="text" onChange={(e)=> {setSearch(e.target.value)}} value={search} placeholder="search from companies and services"/>
            </div>
          </div>

  
        </div>
        <div className="flex gap-14">
          {isToggleFilter && (
            <div
              className="bg-white transition-all duration-500
                fixed w-screen h-screen top-0 left-0 right-0 z-10 overflow-y-scroll p-2 pt-0
                md:bg-transparent  md:w-[288px] md:relative md:h-auto
              "
            >
              <div className="top-1 right-2 fixed flex justify-end md:hidden">
                <div
                  className="p-4 cursor-pointer text-2xl opacity-50"
                  onClick={toggleFilter}
                >
                  x
                </div>
              </div>
              <Filter
                filter={filter}
                onChangeFilter={handlerChangeFilter}
              />
            </div>
          )}
          <div className="flex-1 transition-all duration-500 mt-1">
            {isWorking && (
              <div className="text-center opacity-50 text-lg">Loading...</div>
            )}

            <CardList products={items} isFilterActive={isToggleFilter} />
          </div>
        </div>
      </AppContainer>
    </LandingPageLayout>
  );
};

export default MarketPlace;
