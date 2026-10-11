import { oscars, puzzle, wiki } from "./builders";

export const PUZZLES_011_020 = [
  puzzle(11, {
    frame: {
      clue: "A young Black photographer spends the weekend at his white girlfriend's family estate. The relatives are friendly to a fault, the household staff seem eerily distant, and a teacup and spoon are used to hypnotize him.",
      answer: "Get Out",
      wrong: ["Us", "The Stepford Wives (1975)", "Guess Who's Coming to Dinner"],
      explanation: "Daniel Kaluuya's Chris uncovers the Armitage family's secret in Jordan Peele's Get Out (2017).",
      sources: [wiki("Get_Out")],
    },
    cast: {
      actors: ["Emma Stone", "Ryan Gosling"],
      answer: "La La Land",
      wrong: ["Drive", "Easy A", "Birdman"],
      explanation: "Stone and Gosling played an aspiring actress and a jazz pianist in La La Land (2016). They also co-starred in Crazy, Stupid, Love and Gangster Squad.",
      sources: [wiki("La_La_Land")],
    },
    quote: {
      clue: "Aboard a spacecraft bound for Jupiter, the ship's soft-spoken onboard computer politely refuses an astronaut's request to open the pod bay doors.",
      answer: "2001: A Space Odyssey",
      wrong: ["Alien", "Silent Running", "Moon"],
      explanation: "HAL 9000 tells Dave Bowman 'I'm sorry, Dave. I'm afraid I can't do that' in Stanley Kubrick's 2001: A Space Odyssey (1968).",
      sources: [wiki("2001:_A_Space_Odyssey_(film)")],
    },
    timeline: {
      films: [
        ["Rosemary's Baby", 1968],
        ["The Social Network", 2010],
        ["Amadeus", 1984],
        ["The Searchers", 1956],
      ],
      sources: [wiki("The_Searchers"), wiki("Rosemary's_Baby_(film)"), wiki("Amadeus_(film)"), wiki("The_Social_Network")],
    },
    final: {
      prompt: "At the ceremony where Alfonso Cuarón won Best Director for Gravity, which film won Best Picture?",
      answer: "12 Years a Slave",
      wrong: ["Gravity", "American Hustle", "The Wolf of Wall Street"],
      explanation: "12 Years a Slave won Best Picture at the 2014 Academy Awards, while Cuarón took Best Director for Gravity.",
      sources: [wiki("12_Years_a_Slave_(film)"), oscars(2014)],
    },
  }),

  puzzle(12, {
    frame: {
      clue: "A farm girl and her little dog are carried off by a tornado to a colorful land. To get home, she follows a yellow brick road with a scarecrow, a tin man and a cowardly lion.",
      answer: "The Wizard of Oz",
      wrong: ["Labyrinth", "Alice in Wonderland (1951)", "Willy Wonka & the Chocolate Factory"],
      explanation: "Judy Garland's Dorothy travels from Kansas to Oz in MGM's The Wizard of Oz (1939).",
      sources: [wiki("The_Wizard_of_Oz_(1939_film)")],
    },
    cast: {
      actors: ["Harrison Ford", "Sean Connery"],
      answer: "Indiana Jones and the Last Crusade",
      wrong: ["The Untouchables", "Blade Runner", "The Fugitive"],
      explanation: "Connery played Indy's father, Henry Jones Sr., opposite Ford in Indiana Jones and the Last Crusade (1989).",
      sources: [wiki("Indiana_Jones_and_the_Last_Crusade")],
    },
    quote: {
      clue: "Accidentally left behind when his family flies off on a Christmas trip, an eight-year-old slaps aftershave on his cheeks and lets out a now-famous scream.",
      answer: "Home Alone",
      wrong: ["Elf", "Jingle All the Way", "The Santa Clause"],
      explanation: "Macaulay Culkin's Kevin McCallister gives his hands-on-cheeks scream in Home Alone (1990).",
      sources: [wiki("Home_Alone")],
    },
    timeline: {
      films: [
        ["Thelma & Louise", 1991],
        ["Breakfast at Tiffany's", 1961],
        ["The Hangover", 2009],
        ["National Lampoon's Animal House", 1978],
      ],
      sources: [
        wiki("Breakfast_at_Tiffany's_(film)"),
        wiki("National_Lampoon's_Animal_House"),
        wiki("Thelma_%26_Louise"),
        wiki("The_Hangover"),
      ],
    },
    final: {
      prompt: "Which film won Best Picture and Best Director for Chloé Zhao, and earned Frances McDormand Best Actress?",
      answer: "Nomadland",
      wrong: ["Minari", "The Father", "Promising Young Woman"],
      explanation: "Nomadland won Best Picture, Best Director and Best Actress at the 2021 Academy Awards.",
      sources: [wiki("Nomadland_(film)"), oscars(2021)],
    },
  }),

  puzzle(13, {
    frame: {
      clue: "A New York cop flies to Los Angeles to reconcile with his wife at her office Christmas party, just as a gang of armed men seizes the skyscraper. Barefoot, he fights back floor by floor.",
      answer: "Die Hard",
      wrong: ["Lethal Weapon", "Speed", "Under Siege"],
      explanation: "Bruce Willis's John McClane takes on Hans Gruber's crew inside Nakatomi Plaza in Die Hard (1988).",
      sources: [wiki("Die_Hard")],
    },
    cast: {
      actors: ["Denzel Washington", "Ethan Hawke"],
      answer: "Training Day",
      wrong: ["Glory", "Dead Poets Society", "Philadelphia"],
      explanation: "Washington won Best Actor as a corrupt LAPD detective training Hawke's rookie in Training Day (2001).",
      sources: [wiki("Training_Day")],
    },
    quote: {
      clue: "In a crowded New York deli, a woman loudly demonstrates how easy it is to fake a big moment. An older customer nearby tells the waiter she'll have whatever that woman is having.",
      answer: "When Harry Met Sally...",
      wrong: ["Annie Hall", "Sleepless in Seattle", "Tootsie"],
      explanation: "Meg Ryan's scene at Katz's Delicatessen ends with 'I'll have what she's having' in When Harry Met Sally... (1989).",
      sources: [wiki("When_Harry_Met_Sally...")],
    },
    timeline: {
      films: [
        ["Gremlins", 1984],
        ["Sunset Boulevard", 1950],
        ["The Dark Knight", 2008],
        ["Oliver!", 1968],
      ],
      sources: [wiki("Sunset_Boulevard_(film)"), wiki("Oliver!_(film)"), wiki("Gremlins"), wiki("The_Dark_Knight")],
    },
    final: {
      prompt: "Michelle Yeoh became the first Asian woman to win Best Actress for a film that also won Best Picture. Which film?",
      answer: "Everything Everywhere All at Once",
      wrong: ["Crazy Rich Asians", "Crouching Tiger, Hidden Dragon", "Shang-Chi and the Legend of the Ten Rings"],
      explanation: "Everything Everywhere All at Once won seven Academy Awards in 2023, including Best Picture and Best Actress for Yeoh.",
      sources: [wiki("Everything_Everywhere_All_at_Once"), oscars(2023)],
    },
  }),

  puzzle(14, {
    frame: {
      clue: "Two talkative hitmen debate what a quarter-pounder is called in France on their way to collect a briefcase. When they open it, its contents glow but are never shown.",
      answer: "Pulp Fiction",
      wrong: ["Reservoir Dogs", "Snatch", "Get Shorty"],
      explanation: "Vincent and Jules discuss the 'Royale with Cheese' before retrieving Marsellus Wallace's briefcase in Pulp Fiction (1994).",
      sources: [wiki("Pulp_Fiction")],
    },
    cast: {
      actors: ["Jack Lemmon", "Walter Matthau"],
      answer: "The Odd Couple",
      wrong: ["Some Like It Hot", "The Apartment", "Charade (1963)"],
      explanation: "Lemmon's fussy Felix moves in with Matthau's slovenly Oscar in The Odd Couple (1968), one of about ten films the pair made together.",
      sources: [wiki("The_Odd_Couple_(film)")],
    },
    quote: {
      clue: "Cross-examined at a military court-martial, a furious Marine colonel tells the young Navy lawyer questioning him that he can't handle the truth.",
      answer: "A Few Good Men",
      wrong: ["The Firm", "Philadelphia", "JFK"],
      explanation: "Jack Nicholson's Colonel Jessup erupts at Tom Cruise's Lieutenant Kaffee in A Few Good Men (1992).",
      sources: [wiki("A_Few_Good_Men")],
    },
    timeline: {
      films: [
        ["North by Northwest", 1959],
        ["Jumanji", 1995],
        ["How Green Was My Valley", 1941],
        ["Close Encounters of the Third Kind", 1977],
      ],
      sources: [
        wiki("How_Green_Was_My_Valley_(film)"),
        wiki("North_by_Northwest"),
        wiki("Close_Encounters_of_the_Third_Kind"),
        wiki("Jumanji"),
      ],
    },
    final: {
      prompt: "Daniel Day-Lewis won a record third Academy Award for Best Actor for which film?",
      answer: "Lincoln",
      wrong: ["There Will Be Blood", "My Left Foot", "Gangs of New York"],
      explanation: "Day-Lewis won for Lincoln in 2013, after earlier wins for My Left Foot and There Will Be Blood.",
      sources: [wiki("Lincoln_(film)"), oscars(2013)],
    },
  }),

  puzzle(15, {
    frame: {
      clue: "A rat with a refined sense of smell dreams of cooking in Paris. Hiding under a clumsy kitchen worker's hat, he steers the young man to culinary fame.",
      answer: "Ratatouille",
      wrong: ["The Rescuers", "Flushed Away", "Chef"],
      explanation: "Remy guides Linguini at Gusteau's restaurant in Pixar's Ratatouille (2007).",
      sources: [wiki("Ratatouille_(film)")],
    },
    cast: {
      actors: ["Johnny Depp", "Helena Bonham Carter"],
      answer: "Sweeney Todd: The Demon Barber of Fleet Street",
      wrong: ["Edward Scissorhands", "Fight Club", "Pirates of the Caribbean: The Curse of the Black Pearl"],
      explanation: "Depp played the vengeful barber and Bonham Carter played Mrs. Lovett in Tim Burton's Sweeney Todd: The Demon Barber of Fleet Street (2007).",
      sources: [wiki("Sweeney_Todd:_The_Demon_Barber_of_Fleet_Street_(2007_film)")],
    },
    quote: {
      clue: "At the resort's end-of-summer talent show, a dance instructor walks up to a family's table and declares that nobody puts their daughter in a corner.",
      answer: "Dirty Dancing",
      wrong: ["Footloose (1984)", "Grease", "Flashdance"],
      explanation: "Patrick Swayze's Johnny Castle collects 'Baby' Houseman for the final dance in Dirty Dancing (1987).",
      sources: [wiki("Dirty_Dancing")],
    },
    timeline: {
      films: [
        ["Ordinary People", 1980],
        ["A Streetcar Named Desire", 1951],
        ["Juno", 2007],
        ["Bonnie and Clyde", 1967],
      ],
      sources: [wiki("A_Streetcar_Named_Desire_(1951_film)"), wiki("Bonnie_and_Clyde_(film)"), wiki("Ordinary_People"), wiki("Juno_(film)")],
    },
    final: {
      prompt: "Martin Scorsese finally won the Academy Award for Best Director for which film?",
      answer: "The Departed",
      wrong: ["Goodfellas", "The Aviator", "Taxi Driver"],
      explanation: "Scorsese won Best Director in 2007 for The Departed, which also won Best Picture. He had been nominated for Goodfellas and The Aviator.",
      sources: [wiki("The_Departed"), oscars(2007)],
    },
  }),

  puzzle(16, {
    frame: {
      clue: "A small-time Philadelphia boxer who collects debts for a loan shark gets a one-in-a-million shot at the world heavyweight champion. He trains by running up the steps of the art museum.",
      answer: "Rocky",
      wrong: ["Raging Bull", "The Fighter", "Million Dollar Baby"],
      explanation: "Sylvester Stallone's Rocky Balboa faces Apollo Creed in Rocky (1976), which won Best Picture.",
      sources: [wiki("Rocky")],
    },
    cast: {
      actors: ["Meryl Streep", "Robert De Niro"],
      answer: "The Deer Hunter",
      wrong: ["Kramer vs. Kramer", "Taxi Driver", "Sophie's Choice"],
      explanation: "De Niro and Streep appeared together in The Deer Hunter (1978), her first Oscar-nominated role. They later co-starred in Falling in Love.",
      sources: [wiki("The_Deer_Hunter")],
    },
    quote: {
      clue: "When her new assistant snickers at two nearly identical belts, a fashion editor delivers a withering lecture tracing the assistant's lumpy blue sweater back to a runway decision.",
      answer: "The Devil Wears Prada",
      wrong: ["Working Girl", "13 Going on 30", "Funny Face"],
      explanation: "Meryl Streep's Miranda Priestly gives Anne Hathaway's Andy the 'cerulean' speech in The Devil Wears Prada (2006).",
      sources: [wiki("The_Devil_Wears_Prada_(film)")],
    },
    timeline: {
      films: [
        ["Inception", 2010],
        ["Platoon", 1986],
        ["Spartacus", 1960],
        ["M*A*S*H", 1970],
      ],
      sources: [wiki("Spartacus_(film)"), wiki("MASH_(film)"), wiki("Platoon_(film)"), wiki("Inception")],
    },
    final: {
      prompt: "Which largely silent, black-and-white film became the first French production to win Best Picture?",
      answer: "The Artist",
      wrong: ["Hugo", "Amélie", "Midnight in Paris"],
      explanation: "The Artist won Best Picture at the 2012 Academy Awards. Hugo and Midnight in Paris were nominated against it.",
      sources: [wiki("The_Artist_(film)"), oscars(2012)],
    },
  }),

  puzzle(17, {
    frame: {
      clue: "A young queen hides her power to create ice, until she accidentally plunges her kingdom into endless winter on her coronation day. Her fearless younger sister sets out to bring her home.",
      answer: "Frozen",
      wrong: ["Tangled", "Brave", "Moana (2016)"],
      explanation: "Elsa and Anna are the royal sisters of Arendelle in Disney's Frozen (2013).",
      sources: [wiki("Frozen_(2013_film)")],
    },
    cast: {
      actors: ["Bill Murray", "Scarlett Johansson"],
      answer: "Lost in Translation",
      wrong: ["Groundhog Day", "Her", "Ghostbusters (1984)"],
      explanation: "Murray played a fading movie star who bonds with Johansson's young newlywed in a Tokyo hotel in Sofia Coppola's Lost in Translation (2003).",
      sources: [wiki("Lost_in_Translation_(film)")],
    },
    quote: {
      clue: "Unraveling live on air, a veteran TV news anchor urges viewers to go to their windows and shout that they're mad as hell and won't take it anymore.",
      answer: "Network",
      wrong: ["Broadcast News", "All the President's Men", "Anchorman: The Legend of Ron Burgundy"],
      explanation: "Peter Finch's Howard Beale gives the 'mad as hell' rant in Network (1976). Finch won Best Actor posthumously.",
      sources: [wiki("Network_(1976_film)")],
    },
    timeline: {
      films: [
        ["Gravity", 2013],
        ["The Hustler", 1961],
        ["The Philadelphia Story", 1940],
        ["Fatal Attraction", 1987],
      ],
      sources: [wiki("The_Philadelphia_Story_(film)"), wiki("The_Hustler_(film)"), wiki("Fatal_Attraction"), wiki("Gravity_(2013_film)")],
    },
    final: {
      prompt: "Which Guillermo del Toro film won the Academy Award for Best Picture?",
      answer: "The Shape of Water",
      wrong: ["Pan's Labyrinth", "Nightmare Alley", "Crimson Peak"],
      explanation: "The Shape of Water won Best Picture and Best Director at the 2018 Academy Awards. Nightmare Alley was later a Best Picture nominee.",
      sources: [wiki("The_Shape_of_Water"), oscars(2018)],
    },
  }),

  puzzle(18, {
    frame: {
      clue: "A paraplegic former Marine is linked to a genetically engineered alien body on a lush moon called Pandora. Sent to win over its tall, blue-skinned inhabitants, he starts taking their side.",
      answer: "Avatar",
      wrong: ["Dune (2021)", "Battlefield Earth", "John Carter"],
      explanation: "Jake Sully joins the Na'vi in James Cameron's Avatar (2009).",
      sources: [wiki("Avatar_(2009_film)")],
    },
    cast: {
      actors: ["Keanu Reeves", "Sandra Bullock"],
      answer: "Speed",
      wrong: ["John Wick", "Miss Congeniality", "Gravity"],
      explanation: "Reeves's SWAT officer and Bullock's accidental bus driver keep a bomb-rigged bus above 50 mph in Speed (1994). They reunited in The Lake House.",
      sources: [wiki("Speed_(1994_film)")],
    },
    quote: {
      clue: "After years of secret fishing trips, one ranch hand angrily tells the other that he wishes he knew how to quit him.",
      answer: "Brokeback Mountain",
      wrong: ["Legends of the Fall", "A River Runs Through It", "Call Me by Your Name"],
      explanation: "Jake Gyllenhaal's Jack Twist says the line to Heath Ledger's Ennis Del Mar in Brokeback Mountain (2005).",
      sources: [wiki("Brokeback_Mountain")],
    },
    timeline: {
      films: [
        ["Tootsie", 1982],
        ["Charade", 1963],
        ["Million Dollar Baby", 2004],
        ["High Noon", 1952],
      ],
      sources: [wiki("High_Noon"), wiki("Charade_(1963_film)"), wiki("Tootsie"), wiki("Million_Dollar_Baby")],
    },
    final: {
      prompt: "Anthony Hopkins became the oldest winner of Best Actor, at 83, for which film?",
      answer: "The Father",
      wrong: ["The Remains of the Day", "Nixon", "The Two Popes"],
      explanation: "Hopkins won his second Best Actor award in 2021 for The Father, playing a man living with dementia. His first was for The Silence of the Lambs.",
      sources: [wiki("The_Father_(2020_film)"), oscars(2021)],
    },
  }),

  puzzle(19, {
    frame: {
      clue: "Two young sisters move to an old house in the Japanese countryside. In the nearby forest they meet a huge, furry spirit, and later ride a grinning bus shaped like a cat.",
      answer: "My Neighbor Totoro",
      wrong: ["Spirited Away", "Kiki's Delivery Service", "Ponyo"],
      explanation: "Satsuki and Mei befriend the forest spirit in Hayao Miyazaki's My Neighbor Totoro (1988).",
      sources: [wiki("My_Neighbor_Totoro")],
    },
    cast: {
      actors: ["Jennifer Lawrence", "Bradley Cooper"],
      answer: "Silver Linings Playbook",
      wrong: ["The Hunger Games", "The Hangover", "A Star Is Born (2018)"],
      explanation: "Lawrence won Best Actress opposite Cooper in Silver Linings Playbook (2012). They also co-starred in American Hustle and Serena.",
      sources: [wiki("Silver_Linings_Playbook")],
    },
    quote: {
      clue: "A Spanish swordsman spends years rehearsing exactly how he'll introduce himself to the six-fingered man who killed his father, and finally gets to say it during a duel.",
      answer: "The Princess Bride",
      wrong: ["The Mask of Zorro", "Willow", "Stardust"],
      explanation: "Mandy Patinkin's Inigo Montoya finally confronts Count Rugen in The Princess Bride (1987).",
      sources: [wiki("The_Princess_Bride_(film)")],
    },
    timeline: {
      films: [
        ["The Birds", 1963],
        ["Black Panther", 2018],
        ["Ferris Bueller's Day Off", 1986],
        ["Bringing Up Baby", 1938],
      ],
      sources: [wiki("Bringing_Up_Baby"), wiki("The_Birds_(film)"), wiki("Ferris_Bueller's_Day_Off"), wiki("Black_Panther_(film)")],
    },
    final: {
      prompt: "Leonardo DiCaprio won his first Academy Award, for Best Actor, for which film?",
      answer: "The Revenant",
      wrong: ["The Wolf of Wall Street", "The Aviator", "What's Eating Gilbert Grape"],
      explanation: "DiCaprio won Best Actor at the 2016 ceremony for The Revenant, after several earlier nominations.",
      sources: [wiki("The_Revenant_(2015_film)"), oscars(2016)],
    },
  }),

  puzzle(20, {
    frame: {
      clue: "After an attempt on his father's life, the youngest son of a New York crime family, a war hero who wanted no part of the business, is drawn in and becomes its ruthless new head.",
      answer: "The Godfather",
      wrong: ["Goodfellas", "Scarface (1983)", "The Untouchables"],
      explanation: "Al Pacino's Michael Corleone succeeds Marlon Brando's Vito in The Godfather (1972).",
      sources: [wiki("The_Godfather")],
    },
    cast: {
      actors: ["Steve Martin", "John Candy"],
      answer: "Planes, Trains and Automobiles",
      wrong: ["Uncle Buck", "The Jerk", "Father of the Bride (1991)"],
      explanation: "Martin's uptight ad man is stuck traveling with Candy's chatty shower-curtain-ring salesman in Planes, Trains and Automobiles (1987).",
      sources: [wiki("Planes,_Trains_and_Automobiles")],
    },
    quote: {
      clue: "Walking through his cornfield, an Iowa farmer hears a whispered voice promising that if he builds it, he will come. So he plows under his crops to build a baseball diamond.",
      answer: "Field of Dreams",
      wrong: ["The Natural", "Bull Durham", "A League of Their Own"],
      explanation: "Kevin Costner's Ray Kinsella hears the mysterious voice in Field of Dreams (1989).",
      sources: [wiki("Field_of_Dreams")],
    },
    timeline: {
      films: [
        ["Beverly Hills Cop", 1984],
        ["Iron Man", 2008],
        ["Gigi", 1958],
        ["City Lights", 1931],
      ],
      sources: [wiki("City_Lights"), wiki("Gigi_(1958_film)"), wiki("Beverly_Hills_Cop"), wiki("Iron_Man_(2008_film)")],
    },
    final: {
      prompt: "Which film was the first from a streaming service to win the Academy Award for Best Picture?",
      answer: "CODA",
      wrong: ["The Power of the Dog", "Roma", "The Irishman"],
      explanation: "Apple TV+'s CODA won Best Picture in 2022. The three Netflix films listed were all Best Picture nominees that did not win.",
      sources: [wiki("CODA_(2021_film)"), oscars(2022)],
    },
  }),
];
