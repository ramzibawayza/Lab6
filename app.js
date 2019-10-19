var Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', 
'1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var seattle = {
    Min: 23,
    Max: 65,
    Avarge: 6.3,
    cookiesOfArray: [],
    RandomFunc: function () {
        var range = this.Max - this.Min;
        var rand = Math.floor(Math.random() * range) + this.Min;
        return rand;
    },
    CookiesPerHourFunc: function () {
        for (i = 0; i < 15; i++) {
            this.amountCookies = Math.ceil(this.Avarge * this.RandomFunc());
            this.cookiesOfArray.push(this.amountCookies);
        }
        return this.cookiesOfArray;
    },

}

seattle.CookiesPerHourFunc();

var Tokyo = {
    Min: 3,
    Max: 24,
    Avarge: 1.2,
    cookiesOfArray: [],
    Random: function () {
        var range = this.Max - this.Min;
        var rand = Math.floor(Math.random() * range) + this.Min;
        return rand;
    },
    CookiesPerHourFunc: function () {
        for (i = 0; i < 15; i++) {
            this.amountCookies = Math.ceil(this.Avarge * this.Random());
            this.cookiesOfArray.push(this.amountCookies);
        }
        return this.cookiesOfArray;
    },
}
Tokyo.CookiesPerHourFunc();


var Dubai = {
    Min: 11,
    Max: 38,
    Avarge: 3.7,
    cookiesOfArray: [],
    Random: function () {
        var range = this.Max - this.Min;
        var rand = Math.floor(Math.random() * range) + this.Min;
        return rand;
    },
    CookiesPerHourFunc: function () {
        for (i = 0; i < 15; i++) {
            this.amountCookies = Math.ceil(this.Avarge * this.Random());
            this.cookiesOfArray.push(this.amountCookies);
        }
        return this.cookiesOfArray;
    },
}
Dubai.CookiesPerHourFunc();

var Paris = {
    Min: 20,
    Max: 38,
    Avarge: 2.3,
    cookiesOfArray: [],
    Random: function () {
        var range = this.Max - this.Min;
        var rand = Math.floor(Math.random() * range) + this.Min;
        return rand;
    },
    CookiesPerHourFunc: function () {
        for (i = 0; i < 15; i++) {
            this.amountCookies = Math.ceil(this.Avarge * this.Random());
            this.cookiesOfArray.push(this.amountCookies);
        }
        return this.cookiesOfArray;
    },
}
Paris.CookiesPerHourFunc();

var Lima = {
    Min: 2,
    Max: 16,
    Avarge: 4.6,
    cookiesOfArray: [],
    Random: function () {
        var range = this.Max - this.Min;
        var rand = Math.floor(Math.random() * range) + this.Min;
        return rand;
    },
    CookiesPerHourFunc: function () {
        for (i = 0; i < 15; i++) {
            this.amountCookies = Math.ceil(this.Avarge * this.Random());
            this.cookiesOfArray.push(this.amountCookies);
        }
        return this.cookiesOfArray;
    },
}
Lima.CookiesPerHourFunc();


arrayStorenName = ["seattle", "Tokyo", "Dubai", "Paris", "Lima"];
arrayStoreValue = [seattle, Tokyo, Dubai, Paris, Lima];
for (let j = 0; j < arrayStorenName.length; j++) {
    var counterOfTotal = 0;
    document.write("<h2>", "* ", arrayStorenName[j], "</h2>");
    document.write("<ul>");
    for (i = 0; i < 15; i++) {
        counterOfTotal += arrayStoreValue[j].cookiesOfArray[i];
        document.write("<li>");
        document.write(Hours[i], ": ", arrayStoreValue[j].cookiesOfArray[i], " Cookies.");
        document.write("<br>");
        document.write("</li>");
    }
    document.write("<li>", "Total : ", counterOfTotal, " Cookies.");
    document.write("</ul>");
}









