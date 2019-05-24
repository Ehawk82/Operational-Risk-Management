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
    bVal0: 0,
    bVal1: 0,
    bVal2: 0,
    bVal3: 0,
    bVal4: 0,
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
                hazardHolder = createEle("div"),
                hazFolder = createEle("div"),
                hazFolder1 = createEle("div"),
                hazFolder2 = createEle("div"),
                hazFolder3 = createEle("div"),
                hazFolder4 = createEle("div"),
                brIn = createEle("input"),
                brOut = createEle("input"),
                brLabel = createEle("label"),
                brIn1 = createEle("input"),
                brOut1 = createEle("input"),
                brLabel1 = createEle("label"),
                brIn2 = createEle("input"),
                brOut2 = createEle("input"),
                brLabel2 = createEle("label"),
                brIn3 = createEle("input"),
                brOut3 = createEle("input"),
                brLabel3 = createEle("label"),
                brIn4 = createEle("input"),
                brOut4 = createEle("input"),
                brLabel4 = createEle("label"),
                brFolder = createEle("div"),
                brFolder1 = createEle("div"),
                brFolder2 = createEle("div"),
                brFolder3 = createEle("div"),
                brFolder4 = createEle("div"),
                brightsideHolder = createEle("div"),
                form = createEle("form");

            tds.innerHTML = "";

            hazardHolder.className = "hazardHolder";
            hazardHolder.onload = hazLib.init(tds,i,tdd,z,label,xOut,input1,hazardHolder,hazIn,hazOut,hazLabel,hazIn1,hazOut1,hazLabel1,hazIn2,hazOut2,hazLabel2,hazIn3,hazOut3,hazLabel3,hazIn4,hazOut4,hazLabel4,hazFolder,hazFolder1,hazFolder2,hazFolder3,hazFolder4);
            
            brightsideHolder.className = "brightsideHolder";
            brightsideHolder.onload = brLib.init(tds,i,tdd,z,xOut,brIn,brOut,brLabel,brIn1,brOut1,brLabel1,brIn2,brOut2,brLabel2,brIn3,brOut3,brLabel3,brIn4,brOut4,brLabel4,brFolder,brFolder1,brFolder2,brFolder3,brFolder4,brightsideHolder);
            
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
	},
	savebrInput: function(tds,i,brIn,tdd,z,brOut) {
		tdd.bVal0 = brIn.value;
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		brOut.value = tdd.bVal0;
	},
	savebrInput1: function(tds,i,brIn1,tdd,z,brOut1) {
		tdd.bVal1 = brIn1.value;
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		brOut1.value = tdd.bVal1;
	},
	savebrInput2: function(tds,i,brIn2,tdd,z,brOut2) {
		var bool;
		tdd.bVal2 = brIn2.value;
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		if(tdd.bVal2 === "0"){
			bool = false;
		} else {
			bool = true;
		}

		brOut2.value = bool;
	},
	savebrInput3: function(tds,i,brIn3,tdd,z,brOut3) {
		tdd.bVal3 = brIn3.value;
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		brOut3.value = tdd.bVal3;
	},
	savebrInput4: function(tds,i,brIn4,tdd,z,brOut4) {
		tdd.bVal4 = brIn4.value;
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		brOut4.value = tdd.bVal4;
	}

}
