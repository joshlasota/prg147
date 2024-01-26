function getDrinkPrice(option) {
    const drinkPrices = {
        coke: 1.50,
        dietCoke: 1.50,
        drPepper: 1.75,
        sprite: 1.75,
        water: 1.00
    };
    return drinkPrices[option] || 0;
}

function getSandwichPrice(option) {
    const sandwichPrices = {
        hamburger: 5.00,
        cheeseburger: 5.50,
        hamSub: 6.00,
        turkeySub: 6.50,
        veggieBurger: 5.50
    };
    return sandwichPrices[option] || 0;
}

function getDesertSidesPrice(option) {
    const desertSidesPrices = {
        fries: 2.50,
        chips: 2.00,
        coleSlaw: 2.75,
        iceCream: 3.00,
        slushie: 3.50
    };
    return desertSidesPrices[option] || 0;
}
function calculateOrder() {
    const customerName = document.getElementById('customerName').value;

    const drinkOptions = ['coke', 'dietCoke', 'drPepper', 'sprite', 'water'];
    const sandwichOptions = ['hamburger', 'cheeseburger', 'hamSub', 'turkeySub', 'veggieBurger'];
    const desertSidesOptions = ['fries', 'chips', 'coleSlaw', 'iceCream', 'slushie'];

    let drinkCost = 0;
    let sandwichCost = 0;
    let desertSidesCost = 0;

    drinkOptions.forEach(option => {
        const quantity = parseInt(document.getElementById(option).value);
        drinkCost += calculateItemCost(quantity, getDrinkPrice(option));
    });

    sandwichOptions.forEach(option => {
        const quantity = parseInt(document.getElementById(option).value);
        sandwichCost += calculateItemCost(quantity, getSandwichPrice(option));
    });

    desertSidesOptions.forEach(option => {
        const quantity = parseInt(document.getElementById(option).value);
        desertSidesCost += calculateItemCost(quantity, getDesertSidesPrice(option));
    });

    const totalCost = drinkCost + sandwichCost + desertSidesCost;

    document.getElementById('drinkCost').innerText = `Drinks Cost: $${drinkCost.toFixed(2)}`;
    document.getElementById('sandwichCost').innerText = `Sandwiches Cost: $${sandwichCost.toFixed(2)}`;
    document.getElementById('desertSidesCost').innerText = `Desserts/Sides Cost: $${desertSidesCost.toFixed(2)}`;
    document.getElementById('totalCost').innerText = `Total Cost: $${totalCost.toFixed(2)}`;

    document.getElementById('orderSummary').classList.remove('hidden');
}

function calculateItemCost(quantity, price) {
    return quantity * price;
}