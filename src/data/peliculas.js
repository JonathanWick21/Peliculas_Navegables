const peliculas = [
  {
    id: 1,
    nombre: "El sexto sentido",
    director: "M. Night Shyamalan",
    clasificacion: "Drama",
    recaudacion: "$245 millones",
    cartelera: "https://www.ecartelera.com/carteles/5400/5409/001.jpg",
    nota: 8,
    actores: [
      {
        nombre: "Marlon Brando",
        fechaNacimiento: "03/04/1924",
        biografia: "Marlon Brando fue un influyente actor estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png"
      },
      {
        nombre: "Al Pacino",
        fechaNacimiento: "25/04/1940",
        biografia: "Al Pacino es un actor y director de cine estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg"
      },
      {
        nombre: "James Caan",
        fechaNacimiento: "26/03/1940",
        biografia: "James Caan es un actor estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/James_Caan_Guillaume_Canet_Cannes_2013_cropped.jpg/220px-James_Caan_Guillaume_Canet_Cannes_2013_cropped.jpg"
      },
      {
        nombre: "Robert Duvall",
        fechaNacimiento: "05/01/1931",
        biografia: "Robert Duvall es un actor y director estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Robert_Duvall_by_David_Shankbone.jpg/250px-Robert_Duvall_by_David_Shankbone.jpg"
      },
      {
        nombre: "Diane Keaton",
        fechaNacimiento: "05/01/1946",
        biografia: "Diane Keaton es una actriz estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Diane_Keaton_by_Firooz_Zahedi_2.jpg/250px-Diane_Keaton_by_Firooz_Zahedi_2.jpg"
      }
    ],
    resumen: "El Dr. Malcom Crowe es un conocido psicólogo infantil obsesionado con el doloroso recuerdo de un joven paciente desequilibrado al que fue incapaz de ayudar..."
  },
  {
    id: 2,
    nombre: "Pulp Fiction",
    director: "Tarantino",
    clasificacion: "Acción",
    recaudacion: "$2.2 mil millones",
    cartelera: "https://www.ecartelera.com/carteles/200/286/001.jpg",
    nota: 9,
    actores: [
      {
        nombre: "Leonardo DiCaprio",
        fechaNacimiento: "11/11/1974",
        biografia: "Leonardo DiCaprio es un actor y productor de cine estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Dicaprio_Cannes_2019.jpg/220px-Leonardo_Dicaprio_Cannes_2019.jpg"
      },
      {
        nombre: "Kate Winslet",
        fechaNacimiento: "05/10/1975",
        biografia: "Kate Winslet es una actriz británica...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Kate_Winslet_at_the_2017_Toronto_International_Film_Festival_%28cropped%29.jpg/220px-Kate_Winslet_at_the_2017_Toronto_International_Film_Festival_%28cropped%29.jpg"
      },
      {
        nombre: "Billy Zane",
        fechaNacimiento: "24/02/1966",
        biografia: "Billy Zane es un actor y productor de cine estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Billy_Zane_Photo_Op_GalaxyCon_Raleigh_2019.jpg/220px-Billy_Zane_Photo_Op_GalaxyCon_Raleigh_2019.jpg"
      },
      {
        nombre: "Kathy Bates",
        fechaNacimiento: "28/06/1948",
        biografia: "Kathy Bates es una actriz y directora estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Kathy_Bates_2024.jpg/220px-Kathy_Bates_2024.jpg"
      },
      {
        nombre: "Bill Paxton",
        fechaNacimiento: "17/05/1955",
        biografia: "Bill Paxton fue un actor y director de cine estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bill_Paxton_in_July_2016_cropped_lighting_corrected_hue_correction.jpg/250px-Bill_Paxton_in_July_2016_cropped_lighting_corrected_hue_correction.jpg"
      }
    ],
    resumen: "Narrada de una forma no lineal, la historia principal cuenta la historia de Vincent Vega y Jules Winnfield..."
  },
  {
    id: 3,
    nombre: "300",
    director: "Zack Snyder",
    clasificacion: "Acción",
    recaudacion: "$213 millones",
    cartelera: "https://www.ecartelera.com/carteles/1300/1370/001.jpg",
    nota: 7,
    actores: [
      {
        nombre: "John Travolta",
        fechaNacimiento: "18/02/1954",
        biografia: "John Travolta es un actor, bailarín y cantante estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/John_Travolta_cropped.jpg/220px-John_Travolta_cropped.jpg"
      },
      {
        nombre: "Uma Thurman",
        fechaNacimiento: "29/04/1970",
        biografia: "Uma Thurman es una actriz y modelo estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Uma_Thurman_Cannes_2015_cropped.jpg/220px-Uma_Thurman_Cannes_2015_cropped.jpg"
      },
      {
        nombre: "Samuel L. Jackson",
        fechaNacimiento: "21/12/1948",
        biografia: "Samuel L. Jackson es un actor y productor estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Samuel_L_Jackson_2015_cropped.jpg/220px-Samuel_L_Jackson_2015_cropped.jpg"
      },
      {
        nombre: "Bruce Willis",
        fechaNacimiento: "19/03/1955",
        biografia: "Bruce Willis es un actor, productor y cantante estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Bruce_Willis_2019_cropped.jpg/220px-Bruce_Willis_2019_cropped.jpg"
      },
      {
        nombre: "Ving Rhames",
        fechaNacimiento: "12/05/1959",
        biografia: "Ving Rhames es un actor estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ving_Rhames_2019.jpg/220px-Ving_Rhames_2019.jpg"
      }
    ],
    resumen: "Basada en la épica novela gráfica de Frank Miller, 300 narra la antigua Batalla de Termópilas..."
  },
  {
    id: 4,
    nombre: "El silencio de los corderos",
    director: "Jonathan Demme",
    clasificacion: "Drama",
    recaudacion: "$678 millones",
    cartelera: "https://www.ecartelera.com/carteles/2500/2508/001.jpg",
    nota: 8,
    actores: [
      {
        nombre: "Tom Hanks",
        fechaNacimiento: "09/07/1956",
        biografia: "Tom Hanks es un actor y productor de cine estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Tom_Hanks_2014.jpg/220px-Tom_Hanks_2014.jpg"
      },
      {
        nombre: "Robin Wright",
        fechaNacimiento: "08/04/1966",
        biografia: "Robin Wright es una actriz estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Robin_Wright_2019.jpg/220px-Robin_Wright_2019.jpg"
      },
      {
        nombre: "Gary Sinise",
        fechaNacimiento: "17/03/1955",
        biografia: "Gary Sinise es un actor, director y músico estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Gary_Sinise_2012.jpg/220px-Gary_Sinise_2012.jpg"
      },
      {
        nombre: "Sally Field",
        fechaNacimiento: "06/11/1946",
        biografia: "Sally Field es una actriz y directora estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Sally_Field_2012.jpg/220px-Sally_Field_2012.jpg"
      },
      {
        nombre: "Haley Joel Osment",
        fechaNacimiento: "10/04/1988",
        biografia: "Haley Joel Osment es un actor y productor estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Haley_Joel_Osment_2020.jpg/220px-Haley_Joel_Osment_2020.jpg"
      }
    ],
    resumen: "El FBI busca a un asesino en serie, le llaman Buffalo Bill..."
  },
  {
    id: 5,
    nombre: "Forrest Gump",
    director: "Robert Zemeckis",
    clasificacion: "Comedia",
    recaudacion: "$463 millones",
    cartelera: "https://www.ecartelera.com/carteles/3400/3475/001.jpg",
    nota: 9,
    actores: [
      {
        nombre: "Keanu Reeves",
        fechaNacimiento: "02/09/1964",
        biografia: "Keanu Reeves es un actor y productor de cine canadiense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Keanu_Reeves_2014.jpg/220px-Keanu_Reeves_2014.jpg"
      },
      {
        nombre: "Carrie-Anne Moss",
        fechaNacimiento: "21/08/1967",
        biografia: "Carrie-Anne Moss es una actriz canadiense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Carrie-Anne_Moss_2019.jpg/220px-Carrie-Anne_Moss_2019.jpg"
      }
    ],
    resumen: "Forrest Gump es un tipo con discapacidades mentales, pero su persistencia y bondad le llevan a conseguir una gran fortuna..."
  },
  {
    id: 6,
    nombre: "Concursante",
    director: "Rodrigo Cortés",
    clasificacion: "Drama",
    recaudacion: "$47 millones",
    cartelera: "https://www.ecartelera.com/carteles/1300/1364/001.jpg",
    nota: 10,
    actores: [
      {
        nombre: "Jack Nicholson",
        fechaNacimiento: "22/04/1937",
        biografia: "Jack Nicholson es un actor y cineasta estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Jack_Nicholson_2010.jpg/220px-Jack_Nicholson_2010.jpg"
      },
      {
        nombre: "Shelley Duvall",
        fechaNacimiento: "07/07/1949",
        biografia: "Shelley Duvall es una actriz estadounidense...",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Shelley_Duvall_2012.jpg/220px-Shelley_Duvall_2012.jpg"
      }
    ],
    resumen: "Martín Circo Martín es el afortunado ganador del mayor concurso de la historia de la televisión..."
  }
];

export default peliculas;