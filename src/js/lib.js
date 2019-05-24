var tdData = {
    name: "",
    info: "",
    level: "",
    elem: "",
    value: "",
    number: "",
    hVal0: 0,
    hVal1: 0,
    hVal2: 0,
    hVal3: 0,
    hVal4: 0,
    redVal: 0,
    executable: false
};
var homeUI = {
	init: function(x,tdd){

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
                saveIcon = createEle("input"),
                hazIn = createEle("input"),
                hazOut = createEle("input"),
                hazLabel = createEle("label"),
                hazIn1 = createEle("input"),
                hazOut1 = createEle("input"),
                hazLabel1 = createEle("label"),
                hazIn2 = createEle("input"),
                hazOut2 = createEle("input"),
                hazLabel2 = createEle("label"),
                hazIn3 = createEle("input"),
                hazOut3 = createEle("input"),
                hazLabel3 = createEle("label"),
                hazIn4 = createEle("input"),
                hazOut4 = createEle("input"),
                hazLabel4 = createEle("label"),
                hazFolder = createEle("div"),
                hazFolder1 = createEle("div"),
                hazFolder2 = createEle("div"),
                hazFolder3 = createEle("div"),
                hazFolder4 = createEle("div"),
                brightsideHolder = createEle("div"),
                form = createEle("form");

            tds.innerHTML = "";

            hazIn4.type = "range";
            hazIn4.className = "hazIn2";
            hazIn4.max = 100;
            hazIn4.value = tdd.hVal4;
            hazIn4.onchange = function(){ return homeUI.saveHazInput4(tds,i,hazIn4,tdd,z,hazOut4) };
            
            hazOut4.type = "text";
            hazOut4.className = "hazOut1";
            hazOut4.readOnly = true;
            hazOut4.value = hazIn4.value;

            hazLabel4.className = "hazLabel1";
            hazLabel4.innerHTML = "CHANCE OF FAILURE";
          
            hazIn3.type = "range";
            hazIn3.className = "hazIn3";
            hazIn3.max = 3;
            hazIn3.value = tdd.hVal3;
            hazIn3.onchange = function(){ return homeUI.saveHazInput3(tds,i,hazIn3,tdd,z,hazOut3) };
            
            hazOut3.type = "text";
            hazOut3.className = "hazOut3";
            hazOut3.readOnly = true;
            hazOut3.value = hazIn3.value;

            hazLabel3.className = "hazLabel3";
            hazLabel3.innerHTML = "HOW MANY PEOPLE DO NOT WANT YOU TO ACHIEVE THIS GOAL";
			var bool;
			if(tdd.hVal2 === "0"){
				bool = false;
			} else {
				bool = true;
			}
            hazIn2.type = "range";
            hazIn2.className = "hazIn2";
            hazIn2.max = 1;
            hazIn2.value = tdd.hVal2;
            hazIn2.onchange = function(){ return homeUI.saveHazInput2(tds,i,hazIn2,tdd,z,hazOut2) };
            
            hazOut2.type = "text";
            hazOut2.className = "hazOut1";
            hazOut2.readOnly = true;
            hazOut2.value = bool;

            hazLabel2.className = "hazLabel1";
            hazLabel2.innerHTML = "HARM TO OTHERS";

            hazIn1.type = "range";
            hazIn1.className = "hazIn1";
            hazIn1.max = 10;
            hazIn1.value = tdd.hVal1;
            hazIn1.onchange = function(){ return homeUI.saveHazInput1(tds,i,hazIn1,tdd,z,hazOut1) };
            
            hazOut1.type = "text";
            hazOut1.className = "hazOut1";
            hazOut1.readOnly = true;
            hazOut1.value = hazIn1.value;

            hazLabel1.className = "hazLabel1";
            hazLabel1.innerHTML = "OBSERVE ENVIRONMENTAL RISKS";

            hazIn.type = "range";
            hazIn.className = "hazIn";
            hazIn.max = 20;
            hazIn.value = tdd.hVal0;
            hazIn.onchange = function(){ return homeUI.saveHazInput(tds,i,hazIn,tdd,z,hazOut) };
            
            hazOut.type = "text";
            hazOut.className = "hazOut";
            hazOut.readOnly = true;
            hazOut.value = hazIn.value;

            hazLabel.className = "hazLabel";
            hazLabel.innerHTML = "IMPORTANCE OF TASK";

            saveIcon.className = "saveIcon";
            saveIcon.value = "💾";
            saveIcon.type = "button";

            input1.type = "text";
            input1.className = "input1";
            input1.value = tdd.name;
            input1.placeholder = " WHAT'S YOUR GOAL";
            input1.onkeyup = function(){ return homeUI.saveInput1(tds,i,input1,tdd,z) };
            
            hazFolder.className = "hazFolders";
            hazFolder.append(hazLabel,hazIn,hazOut);

            hazFolder1.className = "hazFolders";
            hazFolder1.append(hazLabel1,hazIn1,hazOut1);
            
            hazFolder2.className = "hazFolders";
            hazFolder2.append(hazLabel2,hazIn2,hazOut2);

            hazFolder3.className = "hazFolders";
            hazFolder3.append(hazLabel3,hazIn3,hazOut3);

            hazFolder4.className = "hazFolders";
            hazFolder4.append(hazLabel4,hazIn4,hazOut4);
            hazardHolder.className = "hazardHolder";
            hazardHolder.append(hazFolder,hazFolder1,hazFolder2,hazFolder3,hazFolder4);
            
            brightsideHolder.className = "brightsideHolder";

            xOut.innerHTML = "💾";
            xOut.className = "xOut";
            xOut.onclick = homeUI.xOutFunc(tds, tdd);
            
            label.innerHTML = "GOAL ";
            
            form.append(label, input1, hazardHolder, brightsideHolder);

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
		tdd.hVal0 = hazIn.value;
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		hazOut.value = tdd.hVal0;
	},
	saveHazInput1: function(tds,i,hazIn1,tdd,z,hazOut1) {
		tdd.hVal1 = hazIn1.value;
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		hazOut1.value = tdd.hVal1;
	},
	saveHazInput2: function(tds,i,hazIn2,tdd,z,hazOut2) {
		var bool;
		tdd.hVal2 = hazIn2.value;
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		if(tdd.hVal2 === "0"){
			bool = false;
		} else {
			bool = true;
		}

		hazOut2.value = bool;
	},
	saveHazInput3: function(tds,i,hazIn3,tdd,z,hazOut3) {
		tdd.hVal3 = hazIn3.value;
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		hazOut3.value = tdd.hVal3;
	},
	saveHazInput4: function(tds,i,hazIn4,tdd,z,hazOut4) {
		tdd.hVal4 = hazIn4.value;
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		hazOut4.value = tdd.hVal4;
	}

}
