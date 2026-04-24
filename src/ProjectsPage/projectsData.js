const projectsData = [
  {
    id: "project-01",
    title: "Complexe mixte Boulevard d'Anfa",
    image: "project-01.jpeg",
    description: [
      "Au coeur de Casablanca, ce projet developpe une ecriture architecturale equilibree entre visibilite urbaine et intimite residentielle.",
      "En facade sur le boulevard d'Anfa, un immeuble de bureaux de 10 etages affirme une presence contemporaine et structurante, tandis qu'en retrait, sur la rue Lahcen El Basri, un immeuble de logements offre un cadre de vie plus calme et preserve.",
      "L'ensemble compose un programme mixte coherent, pense comme une articulation fluide entre les differents rythmes de la ville."
    ],
    facts: {
      programme: "2 500 m2 de bureau, 1 000 m2 d'activite en RDC et 24 logements",
      maitreDOuvrage: "Y.K",
      etat: "Livré en 2013",
      montantTravaux: "42 millions de dirhams"
    }
  },
  {
    id: "project-02",
    title: "Residence studios Boulevard Anoual",
    image: "project-02.png",
    description: [
      "Au coeur de Casablanca, ce projet immobilier s'inscrit le long du boulevard Anoual et developpe une architecture residentielle contemporaine pensee pour les modes de vie urbains.",
      "L'immeuble accueille 38 studios repartis sur une surface totale de 2 145 m2, completes par deux cellules commerciales en rez-de-chaussee qui participent a l'animation du front urbain.",
      "Deux niveaux de sous-sol viennent structurer l'ensemble, offrant une reponse fonctionnelle aux contraintes de stationnement et de logistique."
    ],
    facts: {
      programme: "856 m2 d'activite en RDC et 38 logements",
      maitreDOuvrage: "J.K 2BS PROMO",
      etat: "Livré en 2019",
      montantTravaux: "16 millions de dirhams"
    }
  },
  {
    id: "project-03",
    title: "Ensemble de villas Baytouna",
    image: "project-03.jpeg",
    description: [
      "A Casablanca, cet ensemble de villas a ete concu comme un lieu de vie privilegie, ou le confort d'usage guide chaque choix architectural.",
      "Le projet repose sur une dissociation claire des flux : la circulation automobile est entierement releguee en sous-sol commun, liberant en surface des allees pietonnes privees, calmes et securisees.",
      "Cette organisation offre aux habitants un cadre de vie apaise, pense a l'echelle du quotidien."
    ],
    facts: {
      programme: "7 villas + 1 equipement de proximite",
      maitreDOuvrage: "Societe Baytouna",
      etat: "Livré en 2008",
      montantTravaux: "30 millions de dirhams"
    }
  },
  {
    id: "project-04",
    title: "Immeuble mixte Boulevard Rachidi",
    image: "project-04.jpeg",
    description: [
      "Implante sur le boulevard Rachidi, face a l'entree de l'Eglise du Sacre-Coeur de Casablanca, ce projet immobilier mixte beneficie d'une situation urbaine emblematique.",
      "A l'angle du boulevard Rachidi et de la rue Khaoula, le projet developpe un programme associant bureaux et logements, dans une composition architecturale qui dialogue avec son environnement patrimonial.",
      "L'immeuble de bureaux accueille aujourd'hui l'annexe de l'Agence urbaine de Casablanca, confirmant la vocation institutionnelle du site."
    ],
    facts: {
      programme: "1000 m2 de bureau, 300 m2 d'activite en RDC et 32 logements",
      maitreDOuvrage: "Groupe Kadiri/Kettani",
      etat: "Livré en 2008",
      montantTravaux: "35 millions de dirhams"
    }
  },
  {
    id: "project-05",
    title: "IFMEREE - Campus de Tanger",
    image: "project-05.jpeg",
    description: [
      "Situe a Tanger, au coeur de la zone franche, ce projet d'envergure donne forme a l'Institut de formation aux metiers des energies renouvelables et de l'efficacite energetique.",
      "Pense comme un veritable campus, il regroupe un internat, un auditorium, des salles de classe, des ateliers, des terrains de sport ainsi que des espaces administratifs, dans une organisation fluide et fonctionnelle.",
      "Porte par une forte ambition environnementale, le projet incarne une architecture tournee vers les enjeux energetiques et durables de demain."
    ],
    facts: {
      programme: "Internat de 42 chambres et un total de 11 000 m2 couvert",
      maitreDOuvrage: "OFPPT",
      etat: "Livré en 2018",
      montantTravaux: "72 millions de dirhams"
    }
  },
  {
    id: "project-06",
    title: "Centre des metiers de l'artisanat - Tetouan",
    image: "project-06.png",
    description: [
      "A Tetouan, ce projet realise pour l'OFPPT dedie aux metiers de l'artisanat s'inscrit dans un site a forte declivite.",
      "Le parti architectural repose sur une adaptation fine a la topographie, permettant de tirer parti du terrain tout en garantissant un confort d'usage optimal.",
      "L'organisation des volumes et des circulations a ete pensee pour offrir une accessibilite fluide et intuitive a l'ensemble du centre."
    ],
    facts: {
      programme: "1400 m2 couvert comprenant des salles de classe, des ateliers et des espaces administratifs",
      maitreDOuvrage: "OFPPT",
      etat: "Livré en 2012",
      montantTravaux: "13 millions de dirhams"
    }
  },
  {
    id: "project-07",
    title: "CHR Al Farabi - Oujda",
    image: "project-07.jpeg",
    description: [
      "A Oujda, la rehabilitation et l'extension du Centre hospitalier regional Al Farabi s'inscrivent dans une demarche d'amelioration globale de l'offre de soins a l'echelle territoriale.",
      "Le projet porte la capacite d'accueil a 700 lits et repond aux besoins de pres de 2 millions d'habitants.",
      "Concu pour integrer l'ensemble des specialites medicales, l'etablissement accueille aujourd'hui plus de 30 000 patients par an, dans un cadre fonctionnel optimise."
    ],
    facts: {
      programme: "700 lits (reanimation, urgence, maternite, radiologie, ...)",
      maitreDOuvrage: "Ministere de la Sante",
      etat: "Livré en 2006",
      montantTravaux: "43 millions de dirhams"
    }
  },
  {
    id: "project-08",
    title: "Clinique Al Hayat - Oasis",
    image: "project-08.png",
    description: [
      "A Casablanca, dans le quartier de l'Oasis, la construction de la Clinique Al Hayat donne naissance a un centre de sante pluridisciplinaire pense pour repondre aux exigences contemporaines du soin.",
      "Le projet s'organise autour de plateaux medicaux fonctionnels et lisibles, integrant egalement un centre de dialyse independant, concu pour garantir autonomie et qualite de prise en charge.",
      "L'ensemble developpe une architecture maitrisee, au service du parcours patient et de l'efficacite des equipes soignantes."
    ],
    facts: {
      programme: "3500 m2",
      maitreDOuvrage: "SCI les papillons",
      etat: "Livré en 2015",
      montantTravaux: "20 millions de dirhams"
    }
  },
  {
    id: "project-09",
    title: "Residence touristique Boulevard Mohammed V",
    image: "project-09.png",
    description: [
      "A Casablanca, cette residence touristique de 30 chambres s'inscrit sur le boulevard Mohammed V, au coeur d'un paysage urbain marque par l'heritage architectural du XXe siecle.",
      "L'ecriture de facade puise son inspiration dans le langage Art deco, emblematique du boulevard, et en propose une interpretation contemporaine.",
      "Le projet dialogue ainsi avec son contexte patrimonial tout en affirmant une identite singuliere."
    ],
    facts: {
      programme: "30 chambres et restaurant en rez-de-chaussee",
      maitreDOuvrage: "2ZBA Immo",
      etat: "Livraison prevue en 2026",
      montantTravaux: "9 millions de dirhams"
    }
  },
  {
    id: "project-10",
    title: "Logements sociaux Louisia - Mohammedia",
    image: "project-10.png",
    description: [
      "A Mohammedia, ce projet de 600 logements sociaux s'inscrit dans une reflexion urbaine a l'echelle du quartier de Louisia.",
      "Concu comme un veritable morceau de ville, il associe habitat, commerces en rez-de-chaussee et amenagements exterieurs, favorisant une vie de quartier active et structuree.",
      "Le projet developpe une approche globale, integrant les usages et les dynamiques sociales au coeur de sa conception."
    ],
    facts: {
      programme: "600 logements avec activite commerciale en rez-de-chaussee",
      maitreDOuvrage: "K.M",
      etat: "Livré en 2002",
      montantTravaux: "55 millions de dirhams"
    }
  },
  {
    id: "project-11",
    title: "Immeuble logements Mers Sultan",
    image: "project-11.png",
    description: [
      "Au coeur de Casablanca, dans le quartier de Mers Sultan, cet immeuble de logements s'inscrit dans un tissu urbain dense et vivant.",
      "Le projet developpe une architecture residentielle elegante integrant des commerces en rez-de-chaussee, participant a l'animation du quartier et a la continuite du paysage urbain."
    ],
    facts: {
      programme: "45 logements et 900 m2",
      maitreDOuvrage: "Groupe Raji",
      etat: "Livraison prevue 2028",
      montantTravaux: "22 millions de dirhams"
    }
  },
  {
    id: "project-12",
    title: "Residence touristique 3 etoiles - Dar Bouazza",
    image: "project-12.png",
    description: [
      "A Dar Bouazza, ce projet developpe une residence touristique 3 etoiles pensee comme un lieu de destination dedie au sport et au bien-etre.",
      "L'ensemble s'articule autour d'une offre d'hebergement completee par un club de padel, creant un cadre de vie dynamique et attractif.",
      "Le projet propose une approche globale, alliant hospitalite, activite sportive et qualite d'usage dans un environnement balneaire."
    ],
    facts: {
      programme: "39 chambres, piscine, restaurant, salle de sport, hammam...",
      maitreDOuvrage: "TM",
      etat: "Livraison prevue en 2028",
      montantTravaux: "25 millions de dirhams"
    }
  },
  {
    id: "project-13",
    title: "Complexe evenementiel Corniche Casablanca",
    image: "project-13.png",
    description: [
      "Sur la corniche de Casablanca, ce projet developpe un complexe multifonctionnel dedie a l'accueil et aux evenements.",
      "Il reunit un restaurant, une salle de fete et des bureaux administratifs, dans une composition architecturale pensee pour articuler convivialite, usage professionnel et valorisation du site.",
      "L'ensemble s'inscrit dans une approche contemporaine, en dialogue avec le paysage littoral."
    ],
    facts: {
      programme: "Salles de restaurants, salles de fetes, 2 sous-sols de parking",
      maitreDOuvrage: "Zurita",
      etat: "Livraison prevue en 2028",
      montantTravaux: "18 millions de dirhams"
    }
  },
  {
    id: "project-14",
    title: "Ensemble tertiaire Route d'El Jadida",
    image: "project-14.png",
    description: [
      "A Casablanca, sur la route d'El Jadida, ce projet developpe un ensemble immobilier a vocation productive et tertiaire.",
      "Compose de deux immeubles, il accueille une unite de production ainsi que des espaces de bureaux, dans une organisation pensee pour optimiser les flux et les usages.",
      "Le projet propose une architecture fonctionnelle et maitrisee, adaptee aux exigences d'un environnement professionnel en mutation."
    ],
    facts: {
      programme: "6000 m2 de bureau, 2000 m2 d'atelier et de commerce en rez-de-chaussee",
      maitreDOuvrage: "SCI Ahram",
      etat: "Livré en 2013",
      montantTravaux: "27 millions de dirhams"
    }
  },
  {
    id: "project-15",
    title: "Academie de football feminin - SCC",
    image: "project-15.png",
    description: [
      "A Casablanca, ce projet d'academie de football feminin pour le Sporting Club de Casablanca developpe un equipement sportif structurant, pense pour accompagner l'emergence de talents.",
      "Concu selon les standards internationaux, l'ensemble comprend un internat destine a une cinquantaine de jeunes joueuses, trois terrains synthetiques ainsi qu'un stade de 2 000 places avec terrain naturel.",
      "Le projet integre egalement des espaces de soins, des bureaux administratifs et un refectoire, offrant un cadre complet dedie a la formation, a la performance et au bien-etre."
    ],
    facts: {
      programme: "Academie de football feminin",
      maitreDOuvrage: "Sporting Club de Casablanca",
      etat: "A l'etude",
      montantTravaux: "56 millions de dirhams"
    }
  },
  {
    id: "project-16",
    title: "Lycee Youssef Ben Tachfine - Sidi Lahcen",
    image: "project-16.png",
    description: [
      "A Sidi Lahcen dans la region de l'Oriental, la construction du Lycee Youssef Ben Tachfine s'inscrit dans une volonte de renforcer les infrastructures educatives regionales.",
      "Le projet developpe un etablissement complet integrant un internat pour filles et garcons ainsi que des equipements sportifs, penses pour accompagner le parcours scolaire et la vie quotidienne des eleves.",
      "L'ensemble propose une organisation fonctionnelle et lisible, au service de l'apprentissage et du bien-etre."
    ],
    facts: {
      programme: "Internat, salles de classes, bureaux administratifs, logements de la direction et refectoire",
      maitreDOuvrage: "Ministere de l'Education nationale",
      etat: "Livré en 2012",
      montantTravaux: "18 millions de dirhams"
    }
  },
  {
    id: "project-17",
    title: "Centre de radiologie Ghandi 282",
    image: "project-17.png",
    description: [
      "A Casablanca, sur le boulevard Ghandi, ce projet transforme une ancienne villa en un centre de radiologie contemporain.",
      "La rehabilitation s'appuie sur l'existant pour developper un plateau technique complet integrant IRM, scanner, radiologie conventionnelle et laboratoire.",
      "Le projet conjugue valorisation du bati initial et exigences fonctionnelles d'un equipement medical de haute precision."
    ],
    facts: {
      programme: "600 m2 d'activite",
      maitreDOuvrage: "Radiologie Ghandi 282",
      etat: "Livré en 2016",
      montantTravaux: "5 millions de dirhams"
    }
  }
];

export default projectsData;