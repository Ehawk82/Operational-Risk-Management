var myUI;
var items = [ "Assess Risks", "Identify Hazards", "Make Risk Decisions", "Implement Controls", "Supervise", "Tools" ];


myUI = {
	init: () => {
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
            climateBtn = createEle("button"),
            goBtn = createEle("button"),
            homeBtn = createEle("button"),
            statsBtn = createEle("button"),
            climatePage = createEle("div"),
            goPage = createEle("div"),
            statsPage = createEle("div"),
            homePage = createEle("div");
        
        homePage.innerHTML = CommandPost;
        homePage.className = "pages";
        homePage.id = "homePage";

        statsPage.innerHTML = "<h1>STAT LOG</h1>";
        statsPage.className = "pages";
        statsPage.id = "statsPage";

        climatePage.innerHTML = "<h1>CLIMATE RECON</h1>";
        climatePage.className = "pages";
        climatePage.id = "climatePage";

        goPage.innerHTML = "<h1>CONTINGENCY REPORT</h1>";
        goPage.className = "pages";
        goPage.id = "goPage";

        climateBtn.innerHTML = "⛅";
        climateBtn.onclick = myUI.climateScreen(climateBtn, homePage, statsPage, climatePage, goPage);
        climateBtn.id = "climateBtn";
        climateBtn.disabled = false;

        goBtn.innerHTML = "🚦";
        goBtn.onclick = myUI.goScreen(goBtn, homePage, statsPage, climatePage, goPage);
        goBtn.id = "goBtn";
        goBtn.disabled = false;

        statsBtn.innerHTML = "〽";
        statsBtn.onclick = myUI.statsScreen(statsBtn, homePage, statsPage, climatePage, goPage);
        statsBtn.id = "statsBtn";
        statsBtn.disabled = false;

        homeBtn.innerHTML = "&#127969;";
        homeBtn.onclick = myUI.homeScreen(homeBtn, homePage, statsPage, climatePage, goPage);
        homeBtn.id = "homeBtn";
        homeBtn.disabled = true;

        b1.innerHTML = "🔳";
        b1.onclick = myUI.toggleFullScreen();

        tCell.className = "tCell";
        tCell.append(b1, homeBtn, statsBtn, goBtn, climateBtn);

		body.append(tCell, homePage, statsPage, climatePage, goPage);

        setTimeout(function(){ makeFull( tCell);makeFull(homePage); }, 150);
	},
    homeScreen: function(home, homePage, statsPage, climatePage, goPage){
        return function(){
            var x = bySelAll(".tCell_full button");
            for (var i = 0; i < x.length; i++){
                if (x[i].disabled === true) {
                    x[i].disabled = false;
                    var y = x[i].id.split("Btn"), z = bySel("#" + y[0] + "Page");
                    takeFull(z);
                    homeBtn.disabled = true;
                    makeFull(homePage);
                }
            }
        }
    },
    statsScreen: function(statsBtn, homePage, statsPage, climatePage, goPage){
        return function(){
            var x = bySelAll(".tCell_full button");
            for (var i = 0; i < x.length; i++){
                if (x[i].disabled === true) {
                    x[i].disabled = false;
                    var y = x[i].id.split("Btn"), z = bySel("#" + y[0] + "Page");
                    takeFull(z);
                    statsBtn.disabled = true;
                    makeFull(statsPage);
                }
            }
        }
    },
    goScreen: function(goBtn, homePage, statsPage, climatePage, goPage){
        return function(){
            var x = bySelAll(".tCell_full button");
            for (var i = 0; i < x.length; i++){
                if (x[i].disabled === true) {
                    x[i].disabled = false;
                    var y = x[i].id.split("Btn"), z = bySel("#" + y[0] + "Page");
                    takeFull(z);
                    goBtn.disabled = true;
                    makeFull(goPage);
                }
            }
        }
    },
    climateScreen: function(climateBtn, homePage, statsPage, climatePage, goPage){
        return function(){
            var x = bySelAll(".tCell_full button");
            for (var i = 0; i < x.length; i++){
                if (x[i].disabled === true) {
                    x[i].disabled = false;
                    var y = x[i].id.split("Btn"), z = bySel("#" + y[0] + "Page");
                    takeFull(z);
                    climateBtn.disabled = true;
                    makeFull(climatePage);
                }
            }
        }
    }
};

window.onload = () => {
    myUI.init();
};