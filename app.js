
let Seattle = {
    MinS: 23,
    MaxS: 65,
    AvrS: 6.5,
    // arrSeattle: [],
    forEachHour: function (MinS, MaxS) {
        var range = MaxS - MinS;
        var rand = (Math.random() * range) + MinS;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var hours = [ ["6am: ",], 
["7am: ",], 
["8am: ",], 
["8am: ",], 
["9am: ",], 
["10am: ",], 
["11am: ",], 
["12pm: ",],  
[" 1pm: ",], 
[" 2pm: ",], 
["3pm: ",], 
["4pm: ",], 
[" 5pm: ",], 
["6pm: ",], 
[" 7pm: ",], 
["Total: ",] ];

        var hourSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Seattle.MinS, Seattle.MaxS) * Seattle.AvrS;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hourSum = hourSum + hours[i][1];
            hours[15][1] = hourSum;
        }
        
        return hours;
    }
}


let Tokyo = {
    MinS: 3,
    MaxS: 24,
    AvrS: 1.2,
    arrSeattle: [],
    forEachHour: function (MinS, MaxS) {
        var range = MaxS - MinS;
        var rand = (Math.random() * range) + MinS;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var hours = [ ["6am: ",], 
        ["7am: ",], 
        ["8am: ",], 
        ["8am: ",], 
        ["9am: ",], 
        ["10am: ",], 
        ["11am: ",], 
        ["12pm: ",],  
        [" 1pm: ",], 
        [" 2pm: ",], 
        ["3pm: ",], 
        ["4pm: ",], 
        [" 5pm: ",], 
        ["6pm: ",], 
        [" 7pm: ",], 
        ["Total: ",] ];
        var hourSum = 0;
        for (i = 0; i < 15; i++) {
          
            var cookiesPerHour = this.forEachHour(Tokyo.MinS, Tokyo.MaxS) * Tokyo.AvrS;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hourSum = hourSum + hours[i][1];
            hours[15][1] = hourSum;
        }
        
        return hours;
    }
}

let Dubai = {
    MinS: 11,
    MaxS: 38,
    AvrS: 3.7,
    arrSeattle: [],
    forEachHour: function (MinS, MaxS) {
        var range = MaxS - MinS;
        var rand = (Math.random() * range) + MinS;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var hours = [ ["6am: ",], 
        ["7am: ",], 
        ["8am: ",], 
        ["8am: ",], 
        ["9am: ",], 
        ["10am: ",], 
        ["11am: ",], 
        ["12pm: ",],  
        [" 1pm: ",], 
        [" 2pm: ",], 
        ["3pm: ",], 
        ["4pm: ",], 
        [" 5pm: ",], 
        ["6pm: ",], 
        [" 7pm: ",], 
        ["Total: ",] ];
        var hourSum = 0;
        for (i = 0; i < 15; i++) {
         

            var cookiesPerHour = this.forEachHour(Dubai.MinS, Dubai.MaxS) * Dubai.AvrS;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hourSum = hourSum + hours[i][1];
            hours[15][1] = hourSum;
        }
        
        return hours;
    }
}


let Paris = {
    MinS: 20,
    MaxS: 38,
    AvrS: 2.3,
    arrSeattle: [],
    forEachHour: function (MinS, MaxS) {
        var range = MaxS - MinS;
        var rand = (Math.random() * range) + MinS;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var hours = [ ["6am: ",], 
        ["7am: ",], 
        ["8am: ",], 
        ["8am: ",], 
        ["9am: ",], 
        ["10am: ",], 
        ["11am: ",], 
        ["12pm: ",],  
        [" 1pm: ",], 
        [" 2pm: ",], 
        ["3pm: ",], 
        ["4pm: ",], 
        [" 5pm: ",], 
        ["6pm: ",], 
        [" 7pm: ",], 
        ["Total: ",] ];
        var hourSum = 0;
        for (i = 0; i < 15; i++) {
           
            var cookiesPerHour = this.forEachHour(Paris.MinS, Paris.MaxS) * Paris.AvrS;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hourSum = hourSum + hours[i][1];
            hours[15][1] = hourSum;
        }
        
        return hours;
    }
}



let Lima = {
    MinS: 2,
    MaxS: 16,
    AvrS: 4.6,
    arrSeattle: [],
    forEachHour: function (MinS, MaxS) {
        var range = MaxS - MinS;
        var rand = (Math.random() * range) + MinS;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var hours = [ ["6am: ",], 
        ["7am: ",], 
        ["8am: ",], 
        ["8am: ",], 
        ["9am: ",], 
        ["10am: ",], 
        ["11am: ",], 
        ["12pm: ",],  
        [" 1pm: ",], 
        [" 2pm: ",], 
        ["3pm: ",], 
        ["4pm: ",], 
        [" 5pm: ",], 
        ["6pm: ",], 
        [" 7pm: ",], 
        ["Total: ",] ];
        var hourSum = 0;
        for (i = 0; i < 15; i++) {
         

            var cookiesPerHour = this.forEachHour(Lima.MinS, Lima.MaxS) * Lima.AvrS;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hourSum = hourSum + hours[i][1];
            hours[15][1] = hourSum;
        }
        
        return hours;
    }
}