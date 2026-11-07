import { oscars, puzzle, wiki } from "./builders";

export const PUZZLES_031_040 = [
  puzzle(31, {
    frame: {
      clue: "After losing their university jobs, three eccentric parapsychologists open a ghost-catching business in a converted New York firehouse, just as an ancient god prepares to destroy the city.",
      answer: "Ghostbusters",
      wrong: ["Beetlejuice", "The Frighteners", "Men in Black"],
      explanation: "Bill Murray, Dan Aykroyd and Harold Ramis strap on proton packs in Ghostbusters (1984).",
      sources: [wiki("Ghostbusters")],
    },
    cast: {
      actors: ["Eddie Murphy", "Dan Aykroyd"],
      answer: "Trading Places",
      wrong: ["Beverly Hills Cop", "The Blues Brothers", "Spies Like Us"],
      explanation: "Aykroyd's snobbish commodities broker and Murphy's street hustler swap lives as part of a bet in Trading Places (1983).",
      sources: [wiki("Trading_Places")],
    },
    quote: {
      clue: "Cornered in his mansion by a hit squad, a Cuban-born Miami drug lord grabs a rifle fitted with a grenade launcher and invites his attackers to say hello to his little friend.",
      answer: "Scarface (1983)",
      wrong: ["Carlito's Way", "Miami Vice", "Blow"],
      explanation: "Al Pacino's Tony Montana shouts 'Say hello to my little friend!' in Brian De Palma's Scarface (1983).",
      sources: [wiki("Scarface_(1983_film)")],
    },
    timeline: {
      films: [
        ["Footloose", 1984],
        ["King Kong", 1933],
        ["Pirates of the Caribbean: The Curse of the Black Pearl", 2003],
        ["The Good, the Bad and the Ugly", 1966],
      ],
      sources: [
        wiki("King_Kong_(1933_film)"),
        wiki("The_Good,_the_Bad_and_the_Ugly"),
        wiki("Footloose_(1984_film)"),
        wiki("Pirates_of_the_Caribbean:_The_Curse_of_the_Black_Pearl"),
      ],
    },
    final: {
      prompt: "Which film won the top prize, then called Outstanding Picture, at the very first Academy Awards in 1929?",
      answer: "Wings",
      wrong: ["Sunrise", "The Jazz Singer", "Metropolis"],
      explanation: "The World War I aviation drama Wings won Outstanding Picture at the first ceremony. Sunrise won a separate award for Unique and Artistic Production.",
      sources: [wiki("Wings_(1927_film)"), oscars(1929)],
    },
  }),

  puzzle(32, {
    frame: {
      clue: "After surviving the D-Day landing at Omaha Beach, an Army captain leads a squad deep into occupied France to find one paratrooper whose three brothers have all been killed in action.",
      answer: "Saving Private Ryan",
      wrong: ["The Thin Red Line", "Fury", "Hacksaw Ridge"],
      explanation: "Tom Hanks's Captain Miller searches for Matt Damon's Private Ryan in Steven Spielberg's Saving Private Ryan (1998).",
      sources: [wiki("Saving_Private_Ryan")],
    },
    cast: {
      actors: ["Audrey Hepburn", "Gregory Peck"],
      answer: "Roman Holiday",
      wrong: ["Breakfast at Tiffany's", "To Kill a Mockingbird", "Sabrina"],
      explanation: "Hepburn won Best Actress as a runaway princess exploring Rome with Peck's newspaperman in Roman Holiday (1953).",
      sources: [wiki("Roman_Holiday")],
    },
    quote: {
      clue: "Recalling a lesson his father taught him, a Mafia don tells a trusted associate to keep his friends close, but his enemies closer.",
      answer: "The Godfather Part II",
      wrong: ["The Godfather", "The Godfather Part III", "Goodfellas"],
      explanation: "Al Pacino's Michael Corleone passes on his father's advice to Frank Pentangeli in The Godfather Part II (1974).",
      sources: [wiki("The_Godfather_Part_II")],
    },
    timeline: {
      films: [
        ["Toy Story 3", 2010],
        ["A Clockwork Orange", 1971],
        ["Snow White and the Seven Dwarfs", 1937],
        ["RoboCop", 1987],
      ],
      sources: [
        wiki("Snow_White_and_the_Seven_Dwarfs_(1937_film)"),
        wiki("A_Clockwork_Orange_(film)"),
        wiki("RoboCop"),
        wiki("Toy_Story_3"),
      ],
    },
    final: {
      prompt: "Which performer holds the record for the most Academy Awards for acting, with four wins for Best Actress?",
      answer: "Katharine Hepburn",
      wrong: ["Meryl Streep", "Frances McDormand", "Bette Davis"],
      explanation: "Katharine Hepburn won Best Actress for Morning Glory, Guess Who's Coming to Dinner, The Lion in Winter and On Golden Pond.",
      sources: [wiki("Katharine_Hepburn")],
    },
  }),

  puzzle(33, {
    frame: {
      clue: "On a small Greek island, a bride-to-be secretly invites three men from her mother's past to her wedding, hoping to discover which of them is her father. Everyone keeps breaking into ABBA songs.",
      answer: "Mamma Mia!",
      wrong: ["The Greatest Showman", "Rock of Ages", "My Big Fat Greek Wedding"],
      explanation: "Amanda Seyfried's Sophie invites her three possible dads, while Meryl Streep plays her mother Donna, in Mamma Mia! (2008).",
      sources: [wiki("Mamma_Mia!_(film)")],
    },
    cast: {
      actors: ["Arnold Schwarzenegger", "Danny DeVito"],
      answer: "Twins",
      wrong: ["Kindergarten Cop", "Batman Returns", "True Lies"],
      explanation: "Schwarzenegger and DeVito play unlikely long-lost brothers in Twins (1988). They reunited for Junior (1994).",
      sources: [wiki("Twins_(1988_film)")],
    },
    quote: {
      clue: "Having picked up some slang from the boy he protects, a reprogrammed cyborg bids his frozen liquid-metal enemy 'hasta la vista, baby' before shattering him.",
      answer: "Terminator 2: Judgment Day",
      wrong: ["The Terminator", "Total Recall (1990)", "Predator"],
      explanation: "Arnold Schwarzenegger's T-800 says 'Hasta la vista, baby' to the frozen T-1000 in Terminator 2: Judgment Day (1991).",
      sources: [wiki("Terminator_2:_Judgment_Day")],
    },
    timeline: {
      films: [
        ["Independence Day", 1996],
        ["The Maltese Falcon", 1941],
        ["The Avengers", 2012],
        ["Cabaret", 1972],
      ],
      sources: [
        wiki("The_Maltese_Falcon_(1941_film)"),
        wiki("Cabaret_(1972_film)"),
        wiki("Independence_Day_(1996_film)"),
        wiki("The_Avengers_(2012_film)"),
      ],
    },
    final: {
      prompt: "Which epic, famous for its chariot race, became the first film to win 11 Academy Awards?",
      answer: "Ben-Hur",
      wrong: ["Spartacus", "The Ten Commandments", "Cleopatra"],
      explanation: "Ben-Hur (1959), starring Charlton Heston, won 11 Oscars at the 1960 ceremony, a record later matched by Titanic and The Return of the King.",
      sources: [wiki("Ben-Hur_(1959_film)"), oscars(1960)],
    },
  }),

  puzzle(34, {
    frame: {
      clue: "A teenage mermaid princess, fascinated by the human world, trades her voice to a sea witch for a pair of legs and three days to win a prince's kiss.",
      answer: "The Little Mermaid",
      wrong: ["Splash", "Ponyo", "Aquamarine"],
      explanation: "Ariel strikes her bargain with Ursula in Disney's animated The Little Mermaid (1989).",
      sources: [wiki("The_Little_Mermaid_(1989_film)")],
    },
    cast: {
      actors: ["Kristen Wiig", "Maya Rudolph"],
      answer: "Bridesmaids",
      wrong: ["Grown Ups", "Knocked Up", "Inherent Vice"],
      explanation: "Wiig's maid of honor Annie and Rudolph's bride Lillian are lifelong best friends in Bridesmaids (2011), which Wiig co-wrote.",
      sources: [wiki("Bridesmaids_(2011_film)")],
    },
    quote: {
      clue: "Told to polish a row of old cars using circular hand motions, repeating 'wax on, wax off', a frustrated teenager later discovers the chores were secret martial-arts training.",
      answer: "The Karate Kid (1984)",
      wrong: ["Bloodsport", "Kickboxer (1989)", "Rocky III"],
      explanation: "Pat Morita's Mr. Miyagi trains Ralph Macchio's Daniel with 'wax on, wax off' in The Karate Kid (1984).",
      sources: [wiki("The_Karate_Kid_(1984_film)")],
    },
    timeline: {
      films: [
        ["Batman", 1989],
        ["Inglourious Basterds", 2009],
        ["Notorious", 1946],
        ["American Graffiti", 1973],
      ],
      sources: [wiki("Notorious_(1946_film)"), wiki("American_Graffiti"), wiki("Batman_(1989_film)"), wiki("Inglourious_Basterds")],
    },
    final: {
      prompt: "Which became the first animated feature nominated for the Academy Award for Best Picture?",
      answer: "Beauty and the Beast (1991)",
      wrong: ["Snow White and the Seven Dwarfs", "The Lion King", "Toy Story"],
      explanation: "Disney's Beauty and the Beast (1991) was nominated for Best Picture at the 1992 ceremony. Up and Toy Story 3 later followed.",
      sources: [wiki("Beauty_and_the_Beast_(1991_film)"), oscars(1992)],
    },
  }),

  puzzle(35, {
    frame: {
      clue: "Presumed dead and left behind by his crew during a dust storm, an astronaut-botanist survives alone on Mars by growing potatoes inside his habitat.",
      answer: "The Martian",
      wrong: ["Interstellar", "Mission to Mars", "Red Planet"],
      explanation: "Matt Damon's Mark Watney engineers his way to survival in Ridley Scott's The Martian (2015).",
      sources: [wiki("The_Martian_(film)")],
    },
    cast: {
      actors: ["Jack Nicholson", "Morgan Freeman"],
      answer: "The Bucket List",
      wrong: ["As Good as It Gets", "Million Dollar Baby", "About Schmidt"],
      explanation: "Nicholson and Freeman play terminally ill men working through a list of wishes in The Bucket List (2007).",
      sources: [wiki("The_Bucket_List")],
    },
    quote: {
      clue: "Managing a women's professional team during World War II, a hard-drinking former slugger is horrified when one of his players starts crying, and yells that there's no crying in baseball.",
      answer: "A League of Their Own",
      wrong: ["Bull Durham", "Major League", "The Natural"],
      explanation: "Tom Hanks's Jimmy Dugan delivers the line in A League of Their Own (1992).",
      sources: [wiki("A_League_of_Their_Own")],
    },
    timeline: {
      films: [
        ["Superbad", 2007],
        ["Scream", 1996],
        ["Young Frankenstein", 1974],
        ["The Third Man", 1949],
      ],
      sources: [wiki("The_Third_Man"), wiki("Young_Frankenstein"), wiki("Scream_(1996_film)"), wiki("Superbad_(film)")],
    },
    final: {
      prompt: "Which road-trip film about a Black classical pianist and his Italian-American driver won Best Picture at the 2019 ceremony?",
      answer: "Green Book",
      wrong: ["Roma", "BlacKkKlansman", "Bohemian Rhapsody"],
      explanation: "Green Book won Best Picture at the 2019 Academy Awards, and Mahershala Ali won Best Supporting Actor for it.",
      sources: [wiki("Green_Book_(film)"), oscars(2019)],
    },
  }),

  puzzle(36, {
    frame: {
      clue: "Unable to form new memories since an attack, a former insurance investigator hunts his wife's killer using Polaroid photos and notes tattooed on his body. The story is told backwards.",
      answer: "Memento",
      wrong: ["The Prestige", "Insomnia (2002)", "Shutter Island"],
      explanation: "Guy Pearce's Leonard Shelby tracks 'John G.' in Christopher Nolan's Memento (2000).",
      sources: [wiki("Memento_(film)")],
    },
    cast: {
      actors: ["Denzel Washington", "Tom Hanks"],
      answer: "Philadelphia",
      wrong: ["Glory", "Big", "The Pelican Brief"],
      explanation: "Hanks won Best Actor as a lawyer with AIDS who hires Washington's attorney to sue his former firm in Philadelphia (1993).",
      sources: [wiki("Philadelphia_(film)")],
    },
    quote: {
      clue: "A clique of popular high-school girls lives by a strict set of rules, including that on Wednesdays they wear pink.",
      answer: "Mean Girls",
      wrong: ["Clueless", "Heathers", "Easy A"],
      explanation: "The Plastics' rule 'On Wednesdays we wear pink' comes from Mean Girls (2004), written by Tina Fey.",
      sources: [wiki("Mean_Girls")],
    },
    timeline: {
      films: [
        ["Basic Instinct", 1992],
        ["An American in Paris", 1951],
        ["Batman Begins", 2005],
        ["Carrie", 1976],
      ],
      sources: [wiki("An_American_in_Paris_(film)"), wiki("Carrie_(1976_film)"), wiki("Basic_Instinct"), wiki("Batman_Begins")],
    },
    final: {
      prompt: "Who won the Academy Award for Best Actor for playing Freddie Mercury in Bohemian Rhapsody?",
      answer: "Rami Malek",
      wrong: ["Taron Egerton", "Austin Butler", "Ben Whishaw"],
      explanation: "Rami Malek won Best Actor at the 2019 ceremony for playing the Queen frontman.",
      sources: [wiki("Rami_Malek"), oscars(2019)],
    },
  }),

  puzzle(37, {
    frame: {
      clue: "Won at a county fair, a polite young pig is raised by a sheepdog and learns to herd sheep, eventually earning a place in the national sheepdog trials.",
      answer: "Babe",
      wrong: ["Charlotte's Web (2006)", "Chicken Run", "Animal Farm (1954)"],
      explanation: "Farmer Hoggett enters his pig in the trials in Babe (1995). 'That'll do, pig.'",
      sources: [wiki("Babe_(film)")],
    },
    cast: {
      actors: ["Hugh Grant", "Andie MacDowell"],
      answer: "Four Weddings and a Funeral",
      wrong: ["Notting Hill", "Groundhog Day", "Sex, Lies, and Videotape"],
      explanation: "Grant's bumbling Charles keeps running into MacDowell's Carrie in Four Weddings and a Funeral (1994).",
      sources: [wiki("Four_Weddings_and_a_Funeral")],
    },
    quote: {
      clue: "Catching sight of herself in a mirror, an ambitious young comedian who dreams of the Ziegfeld Follies greets her reflection with 'Hello, gorgeous.'",
      answer: "Funny Girl",
      wrong: ["Hello, Dolly!", "Gypsy (1962)", "Cabaret"],
      explanation: "Barbra Streisand won Best Actress as Fanny Brice, whose first line is 'Hello, gorgeous', in Funny Girl (1968).",
      sources: [wiki("Funny_Girl_(film)")],
    },
    timeline: {
      films: [
        ["Her", 2013],
        ["From Here to Eternity", 1953],
        ["Reservoir Dogs", 1992],
        ["Superman", 1978],
      ],
      sources: [wiki("From_Here_to_Eternity"), wiki("Superman_(1978_film)"), wiki("Reservoir_Dogs"), wiki("Her_(film)")],
    },
    final: {
      prompt: "Which became the first musical in more than 30 years to win Best Picture, at the 2003 ceremony?",
      answer: "Chicago",
      wrong: ["Moulin Rouge!", "Les Misérables (2012)", "Dreamgirls"],
      explanation: "Chicago, starring Renée Zellweger, Catherine Zeta-Jones and Richard Gere, won Best Picture in 2003, the first musical to win since Oliver!",
      sources: [wiki("Chicago_(2002_film)"), oscars(2003)],
    },
  }),

  puzzle(38, {
    frame: {
      clue: "In the summer of 1962, a shy new kid joins a neighborhood pickup baseball team. When he hits his stepdad's Babe Ruth-signed ball over a fence, the boys have to get it back from a fearsome dog.",
      answer: "The Sandlot",
      wrong: ["Little Big League", "Rookie of the Year", "The Bad News Bears (1976)"],
      explanation: "Scotty Smalls and the gang face 'the Beast' in The Sandlot (1993).",
      sources: [wiki("The_Sandlot")],
    },
    cast: {
      actors: ["Leonardo DiCaprio", "Tom Hanks"],
      answer: "Catch Me If You Can",
      wrong: ["The Terminal", "The Aviator", "Bridge of Spies"],
      explanation: "DiCaprio's teenage con artist Frank Abagnale Jr. is pursued by Hanks's FBI agent in Catch Me If You Can (2002).",
      sources: [wiki("Catch_Me_If_You_Can")],
    },
    quote: {
      clue: "Holding hostages inside a Brooklyn bank, a would-be robber whips the crowd outside into a frenzy by chanting the name of a notorious prison uprising: Attica!",
      answer: "Dog Day Afternoon",
      wrong: ["Serpico", "The Taking of Pelham One Two Three (1974)", "Inside Man"],
      explanation: "Al Pacino's Sonny Wortzik leads the 'Attica!' chant in Dog Day Afternoon (1975).",
      sources: [wiki("Dog_Day_Afternoon")],
    },
    timeline: {
      films: [
        ["The Mask", 1994],
        ["Guardians of the Galaxy", 2014],
        ["The Elephant Man", 1980],
        ["Seven Samurai", 1954],
      ],
      sources: [wiki("Seven_Samurai"), wiki("The_Elephant_Man_(film)"), wiki("The_Mask_(1994_film)"), wiki("Guardians_of_the_Galaxy_(film)")],
    },
    final: {
      prompt: "Sam Rockwell won Best Supporting Actor as a hot-headed small-town police officer in which film?",
      answer: "Three Billboards Outside Ebbing, Missouri",
      wrong: ["Vice", "Jojo Rabbit", "Richard Jewell"],
      explanation: "Rockwell won at the 2018 ceremony for Three Billboards Outside Ebbing, Missouri, and Frances McDormand won Best Actress for the same film.",
      sources: [wiki("Three_Billboards_Outside_Ebbing,_Missouri"), oscars(2018)],
    },
  }),

  puzzle(39, {
    frame: {
      clue: "Told all his life that he's too small and not smart enough, a working-class kid from an Illinois steel town fights his way into Notre Dame and onto the football team's practice squad.",
      answer: "Rudy",
      wrong: ["The Blind Side", "Friday Night Lights", "Hoosiers"],
      explanation: "Sean Astin plays Daniel 'Rudy' Ruettiger in Rudy (1993).",
      sources: [wiki("Rudy_(film)")],
    },
    cast: {
      actors: ["Cher", "Nicolas Cage"],
      answer: "Moonstruck",
      wrong: ["Mask (1985)", "Raising Arizona", "Mermaids"],
      explanation: "Cher won Best Actress as a widowed bookkeeper who falls for her fiancé's hot-headed brother, played by Cage, in Moonstruck (1987).",
      sources: [wiki("Moonstruck")],
    },
    quote: {
      clue: "In his mansion's private bowling alley, a ruthless oil tycoon taunts a preacher with an analogy about straws, bellowing that he drinks his milkshake.",
      answer: "There Will Be Blood",
      wrong: ["Giant", "No Country for Old Men", "The Master"],
      explanation: "Daniel Day-Lewis's Daniel Plainview roars 'I drink your milkshake!' at Paul Dano's Eli Sunday in There Will Be Blood (2007).",
      sources: [wiki("There_Will_Be_Blood")],
    },
    timeline: {
      films: [
        ["Armageddon", 1998],
        ["Marty", 1955],
        ["Star Wars: The Force Awakens", 2015],
        ["An Officer and a Gentleman", 1982],
      ],
      sources: [wiki("Marty_(film)"), wiki("An_Officer_and_a_Gentleman"), wiki("Armageddon_(1998_film)"), wiki("Star_Wars:_The_Force_Awakens")],
    },
    final: {
      prompt: "Which film, made to look like one continuous shot, won Best Picture at the 2015 ceremony?",
      answer: "Birdman",
      wrong: ["Boyhood", "1917", "The Imitation Game"],
      explanation: "Birdman won Best Picture and Best Director for Alejandro G. Iñárritu in 2015. 1917 used a similar one-shot style but lost Best Picture to Parasite.",
      sources: [wiki("Birdman_(film)"), oscars(2015)],
    },
  }),

  puzzle(40, {
    frame: {
      clue: "In a city powered by children's screams, a power company's top scarer and his one-eyed best friend discover that a human toddler has followed them through a closet door.",
      answer: "Monsters, Inc.",
      wrong: ["Monster House", "Hotel Transylvania", "Shrek"],
      explanation: "Sulley and Mike Wazowski meet Boo in Pixar's Monsters, Inc. (2001).",
      sources: [wiki("Monsters,_Inc.")],
    },
    cast: {
      actors: ["Harrison Ford", "Tommy Lee Jones"],
      answer: "The Fugitive",
      wrong: ["Air Force One", "Men in Black", "Witness"],
      explanation: "Jones won Best Supporting Actor as the U.S. Marshal hunting Ford's wrongly convicted doctor in The Fugitive (1993).",
      sources: [wiki("The_Fugitive_(1993_film)")],
    },
    quote: {
      clue: "At a bowling-alley bar, a cowboy narrator takes comfort in hearing that a laid-back slacker, caught up in a kidnapping over a soiled rug, abides.",
      answer: "The Big Lebowski",
      wrong: ["Fargo", "Raising Arizona", "O Brother, Where Art Thou?"],
      explanation: "Jeff Bridges's Dude tells Sam Elliott's Stranger that 'the Dude abides' in the Coen brothers' The Big Lebowski (1998).",
      sources: [wiki("The_Big_Lebowski")],
    },
    timeline: {
      films: [
        ["Deadpool", 2016],
        ["Fast Times at Ridgemont High", 1982],
        ["The Ten Commandments", 1956],
        ["American Pie", 1999],
      ],
      sources: [
        wiki("The_Ten_Commandments_(1956_film)"),
        wiki("Fast_Times_at_Ridgemont_High"),
        wiki("American_Pie_(film)"),
        wiki("Deadpool_(film)"),
      ],
    },
    final: {
      prompt: "Which film, directed by Ben Affleck, won Best Picture at the 2013 ceremony even though Affleck was not nominated for Best Director?",
      answer: "Argo",
      wrong: ["Lincoln", "Zero Dark Thirty", "Life of Pi"],
      explanation: "Argo won Best Picture at the 2013 Academy Awards. Affleck's missing directing nomination was one of the year's biggest snubs.",
      sources: [wiki("Argo_(2012_film)"), oscars(2013)],
    },
  }),
];
