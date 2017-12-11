/***variables***/

var bodyinput = document.quiz.bodytype,
    neckinput = document.quiz.necktype,
    pickupinput = document.quiz.pickuptype,
    guitarcolor = document.quiz.color;


/***pricing***/

function bodytype(){
    var bodycost = 0;
    
    if (bodyinput.value === "Stratocaster"){
        bodycost = 1500;
        return bodycost;
    }
    
    else if (bodyinput.value === "Telecaster"){
        bodycost = 1400;
        return bodycost;
    }
    
    else if (bodyinput.value === "Jaguar"){
        bodycost = 1500;
        return bodycost;
    }
    
    else if (bodyinput.value === "Jazzmaster"){
        bodycost = 1450;
        return bodycost;
    }
    
    else if (bodyinput.value === "Mustang"){
        bodycost = 1200;
        return bodycost;
    }
    
    else if (bodyinput.value === "Duo-Sonic"){
        bodycost = 1100;
        return bodycost;
    }
};

function necktype(){
    var neckcost = 0;
    
    if (neckinput.value === "Maple"){
        neckcost = 200;
        return neckcost;
    }
    
    else if (neckinput.value === "Rosewood"){
        neckcost = 250;
        return neckcost;
    }
    
    else if (neckinput.value === "Ebony"){
        neckcost = 350;
        return neckcost;
    }
};

function pickuptype(){
    var pickupcost = 0;
    
    if (pickupinput.value === "Single Coil"){
        pickupcost = 170;
        return pickupcost;
    }
    
    if (pickupinput.value === "Texmex"){
        pickupcost = 160;
        return pickupcost;
    }
    
    if (pickupinput.value === "Humbuckers"){
        pickupcost = 220;
        return pickupcost;
    }
    
    if (pickupinput.value === "P90"){
        pickupcost = 200;
        return pickupcost;
    }
};

function color(){
    var colorcost = 0;
    if (guitarcolor && guitarcolor.value){
        colorcost = 50;
        return colorcost;
    }
    
    else {
        colorcost = colorcost;
        return colorcost;
    }
};

function calculateguitarcost(body, neck, pickup, color){
    var price = (body + neck + pickup + color);
    return price;
    
};

function check(){
    var bodyfunc = bodytype(),
        neckfunc = necktype(),
        pickupfunc = pickuptype(),
        colorfunc = color(),
        main = calculateguitarcost(bodyfunc, neckfunc, pickupfunc, colorfunc);
    
    alert("The cost of your guitar is: $"+main);
    
}


