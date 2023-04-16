const wrapper = document.querySelector(".sliderWrapper")

const menuItems = document.querySelectorAll(".menuItems")

const products = [

  {

    Id: 1,

    title: "AIR FORCE",

    price: 209,

    colors: [

      {

        code: "black",

        img: "Images/air.png",

        

      },

      {

        code: "darkblue",

        img: "Images/air2.png",

      },

      ],

    

  },

  {

    Id: 2,

    title: "AIR JORDAN",

    price: 149,

    colors: [

      {

        code: "lightgrey",

        img: "Images/jordan.png",

        

      },

      {

        code: "green",

        img: "/Images/jordan2.png",

      },

      ],

    

  },

  {

    Id: 3,

    title: "CRATER",

    price: 150,

    colors: [

      {

        code: "lightgrey",

        img: "Images/crater.png",

      },

      {

        code: "green",

        img: "/fix/crater2.png",

        

      },

      ],

    

  },

  {

    Id: 4,

    title: "BLAZER",

    price: 107,

    colors: [

      {

        code: "lightgrey",

        img: "/fix/blazer.png",

        

      },

      {

        code: "green",

        img: "/fix/blazer2.png",

        

      },

      ],

    

  },

  {

    Id: 5,

    title: "HIPPIE",

    price: 99,

    colors: [

      {

        code: "lightgrey",

        img: "/fix/hippie.png",

        

      },

      {

        code: "green",

        img: "/fix/hippie2.png",

        

      },

      ],

    

  },

  ];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")

const currentProductTitle = document.querySelector(".productTitle")

const currentProductPrice = document.querySelector(".productPrice")

const currentProductColor = document.querySelectorAll(".color")

const currentProductSize = document.querySelectorAll(".size")

menuItems.forEach((items, index)=>{

  items.addEventListener("click", ()=>{

    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    

    choosenProducts = products[index]

    

    

    

    currentProductTitle.textContent = choosenProducts.title;

    currentProductPrice.textContent = "$" + choosenProducts.price;

    currentProductImg.src = choosenProducts.colors[0].img;

    

    

    currentProductColor.forEach((color, index)=>{

      color.style.backgroundColor = choosenProducts.colors[index].code;

    })

  });

});

currentProductColor.forEach((color, index)=>{

  color.addEventListener("click",()=>{

    currentProductImg.src = choosenProducts.colors[index].img;

  });

});

currentProductSize.forEach((size, index)=>{

  size.addEventListener("click",()=>{

    currentProductSize.forEach(size=>{

      size.style.backgroundColor= "white";

      size.style.color= "black";

    })

    size.style.backgroundColor= "black";

    size.style.color= "white";

  })

})

const productButton = document.querySelector(".productButton");

const payment = document.querySelector(".payment");

const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{

  payment.style.display="flex";

});

close.addEventListener("click",()=>{

  payment.style.display="none";

});

