var tdData = {
    name: "",
    info: "",
    level: "",
    elem: "",
    value: "",
    number: "",
    rVal: 150,
    gVal: 150,
    bVal: 150,
    aVal: 150,
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
                if (tdd.name === "") {
                	tds.innerHTML = "<p>&nbsp;</p>";
                } else {
            		tds.innerHTML = "<p>"+tdd.name+"</p>";
                }
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
                hazardHolder = createEle("div"),
                hazIcon = createEle("span"),
                hazIn = createEle("input"),
                hazOut = createEle("input"),
                hazLabel = createEle("label"),
                brightsideHolder = createEle("div"),
                form = createEle("form");

            tds.innerHTML = "";

            hazIn.type = "range";
            hazIn.className = "hazIn";
            hazIn.max = 20;
            hazIn.value = tdd.rVal;
            hazIn.onchange = function(){ return homeUI.saveHazInput(tds,i,hazIn,tdd,z,hazOut) };
            
            hazOut.type = "text";
            hazOut.className = "hazOut";
            hazOut.readonly = true;
            hazOut.value = hazIn.value;

            hazLabel.className = "hazLabel";
            hazLabel.innerHTML = "HOW IMPORTANT IS THIS TASK?";
            
            hazIcon.innerHTML = "🚧";

            input1.type = "text";
            input1.className = "input1";
            input1.value = tdd.name;
            input1.placeholder = " WHAT'S YOUR GOAL";
            input1.onkeyup = function(){ return homeUI.saveInput1(tds, i, input1 , tdd, z) };
            
            hazardHolder.className = "hazardHolder";
            hazardHolder.append(hazLabel,hazIn,hazOut);
            
            brightsideHolder.className = "brightsideHolder";

            xOut.innerHTML = "❌";
            xOut.className = "xOut";
            xOut.onclick = homeUI.xOutFunc(tds, tdd);
            
            label.innerHTML = "GOAL ";
            
            form.append(label, input1, hazIcon, hazardHolder, brightsideHolder);

			tds.append(form, xOut);
	},
	xOutFunc: function(tds, tdd){
		return function(){
            if (tdd.name === "") {
            	tds.innerHTML = "<p>&nbsp;</p>";
            } else {
        		tds.innerHTML = "<p>"+tdd.name+"</p>";
            }
			setTimeout(function() {
            	takeFull(tds);
			}, 10);
		}
	},
	saveInput1: function(tds,i,input1,tdd,z) {
        tdd.name = input1.value;
		saveLS("trs" + z + "tds" + i, tdd);
	},
	saveHazInput: function(tds,i,hazIn,tdd,z,hazOut) {
		tdd.rVal = hazIn.value;
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		hazOut.value = tdd.rVal;
	}
}
