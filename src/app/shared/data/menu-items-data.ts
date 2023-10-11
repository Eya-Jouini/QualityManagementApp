import { SideBarItem } from "src/app/models/header-model";

export const menuItemsData: SideBarItem []=[
   
      {
        icon: "../assets/header-icons/documentation.png",
        title: "Documentation",
        route: 'documentations',
        children:
          [
            {
              title: "Documents Internes",
              children:
                [
                  {
                    title: "Mes Documents Internes",
                    route: 'mes-documents-internes'
                  },
                  {
                    title: "DI Périmés",
                    route: 'DI-perimes'
                  },
                  {
                    title: "Accès aux Documents",
                    route: 'acces-documents'
                  }

                ]
            },
            {
              title: "Boîte de Dialogue",
              route: 'boite-dialogue'
            },
            {
              title: "Création-Modification",
              route: 'creation-modification'
            },
            {
              title: "Documents Externes",
              route: 'documents-externes',
              children:
                [
                  {
                    title: "Documents Externes",
                    route: 'documents-externes'
                  },
                  {
                    title: "Origine des Documents",
                    route: 'origine-documents'
                  },
                  {
                    title: "Lieux de Classement",
                    route: 'lieux-classement'
                  }

                ]
            },
            {
              title: "Types de Documents",
              route: 'types-documents'
            },
            {
              title: "Enregistrements",
              //route:'enregistrements',
              children:
                [
                  {
                    title: "Enregistrements",
                    route: 'enregistrements'
                  },
                  {
                    title: "Types d'Enregistrements",
                    route: 'types-enregistrements'
                  },
                  {
                    title: "Dossiers",
                    route: 'dossiers'
                  }

                ]
            },
            {
              title: "Cartographie",
              route: 'cartographie'
            },
          ]
      },

      {
        icon: "../assets/header-icons/action.png",
        title: "Action",
        route: 'action',
        children:
          [
            {
              title: "Actions",
              route: 'actions'
            },
            {
              title: "Demandes d'actions",
              route: 'demandes-actions'
            },
            {
              title: "Modèles d'actions",
              route: 'modeles-actions'
            },
            {
              title: "Responsables de Validation",
              route: 'responsables-validation'
            },
            {
              title: "Responsable de Clotûre",
              route: 'responsables-cloture'
            },
            {
              title: "Sources d'Actions",
              route: 'sources-actions'
            },
            {
              title: "Types d'Actions",
              route: 'types-actions'
            },
            {
              title: "Types de Causes",
              route: 'types-causes'
            },
            {
              title: "Priorité",
              route: 'priorite'
            },
            {
              title: "Gravité",
              route: 'gravite'
            },
          ]
      },

      {
        icon: "../assets/header-icons/changements.png",
        title: "Changement",
        route: 'changement',
        children:
          [
            {
              title: 'Demande de Changement',
              route: 'demande-changement'
            },
            {
              title: "Domaines du Changement",
              route: 'domaines-changement'
            },
            {
              title: "Nature du Changement",
              route: 'nature-changement'
            },
            {
              title: "Impacts Potentiels du Changement",
              route: 'impacts-changement'
            },
            {
              title: "Check-List des Impacts",
              route: 'check-list-impacts'
            },
            {
              title: "Responsables de Validation du Changement",
              route: 'responsables-validation-changement'
            },
            {
              title: "Responsables d'Analyse du Changement",
              route: 'responsables-analyse-changemen'
            },
            {
              title: "Responsables de Validation de l'Analyse des Risques",
              route: 'responsables-validation-analyse-risques'
            },
            {
              title: "Responsables de Clotûre du Changement",
              route: 'responsables-cloture-changement'
            }
          ]
      },

      {
        icon: "../assets/header-icons/audit.png",
        title: "Audit",
        route: 'audit',
        children:
          [
            {
              title: 'Audits',
              route: 'audits'
            },
            {
              title: 'Auditeurs Externes',
              route: 'auditeurs-externes'
            },
            {
              title: 'Champs d\'Audits',
              route: 'champs-audits'
            },
            {
              title: 'Types d\'Audits',
              route: 'types-audits'
            },
            {
              title: 'Types des Constats',
              route: 'types-constats'
            },
            {
              title: 'Gravités des Constats',
              route: 'gravites-constats'
            }
          ]
      },

      {
        icon: "../assets/header-icons/risquer.png",
        title: "Risque",
        route: 'risque',
        children:
          [
            {
              title: 'Contexte Général',
              route: 'contexte-general',
              children:
                [
                  {
                    title: 'Enjeux Pertinents',
                    route: 'enjeux-pertinents'
                  },
                  {
                    title: 'Types des Enjeux Pertinents',
                    route: 'types-enjeux-pertinents'
                  }
                ]
            },
            {
              title: 'Risque Opportunité',
              //route:'risque-opportunite',
              children:
                [
                  {
                    title: 'Risque Opportunité',
                    route: 'risque-opportunite',
                  },
                  {
                    title: 'Domaine de Risque',
                    route: 'domaine-risque'
                  },
                  {
                    title: "Critères d'Evaluation Opportunité",
                    route: 'criteres-evaluation-opportunite'
                  },
                  {
                    title: "Critères d'Evaluation Risque",
                    route: "criteres-evaluation-risque"
                  },
                  {
                    title: 'Méthode d\'Evaluation',
                    route: 'methode-evaluation'
                  },
                  {
                    title: 'Décision',
                    route: 'decision'
                  }
                ]
            },
            {
              title: 'Impact',
              route: 'impact'
            },
            {
              title: 'Type de Mesure de Maîtrise',
              route: 'type-mesure-maitrise'
            }

          ]
      },

      {
        icon: "../assets/header-icons/indicateur.png",
        title: "Indicateur",
        route: 'indicateur',
        children:
          [
            {
              title: 'Indicateurs',
              route: 'indicateurs'
            },
            {
              title: "Types d'Indicateurs",
              route: 'types-indicateurs'
            },
            {
              title: 'Axes Politiques',
              route: 'axes-politiques'
            },
            {
              title: 'Types d\'Audits',
              route: 'types-audits'
            },
            {
              title: 'Paramétrage Périodicité',
              route: 'parametrage-periodicite'
            }
          ]
      },

      {
        icon: "../assets/header-icons/PNC.png",
        title: "Non conformités",
        route: 'non-conformites'
      },

      {
        icon: "../assets/header-icons/fichier.png",
        title: "Réclamations",
        route: 'reclamations'
      },

      {
        icon: "../assets/header-icons/livraison-rapide.png",
        title: "Fournisseurs",
        route: 'fournisseurs',
        children:
          [
            {
              title: 'Evaluation des Fournisseurs',
              route: 'evaluation-fournisseurs'
            },
            {
              title: 'Réclamations des Fournisseurs',
              route: 'reclamations-fournisseurs'
            },
            {
              title: 'Fournisseurs',
              route: 'fournisseurss'
            },
            {
              title: 'Types des Produits',
              route: 'types-produits'
            },
            {
              title: 'Catégories des Fournisseurs',
              route: 'categories-fournisseurs'
            },
            {
              title: 'Gravités des Réclamations',
              route: 'gravites-reclamations'
            },
            {
              title: 'Critèrers par Type de Produit',
              route: 'criteres-type-produit'
            }

          ]
      },

      {
        icon: "../assets/header-icons/reunion.png",
        title: "Réunions",
        route: 'reunions',
        children:
          [
            {
              title: 'Reunions',
              route: 'reunions'
            },
            {
              title: "Types de Réunions",
              route: 'types-reunions'
            }
          ]
      },

      {
        icon: "../assets/header-icons/equipe.png",
        title: "Equipement",
        route: 'equipement'
      },

      {
        icon: "../assets/header-icons/profil-de-lutilisateur.png",
        title: "RH",
        route: 'RH',
        children:
          [
            {
              title: 'Employés',
              route: 'employes',
              children:
                [
                  {
                    title: 'Employé',
                    route: 'employe'
                  },
                  {
                    title: "Fonctions",
                    route: 'fonctions'
                  },
                  {
                    title: 'Profils Types',
                    route: 'profils-types'
                  },
                  {
                    title: 'Profils de Fonction',
                    route: 'profils-fonction'
                  },
                  {
                    title: 'Types de Qualifications',
                    route: 'types-qualifications'
                  },
                  {
                    title: "Qualifications",
                    route: 'qualifications'
                  },
                  {
                    title: 'Niveaux de Qualifications',
                    route: 'niveaux-qualifications'
                  },
                  {
                    title: 'Sites',
                    route: 'sites'
                  },
                  {
                    title: 'Processus',
                    route: 'processus'
                  },
                  {
                    title: 'Activité',
                    route: 'activite'
                  },
                  {
                    title: 'Direction',
                    route: 'direction'
                  },
                  {
                    title: 'Services',
                    route: 'services'
                  },
                  {
                    title: 'Groupe de Travail',
                    route: 'groupe-travail'
                  },
                  {
                    title: 'Maîtrise',
                    route: 'maitrise'
                  },
                  {
                    title: 'Requis',
                    route: 'requis'
                  },
                  {
                    title: 'Métier',
                    route: 'metier'
                  }
                ]
            },

          ]

      },


      {
        icon: "../assets/header-icons/loi.png",
        title: "Réglementation",
        route: 'reglementation'
      },

      {
        icon: "../assets/header-icons/environnement.png",
        title: "Environnement",
        route: 'environnement',
        children:
          [
            {
              title: 'Aspects',
              route: 'aspects',
              children: [
                {
                  title: "Evaluation des Aspects",
                  route: "evaluation-aspects"
                },
                {
                  title: "Méthode de Calcul de la Critcité",
                  route: "methode-calcul-criticite"
                },
                {
                  title: "Aspect",
                  route: "aspect"
                },
                {
                  title: "Facteur",
                  route: "facteur"
                },
                {
                  title: "Impact",
                  route: "impact"
                },
                {
                  title: "Lieu",
                  route: "lieu"
                },
                {
                  title: "Critère",
                  route: "critere"
                },
                {
                  title: "Condition",
                  route: "condition"
                },
                {
                  title: "Activité-Service",
                  route: "activite-service"
                },

              ]
            },
            {
              title: "PME",
              route: 'PME'
            },
            {
              title: "Situations d'Urgence",
              route: 'situations-urgence'
            },
            {
              title: 'Incident Environnemental',
              route: 'incident-environnemental',
              children: [
                {
                  title: "Liste des Incidents",
                  route: "liste-incidents"
                },
                {
                  title: "Type Incident",
                  route: "type-incident"
                },
                {
                  title: "Catégorie Incident",
                  route: "categorie-incident"
                },
                {
                  title: "Type Conséquence",
                  route: "type-consequence"
                },
                {
                  title: "Type Cause",
                  route: "type-cause"
                },
                {
                  title: "Source Incident",
                  route: "source-incident"
                },
                {
                  title: "Gravité  Incident",
                  route: "gravite-incident"
                },
                {
                  title: "Décideurs de Traîtement & Responsables de Clotûre",
                  route: "decideurs-traitement"
                },
                {
                  title: "Personnes à Informer Automatiquement",
                  route: "personnes-a-informer"
                },
                {
                  title: "Coût Estimé",
                  route: "cout-estime"
                }


              ]
            },
            {
              title: 'Gestion des Déchets',
              route: 'Gestion Déchets',
              children: [
                {
                  title: "Registre de Traîtement",
                  route: "registre-traitement"
                },
                {
                  title: "Identification des Déchets",
                  route: "identification-dechets"
                },
                {
                  title: "Type Déchets",
                  route: "type-dechets"
                },
                {
                  title: "Catégorie Déchets",
                  route: "categorie-dechets"
                },
                {
                  title: "Propriété Déchets",
                  route: "propriete-dechets"
                },
                {
                  title: "Traîtement Déchets",
                  route: "traitement-dechets"
                },
                {
                  title: "Unité",
                  route: "unite"
                },
                {
                  title: "Transporteur",
                  route: "transporteur"
                },
                {
                  title: "Organisme de Traîtement",
                  route: "organisme-traitement"
                },

              ]
            }
          ]
      },

      {
        icon: "../assets/header-icons/securite.png",
        title: "Sécurité",
        route: 'securite'
      },

      {
        icon: "../assets/header-icons/aliments.png",
        title: "Incident Alimentaire",
        route: 'incident-alimentaire',
        children:
          [
            {
              title: 'Risques',
              route: 'risques',
              children:
                [
                  {
                    title: 'Secteurs',
                    route: 'secteurs',

                  },
                  {
                    title: 'Postes de Travail',
                    route: 'postes-travail',

                  },
                  {
                    title: "Phase d'Activité",
                    route: 'phase-activite',

                  },
                  {
                    title: 'Méthode de Calcul de la Criticité',
                    route: 'methode-calcul-criticite',

                  },
                  {
                    title: 'Situation Dangereuse',
                    route: 'situation-dangereuse',

                  },
                  {
                    title: 'Type Danger',
                    route: 'type-danger',

                  },
                  {
                    title: 'Evénement Déclencheur',
                    route: 'evenement-declencheur',

                  },
                  {
                    title: 'Type d\'Evaluation',
                    route: 'type-evalution',

                  },
                  {
                    title: 'Activité Risque',
                    route: 'activite-risque',

                  },
                  {
                    title: 'Equipement',
                    route: 'equipement',

                  },
                  {
                    title: 'Conséquence',
                    route: 'consequence',

                  },
                  {
                    title: 'Critère',
                    route: 'critere',

                  },
                  {
                    title: 'Responsable de Clôture(Risques)',
                    route: 'responsable-cloture',

                  }

                ]
            },

            {
              title: "Incidents",
              route: 'incidents',
              children:
                [
                  {
                    title: 'Incidents',
                    route: 'incidents',
                    children:
                      [
                        {
                          title: 'Gravité',
                          route: 'gravite',

                        },
                        {
                          title: 'Catégorie Incident',
                          route: 'categorie-incident',

                        },
                        {
                          title: "Type Incident",
                          route: 'type-incident',

                        },
                        {
                          title: 'Type Cause',
                          route: 'type-cause',

                        },
                        {
                          title: 'Type Conséquence',
                          route: 'type-consequence',

                        },
                        {
                          title: 'Site de Lésion',
                          route: 'site-lesion',

                        },
                        {
                          title: 'Règles de Sécurité de Vie',
                          route: 'regles-securite-vie',

                        },
                        {
                          title: 'Décideur de Traîtement',
                          route: 'decideur-traitement',

                        },
                        {
                          title: 'Personnes à Informer Automatiquement',
                          route: 'personnes-a-informer',

                        },
                        {
                          title: 'Coût Estimé',
                          route: 'cout-estime',

                        }
                      ]

                  },
                  {
                    title: "Situation d'Urgence",
                    route: 'situation-urgence'
                  },
                  {
                    title: 'PMS',
                    route: 'PMS'
                  },
                  {
                    title: 'Visite',
                    route: 'visite',
                    children:
                      [
                        {
                          title: 'Visite',
                          route: 'visite',

                        },
                        {
                          title: 'Zone',
                          route: 'zone',

                        },
                        {
                          title: "Unités",
                          route: 'unites',

                        },
                        {
                          title: 'Critères',
                          route: 'criteres',

                        },
                        {
                          title: 'Check-List',
                          route: 'check-list',

                        }
                      ]


                  }
                ]
            }
            ,

            {
              icon: "../assets/header-icons/cartable.png",
              title: "SDA",
              route: 'SDA',
              children:
                [
                  {
                    title: 'Préalables',
                    route: 'prealables',
                    children: [
                      {
                        title: "Equipe SDA",
                        route: "equipe-SDA"
                      },
                      {
                        title: "Programmes Prérequis",
                        route: "programmes-prerequis"
                      }
                    ]
                  },
                  {
                    title: "Etapes Initiales",
                    route: 'etapes-initiales',
                    children:
                      [
                        {
                          title: 'Diagramme de Fabrication',
                          route: 'diagramme-fabrication',
                          children: [
                            {
                              title: "Etape",
                              route: "etape"
                            },
                            {
                              title: "Lieu",
                              route: "lieu"
                            }
                          ]
                        },
                        {
                          title: 'Analyse des Dangers',
                          route: 'analyse-dangers'
                        },
                        {
                          title: "Situation d'Urgence",
                          route: 'situation-urgence'
                        },
                        {
                          title: 'Incidents',
                          route: 'incidents'
                        }
                      ]
                  }
                ]
            }
            ,

            {
              icon: "../assets/header-icons/money-management.png",
              title: "COQ",
              route: 'COQ'
            },

            {
              icon: "../assets/header-icons/modeles-predictifs.png",
              title: "AMDEC",
              route: 'AMDEC',
              children:
                [
                  {
                    title: 'AMDEC',
                    route: 'AMDEC'
                  },
                  {
                    title: "Création AMDEC Spécifique",
                    route: 'creation-AMDEC-specifique'
                  },
                  {
                    title: "Création AMDEC Générique",
                    route: 'creation-AMDEC-generique'
                  },
                  {
                    title: "Type d'AMDEC",
                    route: 'type-AMDEC'
                  },
                  {
                    title: "Critères d'Evaluation d'AMDEC",
                    route: 'critere-evaluation-AMDEC'
                  },
                  {
                    title: "Rôle d'AMDEC",
                    route: 'role-AMDEC'
                  },

                ]
            },

            {
              icon: "../assets/header-icons/ajouter-au-panier.png",
              title: "Achats",
              route: 'achats',
              children:
                [
                  {
                    title: "Demandes d'Achats",
                    route: 'demandes-achats'
                  },
                  {
                    title: "Types d'Achats",
                    route: 'types-achats'
                  },
                ]
            }
          ]
      }

] 