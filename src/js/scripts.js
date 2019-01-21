var myUI;


myUI = {
	cEle: (x) => { return document.createElement(x) },
	init: () => {
		console.log("init");

		myUI.myLoad();
	},
	myLoad: () => {
        var h1 = myUI.cEle("h1");

        h1.innerHTML = "This is an H1 element";

		body.appendChild(h1);
	}
};

window.onload = () => {
    myUI.init();
};