<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction au PHP - Variables et Calculs</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f4f4f4; color: #333; }
        .container { max-width: 800px; margin: auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
        h1, h2 { color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px; }
        .variable-output { background-color: #e9ecef; padding: 10px; border-left: 5px solid #007bff; margin-bottom: 10px; }
        .resultat-calcul { background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; padding: 15px; margin-top: 15px; border-radius: 5px; font-weight: bold; }
    </style>
</head>
<body>

<div class="container">
    <h1>Introduction au PHP</h1>
    
    <?php
    // ==========================================================
    // 1. DÉCLARATION DES VARIABLES (Chaînes de caractères et Entiers)
    // ==========================================================
    
    // Chaînes de caractères
    $etablissement = "Faculté des sciences semlalia (FSSM)";
    $module = "Introduction au PHP et au Développement Web";
    $annee = "2ème Année";
    $nom_utilisateur = "Abdessabour Libouti";
    
    // Variables numériques (entiers)
    $nombre1 = 15;
    $nombre2 = 7;
    
    // ==========================================================
    // 2. AFFICHAGE DES VARIABLES STRUCTURÉES (avec echo)
    // ==========================================================
    ?>

    <h2>Informations du Cours</h2>
    
    <div class="variable-output">
        <p><strong>Nom de l'étudiant:</strong> <?php echo $nom_utilisateur; ?></p>
        <p><strong>Nom de l’établissement:</strong> <?php echo $etablissement; ?></p>
        <p><strong>Module:</strong> <?php echo $module; ?></p>
        <p><strong>Année:</strong> <?php echo $annee; ?></p>
    </div>

    <h2>Exemples de Variables Numériques</h2>
    <p>Nous allons effectuer des calculs avec les nombres suivants :</p>
    <ul>
        <li>Nombre 1: <?php echo $nombre1; ?></li>
        <li>Nombre 2: <?php echo $nombre2; ?></li>
    </ul>

    <?php
    // ==========================================================
    // 3. EFFECTUER ET AFFICHER DES CALCULS SIMPLES
    // ==========================================================
    
    // Résultat d'addition
    $addition = $nombre1 + $nombre2;
    
    // Résultat de multiplication
    $multiplication = $nombre1 * $nombre2;
    
    // Résultat de soustraction
    $soustraction = $nombre1 - $nombre2;
    
    // Résultat d'une opération complexe (utilisant des entiers)
    $operation_complexe = ($nombre1 * 3) + ($nombre2 / 2); 
    ?>

    <h2>Résultats d'Opérations</h2>

    <div class="resultat-calcul">
        <p><strong>Résultat d’addition ($nombre1 + $nombre2):</strong> <?php echo $addition; ?></p>
        <p><strong>Résultat de multiplication ($nombre1 * $nombre2):</strong> <?php echo $multiplication; ?></p>
        <p><strong>Résultat de soustraction ($nombre1 - $nombre2):</strong> <?php echo $soustraction; ?></p>
        <p><strong>Résultat d'une opération complexe (($nombre1 * 3) + ($nombre2 / 2)):</strong> <?php echo $operation_complexe; ?></p>
    </div>

</div>

</body>
</html>