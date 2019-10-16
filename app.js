'use strict';
var hoursOpen = ['6am ','7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];
var totalStoresSalesByHour = [];
var salesTable = document.getElementById('table');

function CookieStore(storeName, minimumGuests, maximumGuests, avgCookies) {
  this.minimumGuests = minimumGuests;
  this.maximumGuests = maximumGuests;
  this.avgCookies = avgCookies;
  this.storeName = storeName;
  this.totalCookies = 0;
  this.cookiesSoldEachHour = [];
  this.range = maximumGuests - minimumGuests;
}

CookieStore.prototype.getCookiesSoldInCurrentHour = function () {
  return Math.round(Math.floor( ( (Math.random() * this.range) + this.minimumGuests)) * this.avgCookies);

};

CookieStore.prototype.generateCookiesSoldEachHour = function () {
  for( var hours = 0; hours < hoursOpen.length; hours++){
    var cookieSalesForCurrentHour = this.getCookiesSoldInCurrentHour();
    this.cookiesSoldEachHour.push(cookieSalesForCurrentHour);
  }
};

CookieStore.prototype.calculateTotalCookies = function(){
  for (var eachHour = 0; eachHour < this.cookiesSoldEachHour.length; eachHour++) {
    this.totalCookies += this.cookiesSoldEachHour[eachHour];
  }
  return this.totalCookies;
};

CookieStore.prototype.createStoreDataRow = function () {
  var tableRowForStoresEl = createTableRow();
  tableRowForStoresEl.setAttribute('id',this.storeName);
  tableRowForStoresEl.appendChild(createTableComponent('th', 'class', 'store-names', this.storeName));
  for (var hour = 0; hour < hoursOpen.length; hour++) {
    tableRowForStoresEl.appendChild(createTableComponent('td','class','hourly-sales', this.cookiesSoldEachHour[hour]));
  }
  tableRowForStoresEl.appendChild(createTableComponent('th', 'class', 'total-cookies', this.totalCookies));

};

CookieStore.prototype.deleteTableDataRow = function () {

  var parentTableEl = document.getElementById('table');
  var childTableRowEl = document.getElementById(this.storeName);
  parentTableEl.removeChild(childTableRowEl);
};

CookieStore.prototype.populateDataToTable = function () {
  this.totalCookies = 0;
  this.cookiesSoldEachHour = [];
  this.generateCookiesSoldEachHour();
  this.calculateTotalCookies();
  this.createStoreDataRow();
};

var storeOne = new CookieStore('Seattle', 23, 65, 6.3);
var storeTwo = new CookieStore('Tokyo', 3, 24, 1.2);
var storeThree = new CookieStore('Dubai', 11, 38, 3.7);
var storeFour = new CookieStore('Paris', 20, 38, 2.3);
var storeFive = new CookieStore('Lima', 2, 16, 4.6);

var seattleStores = [storeOne,storeTwo,storeThree,storeFour,storeFive];


function createTableRow() {

  var tableRowEl = document.createElement('tr');
  salesTable.appendChild(tableRowEl);
  return tableRowEl;
};

function createTableComponent(componenetTag,attributeOne,attributeTwo,componentContent) {
  var tableComponenetEl = document.createElement(componenetTag);
  tableComponenetEl.setAttribute(attributeOne,attributeTwo);
  tableComponenetEl.textContent = componentContent;
  return tableComponenetEl;
}

function deleteTableRow(rowId){
  var parentTableEl = document.getElementById('table');
  var childTableRowEl = document.getElementById(rowId);
  parentTableEl.removeChild(childTableRowEl);
}


function calulateAllStoresSalesPerHour(){

  totalStoresSalesByHour = [];

  for (var hour = 0; hour < hoursOpen.length; hour++) {
    var allCookiesPerHour = 0;

    for (var store = 0; store < seattleStores.length; store++) {
      allCookiesPerHour += seattleStores[store].cookiesSoldEachHour[hour];
    }

    totalStoresSalesByHour.push(allCookiesPerHour);
  }
};

function calulateTotalSalesPerDay(){
  var dailySales = 0;
  for (var hour = 0; hour < totalStoresSalesByHour.length; hour++) {

    dailySales += totalStoresSalesByHour[hour];

  }
  return dailySales;
}


function createTopLabelRow(){
  var tableTopRow = createTableRow();

  tableTopRow.appendChild(createTableComponent('th', 'class', 'hours-open', 'Hours Open:'));

  for (var hours = 0; hours < hoursOpen.length; hours++) {
    tableTopRow.appendChild(createTableComponent('th','class','open-hours', hoursOpen[hours]));

  };

  tableTopRow.appendChild(createTableComponent('th', 'class', 'daily-sales', 'Daily Sales'));

}

function populateEveryStoresData(){
  for (var store = 0; store < seattleStores.length; store++) {
    var currentStore = seattleStores[store];
    currentStore.populateDataToTable();
  };
};
function createBottomLabelRow(){
  var tableBottomRow = createTableRow();
  tableBottomRow.setAttribute('id','all-store-totals');
  tableBottomRow.appendChild(createTableComponent('th', 'id', 'sales-by-hour', 'Sales-hour: '));

  calulateAllStoresSalesPerHour();

  for (var hour = 0; hour < hoursOpen.length; hour++) {
    tableBottomRow.appendChild(createTableComponent('th','class','total-hourly-sales', totalStoresSalesByHour[hour]));
  }
  var dailySales = calulateTotalSalesPerDay();
  tableBottomRow.appendChild(createTableComponent('th', 'id', 'total-sales-per-day', dailySales));
}


function createTableWithStoreData(){
  createTopLabelRow();
  populateEveryStoresData();
  createBottomLabelRow();
};

createTableWithStoreData(); 

var storeFormEl = document.getElementById('new-store-form');
storeFormEl.addEventListener('submit', addAnotherStore);

function addAnotherStore(event){
  event.preventDefault();  
  event.stopPropagation(); 

  var storeName = event.target.storeName.value;
  var minGuests = parseInt(event.target.minGuests.value);
  var maxGuests = parseInt(event.target.maxGuests.value);
  var avgCookies = parseFloat(event.target.avgCookies.value);

  


    for (var stores = 0; stores < seattleStores.length; stores++){
      if(storeName.toUpperCase() === seattleStores[stores].storeName.toUpperCase()){
        storeAlreadyExsits = true;
      }}
              var store = new CookieStore(storeName, minGuests, maxGuests, avgCookies);

              seattleStores.push(store);

              deleteTableRow('all-store-totals');
              store.populateDataToTable();
              createBottomLabelRow();
  }
