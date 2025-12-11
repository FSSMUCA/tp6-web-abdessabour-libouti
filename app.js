function showPage(id) {
    // cacher toutes les pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // afficher la page cliquée
    document.getElementById(id).classList.add('active');
}
 // Calculactrice FSSM - fonction

// Récupérer le formulaire
const formulaire = document.getElementById('monFormulaire');

// Ajouter l'écouteur d'événement
formulaire.addEventListener('submit', function(event) {
    // Empêche le rechargement de la page (comportement par défaut)
    event.preventDefault();
    
    // Exécute votre fonction
    Calculatrice();
});

// Votre fonction
function Calculatrice() {
    const nombre1 = parseFloat(document.getElementById('nombreA').value);
    const nombre2 = parseFloat(document.getElementById('nombreB').value);
    const operation = document.getElementById('operation').value;
     const errorOutput = document.getElementById('errorOutput');
      const resultOutput = document.getElementById('resultOutput');
        resultOutput.textContent = '';
        errorOutput.textContent = '';
      if (isNaN(nombre1) || isNaN(nombre2)) {
        errorOutput.textContent ="Veuillez entrer des nombres valides dans les deux champs.";
        return; // Arrêter l'exécution
    }
    
    let resultat;
    switch (operation){
        case 'addition': resultat= nombre1+nombre2; break;
        case 'soustraction': resultat= nombre1-nombre2; break;
        case 'multiplication': resultat= nombre1*nombre2;break;
        case 'division':
            if(nombre2!==0){
                resultat= nombre1/nombre2;
            }else{
                errorOutput.textContent ="Erreur: Division par zéro n'est pas permise";
                 errorOutput.style.color = 'red';
                  if (resultOutput) {
                 resultOutput.textContent = '';
           }
            }
             break;
        default:
            errorOutput.textContent ="Opération non reconnue. Veuillez choisir une opération valide.";
              errorOutput.style.color = 'red';
            return; // Arrêter l'exécution
    }
     resultOutput.textContent = `Résultat : ${resultat}`;
      ajouterAHistorique(nombre1, nombre2, operation, resultat);
    
}
// Tableau pour stocker l'historique en mémoire
let historique = [];

// Initialiser l'historique depuis localStorage si disponible
function initialiserHistorique() {
    const historiqueSauvegarde = localStorage.getItem('calculatriceHistorique');
    if (historiqueSauvegarde) {
        historique = JSON.parse(historiqueSauvegarde);
        afficherHistorique();
    }
}

// Fonction pour ajouter un calcul à l'historique
function ajouterAHistorique(nombre1, nombre2, operation, resultat) {
    // Créer l'objet calcul
    const calcul = {
        id: Date.now(), // Identifiant unique basé sur le timestamp
        nombre1: nombre1,
        nombre2: nombre2,
        operation: operation,
        resultat: resultat,
        
    };
    
    // Ajouter au début du tableau (le plus récent en premier)
    historique.unshift(calcul);
    
    // Limiter l'historique à 20 entrées maximum
    if (historique.length > 20) {
        historique.pop(); // Supprimer le plus ancien
    }
    
    // Sauvegarder dans localStorage
    localStorage.setItem('calculatriceHistorique', JSON.stringify(historique));
    
    // Mettre à jour l'affichage
    afficherHistorique();
}

// Fonction pour afficher l'historique
function afficherHistorique() {
    const historyList = document.getElementById('historyList');
    const clearAllButton = document.getElementById('clearAllHistory');
    
    // Vider la liste actuelle
    historyList.innerHTML = '';
    
    // Si l'historique est vide, cacher le bouton et afficher un message
    if (historique.length === 0) {
        clearAllButton.style.display = 'none';
        historyList.innerHTML = '<li class="empty-history">Aucun calcul dans l\'historique</li>';
        return;
    }
    
    // Afficher le bouton de suppression
    clearAllButton.style.display = 'block';
    
    // Ajouter chaque calcul à la liste
    historique.forEach(calcul => {
        const listItem = document.createElement('li');
        listItem.className = 'history-item';
        listItem.dataset.id = calcul.id; // Stocker l'ID pour la suppression
        
        // Déterminer le symbole de l'opération
        const symbole = getSymboleOperation(calcul.operation);
        
        // Créer le contenu de l'élément
        listItem.innerHTML = `
            <div class="history-content">
                <span class="history-calc">${calcul.nombre1} ${symbole} ${calcul.nombre2} = ${calcul.resultat}</span>
                
            </div>
            <button class="delete-history-item" onclick="supprimerDeHistorique(${calcul.id})">  <i class="bi bi-trash3-fill"></i> </button>
        `;
        
        historyList.appendChild(listItem);
    });
}

// Fonction pour supprimer un élément spécifique
function supprimerDeHistorique(id) {
    // Filtrer pour supprimer l'élément avec l'ID donné
    historique = historique.filter(calcul => calcul.id !== id);
    
    // Sauvegarder dans localStorage
    localStorage.setItem('calculatriceHistorique', JSON.stringify(historique));
    
    // Mettre à jour l'affichage
    afficherHistorique();
}

// Fonction pour effacer tout l'historique
function effacerToutHistorique() {
    if (confirm("Voulez-vous vraiment effacer tout l'historique ?")) {
        historique = [];
        localStorage.removeItem('calculatriceHistorique');
        afficherHistorique();
    }
}

// Fonction utilitaire pour obtenir le symbole
function getSymboleOperation(operation) {
    const symboles = {
        'addition': '+',
        'soustraction': '-',
        'multiplication': '×',
        'division': '÷'
    };
    return symboles[operation] || '?';
}

// Initialiser l'historique au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initialiserHistorique();
    
    // Ajouter l'événement au bouton d'effacement
    document.getElementById('clearAllHistory').addEventListener('click', effacerToutHistorique);
});