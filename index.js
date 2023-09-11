class Potato {
    constructor(type, price, weight) {
        this.type = type;
        this.price = price;
        this.weight = weight;
    }

    get pricePerPound() {
        return this.price / this.weight;
    }
}

const potatoes = [
    new Potato('Russet', 5, 1),
    new Potato('Sweet', 3, 2),
    new Potato('Red', 0.5, 0.75),
];

console.log(potatoes);
console.log(potatoes[0].pricePerPound);

const listElement = document.getElementById('potatoes-list');

for (let potato of potatoes) {
    const listItemElement = document.createElement('li');

    listItemElement.innerText = `Type: ${potato.type}, Price: $${potato.price}, Weight: ${potato.weight}, Price Per Pound: ${potato.pricePerPound}`;
    listElement.appendChild(listItemElement);
}
