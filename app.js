let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

let pais = ['Venezuela', 'Polonia', 'Alemania'];
let adjetivo = ['bella', 'hermosa', 'increible'];
let algo = ['contigo', 'sinti'];

function domainGenerator (primeraParte, segundaParte, terceraParte){
    for (let a=0; a<primeraParte.length; a++){
        for (let b=0; b<segundaParte.length; b++){
            for (let c=0; c<terceraParte.length; c++){
                console.log(primeraParte[a] + segundaParte[b] + terceraParte[c] + ".com");
            }
        }
    }
}

domainGenerator(pronoun,adj,noun);
domainGenerator(pais, adjetivo, algo);
