/**
 * fruits arr is a store of fruits, fill as you wish
 * Example
 * ['banana', 'orange', 'orange']
 */
const fruits = [            //create values
    'banana',
    'banana',
    'banana',
    'banana',
    'orange',
    'orange',
    'mango',
    'kiwi',
    'kiwi',
    'kiwi',
    'apple'
];

/**
 * fruitsBought arr is a store of bought fruits
 * push fruit here after buying
 */

const fruitsBought = [];
/**
 * logs array is used to store logs on the page.
 * Can be filled with executing log function
 * 
 * Example:
 * log(customerName, fruitName, success)
 * where
 * - customerName is name of customer
 * - fruitName is name of fruit
 * - success is state if customer bought a fruit
 */
const logs = []; 

/**
 * Example of customer
 */
const customers = [{
    name: 'Ivan',
    balance: 46,
    fruitsToBuy: [{
        name: 'banana',
        count: 4,
    }, {                        //trying to create new value in array fruitsToBuy:
        name: 'kiwi',           // it works!:)
        count: 1,
    }]
}];

/**
 * Function buyFruits is used to iterate over array passed as a param
 * if customer wants to buy 4 banana, try to remove banana from fruits array (find it above)
 * and push it to fruitsBought array (find it above)
 * 
 * Push execution result in log
 * function log is written below, you'll find execution example on line 18 of this file
 * 
 * Example:
 * buyFruits(customers)
 */
function buyFruits(customersArr) {
    customersArr.forEach(function(customer){            //iterating throught customersArr

        customer.fruitsToBuy.forEach(function(requiredFruit){  // iterating throught fruitsToBuy array inside customer array
            let fruitName = requiredFruit.name;         // fruitName - means which fruit we want
            let quantity = requiredFruit.count;         // quantity means how many fruits we want
            let availableFruits = 0;                    // creating new variable of available fruit
                                                            // by defoult it is 0. Because firstly we 
                                                            // do not have any fruits in our array.
            
            for (let i = 0; i < fruits.length; i++) {   
                if (fruits[i] === fruitName) {              // estimating: if the fruits array have as much fruits
                    availableFruits++;                      // as we want and put them in availableFruits
                }                                           // (until we get required amount)
            }
            if (availableFruits >= quantity) {              // We can do something only if this statement is true
                while (quantity-- > 0) {                    // Counting how many iterations do we need to get certain amount of fruits
                   let index = fruits.indexOf(fruitName);   // Index means the place of certain fruit in fruits array.
                let arrRemovedFruits = fruits.splice(index, 1); // Taking only 1 fruit from indexed place.
                fruitsBought.push(arrRemovedFruits.pop());  // Put the value (certain fruit) in our fruitsBought array.
                                                            // But method splice returns array and we need only the 
                    log(customer['name'], fruitName, true); // element from array. That's why we use .pop then.
                                                            
                }
                //log(customer['name'], fruitName, true);     // print log if we have enough fruits and amount of them
            } else {
                log(customer['name'], fruitName, false);    //do the same if we have not enough fruits
            }
        });

    });  
}

/**
 * Function getFruitsMap returns map of fruits
 * Example:
 * 
 * const fr = ['banana', 'orange', 'orange']
 * getFruitsMap(fr); -> { banana: 1, orange: 2 }
 * 
 */
 function getFruitsMap(fruitsArr) {         // This part of code describing the behavior when we call this function
    // write code here                          // at lines 120, 121.
    let map = {};                           // Initializing empty map of fruits we have. 
    fruitsArr.forEach(function(fruit){      // Iterating throught fruitsArr and checking
        if(map[fruit]) {                        // if the map already contains certain fruit or
            map[fruit]+=1;                      // meets it at first time. 
        } else {                                // if contain, we add new fruit to existing (+=1),
            map[fruit] = 1;                     // if no and we get it at first time, just write 1
        }
    });
    return map;
 }

// DONT'T EDIT FOLLOWING CODE
buyFruits(customers);
const fruitsLeftMap = getFruitsMap(fruits);
const fruitsBoughtMap = getFruitsMap(fruitsBought);


function log (customerName, fruitName, success) {
    const action = success ? 'bought' : 'failed to buy';
    const className = success ? 'green' : 'red'
    logs.push(`${customerName} <span class=${className}>${action}</span> ${fruitName}`);
}

function render () {
    renderLog();
    renderFruits('fruits-left', fruitsLeftMap);
    renderFruits('fruits-bought', fruitsBoughtMap);

    function renderLog() {
        let existingLogsContainer = document.getElementById('messages');
        let mainLogsContainer =  document.getElementById('log');
        
        if (existingLogsContainer) {
            mainLogsContainer.removeChild(existingLogsContainer);
        }
        
        const logsContainer = document.createElement('ul');
        logsContainer.id = 'messages';
        
        logs.forEach(log => {
            const logEl = document.createElement('li');
            logEl.innerHTML = log;
            logsContainer.appendChild(logEl);
        });
        
        mainLogsContainer.appendChild(logsContainer);    
    }
    
    function renderFruits (id, mappedData) {
        const mainFruitsContainer = document.getElementsByClassName(id)[0];
        const existingFruitsBoughtContainer = (mainFruitsContainer.getElementsByClassName('fruits-list') || [])[0];
        
        if (existingFruitsBoughtContainer) {
            mainFruitsContainer.removeChild(existingFruitsBoughtContainer);
        }
        
        const fruitsContainer = document.createElement('ul');
        fruitsContainer.classList.add('fruits-list');
        
        for (let key in mappedData) {
            const fruitEl = document.createElement('li');
            const nameEl = document.createElement('span');
            const countEl = document.createElement('span');
            nameEl.innerText = `${key}:`;
            countEl.innerText = mappedData[key];
        
            fruitEl.appendChild(nameEl);
            fruitEl.appendChild(countEl);
            fruitsContainer.appendChild(fruitEl);
        }
        
        mainFruitsContainer.appendChild(fruitsContainer);
    }
}
