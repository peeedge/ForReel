import { oscars, puzzle, wiki } from "./builders";

export const PUZZLES_051_061 = [
  puzzle(51, {
    frame: {
      clue: "A dysfunctional family crams into a broken-down yellow Volkswagen van to drive from New Mexico to California so their young daughter can compete in a children's beauty pageant.",
      answer: "Little Miss Sunshine",
      wrong: ["National Lampoon's Vacation", "RV", "Juno"],
      explanation: "Abigail Breslin's Olive heads for the pageant with her family in Little Miss Sunshine (2006).",
      sources: [wiki("Little_Miss_Sunshine")],
    },
    cast: {
      actors: ["Cate Blanchett", "Rooney Mara"],
      answer: "Carol",
      wrong: ["Tár", "Her", "Blue Jasmine"],
      explanation: "Blanchett and Mara play two women who fall in love in 1950s New York in Todd Haynes's Carol (2015).",
      sources: [wiki("Carol_(film)")],
    },
    quote: {
      clue: "Pretending to be a sports announcer, a dim-witted golf course groundskeeper narrates his own 'Cinderella story' while lopping the heads off flowers with a club.",
      answer: "Caddyshack",
      wrong: ["Happy Gilmore", "Tin Cup", "Meatballs"],
      explanation: "Bill Murray's Carl Spackler delivers the 'Cinderella story' monologue in Caddyshack (1980).",
      sources: [wiki("Caddyshack")],
    },
    timeline: {
      films: [
        ["Top Gun: Maverick", 2022],
        ["Sister Act", 1992],
        ["The Wild Bunch", 1969],
        ["The Blind Side", 2009],
      ],
      sources: [wiki("The_Wild_Bunch"), wiki("Sister_Act"), wiki("The_Blind_Side_(film)"), wiki("Top_Gun:_Maverick")],
    },
    final: {
      prompt: "Who holds the record for the most Academy Awards won by an individual, with 22 competitive wins?",
      answer: "Walt Disney",
      wrong: ["John Williams", "Edith Head", "Cedric Gibbons"],
      explanation: "Walt Disney won 22 competitive Oscars, plus four honorary awards. Costume designer Edith Head holds the record for a woman, with eight.",
      sources: [wiki("Walt_Disney")],
    },
  }),

  puzzle(52, {
    frame: {
      clue: "In 1930s Chicago, a young grifter and a veteran con man set up an elaborate fake betting parlor to swindle the vicious racketeer who had their friend killed.",
      answer: "The Sting",
      wrong: ["Paper Moon", "Ocean's Eleven (2001)", "Matchstick Men"],
      explanation: "Robert Redford and Paul Newman pull the big con on Doyle Lonnegan in The Sting (1973), which won Best Picture.",
      sources: [wiki("The_Sting")],
    },
    cast: {
      actors: ["Brad Pitt", "Leonardo DiCaprio"],
      answer: "Once Upon a Time in Hollywood",
      wrong: ["Inglourious Basterds", "The Departed", "Babylon"],
      explanation: "DiCaprio's fading TV star Rick Dalton and Pitt's stunt double Cliff Booth share the screen in Once Upon a Time in Hollywood (2019). Pitt won Best Supporting Actor.",
      sources: [wiki("Once_Upon_a_Time_in_Hollywood")],
    },
    quote: {
      clue: "Strapping a graduate student into a chair, a former Nazi dentist probes his teeth while asking over and over: is it safe?",
      answer: "Marathon Man",
      wrong: ["The Boys from Brazil", "Three Days of the Condor", "Little Shop of Horrors (1986)"],
      explanation: "Laurence Olivier's Dr. Szell tortures Dustin Hoffman's Babe with 'Is it safe?' in Marathon Man (1976).",
      sources: [wiki("Marathon_Man_(film)")],
    },
    timeline: {
      films: [
        ["Tangled", 2010],
        ["Airport", 1970],
        ["Elvis", 2022],
        ["Pocahontas", 1995],
      ],
      sources: [wiki("Airport_(1970_film)"), wiki("Pocahontas_(1995_film)"), wiki("Tangled"), wiki("Elvis_(2022_film)")],
    },
    final: {
      prompt: "Which composer won Academy Awards for the scores of Jaws, Star Wars, E.T. the Extra-Terrestrial and Schindler's List?",
      answer: "John Williams",
      wrong: ["Hans Zimmer", "Jerry Goldsmith", "Ennio Morricone"],
      explanation: "John Williams won for all four, plus an adaptation award for Fiddler on the Roof. He is the most-nominated living person in Oscar history.",
      sources: [wiki("John_Williams")],
    },
  }),

  puzzle(53, {
    frame: {
      clue: "A street urchin in Agrabah finds a magic lamp in the Cave of Wonders and uses a wisecracking genie's wishes to pose as a prince and woo the sultan's daughter.",
      answer: "Aladdin (1992)",
      wrong: ["The Thief and the Cobbler", "Sinbad: Legend of the Seven Seas", "The Thief of Bagdad (1940)"],
      explanation: "Robin Williams voices the Genie in Disney's animated Aladdin (1992).",
      sources: [wiki("Aladdin_(1992_Disney_film)")],
    },
    cast: {
      actors: ["Jonah Hill", "Channing Tatum"],
      answer: "21 Jump Street",
      wrong: ["Superbad", "Magic Mike", "Dear John"],
      explanation: "Hill and Tatum play mismatched cops going undercover at a high school in 21 Jump Street (2012).",
      sources: [wiki("21_Jump_Street_(film)")],
    },
    quote: {
      clue: "Atop a burning chemical tank, a psychopathic gangster devoted to his late mother shouts that he's made it to the top of the world just before it explodes.",
      answer: "White Heat",
      wrong: ["The Public Enemy", "Angels with Dirty Faces", "Little Caesar"],
      explanation: "James Cagney's Cody Jarrett yells 'Made it, Ma! Top of the world!' in White Heat (1949).",
      sources: [wiki("White_Heat")],
    },
    timeline: {
      films: [
        ["Drive", 2011],
        ["Fiddler on the Roof", 1971],
        ["The Fabelmans", 2022],
        ["Romeo + Juliet", 1996],
      ],
      sources: [wiki("Fiddler_on_the_Roof_(film)"), wiki("Romeo_%2B_Juliet"), wiki("Drive_(2011_film)"), wiki("The_Fabelmans")],
    },
    final: {
      prompt: "Sidney Poitier became the first Black man to win the Academy Award for Best Actor for which film?",
      answer: "Lilies of the Field",
      wrong: ["In the Heat of the Night", "Guess Who's Coming to Dinner", "The Defiant Ones"],
      explanation: "Poitier won Best Actor at the 1964 ceremony for Lilies of the Field, playing a handyman who helps a group of nuns build a chapel.",
      sources: [wiki("Lilies_of_the_Field_(1963_film)"), oscars(1964)],
    },
  }),

  puzzle(54, {
    frame: {
      clue: "Thrown into combat against an alien invasion, an inexperienced military PR officer is killed within minutes, then wakes up to relive the same battle again and again.",
      answer: "Edge of Tomorrow",
      wrong: ["Source Code", "Oblivion", "Starship Troopers"],
      explanation: "Tom Cruise's Major Cage relives the battle alongside Emily Blunt's Rita Vrataski in Edge of Tomorrow (2014).",
      sources: [wiki("Edge_of_Tomorrow")],
    },
    cast: {
      actors: ["Meryl Streep", "Robert Redford"],
      answer: "Out of Africa",
      wrong: ["The Way We Were", "Sophie's Choice", "The Bridges of Madison County"],
      explanation: "Streep's Karen Blixen falls for Redford's big-game hunter in Kenya in Out of Africa (1985), which won Best Picture.",
      sources: [wiki("Out_of_Africa_(film)")],
    },
    quote: {
      clue: "A grieving young widower repeats his late wife's words to his estranged father: love means never having to say you're sorry.",
      answer: "Love Story (1970)",
      wrong: ["Brian's Song", "Romeo and Juliet (1968)", "Doctor Zhivago"],
      explanation: "Ryan O'Neal's Oliver echoes Ali MacGraw's Jenny with 'Love means never having to say you're sorry' in Love Story (1970).",
      sources: [wiki("Love_Story_(1970_film)")],
    },
    timeline: {
      films: [
        ["Midnight in Paris", 2011],
        ["Past Lives", 2023],
        ["Deliverance", 1972],
        ["Contact", 1997],
      ],
      sources: [wiki("Deliverance"), wiki("Contact_(1997_American_film)"), wiki("Midnight_in_Paris"), wiki("Past_Lives_(film)")],
    },
    final: {
      prompt: "Who won the Academy Award for Best Actor for playing Winston Churchill in Darkest Hour?",
      answer: "Gary Oldman",
      wrong: ["Timothée Chalamet", "Daniel Kaluuya", "Denzel Washington"],
      explanation: "Gary Oldman won at the 2018 ceremony. The other three were among his fellow nominees that year.",
      sources: [wiki("Gary_Oldman"), oscars(2018)],
    },
  }),

  puzzle(55, {
    frame: {
      clue: "A shy, imaginative waitress in Montmartre decides to secretly improve the lives of the people around her, starting by returning a long-lost box of childhood treasures to its owner.",
      answer: "Amélie",
      wrong: ["Chocolat", "Midnight in Paris", "Moulin Rouge!"],
      explanation: "Audrey Tautou plays the title role in Jean-Pierre Jeunet's Amélie (2001).",
      sources: [wiki("Amélie")],
    },
    cast: {
      actors: ["Cameron Diaz", "Ben Stiller"],
      answer: "There's Something About Mary",
      wrong: ["Meet the Parents", "The Mask", "Charlie's Angels"],
      explanation: "Stiller's lovesick Ted tracks down Diaz's high-school crush in There's Something About Mary (1998).",
      sources: [wiki("There's_Something_About_Mary")],
    },
    quote: {
      clue: "As lightning flashes and the body on his laboratory table begins to move, an ambitious scientist cries out that it's alive.",
      answer: "Frankenstein (1931)",
      wrong: ["Bride of Frankenstein", "Dracula (1931)", "The Invisible Man (1933)"],
      explanation: "Colin Clive's Henry Frankenstein shouts 'It's alive!' in Universal's Frankenstein (1931).",
      sources: [wiki("Frankenstein_(1931_film)")],
    },
    timeline: {
      films: [
        ["Django Unchained", 2012],
        ["Face/Off", 1997],
        ["Killers of the Flower Moon", 2023],
        ["Enter the Dragon", 1973],
      ],
      sources: [wiki("Enter_the_Dragon"), wiki("Face/Off"), wiki("Django_Unchained"), wiki("Killers_of_the_Flower_Moon_(film)")],
    },
    final: {
      prompt: "Which film won the first Academy Award for Best Animated Feature, at the 2002 ceremony?",
      answer: "Shrek",
      wrong: ["Monsters, Inc.", "Jimmy Neutron: Boy Genius", "Spirited Away"],
      explanation: "Shrek beat Monsters, Inc. and Jimmy Neutron: Boy Genius in 2002. Spirited Away won the award a year later.",
      sources: [wiki("Shrek"), oscars(2002)],
    },
  }),

  puzzle(56, {
    frame: {
      clue: "In the early 1960s, three brilliant Black women working as mathematicians at NASA's Langley center fight segregation while helping to launch John Glenn into orbit.",
      answer: "Hidden Figures",
      wrong: ["The Right Stuff", "Apollo 13", "First Man"],
      explanation: "Taraji P. Henson, Octavia Spencer and Janelle Monáe play Katherine Johnson, Dorothy Vaughan and Mary Jackson in Hidden Figures (2016).",
      sources: [wiki("Hidden_Figures")],
    },
    cast: {
      actors: ["Russell Crowe", "Jennifer Connelly"],
      answer: "A Beautiful Mind",
      wrong: ["Gladiator", "Requiem for a Dream", "L.A. Confidential"],
      explanation: "Crowe plays mathematician John Nash and Connelly won Best Supporting Actress as his wife Alicia in A Beautiful Mind (2001), which won Best Picture.",
      sources: [wiki("A_Beautiful_Mind_(film)")],
    },
    quote: {
      clue: "Asked to prove they're really federal police, the leader of a gang of Mexican bandits sneers that he doesn't have to show any stinking badges.",
      answer: "The Treasure of the Sierra Madre",
      wrong: ["The Wild Bunch", "The Magnificent Seven (1960)", "Viva Zapata!"],
      explanation: "Alfonso Bedoya's Gold Hat taunts Humphrey Bogart's Fred C. Dobbs about badges in The Treasure of the Sierra Madre (1948).",
      sources: [wiki("The_Treasure_of_the_Sierra_Madre_(film)")],
    },
    timeline: {
      films: [
        ["Life of Pi", 2012],
        ["Rushmore", 1998],
        ["Wicked", 2024],
        ["Blazing Saddles", 1974],
      ],
      sources: [wiki("Blazing_Saddles"), wiki("Rushmore_(film)"), wiki("Life_of_Pi_(film)"), wiki("Wicked_(film)")],
    },
    final: {
      prompt: "Who won the Academy Award for Best Actress for playing a young mother held captive with her son in Room?",
      answer: "Brie Larson",
      wrong: ["Saoirse Ronan", "Cate Blanchett", "Charlotte Rampling"],
      explanation: "Brie Larson won at the 2016 ceremony. The other three were fellow nominees that year, along with Jennifer Lawrence.",
      sources: [wiki("Brie_Larson"), oscars(2016)],
    },
  }),

  puzzle(57, {
    frame: {
      clue: "In 1957 Maine, a lonely boy befriends a huge metal-eating robot that fell from the sky, and hides it from a paranoid government agent.",
      answer: "The Iron Giant",
      wrong: ["Short Circuit", "Big Hero 6", "Robots"],
      explanation: "Hogarth Hughes protects his towering friend in Brad Bird's The Iron Giant (1999).",
      sources: [wiki("The_Iron_Giant")],
    },
    cast: {
      actors: ["Keanu Reeves", "Patrick Swayze"],
      answer: "Point Break",
      wrong: ["Speed", "Road House (1989)", "The Matrix"],
      explanation: "Reeves's FBI agent goes undercover to catch Swayze's bank-robbing surfer in Point Break (1991).",
      sources: [wiki("Point_Break")],
    },
    quote: {
      clue: "As a vast army of reinforcements pours through glowing portals, a shield-wielding super soldier finally gives his team the long-awaited command to assemble.",
      answer: "Avengers: Endgame",
      wrong: ["Avengers: Infinity War", "Captain America: Civil War", "Justice League (2017)"],
      explanation: "Chris Evans's Captain America says 'Avengers... assemble' in the final battle of Avengers: Endgame (2019).",
      sources: [wiki("Avengers:_Endgame")],
    },
    timeline: {
      films: [
        ["The Wolf of Wall Street", 2013],
        ["Nashville", 1975],
        ["Inside Out 2", 2024],
        ["Office Space", 1999],
      ],
      sources: [wiki("Nashville_(film)"), wiki("Office_Space"), wiki("The_Wolf_of_Wall_Street_(2013_film)"), wiki("Inside_Out_2")],
    },
    final: {
      prompt: "Which musical won ten Academy Awards, including Best Picture, at the 1962 ceremony?",
      answer: "West Side Story (1961)",
      wrong: ["The Music Man", "My Fair Lady", "The Sound of Music"],
      explanation: "West Side Story (1961) won ten Oscars, including Best Supporting Actress for Rita Moreno and Best Supporting Actor for George Chakiris.",
      sources: [wiki("West_Side_Story_(1961_film)"), oscars(1962)],
    },
  }),

  puzzle(58, {
    frame: {
      clue: "Stuck with one of baseball's smallest payrolls, the Oakland A's general manager hires a young economics graduate and builds a team on statistics instead of scouts' instincts.",
      answer: "Moneyball",
      wrong: ["Major League", "Bull Durham", "Trouble with the Curve"],
      explanation: "Brad Pitt's Billy Beane and Jonah Hill's Peter Brand rethink the roster in Moneyball (2011).",
      sources: [wiki("Moneyball_(film)")],
    },
    cast: {
      actors: ["Julia Roberts", "Hugh Grant"],
      answer: "Notting Hill",
      wrong: ["Pretty Woman", "Love Actually", "Runaway Bride"],
      explanation: "Grant's travel-bookshop owner falls for Roberts's Hollywood star in Notting Hill (1999).",
      sources: [wiki("Notting_Hill_(film)")],
    },
    quote: {
      clue: "Aiming his .44 Magnum at a robber who is holding a waitress hostage in a coffee shop, a San Francisco cop dares him to make his day.",
      answer: "Sudden Impact",
      wrong: ["Dirty Harry", "Magnum Force", "The Enforcer (1976)"],
      explanation: "Clint Eastwood's Harry Callahan says 'Go ahead, make my day' in Sudden Impact (1983), the fourth Dirty Harry film.",
      sources: [wiki("Sudden_Impact")],
    },
    timeline: {
      films: [
        ["Gone Girl", 2014],
        ["Conclave", 2024],
        ["Smokey and the Bandit", 1977],
        ["Almost Famous", 2000],
      ],
      sources: [wiki("Smokey_and_the_Bandit"), wiki("Almost_Famous"), wiki("Gone_Girl_(film)"), wiki("Conclave_(film)")],
    },
    final: {
      prompt: "Which musical won Best Picture at the 1965 ceremony, with Rex Harrison named Best Actor?",
      answer: "My Fair Lady",
      wrong: ["Mary Poppins", "Dr. Strangelove", "Zorba the Greek"],
      explanation: "My Fair Lady won eight Academy Awards in 1965, including Best Picture and Best Actor for Harrison as Henry Higgins.",
      sources: [wiki("My_Fair_Lady_(film)"), oscars(1965)],
    },
  }),

  puzzle(59, {
    frame: {
      clue: "At his dying father's bedside, a frustrated son tries to separate fact from the tall tales his father has told all his life, about a giant, a witch and a catfish that could never be caught.",
      answer: "Big Fish",
      wrong: ["The Curious Case of Benjamin Button", "Edward Scissorhands", "Secondhand Lions"],
      explanation: "Albert Finney and Ewan McGregor play Edward Bloom, old and young, in Tim Burton's Big Fish (2003).",
      sources: [wiki("Big_Fish")],
    },
    cast: {
      actors: ["Morgan Freeman", "Jessica Tandy"],
      answer: "Driving Miss Daisy",
      wrong: ["Fried Green Tomatoes", "Glory", "Cocoon"],
      explanation: "Tandy won Best Actress as a Southern widow and Freeman played her chauffeur in Driving Miss Daisy (1989), which won Best Picture.",
      sources: [wiki("Driving_Miss_Daisy")],
    },
    quote: {
      clue: "Working undercover as a kindergarten teacher, a hulking detective with a headache is told by a student that it might be a tumor, and insists that it's not.",
      answer: "Kindergarten Cop",
      wrong: ["Junior", "Jingle All the Way", "Last Action Hero"],
      explanation: "Arnold Schwarzenegger's Detective Kimble snaps 'It's not a tumor!' in Kindergarten Cop (1990).",
      sources: [wiki("Kindergarten_Cop")],
    },
    timeline: {
      films: [
        ["Ice Age", 2002],
        ["Yankee Doodle Dandy", 1942],
        ["Moana", 2016],
        ["The Muppet Movie", 1979],
      ],
      sources: [wiki("Yankee_Doodle_Dandy"), wiki("The_Muppet_Movie"), wiki("Ice_Age_(2002_film)"), wiki("Moana_(2016_film)")],
    },
    final: {
      prompt: "Which film won Best Picture at the 2025 ceremony, with Sean Baker winning four Oscars in a single night?",
      answer: "Anora",
      wrong: ["The Brutalist", "Conclave", "Emilia Pérez"],
      explanation: "Anora won five Academy Awards in 2025. Baker took Best Picture, Director, Original Screenplay and Film Editing, tying Walt Disney's record of four in one night.",
      sources: [wiki("Anora"), oscars(2025)],
    },
  }),

  puzzle(60, {
    frame: {
      clue: "A polite, marmalade-loving bear from darkest Peru arrives alone at a London railway station and is taken in by a family, while a museum taxidermist plots to stuff him.",
      answer: "Paddington",
      wrong: ["Winnie the Pooh (2011)", "Christopher Robin", "Ted"],
      explanation: "Ben Whishaw voices the bear taken in by the Browns in Paddington (2014).",
      sources: [wiki("Paddington_(film)")],
    },
    cast: {
      actors: ["Sean Connery", "Nicolas Cage"],
      answer: "The Rock",
      wrong: ["Con Air", "The Untouchables", "Highlander"],
      explanation: "Cage's FBI chemist and Connery's former SAS prisoner break into Alcatraz in Michael Bay's The Rock (1996).",
      sources: [wiki("The_Rock_(film)")],
    },
    quote: {
      clue: "When her terrified little sister's name is drawn at the reaping, a teenage archer steps forward and volunteers to take her place.",
      answer: "The Hunger Games",
      wrong: ["Divergent", "The Maze Runner", "Battle Royale"],
      explanation: "Jennifer Lawrence's Katniss Everdeen cries 'I volunteer as tribute!' in The Hunger Games (2012).",
      sources: [wiki("The_Hunger_Games_(film)")],
    },
    timeline: {
      films: [
        ["The Bourne Identity", 2002],
        ["9 to 5", 1980],
        ["Going My Way", 1944],
        ["A Quiet Place", 2018],
      ],
      sources: [wiki("Going_My_Way"), wiki("9_to_5_(film)"), wiki("The_Bourne_Identity_(2002_film)"), wiki("A_Quiet_Place")],
    },
    final: {
      prompt: "Which Billy Wilder film about an office clerk who lends his apartment to his bosses won Best Picture at the 1961 ceremony?",
      answer: "The Apartment",
      wrong: ["Some Like It Hot", "Sunset Boulevard", "The Alamo"],
      explanation: "The Apartment, starring Jack Lemmon and Shirley MacLaine, won five Academy Awards in 1961, including Best Picture.",
      sources: [wiki("The_Apartment"), oscars(1961)],
    },
  }),

  puzzle(61, {
    frame: {
      clue: "Bored in her new home, a curious girl finds a small hidden door to a parallel world where a doting 'Other Mother' with buttons for eyes wants to keep her forever.",
      answer: "Coraline",
      wrong: ["Corpse Bride", "The Nightmare Before Christmas", "Alice in Wonderland (1951)"],
      explanation: "Dakota Fanning voices the title character in Laika's stop-motion Coraline (2009).",
      sources: [wiki("Coraline_(film)")],
    },
    cast: {
      actors: ["Seth Rogen", "Katherine Heigl"],
      answer: "Knocked Up",
      wrong: ["Pineapple Express", "27 Dresses", "Superbad"],
      explanation: "Rogen's slacker and Heigl's TV journalist face an unplanned pregnancy after a one-night stand in Judd Apatow's Knocked Up (2007).",
      sources: [wiki("Knocked_Up")],
    },
    quote: {
      clue: "Learning that Santa Claus is visiting a New York department store, an oversized man raised at the North Pole shrieks with joy that he knows him.",
      answer: "Elf",
      wrong: ["The Santa Clause", "Jingle All the Way", "Miracle on 34th Street (1947)"],
      explanation: "Will Ferrell's Buddy shouts 'Santa! Oh my God! Santa's coming! I know him!' in Elf (2003).",
      sources: [wiki("Elf_(film)")],
    },
    timeline: {
      films: [
        ["Seabiscuit", 2003],
        ["The Best Years of Our Lives", 1946],
        ["Avatar: The Way of Water", 2022],
        ["On Golden Pond", 1981],
      ],
      sources: [
        wiki("The_Best_Years_of_Our_Lives"),
        wiki("On_Golden_Pond_(1981_film)"),
        wiki("Seabiscuit_(film)"),
        wiki("Avatar:_The_Way_of_Water"),
      ],
    },
    final: {
      prompt: "Sophia Loren became the first performer to win an acting Oscar for a non-English-language role in which film?",
      answer: "Two Women",
      wrong: ["Marriage Italian Style", "Houseboat", "La Dolce Vita"],
      explanation: "Loren won Best Actress at the 1962 ceremony for Vittorio De Sica's Two Women, performed in Italian.",
      sources: [wiki("Two_Women"), oscars(1962)],
    },
  }),
];
