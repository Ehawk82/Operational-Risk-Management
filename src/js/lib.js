var homeUI = {
	init: function(x){
		var h1 = createEle("h1"),
		    tableHolder = createEle("div"),
		    table = createEle("table");
        
        table.className = "ORMtable";
        for(let i = 0; i < 10; i++){
        	var trs = createEle("tr");
        	    
        	trs.className = "trs";
        	trs.id = "trs" + i;
            
            for (let i = 0; i < 6; i++) {
            	var tds = createEle("td");

            	tds.innerHTML = "&nbsp;";
        		tds.className = "tds";
        		tds.id = "tds" + i;
        		tds.onclick = homeUI.cellProtoToDo(tds, i);

        		trs.append(tds);
            }

            table.append(trs);
        }
		tableHolder.className = "tableHolder";
		tableHolder.append(table);

		h1.innerHTML = "OPERATIONAL RISK MANAGEMENT";

		x.append(h1, tableHolder);
	},
	cellProtoToDo: function(tds, i) {
    	return function() {
          	if (tds.className === "tds_full") {
          		return false;
          	} else {
          		makeFull(tds);
          		homeUI.runToDo(tds, i);
			}
    	}
	},
	runToDo: function(tds, i){
            var label = createEle("label"),
                xOut = createEle("div");

            xOut.innerHTML = "X";
            xOut.className = "xOut";

            label.innerHTML = "cell " + i;

			tds.append(label, xOut);
	}
}
