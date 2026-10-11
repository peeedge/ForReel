import { lightning, wiki } from "./builders";

export const LIGHTNING_011_020 = [
  lightning(11, {
    title: "Matt, Mark or Matthew?",
    options: ["Matt Damon", "Mark Wahlberg", "Matthew McConaughey", "Matt Dillon"],
    questions: [
      ["This actor played Jason Bourne.", "Matt Damon", "Matt Damon played Jason Bourne, starting with The Bourne Identity (2002)."],
      ["This actor played Dirk Diggler in Boogie Nights.", "Mark Wahlberg", "Mark Wahlberg played Dirk Diggler in Boogie Nights (1997)."],
      ["This actor won Best Actor for Dallas Buyers Club.", "Matthew McConaughey", "Matthew McConaughey won Best Actor for Dallas Buyers Club (2013)."],
      ["This actor played Dallas Winston in The Outsiders.", "Matt Dillon", "Matt Dillon played Dally in Francis Ford Coppola's The Outsiders (1983)."],
      ["This actor was stranded on Mars in The Martian.", "Matt Damon", "Matt Damon played astronaut Mark Watney in The Martian (2015)."],
    ],
    sources: [wiki("Matt_Damon"), wiki("Mark_Wahlberg"), wiki("Matthew_McConaughey"), wiki("Matt_Dillon")],
  }),

  lightning(12, {
    title: "Ben, Ben, Ben or Casey?",
    options: ["Ben Affleck", "Casey Affleck", "Ben Stiller", "Ben Kingsley"],
    questions: [
      ["This actor won Best Actor for Manchester by the Sea.", "Casey Affleck", "Casey Affleck won Best Actor for Manchester by the Sea (2016)."],
      ["This actor won Best Actor for Gandhi.", "Ben Kingsley", "Ben Kingsley won Best Actor for playing the title role in Gandhi (1982)."],
      ["This actor played Greg Focker in Meet the Parents.", "Ben Stiller", "Ben Stiller played Greg opposite Robert De Niro in Meet the Parents (2000)."],
      ["This actor directed and starred in Argo.", "Ben Affleck", "Ben Affleck directed and starred in Argo (2012), which won Best Picture."],
      ["This actor played Derek Zoolander.", "Ben Stiller", "Ben Stiller directed and starred as the male model in Zoolander (2001)."],
    ],
    sources: [wiki("Ben_Affleck"), wiki("Casey_Affleck"), wiki("Ben_Stiller"), wiki("Ben_Kingsley")],
  }),

  lightning(13, {
    title: "Which Wilson?",
    options: ["Owen Wilson", "Luke Wilson", "Patrick Wilson", "Rebel Wilson"],
    questions: [
      ["This actor voiced Lightning McQueen in Cars.", "Owen Wilson", "Owen Wilson voiced Lightning McQueen in Pixar's Cars (2006)."],
      ["This actor played paranormal investigator Ed Warren in The Conjuring.", "Patrick Wilson", "Patrick Wilson played Ed Warren in The Conjuring (2013) and its sequels."],
      ["This actor played Emmett in Legally Blonde.", "Luke Wilson", "Luke Wilson played Emmett Richmond in Legally Blonde (2001)."],
      ["This actress played Fat Amy in Pitch Perfect.", "Rebel Wilson", "Rebel Wilson played Fat Amy in Pitch Perfect (2012)."],
      ["This actor time-traveled to 1920s Paris in Midnight in Paris.", "Owen Wilson", "Owen Wilson played screenwriter Gil Pender in Woody Allen's Midnight in Paris (2011)."],
    ],
    sources: [wiki("Owen_Wilson"), wiki("Luke_Wilson"), wiki("Patrick_Wilson"), wiki("Rebel_Wilson")],
  }),

  lightning(14, {
    title: "Which Jamie?",
    options: ["Jamie Foxx", "Jamie Lee Curtis", "Jamie Dornan", "Jamie Bell"],
    questions: [
      ["This actor won Best Actor for Ray.", "Jamie Foxx", "Jamie Foxx won Best Actor for playing Ray Charles in Ray (2004)."],
      ["This actress played Laurie Strode in Halloween (1978).", "Jamie Lee Curtis", "Jamie Lee Curtis made her film debut as Laurie Strode in John Carpenter's Halloween."],
      ["This actor played Christian Grey.", "Jamie Dornan", "Jamie Dornan played Christian Grey in Fifty Shades of Grey (2015) and its sequels."],
      ["This actor played the ballet-loving title boy in Billy Elliot.", "Jamie Bell", "Jamie Bell played Billy in Billy Elliot (2000)."],
      ["This actress won an Oscar for Everything Everywhere All at Once.", "Jamie Lee Curtis", "Jamie Lee Curtis won Best Supporting Actress as Deirdre Beaubeirdre in Everything Everywhere All at Once (2022)."],
    ],
    sources: [wiki("Jamie_Foxx"), wiki("Jamie_Lee_Curtis"), wiki("Jamie_Dornan"), wiki("Jamie_Bell")],
  }),

  lightning(15, {
    title: "Which Daniel?",
    options: ["Daniel Day-Lewis", "Daniel Craig", "Daniel Radcliffe", "Daniel Kaluuya"],
    questions: [
      ["This actor won Best Actor for There Will Be Blood.", "Daniel Day-Lewis", "Daniel Day-Lewis won Best Actor as oilman Daniel Plainview in There Will Be Blood (2007)."],
      ["This actor played James Bond in Casino Royale (2006).", "Daniel Craig", "Daniel Craig debuted as 007 in Casino Royale (2006)."],
      ["This actor played Harry Potter.", "Daniel Radcliffe", "Daniel Radcliffe played Harry in all eight Harry Potter films."],
      ["This actor played Chris in Get Out.", "Daniel Kaluuya", "Daniel Kaluuya played Chris Washington in Jordan Peele's Get Out (2017)."],
      ["This actor played detective Benoit Blanc in Knives Out.", "Daniel Craig", "Daniel Craig played Benoit Blanc in Knives Out (2019) and its sequels."],
    ],
    sources: [wiki("Daniel_Day-Lewis"), wiki("Daniel_Craig"), wiki("Daniel_Radcliffe"), wiki("Daniel_Kaluuya")],
  }),

  lightning(16, {
    title: "Anne, Anne, Annette or Anna?",
    options: ["Anne Hathaway", "Anne Bancroft", "Annette Bening", "Anna Kendrick"],
    questions: [
      ["This actress played Mrs. Robinson in The Graduate.", "Anne Bancroft", "Anne Bancroft played Mrs. Robinson in The Graduate (1967)."],
      ["This actress played Andy Sachs in The Devil Wears Prada.", "Anne Hathaway", "Anne Hathaway played Andy opposite Meryl Streep in The Devil Wears Prada (2006)."],
      ["This actress played Carolyn Burnham in American Beauty.", "Annette Bening", "Annette Bening played Carolyn Burnham in American Beauty (1999), earning an Oscar nomination."],
      ["This actress starred in A Simple Favor.", "Anna Kendrick", "Anna Kendrick played vlogger Stephanie Smothers in A Simple Favor (2018)."],
      ["This actress won an Oscar for Les Misérables (2012).", "Anne Hathaway", "Anne Hathaway won Best Supporting Actress as Fantine in Les Misérables (2012)."],
    ],
    sources: [wiki("Anne_Hathaway"), wiki("Anne_Bancroft"), wiki("Annette_Bening"), wiki("Anna_Kendrick")],
  }),

  lightning(17, {
    title: "Which Bruce?",
    options: ["Bruce Willis", "Bruce Campbell", "Bruce Dern", "Bruce Lee"],
    questions: [
      ["This actor played John McClane in Die Hard.", "Bruce Willis", "Bruce Willis played John McClane in Die Hard (1988) and its sequels."],
      ["This actor played Ash in The Evil Dead.", "Bruce Campbell", "Bruce Campbell played Ash Williams in Sam Raimi's The Evil Dead (1981)."],
      ["This actor starred in Enter the Dragon.", "Bruce Lee", "Bruce Lee starred in Enter the Dragon (1973), released shortly after his death."],
      ["This actor earned a Best Actor nomination for Nebraska.", "Bruce Dern", "Bruce Dern was nominated for Best Actor as Woody Grant in Alexander Payne's Nebraska (2013)."],
      ["This actor played child psychologist Malcolm Crowe in The Sixth Sense.", "Bruce Willis", "Bruce Willis played Dr. Malcolm Crowe in The Sixth Sense (1999)."],
    ],
    sources: [wiki("Bruce_Willis"), wiki("Bruce_Campbell"), wiki("Bruce_Dern"), wiki("Bruce_Lee")],
  }),

  lightning(18, {
    title: "Which Sean?",
    options: ["Sean Connery", "Sean Penn", "Sean Bean", "Sean Astin"],
    questions: [
      ["This actor played James Bond in Dr. No.", "Sean Connery", "Sean Connery was the first screen 007, in Dr. No (1962)."],
      ["This actor played Boromir.", "Sean Bean", "Sean Bean played Boromir in The Lord of the Rings: The Fellowship of the Ring (2001)."],
      ["This actor played Samwise Gamgee.", "Sean Astin", "Sean Astin played Sam in The Lord of the Rings trilogy."],
      ["This actor won Best Actor for Milk.", "Sean Penn", "Sean Penn won Best Actor for playing Harvey Milk in Milk (2008)."],
      ["This actor played Mikey in The Goonies.", "Sean Astin", "Sean Astin played Mikey Walsh in The Goonies (1985)."],
    ],
    sources: [wiki("Sean_Connery"), wiki("Sean_Penn"), wiki("Sean_Bean"), wiki("Sean_Astin")],
  }),

  lightning(19, {
    title: "Which Michelle?",
    options: ["Michelle Pfeiffer", "Michelle Williams", "Michelle Yeoh", "Michelle Rodriguez"],
    questions: [
      ["This actress played Catwoman in Batman Returns.", "Michelle Pfeiffer", "Michelle Pfeiffer played Selina Kyle in Batman Returns (1992)."],
      ["This actress won Best Actress for Everything Everywhere All at Once.", "Michelle Yeoh", "Michelle Yeoh won Best Actress as Evelyn Wang in Everything Everywhere All at Once (2022)."],
      ["This actress played Letty in The Fast and the Furious.", "Michelle Rodriguez", "Michelle Rodriguez has played Letty Ortiz since The Fast and the Furious (2001)."],
      ["This actress starred in Brokeback Mountain.", "Michelle Williams", "Michelle Williams played Alma in Brokeback Mountain (2005), earning an Oscar nomination."],
      ["This actress starred in Crouching Tiger, Hidden Dragon.", "Michelle Yeoh", "Michelle Yeoh played Yu Shu Lien in Crouching Tiger, Hidden Dragon (2000)."],
    ],
    sources: [wiki("Michelle_Pfeiffer"), wiki("Michelle_Williams_(actress)"), wiki("Michelle_Yeoh"), wiki("Michelle_Rodriguez")],
  }),

  lightning(20, {
    title: "Which Kevin?",
    options: ["Kevin Costner", "Kevin Bacon", "Kevin Kline", "Kevin Hart"],
    questions: [
      ["This actor played Eliot Ness in The Untouchables.", "Kevin Costner", "Kevin Costner played Eliot Ness in Brian De Palma's The Untouchables (1987)."],
      ["This actor danced his way through Footloose (1984).", "Kevin Bacon", "Kevin Bacon played Ren McCormack in the original Footloose (1984)."],
      ["This actor won an Oscar for A Fish Called Wanda.", "Kevin Kline", "Kevin Kline won Best Supporting Actor as Otto in A Fish Called Wanda (1988)."],
      ["This actor teamed with Dwayne Johnson in Central Intelligence.", "Kevin Hart", "Kevin Hart starred opposite Dwayne Johnson in Central Intelligence (2016)."],
      ["This actor built a baseball diamond in his cornfield in Field of Dreams.", "Kevin Costner", "Kevin Costner played Iowa farmer Ray Kinsella in Field of Dreams (1989)."],
    ],
    sources: [wiki("Kevin_Costner"), wiki("Kevin_Bacon"), wiki("Kevin_Kline"), wiki("Kevin_Hart")],
  }),
];
