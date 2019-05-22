var homeUI = {
	init: function(x){
		var h1 = createEle("h1"),
		    tableHolder = createEle("div"),
		    table = createEle("table");
        
        table.className = "ORMtable";
        table.innerHTML = "table";

		tableHolder.className = "tableHolder";
		tableHolder.append(table);

		h1.innerHTML = "OPERATIONAL RISK MANAGEMENT";

		x.append(h1, tableHolder);
	}
}