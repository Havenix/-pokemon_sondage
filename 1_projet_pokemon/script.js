function connexion() {
  let user = document.login.username.value;
  let password = document.login.password.value;

  if (user == "username" && password == "password") {
    document.location.href = "accueil.html";
  } else {
    alert("Erreur: Nom d'utilisateur ne fonctionne pas");
  }
}

function inscrire() {
  let inputCourriel = document.inscription2.email.value;
  let inputUsername = document.inscription2.user.value;
  let inputPassword = document.inscription2.pw.value;
  let inputConfirmation = document.inscription2.confirm.value;

  if (
    inputCourriel == "" ||
    inputUsername == "" ||
    inputPassword == "" ||
    inputConfirmation == ""
  ) {
    alert("Remplissez tout les champs du formulaire");
    return;
  }

  if (inputConfirmation != inputPassword) {
    alert("La confirmation du mot de passe est invalide.");
    return;
  }

  let utilisateur = {
    username: inputUsername,
    password: inputPassword,
    courriel: inputCourriel,
  };

  let utilisateurJson = JSON.stringify(utilisateur);

  if (typeof localStorage == "undefined") {
    alert(
      "Ce navigateur ne supporte pas de cookies, veuillez y activer les cookies"
    );
    return;
  }

  localStorage.setItem("cookie", utilisateurJson);
  alert("Utilisateur sauvegardé");

  document.getElementById("inscription").style.display = "none";
  document.getElementById("log").style.display = "block";
}

function Login() {
  let userJSON = localStorage.getItem("cookie");
  let utilisateur = JSON.parse(userJSON);

  let inputUsername = document.login.user.value;
  let inputPassword = document.login.pw.value;

  if (
    inputUsername == utilisateur.username &&
    inputPassword == utilisateur.password
  ) {
    document.location.href = "pokemonAccueil.html";
  } else {
    alert("Utilisateur invalide");
  }
}
function afficherInscription() {
  document.getElementById("inscription").style.display = "block";
  document.getElementById("log").style.display = "none";
}
function afficherContact() {
  document.getElementById("Contact").style.display = "block";
  document.getElementById("carrousel").style.display = "none";
  document.getElementById("zoneContenuItem").style.display = "none";
  document.getElementById("zoneContenuFacture").style.display = "none";
  document.getElementById("construction").style.display = "none";
}

//tableau + "for in" ou "for of"
const pokemonStart = ["1.Charmander", "2.Pikachu", "3.Squirtle", "4.Bulbasaur"];
let text = "";
for (let x of pokemonStart) {
  text += x + "<br>";
}
document.getElementById("txt").innerHTML = text;
//ajout 3 fonction dans le code"
(() => alert("Veuillez répondre à ce sondage"))();
//2) une deuxième qui est une fonction d’ordre supérieure

//3) une troisième qui est une fonction de fermeture

//1) Ajoutez 2 classes à votre code :

//➢ la classe Utilisateur : qui correspond aux utilisateurs de votre site web. xavier
class Utilisateur {
  constructor(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
  }
}
//➢ la classe Question qui correspond aux questions de votre sondage. sky(12)
class Question {
  constructor(question) {
    this.sentence = question;
  }
  present() {
    return " Question # " + this.sentence;
  }
}

class answer extends Question {
  constructor(question, rep) {
    super(question);
    this.answer = rep;
  }
  show() {
    return this.present() + ",  " + this.answer;
  }
}


//Késsé ta essayer de faire icite???? pcq ça marche pas et idk what it iz - MIRVEL
myQuestion1 = new answer(
  "1. Quel pokemon choissiriez vous pour commencer votre aventure?",
  "<br> a.pikachu <br> b.squirtle <br> c.bulbasaur <br> c.chamander"
);
document.getElementById("question").innerHTML = myQuestion1.show();

//YO btw euh s'il faut une page par question et que c'est 12 question obligatoire, on va se faire niquer avec le temps - MIRVEL

//question 1:  pokemon pour débuter l'aventure (DONE)
//question 2:  élément spécialité du dresseur  (FAUT LE LINK UP)
//question 3:  région où tu débute ton aventure
//question 4:  Ton moyen de transport (Bike, Trotinette, skate, rollerskate, monture de pokemon, etc...)
//question 5:  Quel est ton Pokémon préféré ?
//question 6:  quel est ton légendaire préféré?
//question 7:  lequel de ces pokemon est le plus fort?
//question 8:  quel pokemon choisirait tu pour combattre un Champion?
//question 9:  quel est selon toi l'élément de ce pokemon?
//question 10: quel est selon toi le nom de ce pokemon?
//question 11: quel est ton jeu préféré dans la série?
//question 12: Donnerais-tu l'argent que tu gagnes des combats à ta mère?
//question 13: Il est où ton père?

//2) Ajouter une sous-classe qui hérite d’une des classes créées. sky

//3) Instancier les objets nécessaires à votre code qui à partir des classes et sous-classe
//correspondantes. xavier

$(document).ready(function(){ 
  
  $(".primaryContained").on('click', function(){
  $(".comment").addClass("commentClicked");
});//end click
$("textarea").on('keyup.enter', function(){
  $(".comment").addClass("commentClicked");
});//end keyup
});//End Function

new Vue({
  el: "#commentaire",
  data:{
     title: 'Ajouter commentaire',
    newItem: '',
    item: [],
  },
  methods:{
    addItem  (){
    this.item.push(this.newItem);
      this.newItem = "";
    }
}

});