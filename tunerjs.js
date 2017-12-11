document.getElementById("letters").addEventListener("mouseover", function(ev){
    makesound(ev.target.id);
});

function makesound(button){
    if (button === "highE"){
        document.getElementById("highesound").play();
    }
    
    else if (button === "B"){
        document.getElementById("bsound").play();
    }
    
    else if (button === "G"){
        document.getElementById("gsound").play();
    }
    
    else if (button === "D"){
        document.getElementById("dsound").play();
    }
    
    else if (button === "A"){
        document.getElementById("asound").play();
    }
    
    else if (button === "E"){
        document.getElementById("lowesound").play();
    }
}
