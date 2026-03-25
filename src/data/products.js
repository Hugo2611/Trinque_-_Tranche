// Données factices pour tester rapidement l'interface.
export const products = [
  {
    id: 1,
    name: 'Côtes du Rhône Rouge AOP',
    category: 'Vin',
    price: 14.9,
    origin: 'Vallée du Rhône',
    producer: 'Domaine des Coteaux',
    artisanBio:
      'Famille vigneronne depuis 3 générations, vendanges manuelles et élevage soigné en foudres.',
    tastingTip:
      'L\'œil de l\'épicier : carafez 20 min, parfait avec une tomme fruitée ou une terrine rustique.',
    pairingId: 3,
    image:
      'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Bière Blonde Artisanale 75cl',
    category: 'Bière',
    price: 6.5,
    origin: 'Alsace',
    producer: 'Brasserie du Village',
    artisanBio:
      'Petite brasserie urbaine, brassins en cuves ouvertes et houblons français sélectionnés.',
    tastingTip:
      'L\'œil de l\'épicier : servez à 8°C, idéale sur une planche de charcuteries fumées.',
    pairingId: 8,
    image:
      'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Comté 18 mois',
    category: 'Fromage',
    price: 8.9,
    origin: 'Franche-Comté',
    producer: 'Fruitière Saint-Antoine',
    artisanBio:
      'Affinage lent en cave humide, meules brossées à la main pour une pâte équilibrée et profonde.',
    tastingTip:
      'L\'œil de l\'épicier : sortez du frigo 30 min avant, sublime sur pain de campagne toasté.',
    pairingId: 5,
    image:
      'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    name: 'Saucisson Sec de Montagne',
    category: 'Charcuterie',
    price: 7.2,
    origin: 'Savoie',
    producer: 'Maison Reynaud',
    artisanBio:
      'Sélection de porcs fermiers, salage doux et séchage en altitude pour une texture fondante.',
    tastingTip:
      'L\'œil de l\'épicier : tranchez finement, excellent avec cornichons et bière blonde.',
    pairingId: 2,
    image:
      'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    name: 'Chablis Blanc AOP',
    category: 'Vin',
    price: 19.5,
    origin: 'Bourgogne',
    producer: 'Domaine de la Pierre Blanche',
    artisanBio:
      'Parcelles calcaires historiques, fermentation en levures indigènes et élevage sur lies fines.',
    tastingTip:
      'L\'œil de l\'épicier : servez à 11°C, mariage idéal avec Comté affiné et noix fraîches.',
    pairingId: 3,
    image:
      'https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    name: 'Bière IPA du Comptoir 33cl',
    category: 'Bière',
    price: 4.9,
    origin: 'Nord',
    producer: 'Brasserie du Moulin',
    artisanBio:
      'Brasserie de campagne, houblonnage à cru et garde prolongée pour une finale aromatique.',
    tastingTip:
      'L\'œil de l\'épicier : à 7°C, superbe avec une terrine de campagne et oignons confits.',
    pairingId: 12,
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 7,
    name: 'Roquefort AOP',
    category: 'Fromage',
    price: 9.8,
    origin: 'Aveyron',
    producer: 'Caves de l\'Estive',
    artisanBio:
      'Affinage en caves naturelles sur fleurines, lait cru de brebis et savoir-faire ancestral.',
    tastingTip:
      'L\'œil de l\'épicier : avec pain aux noix et un filet de miel de châtaignier.',
    pairingId: 9,
    image:
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 8,
    name: 'Jambon Sec 12 mois',
    category: 'Charcuterie',
    price: 11.9,
    origin: 'Auvergne',
    producer: 'Atelier Salaisons Durand',
    artisanBio:
      'Jambons massés à la main, séchage 12 mois minimum dans l\'air frais des monts volcaniques.',
    tastingTip:
      'L\'œil de l\'épicier : tranchez au dernier moment, parfait avec pain levain et cornichons.',
    pairingId: 10,
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 9,
    name: 'Pinot Noir Vieilles Vignes',
    category: 'Vin',
    price: 22.0,
    origin: 'Alsace',
    producer: 'Domaine Kieffer',
    artisanBio:
      'Pinot noir de coteaux granitiques, extraction douce et élevage partiel en fûts français.',
    tastingTip:
      'L\'œil de l\'épicier : légèrement rafraîchi, sublime avec fromages persillés.',
    pairingId: 7,
    image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 10,
    name: 'Bière Ambrée de Garde 75cl',
    category: 'Bière',
    price: 7.3,
    origin: 'Flandres',
    producer: 'Brasserie Sainte-Margot',
    artisanBio:
      'Recette de garde flamande, fermentation mixte et robe ambrée aux notes biscuitées.',
    tastingTip:
      'L\'œil de l\'épicier : accord redoutable avec jambon sec et tomme de brebis.',
    pairingId: 8,
    image:
      'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 11,
    name: 'Camembert Fermier AOP',
    category: 'Fromage',
    price: 6.9,
    origin: 'Normandie',
    producer: 'Ferme de la Prairie',
    artisanBio:
      'Lait cru de vaches normandes, moulage manuel à la louche et affinage sur paille de seigle.',
    tastingTip:
      'L\'œil de l\'épicier : sortez 25 min avant, délicieux avec cidre brut fermier.',
    pairingId: 2,
    image:
      'https://images.unsplash.com/photo-1589881133595-a3c085cb731d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 12,
    name: 'Terrine de Campagne Artisanale',
    category: 'Charcuterie',
    price: 5.8,
    origin: 'Périgord',
    producer: 'Maison Lavergne',
    artisanBio:
      'Atelier familial en Dordogne, cuisson lente au four et assaisonnement poivre noir entier.',
    tastingTip:
      'L\'œil de l\'épicier : servez à température ambiante, parfait avec pickles maison.',
    pairingId: 6,
    image:
      'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1200&q=80',
  },
];
