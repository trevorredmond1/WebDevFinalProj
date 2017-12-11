//interactions

document.getElementById("Interactions").addEventListener("click",
function(ev){
    changedata(ev.target.id);
});

//functions

function changedata(button){
    if (button === "intimg1"){
        document.getElementById("InfoBoxHeader").innerHTML = "Fender Stratocaster";
        document.getElementById("InfoBoxPara").innerHTML = "The Fender Stratocaster is one of the world's most iconic guitars. The Stratocaster maximizes its variety in tone and style, as it typically comes with 3 single coil pickups, the neck, middle and bridge, allowing you to select 5 different combinations of pickup pairings.";
        document.getElementById("InfoBoxImg").src = "img/strat.png";
    }
    
    else if (button === "intimg2"){
        document.getElementById("InfoBoxHeader").innerHTML = "Fender Telecaster";
        document.getElementById("InfoBoxPara").innerHTML = "The Fender Telecaster is another iconic Fender Guitar. Originating in 1950, it is one of the oldest solid body electric guitars to date. The Telecaster is most recognized by its unique shape and its twangy sound, caused by its lipstick tube style neck pickup. It is used in many different genres of music, but is dominant in country because of its twangy sound.";
        document.getElementById("InfoBoxImg").src = "img/tele.png";
    }
    
    else if (button === "intimg3"){
        document.getElementById("InfoBoxHeader").innerHTML = "Fender Jaguar";
        document.getElementById("InfoBoxPara").innerHTML = "The Fender Jaguar is a guitar that was originally designed to be a more diverse Stratocaster. They achieved this by adding many switches to the guitar to allow the player to customize the sound they get from the guitar. Despite this, the Jaguar still has a different sound that many people playing rock music prefer.";
        document.getElementById("InfoBoxImg").src = "img/jag.png";
    }
    
    else if (button === "intimg4"){
        document.getElementById("InfoBoxHeader").innerHTML = "Fender Jazzmaster";
        document.getElementById("InfoBoxPara").innerHTML = "The Fender Jazzmaster is a similar model to the Jaguar, but don't be fooled by its looks. Its P90 pickup combination makes it sound much different from the Jaguar, as the pickups provide a warm and thick sound. This model was designed for Jazz playing, but is also popular for Surf music.";
        document.getElementById("InfoBoxImg").src = "img/jazz.png";
    }
    
    else if (button === "intimg5"){
        document.getElementById("InfoBoxHeader").innerHTML = "Fender Mustang";
        document.getElementById("InfoBoxPara").innerHTML = "The Fender Mustang is a guitar similar to the Stratocaster, but differs in sound. Introduced in 1964, and it comes with two neck scale lengths, 24 and 22.5 inch. It was designed with comfort for all players as well as an option for a different sounding guitar. This guitar is often used in alternative rock bands.";
        document.getElementById("InfoBoxImg").src = "img/must.png";
    }
    
    else if (button === "intimg6"){
        document.getElementById("InfoBoxHeader").innerHTML = "Fender Duo-Sonic";
        document.getElementById("InfoBoxPara").innerHTML = "The Fender Duo-Sonic looks very similar to the Mustang, but its different sound is caused by its pickups. Its pickups are designed to have no feedback which gives it a different sound, making it very popular for Jazz players.";
        document.getElementById("InfoBoxImg").src = "img/duosonic.png";
    }
};