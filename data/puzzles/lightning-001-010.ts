import { lightning, wiki } from "./builders";

export const LIGHTNING_001_010 = [
  lightning(1, {
    title: "Bill, Bill, Jeff or Jeff?",
    options: ["Bill Pullman", "Bill Paxton", "Jeff Bridges", "Jeff Daniels"],
    questions: [
      ["Who played the character \"The Dude\"?", "Jeff Bridges", "Jeff Bridges played Jeffrey \"The Dude\" Lebowski in The Big Lebowski (1998)."],
      ["This actor was in Speed.", "Jeff Daniels", "Jeff Daniels played Harry Temple, Keanu Reeves's SWAT partner, in Speed (1994)."],
      ["This actor was in Independence Day.", "Bill Pullman", "Bill Pullman played President Thomas J. Whitmore in Independence Day (1996)."],
      ["This actor chased storms in Twister.", "Bill Paxton", "Bill Paxton played storm chaser Bill Harding in Twister (1996)."],
      ["This actor played Harry Dunne in Dumb and Dumber.", "Jeff Daniels", "Jeff Daniels played Harry opposite Jim Carrey's Lloyd in Dumb and Dumber (1994)."],
    ],
    sources: [wiki("Bill_Pullman"), wiki("Bill_Paxton"), wiki("Jeff_Bridges"), wiki("Jeff_Daniels")],
  }),

  lightning(2, {
    title: "Which Ryan?",
    options: ["Ryan Gosling", "Ryan Reynolds", "Ryan Phillippe", "Ryan O'Neal"],
    questions: [
      ["This actor played the getaway driver in Drive.", "Ryan Gosling", "Ryan Gosling played the unnamed Driver in Drive (2011)."],
      ["This actor played Deadpool.", "Ryan Reynolds", "Ryan Reynolds has played Wade Wilson since Deadpool (2016)."],
      ["This actor starred in Love Story (1970).", "Ryan O'Neal", "Ryan O'Neal played Oliver Barrett IV in Love Story, earning an Oscar nomination."],
      ["This actor starred in Cruel Intentions.", "Ryan Phillippe", "Ryan Phillippe played Sebastian Valmont in Cruel Intentions (1999)."],
      ["This actor played Ken in Barbie (2023).", "Ryan Gosling", "Ryan Gosling played Ken opposite Margot Robbie in Barbie, earning an Oscar nomination."],
    ],
    sources: [wiki("Ryan_Gosling"), wiki("Ryan_Reynolds"), wiki("Ryan_Phillippe"), wiki("Ryan_O'Neal")],
  }),

  lightning(3, {
    title: "Emma, Emma, Emma or Emma?",
    options: ["Emma Stone", "Emma Watson", "Emma Thompson", "Emma Roberts"],
    questions: [
      ["This actress won Best Actress for La La Land.", "Emma Stone", "Emma Stone won the Academy Award for Best Actress for playing Mia in La La Land (2016)."],
      ["This actress played Hermione Granger.", "Emma Watson", "Emma Watson played Hermione in all eight Harry Potter films."],
      ["This actress won an Oscar for adapting Sense and Sensibility.", "Emma Thompson", "Emma Thompson won Best Adapted Screenplay for Sense and Sensibility (1995), in which she also starred."],
      ["This actress played Nancy Drew in the 2007 film.", "Emma Roberts", "Emma Roberts played the teen sleuth in Nancy Drew (2007)."],
      ["This actress played Belle in the 2017 Beauty and the Beast.", "Emma Watson", "Emma Watson played Belle in Disney's live-action Beauty and the Beast (2017)."],
    ],
    sources: [wiki("Emma_Stone"), wiki("Emma_Watson"), wiki("Emma_Thompson"), wiki("Emma_Roberts")],
  }),

  lightning(4, {
    title: "The Battle of the Chrises",
    options: ["Chris Hemsworth", "Chris Evans", "Chris Pratt", "Chris Pine"],
    questions: [
      ["This actor played Captain America.", "Chris Evans", "Chris Evans played Steve Rogers, starting with Captain America: The First Avenger (2011)."],
      ["This actor played Thor.", "Chris Hemsworth", "Chris Hemsworth has played Thor since Thor (2011)."],
      ["This actor played Star-Lord.", "Chris Pratt", "Chris Pratt played Peter Quill in Guardians of the Galaxy (2014) and its sequels."],
      ["This actor played Captain Kirk in Star Trek (2009).", "Chris Pine", "Chris Pine took over as James T. Kirk in J.J. Abrams's Star Trek (2009)."],
      ["This actor played the Human Torch in Fantastic Four (2005).", "Chris Evans", "Chris Evans played Johnny Storm in Fantastic Four (2005), years before Captain America."],
    ],
    sources: [wiki("Chris_Hemsworth"), wiki("Chris_Evans_(actor)"), wiki("Chris_Pratt"), wiki("Chris_Pine")],
  }),

  lightning(5, {
    title: "Which Michael?",
    options: ["Michael Keaton", "Michael Douglas", "Michael Caine", "Michael Fassbender"],
    questions: [
      ["This actor played Batman in Tim Burton's Batman (1989).", "Michael Keaton", "Michael Keaton played Bruce Wayne in Batman (1989) and Batman Returns (1992)."],
      ["This actor won Best Actor as Gordon Gekko in Wall Street.", "Michael Douglas", "Michael Douglas won Best Actor for Wall Street (1987)."],
      ["This actor played Alfred in The Dark Knight trilogy.", "Michael Caine", "Michael Caine played Alfred Pennyworth in Christopher Nolan's three Batman films."],
      ["This actor played young Magneto in X-Men: First Class.", "Michael Fassbender", "Michael Fassbender played Erik Lehnsherr in X-Men: First Class (2011)."],
      ["This actor played a washed-up superhero star in Birdman.", "Michael Keaton", "Michael Keaton played Riggan Thomson in Birdman (2014)."],
    ],
    sources: [wiki("Michael_Keaton"), wiki("Michael_Douglas"), wiki("Michael_Caine"), wiki("Michael_Fassbender")],
  }),

  lightning(6, {
    title: "Tom, Tom, Tom or Tom?",
    options: ["Tom Hardy", "Tom Hiddleston", "Tom Holland", "Tom Cruise"],
    questions: [
      ["This actor played Max in Mad Max: Fury Road.", "Tom Hardy", "Tom Hardy played Max Rockatansky in Mad Max: Fury Road (2015)."],
      ["This actor played Loki.", "Tom Hiddleston", "Tom Hiddleston has played Loki since Thor (2011)."],
      ["This actor played Spider-Man in Spider-Man: Homecoming.", "Tom Holland", "Tom Holland played Peter Parker in Spider-Man: Homecoming (2017)."],
      ["This actor played Maverick in Top Gun.", "Tom Cruise", "Tom Cruise played Pete \"Maverick\" Mitchell in Top Gun (1986) and Top Gun: Maverick (2022)."],
      ["This actor played Bane in The Dark Knight Rises.", "Tom Hardy", "Tom Hardy played Bane in The Dark Knight Rises (2012)."],
    ],
    sources: [wiki("Tom_Hardy"), wiki("Tom_Hiddleston"), wiki("Tom_Holland"), wiki("Tom_Cruise")],
  }),

  lightning(7, {
    title: "Julia or Julianne?",
    options: ["Julia Roberts", "Julia Stiles", "Julianne Moore", "Julianne Hough"],
    questions: [
      ["This actress won Best Actress for Erin Brockovich.", "Julia Roberts", "Julia Roberts won Best Actress for Erin Brockovich (2000)."],
      ["This actress played Kat in 10 Things I Hate About You.", "Julia Stiles", "Julia Stiles played Kat Stratford in 10 Things I Hate About You (1999)."],
      ["This actress won Best Actress for Still Alice.", "Julianne Moore", "Julianne Moore won Best Actress for Still Alice (2014)."],
      ["This actress starred in the 2011 Footloose remake.", "Julianne Hough", "Julianne Hough played Ariel Moore in Footloose (2011)."],
      ["This actress played Vivian in Pretty Woman.", "Julia Roberts", "Julia Roberts played Vivian Ward in Pretty Woman (1990)."],
    ],
    sources: [wiki("Julia_Roberts"), wiki("Julia_Stiles"), wiki("Julianne_Moore"), wiki("Julianne_Hough")],
  }),

  lightning(8, {
    title: "Which Christopher?",
    options: ["Christopher Lee", "Christopher Walken", "Christopher Plummer", "Christopher Lloyd"],
    questions: [
      ["This actor played Doc Brown.", "Christopher Lloyd", "Christopher Lloyd played Emmett \"Doc\" Brown in the Back to the Future trilogy."],
      ["This actor played Captain von Trapp in The Sound of Music.", "Christopher Plummer", "Christopher Plummer played Captain Georg von Trapp in The Sound of Music (1965)."],
      ["This actor played Saruman.", "Christopher Lee", "Christopher Lee played Saruman in The Lord of the Rings and The Hobbit films."],
      ["This actor won an Oscar for The Deer Hunter.", "Christopher Walken", "Christopher Walken won Best Supporting Actor for The Deer Hunter (1978)."],
      ["This actor played Judge Doom in Who Framed Roger Rabbit.", "Christopher Lloyd", "Christopher Lloyd played the villainous Judge Doom in Who Framed Roger Rabbit (1988)."],
    ],
    sources: [wiki("Christopher_Lee"), wiki("Christopher_Walken"), wiki("Christopher_Plummer"), wiki("Christopher_Lloyd")],
  }),

  lightning(9, {
    title: "Kate or Cate?",
    options: ["Kate Winslet", "Kate Hudson", "Kate Beckinsale", "Cate Blanchett"],
    questions: [
      ["This actress won Best Actress for The Reader.", "Kate Winslet", "Kate Winslet won Best Actress for The Reader (2008)."],
      ["This actress played Penny Lane in Almost Famous.", "Kate Hudson", "Kate Hudson played Penny Lane in Almost Famous (2000)."],
      ["This actress played the vampire Selene in Underworld.", "Kate Beckinsale", "Kate Beckinsale played Selene in Underworld (2003) and its sequels."],
      ["This actress played Galadriel.", "Cate Blanchett", "Cate Blanchett played Galadriel in The Lord of the Rings and The Hobbit films."],
      ["This actress starred in How to Lose a Guy in 10 Days.", "Kate Hudson", "Kate Hudson starred opposite Matthew McConaughey in How to Lose a Guy in 10 Days (2003)."],
    ],
    sources: [wiki("Kate_Winslet"), wiki("Kate_Hudson"), wiki("Kate_Beckinsale"), wiki("Cate_Blanchett")],
  }),

  lightning(10, {
    title: "Which Jennifer?",
    options: ["Jennifer Lawrence", "Jennifer Connelly", "Jennifer Garner", "Jennifer Aniston"],
    questions: [
      ["This actress played Katniss Everdeen.", "Jennifer Lawrence", "Jennifer Lawrence played Katniss in The Hunger Games films."],
      ["This actress won an Oscar for A Beautiful Mind.", "Jennifer Connelly", "Jennifer Connelly won Best Supporting Actress for A Beautiful Mind (2001)."],
      ["This actress starred in 13 Going on 30.", "Jennifer Garner", "Jennifer Garner played Jenna Rink in 13 Going on 30 (2004)."],
      ["This actress starred in Marley & Me.", "Jennifer Aniston", "Jennifer Aniston starred opposite Owen Wilson in Marley & Me (2008)."],
      ["This actress starred opposite David Bowie in Labyrinth.", "Jennifer Connelly", "Jennifer Connelly played Sarah in Labyrinth (1986)."],
    ],
    sources: [wiki("Jennifer_Lawrence"), wiki("Jennifer_Connelly"), wiki("Jennifer_Garner"), wiki("Jennifer_Aniston")],
  }),
];
