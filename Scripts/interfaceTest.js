function returnAutoMsg(text){
    if(text == "oi"){
        
        var quotes = new Array("Oi!", "Oie!", "Olá!", "Oi :)");
        randno = quotes[Math.floor( Math.random() * quotes.length )];

        return randno;
    }
    else if(text == "tudo bem?"){
        var quotes = new Array("Estou ótima, obrigada, como posso ajudar?", "Tudo ótimo! Como posso ajudar?");
        randno = quotes[Math.floor( Math.random() * quotes.length )];

        return randno;
    }
    else if(text == "qual é o melhor smartphone?"){
        
    }
    else{
        return "Desculpe, não entendi.";
    }
}