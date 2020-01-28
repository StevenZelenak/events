console.log("hi");

const pies = [

    {
        name: "Dutche Apple Pie",
        price: 1000,
        isWarm: false,
        isOrganic: true,
        crust: "extra flakey",
        iceCream: "Vanilla Bean",
        isAvailable: true,
        imageURL: "https://images-gmi-pmc.edge-generalmills.com/75593ed5-420b-4782-8eae-56bdfbc2586b.jpg",
        drinkPairing: "whiskey",
        instructor: "Zoe",

    },
    {
        name: "Regular Apple Pie",
        price: 5000,
        isWarm: true,
        isOrganic: true,
        crust: "under baked",
        iceCream: "Vegan chocolate",
        isAvailable: false,
        imageURL: "https://www.cookingclassy.com/wp-content/uploads/2019/11/dutch-apple-pie-4-500x500.jpg",
        drinkPairing: "All wine",
        instructor: "Mary",

    },
    {
        name: "Pizza Pie",
        price: 2.5,
        isWarm: true,
        isOrganic: false,
        crust: "yeah!",
        iceCream: "nope",
        isAvailable: true,
        imageURL: "https://www.meals.com/imagesrecipes/144032lrg.jpg",
        drinkPairing: "High LIfe",
        instructor: "Luke",

    },
    {
        name: "Berry Pie",
        price: 1,
        isWarm: false,
        isOrganic: false,
        crust: "Oreo",
        iceCream: "PeanutButter",
        isAvailable: true,
        imageURL: "https://natashaskitchen.com/wp-content/uploads/2018/08/Blueberry-Pie-6-768x1152.jpg",
        drinkPairing: "water",
        instructor: "Zoe",

    },
    {
        name: "Chocolate Pie",
        price: 1,
        isWarm: false,
        isOrganic: true,
        crust: "Graham",
        iceCream: "Mint",
        isAvailable: true,
        imageURL: "https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/recipe_legacy/4053-3-large.jpg?itok=dMy1CrTN",
        drinkPairing: "Gin",
        instructor: "Mary",

    },
    {
        name: "Pi",
        price: 3.14,
        isWarm: false,
        isOrganic: true,
        crust: "Crumb",
        iceCream: "Moose Tracks",
        isAvailable: true,
        imageURL: "https://images-gmi-pmc.edge-generalmills.com/2252a28f-3470-443c-adb2-b08deea71be0.jpg",
        drinkPairing: "Milk",
        instructor: "Luke",

    },
    {
        name: "Chocolater Cake",
        price: 15,
        isWarm: false,
        isOrganic: true,
        crust: "Sprinkles",
        iceCream: "Vanilla",
        isAvailable: false,
        imageURL: "https://tastesbetterfromscratch.com/wp-content/uploads/2010/06/Hersheys-Perfectly-Chocolate-Chocolate-Cake-13.jpg",
        drinkPairing: "chocolate milk",
        instructor: "Steven",

    },
    {
        name: "Mixed Berry Pie",
        price: 10000,
        isWarm: true,
        isOrganic: false,
        crust: "Berry",
        iceCream: "Berry",
        isAvailable: true,
        imageURL: "https://images-gmi-pmc.edge-generalmills.com/75593ed5-420b-4782-8eae-56bdfbc2586b.jpg",
        drinkPairing: "Berry Water",
        instructor: "Steve",

    },
];

const outputDom = (divID,str) => {

    const placement = document.getElementById(divID);
    placement.innerHTML = str;

}


const pieBuilder = (arr) => {

    let domString = '';

    for (let value of arr) {

        domString += `<div class = "cards">`;
        domString += `<header>${value.name}</header>`;
        domString += `<div class = "cardContent">`;
        domString += `<div class = "imgDiv"><img src=${value.imageURL} alt=${value.name}></div>`;
        domString += `<div class = "paragraph">`;
        domString += `<p>Price: $${value.price}</p>`;
        if (value.isOrganic) {
            domString += "<p>This pie is Organic</p>";
        }
        else{
            domString += "<p>This pie is not Organic</p>";
        }
        if (value.isWarm) {
            domString += "<p>This pie is warm</p>";
        }
        else{
            domString += "<p>This pie is cold</p>";
        }
        domString += `<p>The crust is ${value.crust}`;
        domString += `<p>Your icecream choice is ${value.iceCream}`;
        domString += `<p>Your icecream choice is ${value.drinkPairing}`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `<footer>${value.instructor}</footer>`;
        domString += `</div>`;
    }

    outputDom("storePies", domString)
};

pieBuilder(pies);