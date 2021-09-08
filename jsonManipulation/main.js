const fs = require("fs");
const { json } = require("stream/consumers");
let rawdata = fs.readFileSync("./data.json");
let data = JSON.parse(rawdata);

//done
function findByType(arrOfObject, searchType) {
  const filtered = arrOfObject.filter((obj) => {
    // return obj.type === searchType
    return obj["type"] === searchType;
  });
  // return jsonData.map(obj => Object.values(obj))
  return filtered;
}

function findByTag(arrOfObject, searchTag) {
  const filtered = arrOfObject.filter((obj) => {
    return obj["tags"].includes(searchTag);
  });
  return filtered;
}

function findByPlacementName(arrOfObject, searchPlacementName) {
  const filtered = arrOfObject.filter((obj) => {
    return obj["placement"]["name"] == searchPlacementName;
  });
  return filtered;
}

function findByPurchasedAt(arrOfObject, dateString) {
  const lowerDateString = dateString + " " + "0:00:00 AM";
  const upperDateString = dateString + " " + "11:59:59 PM";
  const lowerDateSecond = new Date(lowerDateString).getTime() / 1000;
  const upperDateSecond = new Date(upperDateString).getTime() / 1000;

  //   console.log(upperDateSecond);
  //   console.log(lowerDateSecond);

  // const upperThresholdSecond = new Date(dateString)
  const filtered = arrOfObject.filter((obj) => {
    // console.log(obj["purchased_at"] >= lowerDateSecond);
    // console.log(obj["purchased_at"] <= upperDateSecond);
    return (
      obj["purchased_at"] >= lowerDateSecond &&
      obj["purchased_at"] <= upperDateSecond
    );
  });
  return filtered;
}

//No 1
let filteredMeetingRoom = findByPlacementName(data, "Meeting Room");
//No 2
let filteredElectronic = findByType(data, "electronic");
//No 3
let filteredFurniture = findByType(data, "furniture");
//No 4
let filtered16June = findByPurchasedAt(data, "Januari 16 2020");
//No 5
let filteredBrownTags = findByTag(data, "brown");

// ---Testing Waktu---

// let waktu = "11:59:59 PM";
// let dateString = "17 Januari 2020";
// let dateStringDetail = "17 Januari 2020 0:00:00 AM";

// var someDate = new Date(dateString + " " + waktu);
// let someDate2 = new Date(dateStringDetail).getTime() / 1000;
// someDate = someDate.getTime() / 1000;

// console.log(someDate);
// console.log(someDate2);

// --- Testing Lain Lain ---
// let test = data.filter((d) => d)

// console.log(data[1].inventory_id);
// console.log(test)
// console.log(Object.keys(data[1]))

console.log(filtered16June);
