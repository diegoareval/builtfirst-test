
export const products = [
  {
    providerName: "Provider 1",
    description: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    title: "this is a title",
    logo: "https://randomuser.me/api/portraits/women/81.jpg",
    saveAmount: 25
  },
  {
    providerName: "Provider 2",
    description: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    title: "this is a title",
    logo: "https://randomuser.me/api/portraits/women/81.jpg",
    saveAmount: 25
  },
  {
    providerName: "Provider 3",
    description: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    title: "this is a title",
    logo: "https://randomuser.me/api/portraits/women/81.jpg",
    saveAmount: 25
  }
]
  .map((product, index) => ({
    ...product,
    id: index + 1,
  }))
  .sort(() => Math.random() - 0.5);

export const dummyProducts = [
  ...products,
  ...products,
  ...products,
  ...products,
  ...products,
  ...products,
];

/**
 * It returns a promise that resolves to the product with the given id, or rejects with an error if the
 * product is not found
 * @param productId - The id of the product you want to get.
 * @returns A promise that resolves to the product object with the matching id.
 */
export const getProductByIdDummy = async (productId) => {
  try {
    return new Promise((resolve) => {
      const product = products.find(({ id }) => id === Number(productId));
      if (product?.id)
        resolve({
          ...product,
          images: ["https://randomuser.me/api/portraits/women/81.jpg", "https://randomuser.me/api/portraits/women/81.jpg", "https://randomuser.me/api/portraits/women/81.jpg", "https://randomuser.me/api/portraits/women/81.jpg"], // TODO: lista de images
        });
      else resolve(null);
    });
  } catch (error) {
    return new Promise((_, reject) => {
      reject({ error });
    });
  }
};
