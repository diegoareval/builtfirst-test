const CardList = ({ products = [], isFilterActive = false }) => {
  return (
    <div
      className={`grid gap-4 ${
        isFilterActive
          ? "grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
          : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      }`}
    >
      {products.map((product, index) => (
        <div>
          <div className="min-h-[200px] min-w-[200px] flex flex-col justify-between">
           <div className="flex pr-5 justify-between align-center">
           <div class="relative w-12 h-12">
    <img class="rounded-full border border-gray-100 shadow-sm" src={product.logo} alt="user image" />
    <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
  </div>
            <div className="text-center mt-5 opacity-50 text-sm">{product.providerName}</div>
           </div>
           <div className="text-center text-sm text-[#0000FF]">
            Save ${product.saveAmount}
            </div>
            <div className="text-center text-sm text-[#5F9EA0]">
             {product.title}
            </div>
            <div className="text-center text-sm text-[#000]">
             {product.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
