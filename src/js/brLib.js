var brLib = {
	init: function(tds,i,tdd,z,xOut,brIn,brOut,brLabel,brIn1,brOut1,brLabel1,brIn2,brOut2,brLabel2,brIn3,brOut3,brLabel3,brIn4,brOut4,brLabel4,brFolder,brFolder1,brFolder2,brFolder3,brFolder4,brightsideHolder,form) {
		brIn4.type = "range";
        brIn4.className = "brIns";
        brIn4.max = 100;
        brIn4.value = tdd.bVal4;
        brIn4.onchange = function(){ return homeUI.savebrInput4(tds,i,brIn4,tdd,z,brOut4) };
        
        brOut4.type = "text";
        brOut4.className = "brOuts";
        brOut4.readOnly = true;
        brOut4.value = brIn4.value;

        brLabel4.className = "brLabels";
        brLabel4.innerHTML = "CHANCE OF SUCCESS";
      
        brIn3.type = "range";
        brIn3.className = "brIns";
        brIn3.max = 3;
        brIn3.value = tdd.bVal3;
        brIn3.onchange = function(){ return homeUI.savebrInput3(tds,i,brIn3,tdd,z,brOut3) };
        
        brOut3.type = "text";
        brOut3.className = "brOuts";
        brOut3.readOnly = true;
        brOut3.value = brIn3.value;

        brLabel3.className = "brLabels";
        brLabel3.innerHTML = "HOW MANY PEOPLE WANT YOU TO ACHIEVE THIS GOAL";
		var bool;
		if(tdd.bVal2 === 0){
			bool = false;
		} else {
			bool = true;
		}

        brIn2.type = "range";
        brIn2.className = "brIns";
        brIn2.max = 1;
        brIn2.value = tdd.bVal2;
        brIn2.onchange = function(){ return homeUI.savebrInput2(tds,i,brIn2,tdd,z,brOut2) };
        
        brOut2.type = "text";
        brOut2.className = "brOuts";
        brOut2.readOnly = true;
        brOut2.value = bool;

        brLabel2.className = "brLabels";
        brLabel2.innerHTML = "WILL THIS SAVE A LIFE";

        brIn1.type = "range";
        brIn1.className = "brIns";
        brIn1.max = 10;
        brIn1.value = tdd.bVal1;
        brIn1.onchange = function(){ return homeUI.savebrInput1(tds,i,brIn1,tdd,z,brOut1) };
        
        brOut1.type = "text";
        brOut1.className = "brOuts";
        brOut1.readOnly = true;
        brOut1.value = brIn1.value;

        brLabel1.className = "brLabels";
        brLabel1.innerHTML = "ASSET SUPPORT";

        brIn.type = "range";
        brIn.className = "brIns";
        brIn.max = 20;
        brIn.value = tdd.bVal0;
        brIn.onchange = function(){ return homeUI.savebrInput(tds,i,brIn,tdd,z,brOut) };
        
        brOut.type = "text";
        brOut.className = "brOuts";
        brOut.readOnly = true;
        brOut.value = brIn.value;

        brLabel.className = "brLabels";
        brLabel.innerHTML = "LUXURY OF TIME";

        brFolder.className = "brFolders";
        brFolder.append(brLabel,brIn,brOut);

        brFolder1.className = "brFolders";
        brFolder1.append(brLabel1,brIn1,brOut1);
        
        brFolder2.className = "brFolders";
        brFolder2.append(brLabel2,brIn2,brOut2);

        brFolder3.className = "brFolders";
        brFolder3.append(brLabel3,brIn3,brOut3);

        brFolder4.className = "brFolders";
        brFolder4.append(brLabel4,brIn4,brOut4);

        brightsideHolder.append(brFolder,brFolder1,brFolder2,brFolder3,brFolder4);
	}
};