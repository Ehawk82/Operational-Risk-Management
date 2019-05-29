var trLib = {
	init: function(tds,i,tdd,z,xOut,timerHolder,dateCase,dateOut,todayDate) {
        var dmnth = (todayDate.getMonth() < 10 ? '0' : '') + todayDate.getMonth();
        var dd = (todayDate.getDate() < 10 ? '0' : '') + todayDate.getDate();
        var ds = (todayDate.getSeconds() < 10 ? '0' : '') + todayDate.getSeconds();
        var dm = (todayDate.getMinutes() < 10 ? '0' : '') + todayDate.getMinutes();
        var dh = (todayDate.getHours() < 10 ? '0' : '') + todayDate.getHours();
        var dateEle = (+dmnth + 1) + "/" + dd + "/" + todayDate.getFullYear() + " " + dh + ":" + dm + ":" + ds + "</div>";
        
        dateOut.className = "dateOuts";
        dateOut.innerHTML = dateEle;

        dateCase.className = "dateCase";
        dateCase.append(dateOut);

        timerHolder.append(dateCase);
        tdd.date = dateOut.innerHTML;
        saveLS("trs" + z + "tds" + i, tdd);
	},
};