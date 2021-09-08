
const fs = require('fs');
const { json } = require('stream/consumers');
let rawdata = fs.readFileSync('./data.json');
let data = JSON.parse(rawdata);



//done
function findByType(arrOfObject, searchType) {
    const filtered = arrOfObject.filter((obj) => {
        // return obj.type === searchType
        return obj['type'] === searchType
    })
    // return jsonData.map(obj => Object.values(obj))
    return filtered
}

function findByTag(arrOfObject, searchTag) {
    const filtered = arrOfObject.filter(obj => {
        return obj['tags'].includes(searchTag)
    })
    return filtered
}

function findByPlacementName(arrOfObject, searchPlacementName) {
    const filtered = arrOfObject.filter((obj) => {
        return obj['placement']['name'] == searchPlacementName
    })
    return filtered
}


//undone
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

//done
let filteredFurniture = findByType(data, 'furniture')
let filteredElectronic = findByType(data, 'electronic')
let filteredBrownTags = findByTag(data, 'brown')
let filteredMeetingRoom = findByPlacementName(data, 'Meeting Room')





//undone
let filteredInJune = findByPurchasedAt(data)

// var someDate = new Date(dateString);
// someDate = someDate.getTime();

console.log(filteredInJune);