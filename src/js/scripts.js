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
        var t1 = createEle("table"),
            b1 = createEle("button");

        b1.innerHTML = "⬛";
        b1.onclick = myUI.toggleFullScreen();
            
       
        for(var i = 0; i < 6; i++) { 
        	tr = createEle("tr");

            tr.className = "trs";
            tr.id = "id_" + i;
        	tr.innerHTML = "<td>" + items[i] + "</td>";
            tr.onclick = myUI.trClicked(tr, i);
            t1.appendChild(tr);
        	
        }
        t1.appendChild(b1);
		body.appendChild(t1);
	},
    trClicked: (tr, i) => {
         return () => {
            makeFull(tr);
            tr.onclick = () => { takeFull(tr) };
         }
    }
};

window.onload = () => {
    myUI.init();
};