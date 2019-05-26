var hazLib = {
	init: function(tds,i,tdd,z,xOut,input1,hazardHolder,hazIn,hazOut,hazLabel,hazIn1,hazOut1,hazLabel1,hazIn2,hazOut2,hazLabel2,hazIn3,hazOut3,hazLabel3,hazIn4,hazOut4,hazLabel4,hazFolder,hazFolder1,hazFolder2,hazFolder3,hazFolder4) {
        	hazIn4.type = "range";
                hazIn4.className = "hazIns";
                hazIn4.max = 100;
                hazIn4.value = tdd.hVal4;
                hazIn4.onchange = function(){ return homeUI.saveHazInput4(tds,i,hazIn4,tdd,z,hazOut4) };
                
                hazOut4.type = "text";
                hazOut4.className = "hazOuts";
                hazOut4.readOnly = true;
                hazOut4.value = hazIn4.value;

                hazLabel4.className = "hazLabels";
                hazLabel4.innerHTML = "CHANCE OF FAILURE";
              
                hazIn3.type = "range";
                hazIn3.className = "hazIns";
                hazIn3.max = 15;
                hazIn3.value = tdd.hVal3;
                hazIn3.onchange = function(){ return homeUI.saveHazInput3(tds,i,hazIn3,tdd,z,hazOut3) };
                
                hazOut3.type = "text";
                hazOut3.className = "hazOuts";
                hazOut3.readOnly = true;
                hazOut3.value = hazIn3.value;

                hazLabel3.className = "hazLabels";
                hazLabel3.innerHTML = "HOW MANY PEOPLE DO NOT WANT YOU TO ACHIEVE THIS GOAL";
        		var bool;
        		if(tdd.hVal2 === 0){
        			bool = false;
        		} else {
        			bool = true;
        		}

                hazIn2.type = "range";
                hazIn2.className = "hazIns";
                hazIn2.max = 100;
                hazIn2.step = 100;
                hazIn2.value = tdd.hVal2;
                hazIn2.onchange = function(){ return homeUI.saveHazInput2(tds,i,hazIn2,tdd,z,hazOut2) };
                
                hazOut2.type = "text";
                hazOut2.className = "hazOuts";
                hazOut2.readOnly = true;
                hazOut2.value = bool;

                hazLabel2.className = "hazLabels";
                hazLabel2.innerHTML = "HARM TO OTHERS";

                hazIn1.type = "range";
                hazIn1.className = "hazIns";
                hazIn1.max = 20;
                hazIn1.value = tdd.hVal1;
                hazIn1.onchange = function(){ return homeUI.saveHazInput1(tds,i,hazIn1,tdd,z,hazOut1) };
                
                hazOut1.type = "text";
                hazOut1.className = "hazOuts";
                hazOut1.readOnly = true;
                hazOut1.value = hazIn1.value;

                hazLabel1.className = "hazLabels";
                hazLabel1.innerHTML = "OBSERVE ENVIRONMENTAL RISKS";

                hazIn.type = "range";
                hazIn.className = "hazIns";
                hazIn.max = 20;
                hazIn.value = tdd.hVal0;
                hazIn.onchange = function(){ return homeUI.saveHazInput(tds,i,hazIn,tdd,z,hazOut) };
                
                hazOut.type = "text";
                hazOut.className = "hazOuts";
                hazOut.readOnly = true;
                hazOut.value = hazIn.value;

                hazLabel.className = "hazLabels";
                hazLabel.innerHTML = "IMPORTANCE OF TASK";

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

                hazardHolder.append(hazFolder,hazFolder1,hazFolder2,hazFolder3,hazFolder4);
        }
};