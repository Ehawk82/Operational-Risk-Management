var myUI;
var items = [ "Assess Risks", "Identify Hazards", "Make Risk Decisions", "Implement Controls", "Supervise", "Tools" ];


myUI = {
	init: () => {
		console.log("init");
        
		myUI.myLoad();
	},
	toggleFullScreen: () => {
        return () => {
			if (!document.fullscreenElement) {

            	document.documentElement.requestFullscreen();
        	} else {
            	if (document.exitFullscreen) {
     
                	document.exitFullscreen();
                }
            }
        }
	},
	myLoad: () => {
        var tCell = createEle("div"),
            b1 = createEle("button"),
            arrow2Btn = createEle("button"),
            arrow1Btn = createEle("button"),
            climateBtn = createEle("button"),
            goBtn = createEle("button"),
            homeBtn = createEle("button"),
            statsBtn = createEle("button");
        
        arrow2Btn.innerHTML = "🔻";
        arrow2Btn.className = "arrow2Btn";
        arrow2Btn.onclick = myUI.arrow2Func(arrow1Btn, arrow2Btn, tCell);

        arrow1Btn.innerHTML = "🔺";
        arrow1Btn.onclick = myUI.arrow1Func(arrow1Btn, arrow2Btn, tCell);

        climateBtn.innerHTML = "⛅";
        climateBtn.onclick = myUI.climateScreen();

        goBtn.innerHTML = "🚦";
        goBtn.onclick = myUI.goScreen();

        statsBtn.innerHTML = "〽";
        statsBtn.onclick = myUI.statsScreen();

        homeBtn.innerHTML = "&#127969;";
        homeBtn.onclick = myUI.homeScreen();

        b1.innerHTML = "🔳";
        b1.onclick = myUI.toggleFullScreen();

        tCell.className = "tCell";
        tCell.append(b1, homeBtn, statsBtn, goBtn, climateBtn, arrow1Btn);

		body.append(tCell, arrow2Btn);

        setTimeout(function(){ makeFull( tCell); }, 150);
	},
    homeScreen: function(){
        return function(){
            alert("homeScreen function");
        }
    },
    statsScreen: function(){
        return function(){
            alert("statsScreen function");
        }
    },
    goScreen: function(){
        return function(){
            alert("goScreen function");
        }
    },
    climateScreen: function(){
        return function(){
            alert("climateScreen function");
        }
    },
    arrow1Func: function(arrow1Btn, arrow2Btn, tCell){
        return function(){
            makeFull(arrow2Btn);
            takeFull(tCell);
        }
    },
    arrow2Func: function(arrow1Btn, arrow2Btn, tCell){
        return function(){
            makeFull(tCell);
            takeFull(arrow2Btn);
        }
    }
};

window.onload = () => {
    myUI.init();
};