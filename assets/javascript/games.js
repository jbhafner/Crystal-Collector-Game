// *** Create crystal Object *** //
    var crystal = {
    	randomNumber: 1,
    	crystal1: 0,
    	crystal2: 0,
    	crystal3: 0,
    	crystal4: 0,
    	win: 0,
    	loss: 0,
    	currentTotal: 0,
    	numbersGuessed: [],
    };

    debugVariables()

// *** Funtions Section *** //

    function getTotalNumber() {
        var minNumber = 19;
        var maxNumber = 120;
        randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
        return randomNumber;
        console.log("Game random number within function: " + randomNumber)
    }

     function getCrystalNumber() {
        var minNumber = 1;
        var maxNumber = 12;
        randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
        return randomNumber;
        console.log("Crystal random number within function: " + randomNumber)
    }

    function debugVariables() {
    	console.log("Random Total: " + crystal.randomNumber + " /crystal 1 = " + crystal.crystal1 + " /Crystal 2 = " + crystal.crystal2 + " /Crystal 3 = " + crystal.crystal3 + " /Crystal 4 = " + crystal.crystal4);    	
    }   

    function updateCurrentTotal() {
        $("#gameCurrentTotal").text("Current Total: " + crystal.currentTotal);
    }

    function setRandomNumbers() {
        crystal.randomNumber = getTotalNumber();
        crystal.crystal1 = getCrystalNumber();
        crystal.crystal2 = getCrystalNumber();
        crystal.crystal3 = getCrystalNumber();
        crystal.crystal4 = getCrystalNumber();        
        debugVariables();
    }

    function updateWinLoss() {

        // If user gets the right number and wins
        if (crystal.currentTotal==crystal.randomNumber) {
            $("#gameStatus").text("You Win!!!");
            crystal.win++;
            $("#gameWin").text("Wins: " + crystal.win);
            console.log("Win Total is " + crystal.win);
            setRandomNumbers();
            resetOtherVariables();
        }

        // if user goes over and loses
        if (crystal.currentTotal>crystal.randomNumber){
            $("#gameStatus").text("You Lose ;-(");
            crystal.loss++;
            $("#gameLoss").text("Losses: " + crystal.loss);
            setRandomNumbers();
            resetOtherVariables();
        }    

    }

    function resetOtherVariables () {
        crystal.currentTotal = 0;
        numbersGuessed = [];
    $("#gameRandomTotal").text("Crystal Total: " + crystal.randomNumber);
    $("#gameCurrentTotal").text("Current Total: " + crystal.currentTotal);      
    }


// *** Program Logic Section *** // 

    setRandomNumbers();

   	// Write game total to index.html
	$("#gameRandomTotal").text("Crystal Total:" + crystal.randomNumber);

