const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
  ];
  
  const productsContainer = document.querySelector(".products");
  const searchInput = document.querySelector(".search");
  const categoriesContainer = document.querySelector(".cats");
  const priceRange = document.querySelector(".priceRange");
  const priceValue = document.querySelector(".priceValue");

//showing all products on page

    const displayProducts=(data)=>{
        productsContainer.innerHTML=data.map((product)=>
        `
            <div class="product">
            <img src=${product.img} alt="" />
            <span class="name">${product.name}</span>
            <span class="price">$${product.price}</span>
            </div>
        `
        ).join("")
    }  
    displayProducts(data)

//displaying products based on input text

searchInput.addEventListener("keyup",(e)=>{
    const value=e.target.value.toLowerCase();
console.log(value);
    if(value){
        displayProducts(
            data.filter(
                (item)=>item.name.toLowerCase().indexOf(value)!==-1)
        )
    }
    else {
        displayProducts(data)
    }
})

//setting categories

  const setCategories=()=>
{
    const allCats=data.map(i=>i.cat)

    const categories=["All", ...new Set(allCats)]
    //ES6 has a native object Set to store unique values
    //The constructor of Set takes an iterable object, like an Array, and the spread operator ... transform the set back into an Array.

    categoriesContainer.innerHTML=categories.map(cat=>
        `
        <span class="cat">${cat}</span>
        `
        ).join("")
  }
  setCategories()

  categoriesContainer.addEventListener("click",(e)=>{
    const selectedCategory=e.target.textContent
selectedCategory==="All" ? displayProducts(data) : displayProducts(data.filter((item) => item.cat===selectedCategory))
  })

  const setPrices = () => {
    const priceList = data.map((item) => item.price);
    
    const minPrice = Math.min(...priceList);
   
    const maxPrice = Math.max(...priceList);
  
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;
  
    priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "$" + e.target.value;
      displayProducts(data.filter((item) => item.price <= e.target.value));
    });
  };
  setPrices()