import { lightning, wiki } from "./builders";

export const LIGHTNING_021_030 = [
  lightning(21, {
    title: "Which Hugh?",
    options: ["Hugh Jackman", "Hugh Grant", "Hugh Laurie", "Hugh Bonneville"],
    questions: [
      ["This actor played Wolverine.", "Hugh Jackman", "Hugh Jackman played Wolverine, starting with X-Men (2000)."],
      ["This actor played the travel-bookshop owner in Notting Hill.", "Hugh Grant", "Hugh Grant played bookshop owner William Thacker in Notting Hill (1999)."],
      ["This actor played Mr. Brown in Paddington.", "Hugh Bonneville", "Hugh Bonneville played Henry Brown in Paddington (2014) and its sequels."],
      ["This actor played Stuart's adoptive dad in Stuart Little.", "Hugh Laurie", "Hugh Laurie played Frederick Little in Stuart Little (1999)."],
      ["This actor played P.T. Barnum in The Greatest Showman.", "Hugh Jackman", "Hugh Jackman played P.T. Barnum in The Greatest Showman (2017)."],
    ],
    sources: [wiki("Hugh_Jackman"), wiki("Hugh_Grant"), wiki("Hugh_Laurie"), wiki("Hugh_Bonneville")],
  }),

  lightning(22, {
    title: "Which Jason?",
    options: ["Jason Statham", "Jason Momoa", "Jason Bateman", "Jason Segel"],
    questions: [
      ["This actor played Aquaman.", "Jason Momoa", "Jason Momoa played Arthur Curry in Aquaman (2018)."],
      ["This actor starred in The Transporter.", "Jason Statham", "Jason Statham played driver-for-hire Frank Martin in The Transporter (2002)."],
      ["This actor wrote and starred in Forgetting Sarah Marshall.", "Jason Segel", "Jason Segel wrote Forgetting Sarah Marshall (2008) and played its heartbroken hero, Peter."],
      ["This actor voiced the fox Nick Wilde in Zootopia.", "Jason Bateman", "Jason Bateman voiced con-artist fox Nick Wilde in Zootopia (2016)."],
      ["This actor fought a giant shark in The Meg.", "Jason Statham", "Jason Statham played rescue diver Jonas Taylor in The Meg (2018)."],
    ],
    sources: [wiki("Jason_Statham"), wiki("Jason_Momoa"), wiki("Jason_Bateman"), wiki("Jason_Segel")],
  }),

  lightning(23, {
    title: "Will, Will, Will or Willem?",
    options: ["Will Smith", "Will Ferrell", "Will Poulter", "Willem Dafoe"],
    questions: [
      ["This actor played Ron Burgundy.", "Will Ferrell", "Will Ferrell played the San Diego anchorman in Anchorman (2004)."],
      ["This actor played the Green Goblin in Spider-Man (2002).", "Willem Dafoe", "Willem Dafoe played Norman Osborn in Sam Raimi's Spider-Man (2002)."],
      ["This actor played Agent J in Men in Black.", "Will Smith", "Will Smith played Agent J in Men in Black (1997)."],
      ["This actor played Adam Warlock in Guardians of the Galaxy Vol. 3.", "Will Poulter", "Will Poulter played Adam Warlock in Guardians of the Galaxy Vol. 3 (2023)."],
      ["This actor played Buddy in Elf.", "Will Ferrell", "Will Ferrell played Buddy, a human raised by elves, in Elf (2003)."],
    ],
    sources: [wiki("Will_Smith"), wiki("Will_Ferrell"), wiki("Will_Poulter"), wiki("Willem_Dafoe")],
  }),

  lightning(24, {
    title: "Jake or Jack?",
    options: ["Jake Gyllenhaal", "Jack Nicholson", "Jack Black", "Jack Lemmon"],
    questions: [
      ["This actor played the Joker in Batman (1989).", "Jack Nicholson", "Jack Nicholson played the Joker opposite Michael Keaton in Batman (1989)."],
      ["This actor played Dewey Finn in School of Rock.", "Jack Black", "Jack Black played substitute teacher Dewey Finn in School of Rock (2003)."],
      ["This actor played the title role in Donnie Darko.", "Jake Gyllenhaal", "Jake Gyllenhaal played Donnie in Donnie Darko (2001)."],
      ["This actor went undercover in drag with Tony Curtis in Some Like It Hot.", "Jack Lemmon", "Jack Lemmon played Jerry, alias Daphne, in Some Like It Hot (1959)."],
      ["This actor played Jack Torrance in The Shining.", "Jack Nicholson", "Jack Nicholson played the unraveling caretaker in Stanley Kubrick's The Shining (1980)."],
    ],
    sources: [wiki("Jake_Gyllenhaal"), wiki("Jack_Nicholson"), wiki("Jack_Black"), wiki("Jack_Lemmon")],
  }),

  lightning(25, {
    title: "Which Steve?",
    options: ["Steve Martin", "Steve Carell", "Steve Buscemi", "Steve McQueen"],
    questions: [
      ["This actor starred in The 40-Year-Old Virgin.", "Steve Carell", "Steve Carell played Andy Stitzer in The 40-Year-Old Virgin (2005)."],
      ["This actor jumped a motorcycle over a fence in The Great Escape.", "Steve McQueen", "Steve McQueen played Captain Virgil Hilts in The Great Escape (1963)."],
      ["This actor played Mr. Pink in Reservoir Dogs.", "Steve Buscemi", "Steve Buscemi played Mr. Pink in Quentin Tarantino's Reservoir Dogs (1992)."],
      ["This actor played the dad in Father of the Bride (1991).", "Steve Martin", "Steve Martin played George Banks in Father of the Bride (1991)."],
      ["This actor drove the famous car chase in Bullitt.", "Steve McQueen", "Steve McQueen played Lt. Frank Bullitt in Bullitt (1968)."],
    ],
    sources: [wiki("Steve_Martin"), wiki("Steve_Carell"), wiki("Steve_Buscemi"), wiki("Steve_McQueen")],
  }),

  lightning(26, {
    title: "Which Amy?",
    options: ["Amy Adams", "Amy Poehler", "Amy Schumer", "Amy Ryan"],
    questions: [
      ["This actress played Giselle in Enchanted.", "Amy Adams", "Amy Adams played the fairy-tale princess Giselle in Enchanted (2007)."],
      ["This actress voiced Joy in Inside Out.", "Amy Poehler", "Amy Poehler voiced Joy in Pixar's Inside Out (2015)."],
      ["This actress wrote and starred in Trainwreck.", "Amy Schumer", "Amy Schumer wrote and starred in Trainwreck (2015)."],
      ["This actress earned an Oscar nomination for Gone Baby Gone.", "Amy Ryan", "Amy Ryan was nominated for Best Supporting Actress for Gone Baby Gone (2007)."],
      ["This actress played linguist Louise Banks in Arrival.", "Amy Adams", "Amy Adams played Louise Banks in Denis Villeneuve's Arrival (2016)."],
    ],
    sources: [wiki("Amy_Adams"), wiki("Amy_Poehler"), wiki("Amy_Schumer"), wiki("Amy_Ryan")],
  }),

  lightning(27, {
    title: "Which Gene?",
    options: ["Gene Hackman", "Gene Wilder", "Gene Kelly", "Gene Tierney"],
    questions: [
      ["This actor played Willy Wonka in 1971.", "Gene Wilder", "Gene Wilder played the title role in Willy Wonka & the Chocolate Factory (1971)."],
      ["This actor danced with an umbrella in Singin' in the Rain.", "Gene Kelly", "Gene Kelly starred in and co-directed Singin' in the Rain (1952)."],
      ["This actor played Popeye Doyle in The French Connection.", "Gene Hackman", "Gene Hackman won Best Actor as Popeye Doyle in The French Connection (1971)."],
      ["This actress played the title role in Laura (1944).", "Gene Tierney", "Gene Tierney played Laura Hunt in Otto Preminger's Laura (1944)."],
      ["This actor played Lex Luthor in Superman (1978).", "Gene Hackman", "Gene Hackman played Lex Luthor opposite Christopher Reeve in Superman (1978)."],
    ],
    sources: [wiki("Gene_Hackman"), wiki("Gene_Wilder"), wiki("Gene_Kelly"), wiki("Gene_Tierney")],
  }),

  lightning(28, {
    title: "Fiennes, Fiennes or Joseph?",
    options: ["Ralph Fiennes", "Joseph Fiennes", "Joseph Gordon-Levitt", "Joseph Cotten"],
    questions: [
      ["This actor played Lord Voldemort.", "Ralph Fiennes", "Ralph Fiennes played Voldemort, starting with Harry Potter and the Goblet of Fire (2005)."],
      ["This actor played the title Bard in Shakespeare in Love.", "Joseph Fiennes", "Joseph Fiennes played William Shakespeare in Shakespeare in Love (1998)."],
      ["This actor starred in (500) Days of Summer.", "Joseph Gordon-Levitt", "Joseph Gordon-Levitt played Tom Hansen in (500) Days of Summer (2009)."],
      ["This actor played Holly Martins in The Third Man.", "Joseph Cotten", "Joseph Cotten played pulp novelist Holly Martins in The Third Man (1949)."],
      ["This actor played Amon Göth in Schindler's List.", "Ralph Fiennes", "Ralph Fiennes played camp commandant Amon Göth in Schindler's List (1993)."],
    ],
    sources: [wiki("Ralph_Fiennes"), wiki("Joseph_Fiennes"), wiki("Joseph_Gordon-Levitt"), wiki("Joseph_Cotten")],
  }),

  lightning(29, {
    title: "Which Rachel?",
    options: ["Rachel McAdams", "Rachel Weisz", "Rachel Zegler", "Rachel Griffiths"],
    questions: [
      ["This actress played Regina George in Mean Girls (2004).", "Rachel McAdams", "Rachel McAdams played queen bee Regina George in Mean Girls (2004)."],
      ["This actress won an Oscar for The Constant Gardener.", "Rachel Weisz", "Rachel Weisz won Best Supporting Actress for The Constant Gardener (2005)."],
      ["This actress played María in Spielberg's West Side Story.", "Rachel Zegler", "Rachel Zegler made her film debut as María in West Side Story (2021)."],
      ["This actress played Rhonda in Muriel's Wedding.", "Rachel Griffiths", "Rachel Griffiths played Muriel's best friend Rhonda in Muriel's Wedding (1994)."],
      ["This actress played Evelyn in The Mummy (1999).", "Rachel Weisz", "Rachel Weisz played librarian Evelyn Carnahan in The Mummy (1999)."],
    ],
    sources: [wiki("Rachel_McAdams"), wiki("Rachel_Weisz"), wiki("Rachel_Zegler"), wiki("Rachel_Griffiths")],
  }),

  lightning(30, {
    title: "Which Robert?",
    options: ["Robert De Niro", "Robert Redford", "Robert Duvall", "Robert Downey Jr."],
    questions: [
      ["This actor played Travis Bickle in Taxi Driver.", "Robert De Niro", "Robert De Niro played Travis Bickle in Taxi Driver (1976)."],
      ["This actor played Tony Stark.", "Robert Downey Jr.", "Robert Downey Jr. played Tony Stark, starting with Iron Man (2008)."],
      ["This actor played the Sundance Kid.", "Robert Redford", "Robert Redford played the Sundance Kid in Butch Cassidy and the Sundance Kid (1969)."],
      ["This actor loved the smell of napalm in the morning in Apocalypse Now.", "Robert Duvall", "Robert Duvall played Lt. Col. Kilgore in Apocalypse Now (1979)."],
      ["This actor played consigliere Tom Hagen in The Godfather.", "Robert Duvall", "Robert Duvall played Tom Hagen in The Godfather (1972)."],
    ],
    sources: [wiki("Robert_De_Niro"), wiki("Robert_Redford"), wiki("Robert_Duvall"), wiki("Robert_Downey_Jr.")],
  }),
];
