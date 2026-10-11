import { oscars, puzzle, wiki } from "./builders";

export const PUZZLES_021_030 = [
  puzzle(21, {
    frame: {
      clue: "In 1944 Spain, a book-loving girl moves into a remote military outpost run by her cruel stepfather. Deep in an overgrown labyrinth, a faun tells her she may be a lost princess and sets her three tasks.",
      answer: "Pan's Labyrinth",
      wrong: ["The Devil's Backbone", "Coraline", "Labyrinth"],
      explanation: "Ofelia meets the faun in Guillermo del Toro's Pan's Labyrinth (2006).",
      sources: [wiki("Pan's_Labyrinth")],
    },
    cast: {
      actors: ["Ben Stiller", "Owen Wilson"],
      answer: "Zoolander",
      wrong: ["Wedding Crashers", "Midnight in Paris", "There's Something About Mary"],
      explanation: "Stiller's Derek Zoolander and Wilson's Hansel are rival male models in Zoolander (2001). The pair have shared the screen many times, including in Meet the Parents and Night at the Museum.",
      sources: [wiki("Zoolander")],
    },
    quote: {
      clue: "Alone in his apartment, a lonely New York cab driver rehearses a confrontation in the mirror, repeatedly asking his reflection whether it's talking to him.",
      answer: "Taxi Driver",
      wrong: ["Mean Streets", "Raging Bull", "Midnight Cowboy"],
      explanation: "Robert De Niro's Travis Bickle asks 'You talkin' to me?' in Martin Scorsese's Taxi Driver (1976).",
      sources: [wiki("Taxi_Driver")],
    },
    timeline: {
      films: [
        ["Grease", 1978],
        ["All About Eve", 1950],
        ["Twister", 1996],
        ["Goldfinger", 1964],
      ],
      sources: [wiki("All_About_Eve"), wiki("Goldfinger_(film)"), wiki("Grease_(film)"), wiki("Twister_(1996_film)")],
    },
    final: {
      prompt: "Which Wes Anderson film was nominated for Best Picture and won four Academy Awards?",
      answer: "The Grand Budapest Hotel",
      wrong: ["Moonrise Kingdom", "Fantastic Mr. Fox", "The Royal Tenenbaums"],
      explanation: "The Grand Budapest Hotel won four Oscars at the 2015 ceremony, including Best Production Design and Best Original Score.",
      sources: [wiki("The_Grand_Budapest_Hotel"), oscars(2015)],
    },
  }),

  puzzle(22, {
    frame: {
      clue: "A shy thirty-year-old who works at her family's Chicago restaurant falls for a mild-mannered teacher. Her large, loud, proudly Greek family is horrified that he isn't Greek.",
      answer: "My Big Fat Greek Wedding",
      wrong: ["Meet the Parents", "Moonstruck", "The Wedding Planner"],
      explanation: "Nia Vardalos wrote and starred as Toula Portokalos in My Big Fat Greek Wedding (2002).",
      sources: [wiki("My_Big_Fat_Greek_Wedding")],
    },
    cast: {
      actors: ["Jim Carrey", "Jeff Daniels"],
      answer: "Dumb and Dumber",
      wrong: ["The Truman Show", "The Mask", "Speed"],
      explanation: "Carrey and Daniels played the dim-witted Lloyd and Harry on a cross-country trip in Dumb and Dumber (1994).",
      sources: [wiki("Dumb_and_Dumber")],
    },
    quote: {
      clue: "On a beach in Vietnam, a surf-obsessed cavalry commander tells his men that he loves the smell of napalm in the morning.",
      answer: "Apocalypse Now",
      wrong: ["Platoon", "Full Metal Jacket", "The Deer Hunter"],
      explanation: "Robert Duvall's Lieutenant Colonel Kilgore delivers the line in Francis Ford Coppola's Apocalypse Now (1979).",
      sources: [wiki("Apocalypse_Now")],
    },
    timeline: {
      films: [
        ["The Notebook", 2004],
        ["Easy Rider", 1969],
        ["The Untouchables", 1987],
        ["Mr. Smith Goes to Washington", 1939],
      ],
      sources: [wiki("Mr._Smith_Goes_to_Washington"), wiki("Easy_Rider"), wiki("The_Untouchables_(film)"), wiki("The_Notebook")],
    },
    final: {
      prompt: "Which actor won back-to-back Best Actor Oscars for Philadelphia and Forrest Gump?",
      answer: "Tom Hanks",
      wrong: ["Jack Nicholson", "Denzel Washington", "Daniel Day-Lewis"],
      explanation: "Tom Hanks won Best Actor in 1994 for Philadelphia and in 1995 for Forrest Gump. Spencer Tracy was the only actor to have done it before him.",
      sources: [wiki("Tom_Hanks"), oscars(1994), oscars(1995)],
    },
  }),

  puzzle(23, {
    frame: {
      clue: "Desperate to see his children after a bitter divorce, an out-of-work voice actor disguises himself as a prim elderly Scottish housekeeper and gets hired by his ex-wife.",
      answer: "Mrs. Doubtfire",
      wrong: ["Tootsie", "Big Momma's House", "Nanny McPhee"],
      explanation: "Robin Williams plays Daniel Hillard and his disguise in Mrs. Doubtfire (1993).",
      sources: [wiki("Mrs._Doubtfire")],
    },
    cast: {
      actors: ["Heath Ledger", "Julia Stiles"],
      answer: "10 Things I Hate About You",
      wrong: ["A Knight's Tale", "The Bourne Identity", "Save the Last Dance"],
      explanation: "Ledger's Patrick woos Stiles's Kat in 10 Things I Hate About You (1999), a high-school update of The Taming of the Shrew.",
      sources: [wiki("10_Things_I_Hate_About_You")],
    },
    quote: {
      clue: "A cynical nightclub owner in wartime Morocco raises a glass to his former lover more than once with the same fond toast: here's looking at you, kid.",
      answer: "Casablanca",
      wrong: ["To Have and Have Not", "The Maltese Falcon (1941)", "Notorious (1946)"],
      explanation: "Humphrey Bogart's Rick Blaine toasts Ingrid Bergman's Ilsa in Casablanca (1942).",
      sources: [wiki("Casablanca_(film)")],
    },
    timeline: {
      films: [
        ["Inside Out", 2015],
        ["The Great Escape", 1963],
        ["Sergeant York", 1941],
        ["Awakenings", 1990],
      ],
      sources: [wiki("Sergeant_York_(film)"), wiki("The_Great_Escape_(film)"), wiki("Awakenings"), wiki("Inside_Out_(2015_film)")],
    },
    final: {
      prompt: "Kathy Bates won the Academy Award for Best Actress for playing an obsessive fan in which Stephen King adaptation?",
      answer: "Misery",
      wrong: ["Dolores Claiborne", "Fried Green Tomatoes", "Titanic"],
      explanation: "Bates won Best Actress at the 1991 ceremony as Annie Wilkes in Misery.",
      sources: [wiki("Misery_(film)"), oscars(1991)],
    },
  }),

  puzzle(24, {
    frame: {
      clue: "Centuries after humans have abandoned a garbage-covered Earth, a lonely trash-compacting robot falls for a sleek probe sent to look for plant life.",
      answer: "WALL-E",
      wrong: ["The Iron Giant", "Robots", "Big Hero 6"],
      explanation: "WALL-E falls for EVE in Pixar's WALL-E (2008).",
      sources: [wiki("WALL-E")],
    },
    cast: {
      actors: ["Gene Wilder", "Richard Pryor"],
      answer: "Silver Streak",
      wrong: ["Young Frankenstein", "Willy Wonka & the Chocolate Factory", "Superman III"],
      explanation: "Silver Streak (1976) was the first of four films Wilder and Pryor made together. Stir Crazy came next.",
      sources: [wiki("Silver_Streak_(film)")],
    },
    quote: {
      clue: "During a lightsaber duel high above a city in the clouds, a masked villain who has just cut off the hero's hand reveals that he is the hero's father.",
      answer: "The Empire Strikes Back",
      wrong: ["Return of the Jedi", "Flash Gordon (1980)", "Dune (1984)"],
      explanation: "Darth Vader's revelation to Luke Skywalker comes on Cloud City in The Empire Strikes Back (1980).",
      sources: [wiki("The_Empire_Strikes_Back")],
    },
    timeline: {
      films: [
        ["Arrival", 2016],
        ["Raging Bull", 1980],
        ["Gilda", 1946],
        ["Cool Hand Luke", 1967],
      ],
      sources: [wiki("Gilda"), wiki("Cool_Hand_Luke"), wiki("Raging_Bull"), wiki("Arrival_(film)")],
    },
    final: {
      prompt: "Marlee Matlin became the first deaf performer to win an Academy Award for which film?",
      answer: "Children of a Lesser God",
      wrong: ["CODA", "The Miracle Worker", "Mr. Holland's Opus"],
      explanation: "Matlin won Best Actress at the 1987 ceremony for Children of a Lesser God. She later co-starred in Best Picture winner CODA.",
      sources: [wiki("Children_of_a_Lesser_God_(film)"), oscars(1987)],
    },
  }),

  puzzle(25, {
    frame: {
      clue: "Hunting in the West Texas desert, a welder stumbles on a drug deal gone wrong and takes a case of cash. A relentless killer armed with a cattle-stunning air gun follows him, while an aging sheriff trails them both.",
      answer: "No Country for Old Men",
      wrong: ["Hell or High Water", "Fargo", "Sicario"],
      explanation: "Llewelyn Moss is pursued by Anton Chigurh, with Sheriff Ed Tom Bell behind them, in the Coen brothers' No Country for Old Men (2007).",
      sources: [wiki("No_Country_for_Old_Men_(film)")],
    },
    cast: {
      actors: ["Robin Williams", "Nathan Lane"],
      answer: "The Birdcage",
      wrong: ["Mrs. Doubtfire", "The Producers (2005)", "Good Morning, Vietnam"],
      explanation: "Williams and Lane play a South Beach nightclub owner and his partner in The Birdcage (1996), Mike Nichols's remake of La Cage aux Folles.",
      sources: [wiki("The_Birdcage")],
    },
    quote: {
      clue: "Addressing a shareholders' meeting, a slick corporate raider argues that greed is a good thing that drives progress.",
      answer: "Wall Street",
      wrong: ["The Wolf of Wall Street", "Glengarry Glen Ross", "Trading Places"],
      explanation: "Michael Douglas won Best Actor as Gordon Gekko, who delivers the 'greed is good' speech in Oliver Stone's Wall Street (1987).",
      sources: [wiki("Wall_Street_(1987_film)")],
    },
    timeline: {
      films: [
        ["The Blues Brothers", 1980],
        ["Skyfall", 2012],
        ["Duck Soup", 1933],
        ["The Seven Year Itch", 1955],
      ],
      sources: [wiki("Duck_Soup_(1933_film)"), wiki("The_Seven_Year_Itch"), wiki("The_Blues_Brothers_(film)"), wiki("Skyfall")],
    },
    final: {
      prompt: "Which film, about a Mumbai teenager on a TV quiz show, won Best Picture and Best Director for Danny Boyle?",
      answer: "Slumdog Millionaire",
      wrong: ["Lion", "Life of Pi", "Trainspotting"],
      explanation: "Slumdog Millionaire won eight Academy Awards at the 2009 ceremony, including Best Picture and Best Director.",
      sources: [wiki("Slumdog_Millionaire"), oscars(2009)],
    },
  }),

  puzzle(26, {
    frame: {
      clue: "Facing foreclosure, a group of kids from a coastal Oregon town follow an old treasure map through booby-trapped caverns, hoping to find the hidden ship of a legendary one-eyed pirate.",
      answer: "The Goonies",
      wrong: ["Stand by Me", "Hook", "Treasure Planet"],
      explanation: "Mikey and his friends hunt for One-Eyed Willy's treasure beneath Astoria in The Goonies (1985).",
      sources: [wiki("The_Goonies")],
    },
    cast: {
      actors: ["Patrick Swayze", "Demi Moore"],
      answer: "Ghost",
      wrong: ["Dirty Dancing", "A Few Good Men", "Point Break (1991)"],
      explanation: "Swayze plays a murdered banker trying to protect Moore's grieving potter in Ghost (1990).",
      sources: [wiki("Ghost_(1990_film)")],
    },
    quote: {
      clue: "As a wounded gunfighter rides away from the homestead he defended, the farm family's young son runs after him, calling his name and begging him to come back.",
      answer: "Shane",
      wrong: ["High Noon", "The Searchers", "Stagecoach (1939)"],
      explanation: "Brandon deWilde's Joey calls after Alan Ladd's title character at the end of Shane (1953).",
      sources: [wiki("Shane_(film)")],
    },
    timeline: {
      films: [
        ["Do the Right Thing", 1989],
        ["Fantasia", 1940],
        ["Coco", 2017],
        ["Giant", 1956],
      ],
      sources: [wiki("Fantasia_(1940_film)"), wiki("Giant_(1956_film)"), wiki("Do_the_Right_Thing"), wiki("Coco_(2017_film)")],
    },
    final: {
      prompt: "Which film won Best Picture after La La Land was mistakenly announced as the winner?",
      answer: "Moonlight",
      wrong: ["La La Land", "Manchester by the Sea", "Hidden Figures"],
      explanation: "After an envelope mix-up at the 2017 Academy Awards, Barry Jenkins's Moonlight was correctly named Best Picture.",
      sources: [wiki("Moonlight_(2016_film)"), oscars(2017)],
    },
  }),

  puzzle(27, {
    frame: {
      clue: "After her parents are turned into pigs, a sullen ten-year-old has to work in a bathhouse for spirits, run by a greedy witch, to save them and find her way back to the human world.",
      answer: "Spirited Away",
      wrong: ["Howl's Moving Castle", "Princess Mononoke", "Coraline"],
      explanation: "Chihiro works for Yubaba in Hayao Miyazaki's Spirited Away (2001), which won the Academy Award for Best Animated Feature.",
      sources: [wiki("Spirited_Away")],
    },
    cast: {
      actors: ["Al Pacino", "Robert De Niro"],
      answer: "Heat",
      wrong: ["Scarface (1983)", "Goodfellas", "Serpico"],
      explanation: "Both actors are in The Godfather Part II but never share a scene. Heat (1995) gave them their first scenes together, including a famous diner conversation.",
      sources: [wiki("Heat_(1995_film)")],
    },
    quote: {
      clue: "Over sandwiches in the parlor behind his roadside motel office, a nervous young man tells a guest that a boy's best friend is his mother.",
      answer: "Psycho (1960)",
      wrong: ["The Birds", "Halloween (1978)", "Rear Window"],
      explanation: "Anthony Perkins's Norman Bates says it to Janet Leigh's Marion Crane in Alfred Hitchcock's Psycho (1960).",
      sources: [wiki("Psycho_(1960_film)")],
    },
    timeline: {
      films: [
        ["Barbie", 2023],
        ["Doctor Zhivago", 1965],
        ["Dead Poets Society", 1989],
        ["Double Indemnity", 1944],
      ],
      sources: [wiki("Double_Indemnity"), wiki("Doctor_Zhivago_(film)"), wiki("Dead_Poets_Society"), wiki("Barbie_(film)")],
    },
    final: {
      prompt: "Joaquin Phoenix won the Academy Award for Best Actor for which film?",
      answer: "Joker",
      wrong: ["Walk the Line", "Gladiator", "The Master"],
      explanation: "Phoenix won Best Actor at the 2020 ceremony for Joker. He was previously nominated for Gladiator, Walk the Line and The Master.",
      sources: [wiki("Joker_(2019_film)"), oscars(2020)],
    },
  }),

  puzzle(28, {
    frame: {
      clue: "Banned from heroics by a government relocation program, a former superhero stuck in an insurance job secretly takes a mysterious assignment. His super-powered wife and children end up coming to his rescue.",
      answer: "The Incredibles",
      wrong: ["Megamind", "Sky High (2005)", "Despicable Me"],
      explanation: "Bob Parr, Mr. Incredible, and his family suit up again in Pixar's The Incredibles (2004).",
      sources: [wiki("The_Incredibles")],
    },
    cast: {
      actors: ["Shirley MacLaine", "Jack Nicholson"],
      answer: "Terms of Endearment",
      wrong: ["The Shining", "The Apartment", "One Flew Over the Cuckoo's Nest"],
      explanation: "MacLaine won Best Actress and Nicholson won Best Supporting Actor for Terms of Endearment (1983), which also won Best Picture.",
      sources: [wiki("Terms_of_Endearment")],
    },
    quote: {
      clue: "When a passenger says that surely he can't be serious, a deadpan doctor insists that he is, and asks not to be called by a woman's name.",
      answer: "Airplane!",
      wrong: ["The Naked Gun: From the Files of Police Squad!", "Top Secret!", "Hot Shots!"],
      explanation: "Leslie Nielsen's Dr. Rumack delivers 'don't call me Shirley' in Airplane! (1980).",
      sources: [wiki("Airplane!")],
    },
    timeline: {
      films: [
        ["Star Trek: The Motion Picture", 1979],
        ["Wonder Woman", 2017],
        ["East of Eden", 1955],
        ["Bambi", 1942],
      ],
      sources: [wiki("Bambi"), wiki("East_of_Eden_(film)"), wiki("Star_Trek:_The_Motion_Picture"), wiki("Wonder_Woman_(2017_film)")],
    },
    final: {
      prompt: "Emma Stone won her second Academy Award for Best Actress for which film?",
      answer: "Poor Things",
      wrong: ["La La Land", "The Favourite", "Birdman"],
      explanation: "Stone won for Poor Things at the 2024 ceremony. Her first Best Actress win was for La La Land. The Favourite and Birdman brought her supporting nominations.",
      sources: [wiki("Poor_Things_(film)"), oscars(2024)],
    },
  }),

  puzzle(29, {
    frame: {
      clue: "Over a Labor Day weekend in 1959, four boys from a small Oregon town hike along the railroad tracks to find the body of a missing local kid.",
      answer: "Stand by Me",
      wrong: ["The Sandlot", "The Goonies", "Super 8"],
      explanation: "Gordie, Chris, Teddy and Vern set off on their journey in Rob Reiner's Stand by Me (1986), adapted from Stephen King's novella The Body.",
      sources: [wiki("Stand_by_Me_(film)")],
    },
    cast: {
      actors: ["Mel Gibson", "Danny Glover"],
      answer: "Lethal Weapon",
      wrong: ["Braveheart", "The Color Purple", "Mad Max"],
      explanation: "Gibson's volatile Riggs is partnered with Glover's veteran detective Murtaugh in Lethal Weapon (1987), the start of a long-running buddy-cop franchise.",
      sources: [wiki("Lethal_Weapon")],
    },
    quote: {
      clue: "Sitting cross-legged in front of a television full of static in the middle of the night, a little girl turns to her family and chillingly announces: they're here.",
      answer: "Poltergeist (1982)",
      wrong: ["The Exorcist", "The Amityville Horror (1979)", "The Ring (2002)"],
      explanation: "Heather O'Rourke's Carol Anne speaks the line in Poltergeist (1982), directed by Tobe Hooper and produced by Steven Spielberg.",
      sources: [wiki("Poltergeist_(1982_film)")],
    },
    timeline: {
      films: [
        ["Raising Arizona", 1987],
        ["Harvey", 1950],
        ["Knives Out", 2019],
        ["Bullitt", 1968],
      ],
      sources: [wiki("Harvey_(film)"), wiki("Bullitt"), wiki("Raising_Arizona"), wiki("Knives_Out")],
    },
    final: {
      prompt: "Sam Mendes won Best Director, and his film won Best Picture, for which movie?",
      answer: "American Beauty",
      wrong: ["1917", "Skyfall", "Road to Perdition"],
      explanation: "American Beauty, Mendes's feature debut, won Best Picture and Best Director at the 2000 ceremony. 1917 was nominated for Best Picture but lost to Parasite.",
      sources: [wiki("American_Beauty_(1999_film)"), oscars(2000)],
    },
  }),

  puzzle(30, {
    frame: {
      clue: "In 2001, a newly arrived editor pushes a small team of investigative reporters to dig into how the Catholic Archdiocese of Boston concealed child abuse by priests.",
      answer: "Spotlight",
      wrong: ["All the President's Men", "The Post", "Zodiac"],
      explanation: "The Boston Globe's investigative unit is the subject of Spotlight (2015), which won Best Picture.",
      sources: [wiki("Spotlight_(film)")],
    },
    cast: {
      actors: ["Steve Carell", "Paul Rudd"],
      answer: "The 40-Year-Old Virgin",
      wrong: ["Clueless", "Little Miss Sunshine", "Ant-Man"],
      explanation: "Rudd plays one of the coworkers coaching Carell's Andy in The 40-Year-Old Virgin (2005). The two also appeared together in Anchorman.",
      sources: [wiki("The_40-Year-Old_Virgin")],
    },
    quote: {
      clue: "At his graduation party, an aimless young man gets one word of career advice from a family friend: plastics.",
      answer: "The Graduate",
      wrong: ["The Apartment", "Rushmore", "Harold and Maude"],
      explanation: "Mr. McGuire offers Dustin Hoffman's Benjamin Braddock the one-word tip in The Graduate (1967).",
      sources: [wiki("The_Graduate")],
    },
    timeline: {
      films: [
        ["Tron", 1982],
        ["Modern Times", 1936],
        ["Dune: Part Two", 2024],
        ["Dial M for Murder", 1954],
      ],
      sources: [wiki("Modern_Times_(film)"), wiki("Dial_M_for_Murder"), wiki("Tron"), wiki("Dune:_Part_Two")],
    },
    final: {
      prompt: "Kevin Costner won Best Director, and his film won Best Picture, for which movie?",
      answer: "Dances with Wolves",
      wrong: ["Field of Dreams", "The Bodyguard", "Open Range"],
      explanation: "Dances with Wolves, Costner's directorial debut, won seven Academy Awards at the 1991 ceremony, including Best Picture.",
      sources: [wiki("Dances_with_Wolves"), oscars(1991)],
    },
  }),
];
