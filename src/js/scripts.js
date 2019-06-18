var myUI;
var items = [ "Assess Risks", "Identify Hazards", "Make Risk Decisions", "Implement Controls", "Supervise", "Tools" ];
var ftBool = false;

myUI = {
	init: () => {
        var ftc = LSinit("ftBool", ftBool);
        
        var fff = parseLS("ftBool");
        myUI.doFTcheck(fff);

	},
    doFTcheck: function(fff){
        if (fff != true) {
            myUI.tutor(fff);
        } else {
            myUI.doRun();
        }
    },
    tutor: function(fff){
        var tutorPage = createEle("div"), m1 = createEle("div"), m2 = createEle("div"), acceptBtn = createEle("button");

        acceptBtn.innerHTML = "🆗";
        acceptBtn.className = "acceptBtn";
        acceptBtn.onclick = myUI.doRunPhase(tutorPage);

        m2.innerHTML = "This app was designed to help with decisions using a neat color coded modules, notekeeping, meditaction, breathing techniques, heart readings, and other key features to help with risk assessment";
        m2.className = "m2";

        m1.innerHTML = "<p>Color legend</p><p><span style='background:red;'>&nbsp;</span> - hazardous</p><p><span style='background:green;'>&nbsp;</span> - low risk</p><p><span style='background:yellow;'>&nbsp;</span> - medium risk.</p><p><span style='background:blue;'>&nbsp;</span> - more likely for success</p>";
        m1.className = "m1";
        
        tutorPage.innerHTML = "<h1>WELCOME TO OPERATIONAL RISK MANAGEMENT</h1>";
        tutorPage.className = "tutorPage";
        tutorPage.append(m1, m2, acceptBtn);

        body.append(tutorPage);
        setTimeout(function(){
            makeFull(tutorPage);
        },500);
    },
    doRunPhase: function(tutorPage){
        return function() {
            saveLS("ftBool", true);
            takeFull(tutorPage);
            setTimeout(function(){
                tutorPage.remove();
                myUI.doRun();
            },500);
        }
    },
    doRun: function(){
        var tdd = parseLS("tdData");
        setTimeout(function(){
            myUI.progressScreen(tdd);
        },100);
    },
    progressScreen: function(tdd){
        var screenBlocker = createEle("div"),
            progress = createEle("div"),
            bar = createEle("div");
            
        function move() {  
            myUI.myLoad(tdd);
            var width = 1;
            var id = setInterval(frame, 5);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    setTimeout(function(){
                        takeFull(screenBlocker);
                        setTimeout(function(){
                            screenBlocker.remove();
                        },500);
                    },500);
                } else {
                    width++; 
                    bar.style.width = width + '%'; 
                }
            }
        }
        bar.className = "bar";
        bar.onload = move();
       

        progress.className = "progress";
        progress.append(bar);


        screenBlocker.className = "screenBlocker_full";
        screenBlocker.append(progress);

        body.append(screenBlocker);
    },
	toggleFullScreen: () => {
        return function(){
			if (!document.fullscreenElement) {
            	document.documentElement.requestFullscreen();
        	} else {
            	if (document.exitFullscreen) {
                	document.exitFullscreen();
                }
            }
        }
	},
	myLoad: function(tdd) {
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
        
        homePage.className = "pages";
        homePage.id = "homePage";
        homePage.onload = homeUI.init(homePage,tdd);

        statsPage.innerHTML = "<h1>STAT LOG</h1>";
        statsPage.className = "pages";
        statsPage.id = "statsPage";
        statsPage.onload = statUI.init(statsPage,tdd);

        climatePage.innerHTML = "<h1>CLIMATE RECON</h1>";
        climatePage.className = "pages";
        climatePage.id = "climatePage";
        climatePage.onload = cmUI.init(climatePage,tdd);

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

        statsBtn.innerHTML = "📋";
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
        tCell.append(b1, homeBtn, statsBtn, climateBtn, goBtn);

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

window.onload = function() {
    myUI.init();
};
