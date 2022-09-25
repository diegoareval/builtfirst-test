
export const products = [
  {
    providerName: "Tom",
    description: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    title: "this is a title",
    logo: "https://randomuser.me/api/portraits/women/81.jpg",
    saveAmount: 25
  },
  {
    providerName: "Jerry",
    description: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    title: "this is a title",
    logo: "https://randomuser.me/api/portraits/women/81.jpg",
    saveAmount: 25
  },
  {
    providerName: "Midudev",
    description: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    title: "this is a title",
    logo: "https://randomuser.me/api/portraits/women/81.jpg",
    saveAmount: 25
  },
  {
    providerName: "Builtfirst",
    description: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    title: "this is a title",
    logo: "https://randomuser.me/api/portraits/women/81.jpg",
    saveAmount: 25
  },
  {
    providerName: "Jailen",
    description: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    title: "this is a title",
    logo: "https://randomuser.me/api/portraits/women/81.jpg",
    saveAmount: 25
  },
  {
    providerName: "New Item",
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

export const dummyDisccounts = [
  ...products
];



export const searchInArray=(searchQuery = "", array, objectKey=null)=>{
  if(searchQuery){
    return array.filter(d=>{
      let data =objectKey? d[objectKey] : d //Incase If It's Array Of Objects.
       let dataWords= typeof data=="string" && data?.split(" ")?.map(b=>b&&b.toLowerCase().trim()).filter(b=>b)
      let searchWords = typeof searchQuery=="string"&&searchQuery?.split(" ").map(b=>b&&b.toLowerCase().trim()).filter(b=>b)

     let matchingWords = searchWords.filter(word=>dataWords.includes(word))

    return matchingWords.length

})
  }

  return array;
 
      
}