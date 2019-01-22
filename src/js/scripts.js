var myUI;
var items = [ "Assess Risks", "Identify Hazards", "Make Risk Decisions", "Implement Controls", "Supervise", "Tools" ];

myUI = {
	cEle: (x) => { return document.createElement(x) },
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
        var t1 = myUI.cEle("table"),
            b1 = myUI.cEle("button");

        b1.innerHTML = "⬛";
        b1.onclick = myUI.toggleFullScreen();
            
       
        for(var i = 0; i < 6; i++) { 
        	tr = myUI.cEle("tr");
        	tr.innerHTML = items[i];
        	t1.appendChild(tr);
        }
        t1.appendChild(b1);
		body.appendChild(t1);
	}
};

window.onload = () => {
    myUI.init();
};