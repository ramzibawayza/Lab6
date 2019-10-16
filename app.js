'use strict';


var hours = [ ' 6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeLocations = [];//eslint-disable-line
var salesTbl = document.getElementById('test');


function headR() { //eslint-disable-line
 var tblR = document.createElement('tr');
 for (var i = 0; i <= hours.length; i++) {
   var element = document.createElement('th');
   element.textContent = hours[i-1];
   tblR.appendChild(element);

 }
 
 element = document.createElement('th');
 element.textContent = 'Total';
 tblR.appendChild(element);
//  console.log(salesTbl);
 salesTbl.appendChild(tblR);
};


function Store(name, Min, Max, Avg) {

  this.name = name;
 this.Min = Min;
 this.Max = Max;
 this.Avg = Avg;
 
 this.avgCustArr = [];
 this.cookiesHourArr = [];
 this.totalCookies = 0;
 storeLocations.push(this);
}
Store.prototype.numCustHourly = function() {
 for (var i = 0; i <= hours.length; i++) {
   var singleHourCust = Math.floor(Math.random() * (this.Max - this.Min)) + this.Min;
   this.avgCustArr.push(singleHourCust);
 }
};
Store.prototype.cookiesCustomer = function() {
 this.numCustHourly();
 for (var i = 0; i < hours.length; i++) {
   var HourCookies = Math.ceil(this.avgCustArr[i] * this.Avg);
   this.cookiesHourArr.push(HourCookies);
   this.totalCookies += HourCookies;
 }
};
Store.prototype.render = function() {
 this.cookiesCustomer();
 var trRowName = document.createElement('tr');
 var tdStore = document.createElement('td');
 tdStore.textContent = this.name;
 trRowName.appendChild(tdStore);
 for (var i = 0; i < this.cookiesHourArr.length; i++) {
   var tdCell = document.createElement('td');
   tdCell.textContent = this.cookiesHourArr[i];
   trRowName.appendChild(tdCell);
 };
 var tdTotal = document.createElement('td');
 tdTotal.textContent = this.totalCookies;
 trRowName.appendChild(tdTotal);
 salesTbl.appendChild(trRowName);
};


var Seattle = new Store('Seattle', 23, 65, 6.3);
var Tokyo = new Store('Tokyo', 3, 24, 1.2); 
var Dubai = new Store('Dubai' , 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3); 
var Lima = new Store('Lima', 2, 16, 4.2); 


function renderAllStores() {
 for (var i = 0; i < storeLocations.length; i++) {
   storeLocations[i].render();
 }
};

 

function makeFooterRow() { //eslint-disable-line

    var tblR = document.createElement('tr');
 tblR.textContent = 'TOTAL';
 salesTbl.appendChild(tblR);
 var bigStupidTotal = 0;
 for (var i = 0; i < hours.length; i++) {
   var hourlyTotal = 0;
   for (var j = 0; j < storeLocations.length; j++) {
     hourlyTotal = hourlyTotal + storeLocations[j].cookiesHourArr[i];
     bigStupidTotal += storeLocations[j].cookiesHourArr[i];
     console.log(bigStupidTotal);
   }
   var element1 = document.createElement('td');
   element1.textContent = hourlyTotal;
   tblR.appendChild(element1);
 }
 element1 = document.createElement('td');
 element1.textContent = bigStupidTotal;
 tblR.appendChild(element1);
};
headR();
renderAllStores();
makeFooterRow();



