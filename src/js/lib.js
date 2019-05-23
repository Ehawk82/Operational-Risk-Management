var tdData = {
    name: "&nbsp;",
    info: "",
    level: "",
    elem: "",
    value: "",
    number: "",
    executable: false
};
var homeUI = {
	init: function(x, tdd){

		var h1 = createEle("h1"),
		    tableHolder = createEle("div"),
		    table = createEle("table");
        
        table.className = "ORMtable";
        for(let i = 0; i < 6; i++){
        	var trs = createEle("tr");
        	    
        	trs.className = "trs";
        	trs.id = "trs" + i;
            var z = i;
            for (let i = 0; i < 6; i++) {
            	var tds = createEle("td");
LSinit("trs" + z + "tds" + i, tdData);
let tdd = parseLS("trs" + z + "tds" + i);
            	tds.innerHTML = tdd.name;
        		tds.className = "tds";
        		tds.id = "tds" + i;
        		tds.onclick = homeUI.cellProtoToDo(tds, i, tdd, z);

        		trs.append(tds);
            }

            table.append(trs);
        }
		tableHolder.className = "tableHolder";
		tableHolder.append(table);

		h1.innerHTML = "OPERATIONAL RISK MANAGEMENT";

		x.append(h1, tableHolder);
	},
	cellProtoToDo: function(tds, i, tdd, z) {
    	return function() {
          	if (tds.className === "tds_full") {
          		return false;
          	} else {
          		makeFull(tds);
          		homeUI.runToDo(tds, i, tdd, z);
			}
    	}
	},
	runToDo: function(tds, i, tdd, z){
            var label = createEle("label"),
                xOut = createEle("div"),
                input1 = createEle("input"),
                form = createEle("form");
            tds.innerHTML = "";
            input1.type = "text";
            input1.className = "input1";
            input1.value = tdd.name;
            input1.onkeyup = function(){ return homeUI.saveInput1(tds, i, input1 , tdd, z); }

            xOut.innerHTML = "❌";
            xOut.className = "xOut";
            xOut.onclick = homeUI.xOutFunc(tds, tdd);
            
            label.innerHTML = "HAZARD ";
            
            form.append(label, input1);

			tds.append(form, xOut);
	},
	xOutFunc: function(tds, tdd){
		return function(){
			tds.innerHTML = tdd.name;

			setTimeout(function() {
            	takeFull(tds);
			}, 10)
            
		}
	},
	saveInput1: function(tds, i, input1 , tdd, z) {
        
        tdd.name = input1.value;

		saveLS("trs" + z + "tds" + i, tdd);
	}
}
