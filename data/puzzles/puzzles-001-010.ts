import { oscars, puzzle, wiki } from "./builders";

export const PUZZLES_001_010 = [
  puzzle(1, {
    frame: {
      clue: "A small-town police chief who is afraid of the water, a young oceanographer, and a weathered shark hunter set out together on a creaky fishing boat to kill a great white that has been terrorizing a New England resort island.",
      answer: "Jaws",
      wrong: ["Orca", "The Abyss", "Moby Dick (1956)"],
      explanation: "Steven Spielberg's Jaws (1975) sends Chief Brody, Matt Hooper and Quint after the shark menacing Amity Island.",
      sources: [wiki("Jaws_(film)")],
    },
    cast: {
      actors: ["Tom Hanks", "Meg Ryan"],
      answer: "Sleepless in Seattle",
      wrong: ["Cast Away", "When Harry Met Sally...", "Big"],
      explanation: "Hanks and Ryan co-starred in Sleepless in Seattle (1993). They were also paired in Joe Versus the Volcano and You've Got Mail.",
      sources: [wiki("Sleepless_in_Seattle")],
    },
    quote: {
      clue: "Waiting at a bus stop, a kind, slow-talking Alabaman shares his mother's advice with a stranger: life resembles a box of chocolates, because you never know what you're going to get.",
      answer: "Forrest Gump",
      wrong: ["Big Fish", "Rain Man", "The Green Mile"],
      explanation: "Tom Hanks's title character recounts his life from a Savannah bus bench in Forrest Gump (1994), passing on his mama's box-of-chocolates wisdom.",
      sources: [wiki("Forrest_Gump")],
    },
    timeline: {
      films: [
        ["Goodfellas", 1990],
        ["The Grapes of Wrath", 1940],
        ["Midnight Cowboy", 1969],
        ["Rio Bravo", 1959],
      ],
      sources: [wiki("The_Grapes_of_Wrath_(film)"), wiki("Rio_Bravo_(film)"), wiki("Midnight_Cowboy"), wiki("Goodfellas")],
    },
    final: {
      prompt: "Kathryn Bigelow became the first woman to win the Academy Award for Best Director for which film?",
      answer: "The Hurt Locker",
      wrong: ["Zero Dark Thirty", "Point Break (1991)", "Strange Days"],
      explanation: "The Hurt Locker, Bigelow's Iraq War bomb-disposal drama, won her Best Director and also took Best Picture at the 2010 Academy Awards.",
      sources: [wiki("The_Hurt_Locker"), oscars(2010)],
    },
  }),

  puzzle(2, {
    frame: {
      clue: "A teenager is accidentally sent back to 1955 in a time machine built from a stainless-steel sports car, then has to make sure his future parents fall in love before he can get home.",
      answer: "Back to the Future",
      wrong: ["Peggy Sue Got Married", "Bill & Ted's Excellent Adventure", "The Time Machine (1960)"],
      explanation: "In Back to the Future (1985), Marty McFly rides Doc Brown's DeLorean to 1955 and nearly erases himself from existence.",
      sources: [wiki("Back_to_the_Future")],
    },
    cast: {
      actors: ["Leonardo DiCaprio", "Kate Winslet"],
      answer: "Titanic",
      wrong: ["The Departed", "Sense and Sensibility", "Catch Me If You Can"],
      explanation: "DiCaprio and Winslet played Jack and Rose in James Cameron's Titanic (1997), and reunited for Revolutionary Road (2008).",
      sources: [wiki("Titanic_(1997_film)")],
    },
    quote: {
      clue: "Touring a theme park full of cloned dinosaurs, a wisecracking chaos-theory mathematician warns that life will always break free of its creators' control and, in his words, find a way.",
      answer: "Jurassic Park",
      wrong: ["Twister", "Congo", "Godzilla (1998)"],
      explanation: "Jeff Goldblum's Dr. Ian Malcolm delivers the 'life finds a way' warning in Jurassic Park (1993).",
      sources: [wiki("Jurassic_Park_(film)")],
    },
    timeline: {
      films: [
        ["E.T. the Extra-Terrestrial", 1982],
        ["Toy Story", 1995],
        ["Rebel Without a Cause", 1955],
        ["Star Wars", 1977],
      ],
      sources: [wiki("Rebel_Without_a_Cause"), wiki("Star_Wars_(film)"), wiki("E.T._the_Extra-Terrestrial"), wiki("Toy_Story")],
    },
    final: {
      prompt: "Which of these films became the first non-English-language winner of the Academy Award for Best Picture?",
      answer: "Parasite",
      wrong: ["Roma", "Crouching Tiger, Hidden Dragon", "Life Is Beautiful"],
      explanation: "Bong Joon Ho's Parasite won Best Picture in 2020. The other three were Best Picture nominees that did not win.",
      sources: [wiki("Parasite_(2019_film)"), oscars(2020)],
    },
  }),

  puzzle(3, {
    frame: {
      clue: "A powerful newspaper magnate dies alone in his enormous, half-finished estate, whispering a single mysterious word. A reporter then interviews the people who knew him, trying to work out what it meant.",
      answer: "Citizen Kane",
      wrong: ["Sunset Boulevard", "The Magnificent Ambersons", "All the President's Men"],
      explanation: "Orson Welles's Citizen Kane (1941) opens with Charles Foster Kane's dying word, 'Rosebud', and follows a journalist's search for its meaning.",
      sources: [wiki("Citizen_Kane")],
    },
    cast: {
      actors: ["Paul Newman", "Robert Redford"],
      answer: "Butch Cassidy and the Sundance Kid",
      wrong: ["Cool Hand Luke", "All the President's Men", "The Hustler"],
      explanation: "Newman and Redford played the outlaw duo in Butch Cassidy and the Sundance Kid (1969), and teamed up again in The Sting (1973).",
      sources: [wiki("Butch_Cassidy_and_the_Sundance_Kid")],
    },
    quote: {
      clue: "After an oxygen tank explodes on the way to the Moon, a spacecraft commander calmly radios mission control to tell them they have a problem.",
      answer: "Apollo 13",
      wrong: ["The Right Stuff", "First Man", "Gravity"],
      explanation: "Tom Hanks's Jim Lovell says 'Houston, we have a problem' in Apollo 13 (1995). The real 1970 transmission was 'we've had a problem.'",
      sources: [wiki("Apollo_13_(film)")],
    },
    timeline: {
      films: [
        ["Saturday Night Fever", 1977],
        ["Singin' in the Rain", 1952],
        ["Edward Scissorhands", 1990],
        ["The Sound of Music", 1965],
      ],
      sources: [wiki("Singin'_in_the_Rain"), wiki("The_Sound_of_Music_(film)"), wiki("Saturday_Night_Fever"), wiki("Edward_Scissorhands")],
    },
    final: {
      prompt: "Which of these films won all of the 'Big Five' Academy Awards: Best Picture, Director, Actor, Actress and Screenplay?",
      answer: "The Silence of the Lambs",
      wrong: ["Schindler's List", "Forrest Gump", "Titanic"],
      explanation: "The Silence of the Lambs swept the Big Five in 1992, joining It Happened One Night and One Flew Over the Cuckoo's Nest. None of the other three won an acting award for a lead actress.",
      sources: [wiki("The_Silence_of_the_Lambs_(film)"), oscars(1992)],
    },
  }),

  puzzle(4, {
    frame: {
      clue: "A quiet banker, convicted of murdering his wife, spends nearly two decades in a Maine penitentiary. He befriends a fellow inmate who can get things, and slowly chips away at his cell wall with a small rock hammer.",
      answer: "The Shawshank Redemption",
      wrong: ["The Green Mile", "Escape from Alcatraz", "Cool Hand Luke"],
      explanation: "Andy Dufresne tunnels out with a rock hammer in The Shawshank Redemption (1994), adapted from a Stephen King novella.",
      sources: [wiki("The_Shawshank_Redemption")],
    },
    cast: {
      actors: ["Matt Damon", "Ben Affleck"],
      answer: "Good Will Hunting",
      wrong: ["The Bourne Identity", "Argo", "Saving Private Ryan"],
      explanation: "Damon and Affleck co-starred in Good Will Hunting (1997) and won the Academy Award for Best Original Screenplay for writing it.",
      sources: [wiki("Good_Will_Hunting")],
    },
    quote: {
      clue: "As he walks out into the fog, a dashing blockade runner tells the heroine that he frankly no longer cares what becomes of her.",
      answer: "Gone with the Wind",
      wrong: ["Casablanca", "Rebecca", "Jezebel"],
      explanation: "Clark Gable's Rhett Butler leaves Scarlett O'Hara with 'Frankly, my dear, I don't give a damn' near the end of Gone with the Wind (1939).",
      sources: [wiki("Gone_with_the_Wind_(film)")],
    },
    timeline: {
      films: [
        ["This Is Spinal Tap", 1984],
        ["The Truman Show", 1998],
        ["Alien", 1979],
        ["Lawrence of Arabia", 1962],
      ],
      sources: [wiki("Lawrence_of_Arabia_(film)"), wiki("Alien_(film)"), wiki("This_Is_Spinal_Tap"), wiki("The_Truman_Show")],
    },
    final: {
      prompt: "Heath Ledger won a posthumous Academy Award for Best Supporting Actor for which film?",
      answer: "The Dark Knight",
      wrong: ["Brokeback Mountain", "The Imaginarium of Doctor Parnassus", "10 Things I Hate About You"],
      explanation: "Ledger's Joker in The Dark Knight won Best Supporting Actor in 2009. He had earlier been nominated for Best Actor for Brokeback Mountain.",
      sources: [wiki("The_Dark_Knight"), oscars(2009)],
    },
  }),

  puzzle(5, {
    frame: {
      clue: "An anxious clownfish father crosses the ocean to rescue his only son, who has been scooped up by a diver and put in a dentist's fish tank in Sydney.",
      answer: "Finding Nemo",
      wrong: ["Shark Tale", "The Little Mermaid (1989)", "Luca"],
      explanation: "Marlin searches for his son in Pixar's Finding Nemo (2003), with Dory, a forgetful blue tang, at his side.",
      sources: [wiki("Finding_Nemo")],
    },
    cast: {
      actors: ["Humphrey Bogart", "Lauren Bacall"],
      answer: "To Have and Have Not",
      wrong: ["Casablanca", "The Maltese Falcon (1941)", "How to Marry a Millionaire"],
      explanation: "To Have and Have Not (1944) was Bogart and Bacall's first film together. They married in 1945 and later made The Big Sleep and Key Largo.",
      sources: [wiki("To_Have_and_Have_Not_(film)")],
    },
    quote: {
      clue: "In the back of a taxi, a washed-up former boxer tells his older brother that he could have had class and been a contender, if his brother had only looked out for him.",
      answer: "On the Waterfront",
      wrong: ["Raging Bull", "Rocky", "The Hustler"],
      explanation: "Marlon Brando's Terry Malloy delivers the 'I coulda been a contender' speech to Rod Steiger's Charley in On the Waterfront (1954).",
      sources: [wiki("On_the_Waterfront")],
    },
    timeline: {
      films: [
        ["Blade Runner", 1982],
        ["Some Like It Hot", 1959],
        ["Clueless", 1995],
        ["Mary Poppins", 1964],
      ],
      sources: [wiki("Some_Like_It_Hot"), wiki("Mary_Poppins_(film)"), wiki("Blade_Runner"), wiki("Clueless")],
    },
    final: {
      prompt: "Which filmmaker won the Academy Award for Best Director for both Brokeback Mountain and Life of Pi?",
      answer: "Ang Lee",
      wrong: ["Alfonso Cuarón", "Alejandro G. Iñárritu", "Guillermo del Toro"],
      explanation: "Ang Lee won Best Director for Brokeback Mountain in 2006 and for Life of Pi in 2013.",
      sources: [wiki("Ang_Lee"), oscars(2006), oscars(2013)],
    },
  }),

  puzzle(6, {
    frame: {
      clue: "A young hobbit inherits a plain gold ring from his eccentric uncle. When a wizard reveals its sinister power, a company of nine companions sets out to destroy it in the volcano where it was forged.",
      answer: "The Lord of the Rings: The Fellowship of the Ring",
      wrong: ["The Hobbit: An Unexpected Journey", "Willow", "The NeverEnding Story"],
      explanation: "Frodo inherits the One Ring from Bilbo and joins the Fellowship in The Lord of the Rings: The Fellowship of the Ring (2001).",
      sources: [wiki("The_Lord_of_the_Rings:_The_Fellowship_of_the_Ring")],
    },
    cast: {
      actors: ["Brad Pitt", "Edward Norton"],
      answer: "Fight Club",
      wrong: ["Se7en", "American History X", "Ocean's Eleven (2001)"],
      explanation: "Norton's insomniac narrator meets Pitt's Tyler Durden in David Fincher's Fight Club (1999).",
      sources: [wiki("Fight_Club")],
    },
    quote: {
      clue: "Told by the desk sergeant at a police station that he can't see a suspect, a cyborg assassin calmly announces that he'll be back, then returns by driving a car through the front doors.",
      answer: "The Terminator",
      wrong: ["RoboCop (1987)", "Predator", "Total Recall (1990)"],
      explanation: "Arnold Schwarzenegger's killer machine first says 'I'll be back' in James Cameron's The Terminator (1984).",
      sources: [wiki("The_Terminator")],
    },
    timeline: {
      films: [
        ["Fargo", 1996],
        ["In the Heat of the Night", 1967],
        ["Rear Window", 1954],
        ["The Shining", 1980],
      ],
      sources: [wiki("Rear_Window"), wiki("In_the_Heat_of_the_Night_(film)"), wiki("The_Shining_(film)"), wiki("Fargo_(1996_film)")],
    },
    final: {
      prompt: "Christopher Nolan won his first Academy Award for Best Director for which film?",
      answer: "Oppenheimer",
      wrong: ["Dunkirk", "Inception", "Interstellar"],
      explanation: "Nolan won Best Director in 2024 for Oppenheimer, which also won Best Picture. His only earlier directing nomination was for Dunkirk.",
      sources: [wiki("Oppenheimer_(film)"), oscars(2024)],
    },
  }),

  puzzle(7, {
    frame: {
      clue: "A young lion cub runs away from his kingdom, believing he caused his father's death. He grows up with a carefree meerkat and warthog before coming home to challenge his scheming uncle.",
      answer: "The Lion King",
      wrong: ["The Jungle Book (1967)", "Bambi", "Madagascar"],
      explanation: "Simba is raised by Timon and Pumbaa before confronting Scar in Disney's animated The Lion King (1994).",
      sources: [wiki("The_Lion_King")],
    },
    cast: {
      actors: ["Julia Roberts", "Richard Gere"],
      answer: "Pretty Woman",
      wrong: ["Notting Hill", "Chicago (2002)", "Erin Brockovich"],
      explanation: "Roberts and Gere starred in Pretty Woman (1990) and reunited for Runaway Bride (1999).",
      sources: [wiki("Pretty_Woman")],
    },
    quote: {
      clue: "On the phone, a brash football player refuses to keep his struggling sports agent until the agent loudly agrees to show him the money.",
      answer: "Jerry Maguire",
      wrong: ["Moneyball", "The Blind Side", "Any Given Sunday"],
      explanation: "Cuba Gooding Jr.'s Rod Tidwell makes Tom Cruise's agent shout 'Show me the money!' in Jerry Maguire (1996). Gooding won Best Supporting Actor for the role.",
      sources: [wiki("Jerry_Maguire")],
    },
    timeline: {
      films: [
        ["Big", 1988],
        ["Dr. No", 1962],
        ["It's a Wonderful Life", 1946],
        ["The Exorcist", 1973],
      ],
      sources: [wiki("It's_a_Wonderful_Life"), wiki("Dr._No_(film)"), wiki("The_Exorcist"), wiki("Big_(film)")],
      notes: "Dr. No premiered in the UK in 1962 and opened in the US in 1963. Its neighbors are years away, so the order holds in either case.",
    },
    final: {
      prompt: "Which Western, directed by and starring Clint Eastwood, won the Academy Award for Best Picture?",
      answer: "Unforgiven",
      wrong: ["The Outlaw Josey Wales", "Pale Rider", "High Plains Drifter"],
      explanation: "Unforgiven won Best Picture and Best Director for Eastwood at the 1993 Academy Awards.",
      sources: [wiki("Unforgiven"), oscars(1993)],
    },
  }),

  puzzle(8, {
    frame: {
      clue: "A computer hacker swallows a red pill and wakes up to discover that the world he knows is a simulation. He joins a band of rebels fighting the machines that keep humanity asleep.",
      answer: "The Matrix",
      wrong: ["Dark City", "Johnny Mnemonic", "Minority Report"],
      explanation: "Keanu Reeves's Neo learns the truth from Morpheus in the Wachowskis' The Matrix (1999).",
      sources: [wiki("The_Matrix")],
    },
    cast: {
      actors: ["Simon Pegg", "Nick Frost"],
      answer: "Shaun of the Dead",
      wrong: ["Mission: Impossible – Ghost Protocol", "Attack the Block", "Star Trek (2009)"],
      explanation: "Pegg and Frost played flatmates fighting zombies in Shaun of the Dead (2004), the first film in Edgar Wright's Three Flavours Cornetto trilogy.",
      sources: [wiki("Shaun_of_the_Dead")],
    },
    quote: {
      clue: "Standing over a wounded bank robber, a San Francisco police inspector admits he has lost count of his shots and asks the man whether he feels lucky.",
      answer: "Dirty Harry",
      wrong: ["Bullitt", "The French Connection", "Serpico"],
      explanation: "Clint Eastwood's Inspector Harry Callahan asks 'Do I feel lucky?' in Dirty Harry (1971).",
      sources: [wiki("Dirty_Harry")],
    },
    timeline: {
      films: [
        ["Top Gun", 1986],
        ["Schindler's List", 1993],
        ["All the President's Men", 1976],
        ["Dr. Strangelove", 1964],
      ],
      sources: [wiki("Dr._Strangelove"), wiki("All_the_President's_Men_(film)"), wiki("Top_Gun"), wiki("Schindler's_List")],
    },
    final: {
      prompt: "Which was the first Pixar film to be nominated for the Academy Award for Best Picture?",
      answer: "Up",
      wrong: ["Toy Story 3", "WALL-E", "Finding Nemo"],
      explanation: "Up was nominated for Best Picture at the 2010 ceremony, the first year with ten nominees. Toy Story 3 followed a year later. WALL-E and Finding Nemo were never nominated for Best Picture.",
      sources: [wiki("Up_(2009_film)"), oscars(2010)],
    },
  }),

  puzzle(9, {
    frame: {
      clue: "In 1936, a whip-cracking archaeology professor races Nazi agents across the globe to recover the lost Ark of the Covenant before its power can be used.",
      answer: "Raiders of the Lost Ark",
      wrong: ["The Mummy (1999)", "Romancing the Stone", "National Treasure"],
      explanation: "Harrison Ford made his first appearance as Indiana Jones in Raiders of the Lost Ark (1981).",
      sources: [wiki("Raiders_of_the_Lost_Ark")],
    },
    cast: {
      actors: ["Will Smith", "Tommy Lee Jones"],
      answer: "Men in Black",
      wrong: ["Independence Day", "The Fugitive", "Bad Boys"],
      explanation: "Jones and Smith played Agents K and J policing aliens on Earth in Men in Black (1997).",
      sources: [wiki("Men_in_Black_(1997_film)")],
    },
    quote: {
      clue: "Lying in a hospital bed, a frightened eight-year-old finally whispers his secret to his child psychologist: he sees dead people.",
      answer: "The Sixth Sense",
      wrong: ["The Others", "Poltergeist (1982)", "The Ring (2002)"],
      explanation: "Haley Joel Osment's Cole confides in Bruce Willis's Malcolm Crowe in M. Night Shyamalan's The Sixth Sense (1999).",
      sources: [wiki("The_Sixth_Sense")],
    },
    timeline: {
      films: [
        ["Annie Hall", 1977],
        ["Braveheart", 1995],
        ["The Bridge on the River Kwai", 1957],
        ["The Breakfast Club", 1985],
      ],
      sources: [wiki("The_Bridge_on_the_River_Kwai"), wiki("Annie_Hall"), wiki("The_Breakfast_Club"), wiki("Braveheart")],
    },
    final: {
      prompt: "Halle Berry became the first Black woman to win the Academy Award for Best Actress for which film?",
      answer: "Monster's Ball",
      wrong: ["X-Men", "Die Another Day", "Catwoman"],
      explanation: "Berry won Best Actress at the 2002 Academy Awards for her performance in Monster's Ball.",
      sources: [wiki("Monster's_Ball"), oscars(2002)],
    },
  }),

  puzzle(10, {
    frame: {
      clue: "A sour TV weatherman, sent to Punxsutawney to cover an annual rodent-based forecast, wakes up every morning to find he is reliving the same February day.",
      answer: "Groundhog Day",
      wrong: ["Edge of Tomorrow", "Palm Springs", "Scrooged"],
      explanation: "Bill Murray's Phil Connors is stuck in a time loop in Groundhog Day (1993).",
      sources: [wiki("Groundhog_Day_(film)")],
    },
    cast: {
      actors: ["Tom Cruise", "Dustin Hoffman"],
      answer: "Rain Man",
      wrong: ["Top Gun", "Tootsie", "Kramer vs. Kramer"],
      explanation: "Cruise played a hustler who discovers he has an autistic savant brother, played by Hoffman, in Rain Man (1988). The film won Best Picture.",
      sources: [wiki("Rain_Man")],
    },
    quote: {
      clue: "In the middle of the Colosseum, a disgraced Roman general takes off his helmet, tells the emperor his name, and swears revenge for his murdered family.",
      answer: "Gladiator",
      wrong: ["Troy", "Spartacus", "Braveheart"],
      explanation: "Russell Crowe's Maximus reveals himself to Commodus in Ridley Scott's Gladiator (2000).",
      sources: [wiki("Gladiator_(2000_film)")],
    },
    timeline: {
      films: [
        ["Shrek", 2001],
        ["Chinatown", 1974],
        ["Beetlejuice", 1988],
        ["Vertigo", 1958],
      ],
      sources: [wiki("Vertigo_(film)"), wiki("Chinatown_(1974_film)"), wiki("Beetlejuice"), wiki("Shrek")],
    },
    final: {
      prompt: "Which film won every one of its 11 Academy Award nominations, including Best Picture?",
      answer: "The Lord of the Rings: The Return of the King",
      wrong: ["Titanic", "Ben-Hur (1959)", "The Lord of the Rings: The Two Towers"],
      explanation: "The Lord of the Rings: The Return of the King went 11 for 11 in 2004. Titanic and Ben-Hur also won 11, but from 14 and 12 nominations.",
      sources: [wiki("The_Lord_of_the_Rings:_The_Return_of_the_King"), oscars(2004)],
    },
  }),
];
