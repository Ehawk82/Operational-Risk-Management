var emoList = ["😱","😧","😦","🙁","😐","🤨","🙂","🙂","😊","😁"];
var tdData = {
    name: "",
    date: "6/04/2019 13:10:25",
    hVal0: 0,
    hVal1: 0,
    hVal2: 0,
    hVal3: 0,
    hVal4: 0,
    bVal0: 0,
    bVal1: 0,
    bVal2: 0,
    bVal3: 0,
    bVal4: 0,
    redVal: 0,
    greenVal: 0,
    blueVal: 0,
    alphaVal: 1,
    notes: "",
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

            for (let i = 0; i < 20; i++) {
            	var tds = createEle("td");
				LSinit("trs" + z + "tds" + i, tdData);
				let tdd = parseLS("trs" + z + "tds" + i);
                if (tdd.name === "") {
                	tds.innerHTML = "<p>&nbsp;</p><span class='hazIcon' style='background:rgba("+tdd.redVal+","+tdd.greenVal+",0,0);'>&nbsp;</span><span class='hazIcon' style='background:rgba(0,0,"+tdd.blueVal+",0);'>&nbsp;</span><h6 class='timerCase' style='color:rgba(0,0,0,0);'>" + tdd.date + "</h6>";
                } else {
            		tds.innerHTML = "<p>"+tdd.name+"</p><span class='hazIcon' style='background:rgba("+tdd.redVal+","+tdd.greenVal+",0,1);'>&nbsp;</span><span class='hazIcon' style='background:rgba(0,0,"+tdd.blueVal+",1);'>&nbsp;</span><h6 class='timerCase'>" + tdd.date + "</h6>";
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
            var xOut = createEle("div"),
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
                timerHolder = createEle("div"),
                dateCase = createEle("div"),
                dateOut = createEle("div"),
                todayDate = new Date();
                noteHolder = createEle("div"),
                ntFolder = createEle("div"),
                ntIn = createEle("textarea"),
                ntOut = createEle("div"),
                form = createEle("form");

            tds.innerHTML = "";

            hazardHolder.className = "hazardHolder";
            hazardHolder.onload = hazLib.init(tds,i,tdd,z,xOut,input1,hazardHolder,hazIn,hazOut,hazLabel,hazIn1,hazOut1,hazLabel1,hazIn2,hazOut2,hazLabel2,hazIn3,hazOut3,hazLabel3,hazIn4,hazOut4,hazLabel4,hazFolder,hazFolder1,hazFolder2,hazFolder3,hazFolder4);
            
            brightsideHolder.className = "brightsideHolder";
            brightsideHolder.onload = brLib.init(tds,i,tdd,z,xOut,brIn,brOut,brLabel,brIn1,brOut1,brLabel1,brIn2,brOut2,brLabel2,brIn3,brOut3,brLabel3,brIn4,brOut4,brLabel4,brFolder,brFolder1,brFolder2,brFolder3,brFolder4,brightsideHolder);
            
            timerHolder.className = "timerHolder";
            timerHolder.onload = trLib.init(tds,i,tdd,z,xOut,timerHolder,dateCase,dateOut,todayDate);
            
            noteHolder.className = "noteHolder";
            noteHolder.onload = ntLib.init(tds,i,tdd,z,xOut,ntIn,ntOut,ntFolder,noteHolder);

            xOut.innerHTML = "💾";
            xOut.className = "xOut";
            xOut.onclick = homeUI.xOutFunc(tds,i,input1,tdd,z,dateOut);
            
            form.append(input1, hazardHolder, brightsideHolder, timerHolder, noteHolder);

			tds.append(form, xOut);
			setTimeout(function(){
				makeFull(xOut);
			},420);
	},
	xOutFunc: function(tds,i,input1,tdd,z,dateOut){
		return function(){

            if (tdd.name === "") {
            	tds.innerHTML = "<p>&nbsp;</p><span class='hazIcon' style='background:rgba("+tdd.redVal+","+tdd.greenVal+",0,0);'>&nbsp;</span><span class='hazIcon' style='background:rgba(0,0,"+tdd.blueVal+",0);'>&nbsp;</span><h6 class='timerCase' style='color:rgba(0,0,0,0);'>"+ tdd.date +"</h6>";
            } else {
        		tds.innerHTML = "<p>"+tdd.name+"</p><span class='hazIcon' style='background:rgba("+tdd.redVal+","+tdd.greenVal+",0,1);'>&nbsp;</span><span class='hazIcon' style='background:rgba(0,0,"+tdd.blueVal+","+tdd.alphaVal+");'>&nbsp;</span><h6 class='timerCase'>" + tdd.date + "</h6>";
            }
 			var statsPage = bySel("#statsPage");
            	statsPage.innerHTML = "<h1>STAT LOG</h1>";

			setTimeout(function() {
            	takeFull(tds);
            	statUI.init(statsPage, tdd);
			}, 1);
		}
	},
	saveInput1: function(tds,i,input1,tdd,z) {
        tdd.name = input1.value;
        tdd.redVal = +tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4;
		tdd.greenVal = +tdd.bVal0 + +tdd.bVal1 + +tdd.bVal2 + +tdd.bVal3 + +tdd.bVal4;
		tdd.blueVal = ((+tdd.bVal0 + +tdd.bVal1 + +tdd.bVal4 + +tdd.bVal3 + +tdd.bVal4) - (+tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4));
		if(tdd.blueVal > 100){
			tdd.executable = true;
		}
		saveLS("trs" + z + "tds" + i, tdd);
	},
	saveHazInput: function(tds,i,hazIn,tdd,z,hazOut) {
		tdd.hVal0 = hazIn.value;
		tdd.redVal = +tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4;
		tdd.greenVal = +tdd.bVal0 + +tdd.bVal1 + +tdd.bVal2 + +tdd.bVal3 + +tdd.bVal4;
		tdd.blueVal = ((+tdd.bVal0 + +tdd.bVal1 + +tdd.bVal4 + +tdd.bVal3 + +tdd.bVal4) - (+tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4));
		if(tdd.blueVal > 100){
			tdd.executable = true;
		}
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		hazOut.value = tdd.hVal0;
	},
	saveHazInput1: function(tds,i,hazIn1,tdd,z,hazOut1) {
		tdd.hVal1 = hazIn1.value;
		tdd.redVal = +tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4;
		tdd.greenVal = +tdd.bVal0 + +tdd.bVal1 + +tdd.bVal2 + +tdd.bVal3 + +tdd.bVal4;
		tdd.blueVal = ((+tdd.bVal0 + +tdd.bVal1 + +tdd.bVal4 + +tdd.bVal3 + +tdd.bVal4) - (+tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4));
		if(tdd.blueVal > 100){
			tdd.executable = true;
		}
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		hazOut1.value = tdd.hVal1;
	},
	saveHazInput2: function(tds,i,hazIn2,tdd,z,hazOut2) {
		var bool;
		tdd.hVal2 = hazIn2.value;
		tdd.redVal = +tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4;
		tdd.greenVal = +tdd.bVal0 + +tdd.bVal1 + +tdd.bVal2 + +tdd.bVal3 + +tdd.bVal4;
		tdd.blueVal = ((+tdd.bVal0 + +tdd.bVal1 + +tdd.bVal4 + +tdd.bVal3 + +tdd.bVal4) - (+tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4));
		if(tdd.blueVal > 100){
			tdd.executable = true;
		}
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
		tdd.redVal = +tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4;
		tdd.greenVal = +tdd.bVal0 + +tdd.bVal1 + +tdd.bVal2 + +tdd.bVal3 + +tdd.bVal4;
		tdd.blueVal = ((+tdd.bVal0 + +tdd.bVal1 + +tdd.bVal4 + +tdd.bVal3 + +tdd.bVal4) - (+tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4));
		if(tdd.blueVal > 100){
			tdd.executable = true;
		}
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		hazOut3.value = tdd.hVal3;
	},
	saveHazInput4: function(tds,i,hazIn4,tdd,z,hazOut4) {
		tdd.hVal4 = hazIn4.value;
		tdd.redVal = +tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4;
		tdd.greenVal = +tdd.bVal0 + +tdd.bVal1 + +tdd.bVal2 + +tdd.bVal3 + +tdd.bVal4;
		tdd.blueVal = ((+tdd.bVal0 + +tdd.bVal1 + +tdd.bVal4 + +tdd.bVal3 + +tdd.bVal4) - (+tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4));
		if(tdd.blueVal > 100){
			tdd.executable = true;
		}
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		hazOut4.value = tdd.hVal4;
	},
	savebrInput: function(tds,i,brIn,tdd,z,brOut) {
		tdd.bVal0 = brIn.value;
		tdd.redVal = +tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4;
		tdd.greenVal = +tdd.bVal0 + +tdd.bVal1 + +tdd.bVal2 + +tdd.bVal3 + +tdd.bVal4;
		tdd.blueVal = ((+tdd.bVal0 + +tdd.bVal1 + +tdd.bVal4 + +tdd.bVal3 + +tdd.bVal4) - (+tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4));
		if(tdd.blueVal > 100){
			tdd.executable = true;
		}
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		brOut.value = tdd.bVal0;
	},
	savebrInput1: function(tds,i,brIn1,tdd,z,brOut1) {
		tdd.bVal1 = brIn1.value;
		tdd.redVal = +tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4;
		tdd.greenVal = +tdd.bVal0 + +tdd.bVal1 + +tdd.bVal2 + +tdd.bVal3 + +tdd.bVal4;
		tdd.blueVal = ((+tdd.bVal0 + +tdd.bVal1 + +tdd.bVal4 + +tdd.bVal3 + +tdd.bVal4) - (+tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4));
		if(tdd.blueVal > 100){
			tdd.executable = true;
		}
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		brOut1.value = tdd.bVal1;
	},
	savebrInput2: function(tds,i,brIn2,tdd,z,brOut2) {
		var bool;
		tdd.bVal2 = brIn2.value;
		tdd.redVal = +tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4;
		tdd.greenVal = +tdd.bVal0 + +tdd.bVal1 + +tdd.bVal2 + +tdd.bVal3 + +tdd.bVal4;
		tdd.blueVal = ((+tdd.bVal0 + +tdd.bVal1 + +tdd.bVal4 + +tdd.bVal3 + +tdd.bVal4) - (+tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4));
		if(tdd.blueVal > 100){
			tdd.executable = true;
		}
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
		tdd.redVal = +tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4;
		tdd.greenVal = +tdd.bVal0 + +tdd.bVal1 + +tdd.bVal2 + +tdd.bVal3 + +tdd.bVal4;
		tdd.blueVal = ((+tdd.bVal0 + +tdd.bVal1 + +tdd.bVal4 + +tdd.bVal3 + +tdd.bVal4) - (+tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4));
		if(tdd.blueVal > 100){
			tdd.executable = true;
		}
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		brOut3.value = tdd.bVal3;
	},
	savebrInput4: function(tds,i,brIn4,tdd,z,brOut4) {
		tdd.bVal4 = brIn4.value;
		tdd.redVal = +tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4;
		tdd.greenVal = +tdd.bVal0 + +tdd.bVal1 + +tdd.bVal2 + +tdd.bVal3 + +tdd.bVal4;
		tdd.blueVal = ((+tdd.bVal0 + +tdd.bVal1 + +tdd.bVal4 + +tdd.bVal3 + +tdd.bVal4) - (+tdd.hVal0 + +tdd.hVal1 + +tdd.hVal2 + +tdd.hVal3 + +tdd.hVal4));
		if(tdd.blueVal > 100){
			tdd.executable = true;
		}
		saveLS("trs" + z + "tds" + i, tdd);

		tdd = parseLS("trs" + z + "tds" + i);
		brOut4.value = tdd.bVal4;
	}
};
var statUI = {
	init: function(statsPage, tdd){
		for(let i = 0; i < 6; i++){
            var z = i;

            for (let i = 0; i < 20; i++) {
            	tdd = parseLS("trs" + z + "tds" + i, tdd);
            	var ps = createEle("div");

                ps.className = "ps";
                ps.style.background = "rgba(" + tdd.redVal + "," + tdd.greenVal + ",0,1)";

                if (tdd.name != "") {
                	ps.innerHTML = "<div class='sItemHolder'><span>Name: " + tdd.name + "</span><span>Notes: " + tdd.notes + "</span><span>Date: " + tdd.date + "</span><span>Risk Factor: " + tdd.redVal + "</span><span>Value Factor: " + tdd.greenVal + "</span><span>Positive Factor: " + tdd.blueVal + "</span><span>Execute: " + tdd.executable + "</span></div>";
					statsPage.append(ps);
				}
				
            }
        	
        }
        
	}
};
var cmUI = {
	init: function(climatePage,tdd){
		var climateHolder = createEle("div"),
		    climateForge = createEle("div"),
		    bsBtn = createEle("button"),
		    bbBtn = createEle("button"),
		    hsBtn = createEle("button");

		hsBtn.innerHTML = "❤";
		hsBtn.style.color = "maroon";
        hsBtn.className = "btns";
        hsBtn.onclick = cmUI.heartTech();

        bbBtn.innerHTML = "😤";
        bbBtn.className = "btns";
        bbBtn.onclick = cmUI.breathingTech();

        bsBtn.innerHTML = "🎧";
        bsBtn.className = "btns";
        bsBtn.onclick = cmUI.bodyScanner();

        climateForge.className = "climateForge";
        climateForge.append(bsBtn, bbBtn, hsBtn);
        climateHolder.className = "climateHolder";
        climateHolder.append(climateForge);

		climatePage.append(climateHolder);
	},
	heartTech: function(){
		return function(){
			var heartPage = createEle("div"),
				exitHR = createEle("button");
            
			exitHR.innerHTML = "❌";
   			exitHR.className = "exitHR";
   			exitHR.onclick = cmUI.exitHeartFunc(heartPage);

			heartPage.innerHTML = "<h1>HEART RATE</h1>";
   			heartPage.className = "heartPage";
   			heartPage.append(exitHR);

			body.append(heartPage);

			cmUI.scanHeart(heartPage);
		}
	},
	scanHeart: function(heartPage){
alert("to-do: getUserMedia API not available");
		/*
		window.AudioContext = window.AudioContext || window.webkitAudioContext;

	    const context = new AudioContext();

		navigator.mediaDevices.getUserMedia({audio: true}).
  	    then((stream) => {
		    const microphone = context.createMediaStreamSource(stream);
		    const filter = context.createBiquadFilter();

		    microphone.connect(filter);

			var frame = createEle("iframe");
            var data = stream.getAudioTracks();

			var d = data[0].getSettings();
	
			frame.sandbox = "allow-scripts";
			frame.className = "frame";
			frame.srcdoc = d.volume;


			updateFrame();

	    	function updateFrame(){
				setTimeout(function(){
					frame.srcdoc = d.volume;
					updateFrame();
				},1000);
			}
			heartPage.append(frame);

		});
		*/
/*
		navigator.mediaDevices.getUserMedia({ audio: true })
  		.then(stream => {
    		const mediaRecorder = new MediaRecorder(stream);
    		mediaRecorder.start();

    		const audioChunks = [];
   			mediaRecorder.addEventListener("dataavailable", event => {
      			audioChunks.push(event.data);
    		});

    		mediaRecorder.addEventListener("stop", () => {
      			const audioBlob = new Blob(audioChunks);

      			const audioUrl = URL.createObjectURL(audioBlob);
      			const audio = new Audio(audioUrl);
      			
      			//audio.play();
    		});
    		
    		setTimeout(() => {
      			mediaRecorder.stop();
    		}, 6000);
  		});

*/
	},
	exitHeartFunc: function(heartPage){
		return function(){
			heartPage.remove();
		}
	},
	breathingTech: function(){
		return function(){
			var breathPage = createEle("div"),
			    moodLabel = createEle("div"),
			    moodHolder = createEle("div"),
				exitBR = createEle("button");
            
			exitBR.innerHTML = "❌";
   			exitBR.className = "exitBR";
   			exitBR.onclick = cmUI.exitBreathFunc(breathPage);
            
   			moodLabel.innerHTML = "WHAT IS YOUR EMOTIONAL STATE?";
   			moodLabel.className = "moodLabel";

   			moodHolder.className = "moodHolder";
            for (var i = 0; i < 10; i++) {
            	var emo = createEle("button");

            	emo.innerHTML = emoList[i];
            	emo.onclick = cmUI.emoFunc(i, breathPage);
            	emo.className = "emoBtns";

            	moodHolder.append(emo);
            }
   			

			breathPage.innerHTML = "<h1>BREATHING</h1>";
   			breathPage.className = "breathPage";
   			breathPage.append(exitBR, moodHolder);
   			breathPage.append(exitBR,moodLabel,moodHolder);

			body.append(breathPage);
		}
	},
	emoFunc: function(i,breathPage){
		return function(){
			var brDiv = createEle("div"), brWidget = createEle("div");
            
            brWidget.innerHTML = "BREATHING WIDGET FOR LEVEL " + (i +1);

			brDiv.className = "brDiv";
			brDiv.append(brWidget);
            
            breathPage.append(brDiv);
		}
	},
	exitBreathFunc: function(breathPage){
		return function(){
			breathPage.remove();
		}
	},
	bodyScanner: function(){
		return function() {
			var scanPage = createEle("div"),
				scanPlay = createEle("button"),
			    exitScan = createEle("button");
   			
   			var b1 = new Audio("src/assets/b1.mp3");

   			exitScan.innerHTML = "❌";
   			exitScan.className = "exitScan";
   			exitScan.onclick = cmUI.exitScanFunc(scanPage, b1);

   			scanPlay.innerHTML = "▶";
   			scanPlay.className = "scanPlay";
   			scanPlay.onclick = cmUI.scanPlayFunc(scanPage, scanPlay, b1);

   			scanPage.innerHTML = "<h1>Wisdom Meditation guided by Steven Hickman</h1>";
   			scanPage.className = "scanPage";
   			scanPage.append(exitScan, scanPlay);

			body.append(scanPage);
		}
	},
	scanPlayFunc: function(scanPage, scanPlay, b1){
		return function(){
			scanPlay.disabled = true;

			player(b1);
			
			function player(b1){
				b1.volume = "0";
				b1.loop = false;
				b1.play();

				b1.addEventListener("ended", cmUI.endMeditation(scanPage, scanPlay, b1), false);
			}

		}
	},
	endMeditation: function(scanPage, scanPlay, b1){
		return function() {
			scanPlay.disabled = false;
		}
		
	},
	exitScanFunc: function(scanPage, b1){
		return function(){
			b1.pause();
b1.currentTime = 0;
			scanPage.remove();
		}
	}
};
