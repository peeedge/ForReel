import { oscars, puzzle, wiki } from "./builders";

export const PUZZLES_041_050 = [
  puzzle(41, {
    frame: {
      clue: "Days before he retires, a veteran detective and his hot-headed new partner hunt a serial killer who stages each murder to represent one of the seven deadly sins.",
      answer: "Se7en",
      wrong: ["Zodiac", "The Silence of the Lambs", "Kiss the Girls"],
      explanation: "Morgan Freeman's Somerset and Brad Pitt's Mills track John Doe in David Fincher's Se7en (1995).",
      sources: [wiki("Seven_(1995_film)")],
    },
    cast: {
      actors: ["Bruce Willis", "Samuel L. Jackson"],
      answer: "Unbreakable",
      wrong: ["Armageddon", "Jackie Brown", "The Fifth Element"],
      explanation: "Willis plays a security guard who walks away unhurt from a train crash and Jackson plays a fragile comic-book dealer in M. Night Shyamalan's Unbreakable (2000).",
      sources: [wiki("Unbreakable_(film)")],
    },
    quote: {
      clue: "Asked to name something he loves, a dim-witted TV weatherman glances around the newsroom and declares that he loves lamp.",
      answer: "Anchorman: The Legend of Ron Burgundy",
      wrong: ["Talladega Nights: The Ballad of Ricky Bobby", "Step Brothers", "Zoolander"],
      explanation: "Steve Carell's Brick Tamland says 'I love lamp' in Anchorman: The Legend of Ron Burgundy (2004).",
      sources: [wiki("Anchorman:_The_Legend_of_Ron_Burgundy")],
    },
    timeline: {
      films: [
        ["The Blair Witch Project", 1999],
        ["Lady Bird", 2017],
        ["An Affair to Remember", 1957],
        ["Flashdance", 1983],
      ],
      sources: [wiki("An_Affair_to_Remember"), wiki("Flashdance"), wiki("The_Blair_Witch_Project"), wiki("Lady_Bird_(film)")],
    },
    final: {
      prompt: "Which film won Best Picture at the 2011 ceremony, with Colin Firth named Best Actor for playing a stammering monarch?",
      answer: "The King's Speech",
      wrong: ["The Social Network", "Black Swan", "True Grit (2010)"],
      explanation: "The King's Speech won four Academy Awards in 2011, including Best Picture and Best Actor for Firth as King George VI.",
      sources: [wiki("The_King's_Speech"), oscars(2011)],
    },
  }),

  puzzle(42, {
    frame: {
      clue: "Dumped by her boyfriend for not being serious enough, a bubbly sorority president follows him to Harvard Law School and turns out to be a brilliant lawyer.",
      answer: "Legally Blonde",
      wrong: ["Clueless", "Miss Congeniality", "The Proposal"],
      explanation: "Reese Witherspoon's Elle Woods heads to Harvard in Legally Blonde (2001).",
      sources: [wiki("Legally_Blonde")],
    },
    cast: {
      actors: ["Kurt Russell", "Goldie Hawn"],
      answer: "Overboard",
      wrong: ["Escape from New York", "Private Benjamin", "Tango & Cash"],
      explanation: "Russell's carpenter convinces Hawn's amnesiac heiress that she's his wife in Overboard (1987). The two have been a couple since 1983.",
      sources: [wiki("Overboard_(1987_film)")],
    },
    quote: {
      clue: "Even with both arms cut off in a duel, a stubborn knight guarding a bridge insists that it's just a flesh wound.",
      answer: "Monty Python and the Holy Grail",
      wrong: ["Monty Python's Life of Brian", "Time Bandits", "Robin Hood: Men in Tights"],
      explanation: "John Cleese's Black Knight shrugs off his injuries in Monty Python and the Holy Grail (1975).",
      sources: [wiki("Monty_Python_and_the_Holy_Grail")],
    },
    timeline: {
      films: [
        ["Dunkirk", 2017],
        ["Risky Business", 1983],
        ["Cat on a Hot Tin Roof", 1958],
        ["Erin Brockovich", 2000],
      ],
      sources: [wiki("Cat_on_a_Hot_Tin_Roof_(1958_film)"), wiki("Risky_Business"), wiki("Erin_Brockovich_(film)"), wiki("Dunkirk_(2017_film)")],
    },
    final: {
      prompt: "Which romantic comedy beat Saving Private Ryan to win Best Picture at the 1999 ceremony?",
      answer: "Shakespeare in Love",
      wrong: ["Saving Private Ryan", "Life Is Beautiful", "Elizabeth"],
      explanation: "Shakespeare in Love won seven Academy Awards in 1999, including Best Picture and Best Actress for Gwyneth Paltrow.",
      sources: [wiki("Shakespeare_in_Love"), oscars(1999)],
    },
  }),

  puzzle(43, {
    frame: {
      clue: "In a desert wasteland, a captured road warrior escapes a warlord's cult and joins a one-armed rebel commander smuggling the tyrant's five wives to freedom in an armored war rig.",
      answer: "Mad Max: Fury Road",
      wrong: ["Waterworld", "The Book of Eli", "Snowpiercer"],
      explanation: "Tom Hardy's Max and Charlize Theron's Imperator Furiosa flee Immortan Joe in Mad Max: Fury Road (2015).",
      sources: [wiki("Mad_Max:_Fury_Road")],
    },
    cast: {
      actors: ["Chris Tucker", "Jackie Chan"],
      answer: "Rush Hour",
      wrong: ["The Fifth Element", "Shanghai Noon", "Friday"],
      explanation: "Chan's Hong Kong inspector teams up with Tucker's fast-talking LAPD detective in Rush Hour (1998).",
      sources: [wiki("Rush_Hour_(1998_film)")],
    },
    quote: {
      clue: "Captured by talking simians who treat humans as animals, a stranded astronaut stuns his captors by finally speaking, ordering them to take their stinking paws off him.",
      answer: "Planet of the Apes (1968)",
      wrong: ["Rise of the Planet of the Apes", "The Omega Man", "Logan's Run"],
      explanation: "Charlton Heston's George Taylor shocks the apes with 'Take your stinking paws off me, you damned dirty ape!' in Planet of the Apes (1968).",
      sources: [wiki("Planet_of_the_Apes_(1968_film)")],
    },
    timeline: {
      films: [
        ["Harry Potter and the Sorcerer's Stone", 2001],
        ["Anatomy of a Murder", 1959],
        ["Spider-Man: Into the Spider-Verse", 2018],
        ["Witness", 1985],
      ],
      sources: [
        wiki("Anatomy_of_a_Murder"),
        wiki("Witness_(1985_film)"),
        wiki("Harry_Potter_and_the_Philosopher's_Stone_(film)"),
        wiki("Spider-Man:_Into_the_Spider-Verse"),
      ],
    },
    final: {
      prompt: "Which wartime romance won nine Academy Awards, including Best Picture, at the 1997 ceremony?",
      answer: "The English Patient",
      wrong: ["Fargo", "Jerry Maguire", "Shine"],
      explanation: "The English Patient won nine Oscars in 1997, including Best Picture and Best Supporting Actress for Juliette Binoche.",
      sources: [wiki("The_English_Patient_(film)"), oscars(1997)],
    },
  }),

  puzzle(44, {
    frame: {
      clue: "Five lucky children who find golden tickets in candy bars win a tour of a reclusive confectioner's factory, staffed by orange-skinned Oompa Loompas. One by one, the misbehaving kids meet sticky ends.",
      answer: "Willy Wonka & the Chocolate Factory",
      wrong: ["Chitty Chitty Bang Bang", "Matilda (1996)", "James and the Giant Peach"],
      explanation: "Gene Wilder plays the candy maker in Willy Wonka & the Chocolate Factory (1971).",
      sources: [wiki("Willy_Wonka_%26_the_Chocolate_Factory")],
    },
    cast: {
      actors: ["Meryl Streep", "Dustin Hoffman"],
      answer: "Kramer vs. Kramer",
      wrong: ["Tootsie", "Sophie's Choice", "Rain Man"],
      explanation: "Hoffman won Best Actor and Streep won Best Supporting Actress as a divorcing couple fighting over their son in Kramer vs. Kramer (1979).",
      sources: [wiki("Kramer_vs._Kramer")],
    },
    quote: {
      clue: "In an overcrowded 2022, a New York detective is dragged away shouting the horrifying truth about the green wafers everyone has been eating.",
      answer: "Soylent Green",
      wrong: ["Logan's Run", "The Omega Man", "THX 1138"],
      explanation: "Charlton Heston's Detective Thorn cries 'Soylent Green is people!' in Soylent Green (1973).",
      sources: [wiki("Soylent_Green")],
    },
    timeline: {
      films: [
        ["Love Actually", 2003],
        ["One Hundred and One Dalmatians", 1961],
        ["Crazy Rich Asians", 2018],
        ["Aliens", 1986],
      ],
      sources: [wiki("One_Hundred_and_One_Dalmatians"), wiki("Aliens_(film)"), wiki("Love_Actually"), wiki("Crazy_Rich_Asians_(film)")],
    },
    final: {
      prompt: "Which film swept the 'Big Five' Academy Awards at the 1976 ceremony, with Jack Nicholson winning Best Actor?",
      answer: "One Flew Over the Cuckoo's Nest",
      wrong: ["Jaws", "Dog Day Afternoon", "Barry Lyndon"],
      explanation: "One Flew Over the Cuckoo's Nest won Best Picture, Director, Actor, Actress and Adapted Screenplay in 1976.",
      sources: [wiki("One_Flew_Over_the_Cuckoo's_Nest_(film)"), oscars(1976)],
    },
  }),

  puzzle(45, {
    frame: {
      clue: "After his cargo plane goes down in the Pacific, a time-obsessed FedEx systems engineer is stranded alone on a deserted island for four years. A volleyball becomes his only companion.",
      answer: "Cast Away",
      wrong: ["Life of Pi", "All Is Lost", "Swiss Family Robinson (1960)"],
      explanation: "Tom Hanks's Chuck Noland befriends a volleyball named Wilson in Cast Away (2000).",
      sources: [wiki("Cast_Away")],
    },
    cast: {
      actors: ["Natalie Portman", "Mila Kunis"],
      answer: "Black Swan",
      wrong: ["Friends with Benefits", "Thor: Love and Thunder", "Jackie"],
      explanation: "Portman won Best Actress as a ballerina unsettled by Kunis's free-spirited rival in Black Swan (2010).",
      sources: [wiki("Black_Swan_(film)")],
    },
    quote: {
      clue: "Shortly before he's shot by a carjacker, a kindly uncle tells his teenage nephew that with great power comes great responsibility.",
      answer: "Spider-Man (2002)",
      wrong: ["Batman Begins", "Superman (1978)", "Unbreakable"],
      explanation: "Cliff Robertson's Uncle Ben gives Peter Parker the advice in Sam Raimi's Spider-Man (2002).",
      sources: [wiki("Spider-Man_(2002_film)")],
    },
    timeline: {
      films: [
        ["Napoleon Dynamite", 2004],
        ["Bohemian Rhapsody", 2018],
        ["Crocodile Dundee", 1986],
        ["To Kill a Mockingbird", 1962],
      ],
      sources: [wiki("To_Kill_a_Mockingbird_(film)"), wiki("Crocodile_Dundee"), wiki("Napoleon_Dynamite"), wiki("Bohemian_Rhapsody_(film)")],
    },
    final: {
      prompt: "Which biopic won Best Picture at the 1983 ceremony, beating E.T. the Extra-Terrestrial and Tootsie?",
      answer: "Gandhi",
      wrong: ["E.T. the Extra-Terrestrial", "Tootsie", "The Verdict"],
      explanation: "Gandhi won eight Academy Awards in 1983, including Best Picture and Best Actor for Ben Kingsley.",
      sources: [wiki("Gandhi_(film)"), oscars(1983)],
    },
  }),

  puzzle(46, {
    frame: {
      clue: "An ambitious young jazz drummer at a cutthroat Manhattan conservatory is pushed to breaking point by an abusive bandleader obsessed with tempo.",
      answer: "Whiplash",
      wrong: ["Drumline", "Mr. Holland's Opus", "Black Swan"],
      explanation: "Miles Teller's Andrew clashes with J.K. Simmons's Oscar-winning Fletcher in Whiplash (2014).",
      sources: [wiki("Whiplash_(2014_film)")],
    },
    cast: {
      actors: ["Mike Myers", "Dana Carvey"],
      answer: "Wayne's World",
      wrong: ["Austin Powers: International Man of Mystery", "So I Married an Axe Murderer", "Opportunity Knocks"],
      explanation: "Myers's Wayne and Carvey's Garth host a public-access TV show from a basement in Wayne's World (1992).",
      sources: [wiki("Wayne's_World_(film)")],
    },
    quote: {
      clue: "In 1960s Mississippi, a Black maid comforts the toddler in her care by telling her that she is kind, smart and important.",
      answer: "The Help",
      wrong: ["The Color Purple (1985)", "Hidden Figures", "Fried Green Tomatoes"],
      explanation: "Viola Davis's Aibileen Clark tells Mae Mobley 'You is kind, you is smart, you is important' in The Help (2011).",
      sources: [wiki("The_Help_(film)")],
    },
    timeline: {
      films: [
        ["Walk the Line", 2005],
        ["Cleopatra", 1963],
        ["1917", 2019],
        ["Good Morning, Vietnam", 1987],
      ],
      sources: [wiki("Cleopatra_(1963_film)"), wiki("Good_Morning,_Vietnam"), wiki("Walk_the_Line"), wiki("1917_(2019_film)")],
    },
    final: {
      prompt: "Which British film about two runners at the 1924 Paris Olympics won Best Picture at the 1982 ceremony?",
      answer: "Chariots of Fire",
      wrong: ["Reds", "Raiders of the Lost Ark", "On Golden Pond"],
      explanation: "Chariots of Fire won four Academy Awards in 1982, including Best Picture and Best Original Score for Vangelis.",
      sources: [wiki("Chariots_of_Fire"), oscars(1982)],
    },
  }),

  puzzle(47, {
    frame: {
      clue: "In 1971 Virginia, a Black coach is put in charge of a newly integrated high-school football team, and has to unite players who refuse to share a locker room.",
      answer: "Remember the Titans",
      wrong: ["Friday Night Lights", "The Blind Side", "Glory Road"],
      explanation: "Denzel Washington plays Coach Herman Boone of T.C. Williams High School in Remember the Titans (2000).",
      sources: [wiki("Remember_the_Titans")],
    },
    cast: {
      actors: ["Jim Carrey", "Kate Winslet"],
      answer: "Eternal Sunshine of the Spotless Mind",
      wrong: ["The Truman Show", "Titanic", "Liar Liar"],
      explanation: "Carrey and Winslet play ex-lovers who have each other erased from their memories in Eternal Sunshine of the Spotless Mind (2004).",
      sources: [wiki("Eternal_Sunshine_of_the_Spotless_Mind")],
    },
    quote: {
      clue: "In a nightclub where humans and cartoons mix, a sultry singer tells a hard-boiled detective that she's not bad, she's just drawn that way.",
      answer: "Who Framed Roger Rabbit",
      wrong: ["Cool World", "Space Jam", "Mary Poppins"],
      explanation: "Jessica Rabbit, voiced by Kathleen Turner, says it to Bob Hoskins's Eddie Valiant in Who Framed Roger Rabbit (1988).",
      sources: [wiki("Who_Framed_Roger_Rabbit")],
    },
    timeline: {
      films: [
        ["Tenet", 2020],
        ["Coming to America", 1988],
        ["A Hard Day's Night", 1964],
        ["Cars", 2006],
      ],
      sources: [wiki("A_Hard_Day's_Night_(film)"), wiki("Coming_to_America"), wiki("Cars_(film)"), wiki("Tenet_(film)")],
    },
    final: {
      prompt: "Which Bernardo Bertolucci epic won all nine Academy Awards it was nominated for at the 1988 ceremony?",
      answer: "The Last Emperor",
      wrong: ["Broadcast News", "Hope and Glory", "Moonstruck"],
      explanation: "The Last Emperor went nine for nine at the 1988 Academy Awards, including Best Picture and Best Director.",
      sources: [wiki("The_Last_Emperor"), oscars(1988)],
    },
  }),

  puzzle(48, {
    frame: {
      clue: "The first rabbit officer on a big-city police force reluctantly teams up with a con-artist fox to crack a case of missing predators who have turned savage.",
      answer: "Zootopia",
      wrong: ["Sing", "The Bad Guys", "Robin Hood (1973)"],
      explanation: "Judy Hopps and Nick Wilde solve the case in Disney's Zootopia (2016).",
      sources: [wiki("Zootopia")],
    },
    cast: {
      actors: ["Christian Bale", "Hugh Jackman"],
      answer: "The Prestige",
      wrong: ["The Dark Knight", "Logan", "Les Misérables (2012)"],
      explanation: "Bale and Jackman play rival stage magicians in Christopher Nolan's The Prestige (2006).",
      sources: [wiki("The_Prestige_(film)")],
    },
    quote: {
      clue: "Immortal swordsmen are fated to battle through the centuries, beheading one another until, as they keep reminding each other, there can be only one.",
      answer: "Highlander",
      wrong: ["Conan the Barbarian (1982)", "Excalibur", "Braveheart"],
      explanation: "Christopher Lambert's Connor MacLeod lives by the creed 'There can be only one' in Highlander (1986).",
      sources: [wiki("Highlander_(film)")],
    },
    timeline: {
      films: [
        ["Working Girl", 1988],
        ["Soul", 2020],
        ["Thunderball", 1965],
        ["Enchanted", 2007],
      ],
      sources: [wiki("Thunderball_(film)"), wiki("Working_Girl"), wiki("Enchanted_(film)"), wiki("Soul_(2020_film)")],
    },
    final: {
      prompt: "Which police thriller, famous for a car chase beneath an elevated train, won Best Picture at the 1972 ceremony?",
      answer: "The French Connection",
      wrong: ["A Clockwork Orange", "Fiddler on the Roof", "The Last Picture Show"],
      explanation: "The French Connection won five Academy Awards in 1972, including Best Picture and Best Actor for Gene Hackman.",
      sources: [wiki("The_French_Connection_(film)"), oscars(1972)],
    },
  }),

  puzzle(49, {
    frame: {
      clue: "On a sweltering summer day, a lone holdout on a murder trial jury persuades his eleven fellow jurors, one by one, to reconsider their guilty verdict.",
      answer: "12 Angry Men",
      wrong: ["Witness for the Prosecution", "Anatomy of a Murder", "Inherit the Wind"],
      explanation: "Henry Fonda's Juror 8 sows reasonable doubt in Sidney Lumet's 12 Angry Men (1957).",
      sources: [wiki("12_Angry_Men_(1957_film)")],
    },
    cast: {
      actors: ["Katharine Hepburn", "Humphrey Bogart"],
      answer: "The African Queen",
      wrong: ["Casablanca", "Sabrina", "The Philadelphia Story"],
      explanation: "Bogart won Best Actor as a gin-soaked riverboat captain opposite Hepburn's prim missionary in The African Queen (1951).",
      sources: [wiki("The_African_Queen_(film)")],
    },
    quote: {
      clue: "Told by a Persian messenger that his defiance is madness, a Spartan king roars his reply and kicks the envoy into a bottomless pit.",
      answer: "300",
      wrong: ["Troy", "Alexander", "Immortals"],
      explanation: "Gerard Butler's Leonidas bellows 'This is Sparta!' in Zack Snyder's 300 (2006).",
      sources: [wiki("300_(film)")],
    },
    timeline: {
      films: [
        ["Kung Fu Panda", 2008],
        ["Who's Afraid of Virginia Woolf?", 1966],
        ["Encanto", 2021],
        ["Glory", 1989],
      ],
      sources: [wiki("Who's_Afraid_of_Virginia_Woolf%3F_(film)"), wiki("Glory_(1989_film)"), wiki("Kung_Fu_Panda_(film)"), wiki("Encanto_(film)")],
    },
    final: {
      prompt: "George C. Scott won, and refused, the Academy Award for Best Actor for the title role in which film?",
      answer: "Patton",
      wrong: ["MacArthur", "Tora! Tora! Tora!", "Dr. Strangelove"],
      explanation: "Scott declined the award at the 1971 ceremony for Patton, which also won Best Picture.",
      sources: [wiki("Patton_(film)"), oscars(1971)],
    },
  }),

  puzzle(50, {
    frame: {
      clue: "With crops failing and dust storms engulfing Earth, a former NASA pilot leaves his children behind to travel through a wormhole near Saturn in search of a new home for humanity.",
      answer: "Interstellar",
      wrong: ["Ad Astra", "Contact", "Gravity"],
      explanation: "Matthew McConaughey's Cooper ventures through the wormhole in Christopher Nolan's Interstellar (2014).",
      sources: [wiki("Interstellar_(film)")],
    },
    cast: {
      actors: ["Clark Gable", "Claudette Colbert"],
      answer: "It Happened One Night",
      wrong: ["Gone with the Wind", "Mutiny on the Bounty (1935)", "Cleopatra (1934)"],
      explanation: "Gable and Colbert won Best Actor and Best Actress as a reporter and a runaway heiress in It Happened One Night (1934), the first film to sweep the Big Five.",
      sources: [wiki("It_Happened_One_Night")],
    },
    quote: {
      clue: "At a Marine Corps boot camp, a foul-mouthed drill instructor screams insults at his recruits and demands to know what one of them's major malfunction is.",
      answer: "Full Metal Jacket",
      wrong: ["An Officer and a Gentleman", "Platoon", "Jarhead"],
      explanation: "R. Lee Ermey's Gunnery Sergeant Hartman berates the recruits in Stanley Kubrick's Full Metal Jacket (1987).",
      sources: [wiki("Full_Metal_Jacket")],
    },
    timeline: {
      films: [
        ["Twilight", 2008],
        ["Night of the Living Dead", 1968],
        ["No Time to Die", 2021],
        ["Hook", 1991],
      ],
      sources: [wiki("Night_of_the_Living_Dead"), wiki("Hook_(film)"), wiki("Twilight_(2008_film)"), wiki("No_Time_to_Die")],
    },
    final: {
      prompt: "Which filmmaker holds the record for the most Academy Awards for Best Director, with four?",
      answer: "John Ford",
      wrong: ["William Wyler", "Frank Capra", "Steven Spielberg"],
      explanation: "John Ford won Best Director for The Informer, The Grapes of Wrath, How Green Was My Valley and The Quiet Man.",
      sources: [wiki("John_Ford")],
    },
  }),
];
