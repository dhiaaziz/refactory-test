
const fs = require('fs');
const { json } = require('stream/consumers');
let rawdata = fs.readFileSync('./data.json');
let data = JSON.parse(rawdata);



//No
function findByType(arrOfObject, type) {
    const filtered = arrOfObject.filter((obj) => {
        // return obj.type === type
        return obj['type'] === type

    })
    // return jsonData.map(obj => Object.values(obj))
    return filtered
}

function findByPurchasedAt(arrOfObject){
    const filtered = arrOfObject.filter((obj) => {
        return obj['purchased_at'] === 1579190471
    })  
    return filtered
}

// let test = data.filter((d) => d)

// console.log(data[1].inventory_id);
// console.log(test)
// console.log(Object.keys(data[1]))

let filteredFurniture = findByType(data, 'furniture')
let filteredElectronic = findByType(data, 'electronic')
let filteredInJune= findByPurchasedAt(data)

var someDate = new Date(dateString);
someDate = someDate.getTime();

console.log(filteredInJune);