var ntLib = {
	init: function(tds,i,tdd,z,xOut,ntIn,ntOut,ntFolder,noteHolder) {

        ntIn.className = "ntIns";
        ntIn.max = 20;
        ntIn.value = tdd.notes;
        ntIn.spellcheck = false;
        ntIn.onfocus = function(){ return ntLib.focuser(ntIn) };
        ntIn.onblur = function(){ return ntLib.blurer(ntIn) };
        ntIn.onkeyup = function(){ return ntLib.saventInput(tds,i,ntIn,tdd,z,ntOut) };
        
        ntOut.className = "ntOuts";
        ntOut.innerHTML = tdd.notes;

        ntFolder.className = "ntFolders";
        ntFolder.append(ntIn,ntOut);

        noteHolder.append(ntFolder);
	},
        saventInput: function(tds,i,ntIn,tdd,z,ntOut){
                tdd.notes = ntIn.value;
                saveLS("trs" + z + "tds" + i, tdd);
                tdd = parseLS("trs" + z + "tds" + i, tdd);

                ntOut.innerHTML = tdd.notes;
        },
        focuser: function(ntIn){
                if (ntIn.className === "ntIns") {
                        makeFull(ntIn);
                } else {
                        return false;
                }
        },
        blurer: function(ntIn){
                if (ntIn.className === "ntIns_full") {
                        takeFull(ntIn);
                } else {
                        return false;
                }
        }
};