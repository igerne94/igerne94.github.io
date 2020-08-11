// pls make at least 5 persons
const people = [{
    id: 1,
    name: 'a',
    age: 19,
    moneyAmount: 100,
    desiredAlcoholName: 'whisky',
    desiredAlcoholAmount: 2
}, {
    id: 2,
    name: 'b',
    age: 42,
    moneyAmount: 400,
    desiredAlcoholName: 'rum',
    desiredAlcoholAmount: 1
}, {
    id: 3,
    name: 'c',
    age: 20,
    moneyAmount: 80,
    desiredAlcoholName: 'beer',
    desiredAlcoholAmount: 3
}, {
    id: 4,
    name: 'd',
    age: 16,
    moneyAmount: 20,
    desiredAlcoholName: 'wine',
    desiredAlcoholAmount: 1
}, {
    id: 5,
    name: 'e',
    age: 52,
    moneyAmount: 140,
    desiredAlcoholName: 'Cola',
    desiredAlcoholAmount: 2
}];

// pls make at least 5 alcohol
const alcoholPriceForOneItem = {
    beer: 20,
    wine: 70,
    whisky: 23, // don't change this one
    rum: 120,
    Cola: 15
};

const LEGAL_AGE = 18; // don't change this

/**
 * Function is used to filter array of objects by age param, name of param is passed as second argument
 * If object has age above LEGAL_AGE -> it's returned in new array 
 * @param {Array} arr
 * @param {String} ageParamName
 * Returns filtered array
 * f.e function is called getLegalAgePeople(people, 'age');
 * 
 * tip: use .filter method
 */
function getLegalAgePeople(arr, ageParamName) {
    return arr.filter(function (fp) {
        return fp[ageParamName] >= LEGAL_AGE;
    }
    );
}

//const a = getLegalAgePeople(people, 'Juliana');

/**
 * Function is used to filter array of objects
 * If object has money amount more than alcohol price multiplied by alcohol amount -> it's returned to new array
 * @param {Array} arr 
 * Returns filtered array
 * f.e function is called getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
 * 
 * tip: use .filter method
 */

 function getPeopleWhoHaveMoneyForAlcohol(arr) {
    return arr.filter(function(person) {
        return person.moneyAmount >= (person.desiredAlcoholAmount * 
            alcoholPriceForOneItem[person.desiredAlcoholName])
    });
} 

/**
 * Function is used to get array of strings
 * @param {Array} arr 
 * Returns filtered array of strings like:
 * ["NAME bought COUNT bottles of ALCOHOL_NAME for SUM rubles"]
 * where NAME is name of person, COUNT is bottles count, ALCOHOL_NAME is name of alcohol, SUM is bottles count multipled by price for a bottle
 * f.e function is called buyAlcohole(legalAgePeople);
 * 
 * tip: use .map method
 */
function buyAlcohole(arr) {
    return arr.map(function(person){
       return person.name +' bought '
        + person.desiredAlcoholAmount + ' bottles of '
        + person.desiredAlcoholName + ' for '
        + (person.desiredAlcoholAmount * alcoholPriceForOneItem[person.desiredAlcoholName]) + ' rubles';
    });
}

// TEST FUNCTION. PLS DON'T TOUCH
function check() {
    try {
        const people = [{
            id: 1,
            name: 'a',
            age: 19,
            moneyAmount: 100,
            desiredAlcoholName: 'whisky',
            desiredAlcoholAmount: 2,
        }];
    
        const legalAgePeople = getLegalAgePeople(people, 'age');
        if (!legalAgePeople || legalAgePeople[0].id !== 1) {
            throw new Error('check getLegalAgePeople function');
        }

        const peopleWhoHaveMoney = getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
        if (!peopleWhoHaveMoney || peopleWhoHaveMoney[0].id !== 1) {
            throw new Error('check getPeopleWhoHaveMoneyForAlcohol function');
        } 

        const checkResult = buyAlcohole(peopleWhoHaveMoney);
        
        if (!checkResult || checkResult[0] !== "a bought 2 bottles of whisky for 46 rubles") {
            throw new Error('check buyAlcohole function');
        } 

        alert('Correct! You\'re awesome');
    } catch (err) {
        alert(err);
    }
}
