
var timer;

var ID = function(elementId) { 
    return document.getElementById(elementId); 
}; 

//This function will begin meditation session after the user has selected a valid time
function startStop(){
    if (ID("startStop").innerHTML === "Begin New Session") {
        //if invalid choice is made ask again
        if (ID("time").value === "select time") {

            ID("error").innerHTML = "Please pick a length of time";
        }
        //start session if choice is valid
        else {
            ID("time").disabled = true;
            ID("error").innerHTML = "";
            ID("message").innerHTML = "Focus on your breath";
            var sec = ID("time").value;
            breathe();

            //timer interval
            timer = setInterval(function(){
                ID('timer').innerHTML= sec + " seconds remaining";
                sec--;

                //change breathe in and breathe out every 3 seconds
                if (sec % 5 === 0){
                    breathe();
                }

                //triggered when timer reaches zero
                if (sec < 0) {
                    clearInterval(timer);
                    ID("time").disabled = false;
                    ID('mainText').innerHTML = "Congrats"
                    ID("message").innerHTML = "Session Completed";
                    ID('timer').innerHTML = "Would you like to begin again?"
                    ID("startStop").innerHTML = "Begin New Session";
                }
            }, 1000);
            ID("startStop").innerHTML = "Stop Session";
        }
    }
    //cancel session early
    else if (ID("startStop").innerHTML === "Stop Session"){
        clearInterval(timer);
        ID('mainText').innerHTML = "Session Ended"
        ID("message").innerHTML = "";
        ID('timer').innerHTML = "Would you like to begin again?"
        ID("startStop").innerHTML = "Begin New Session";
        ID("time").disabled = false;
    }
}

//breath in breath out message
function breathe(){
    if (ID('mainText').innerHTML !== "Breathe In"){
        ID('mainText').innerHTML = "Breathe In";
    }
    else {
        ID('mainText').innerHTML = "Breathe Out";
    }
}