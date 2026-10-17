import { puzzle, wiki } from "./builders";

export const PUZZLES_001_010 = [
  puzzle(1, {
    scout: {
      clue: "Coached by her father on public courts in Compton, California, she won 23 Grand Slam singles titles in the Open Era, the last of them at the 2017 Australian Open while she was pregnant.",
      answer: "Serena Williams",
      wrong: ["Venus Williams", "Steffi Graf", "Maria Sharapova"],
      explanation: "Serena Williams won 23 Grand Slam singles titles, an Open Era record, finishing with the 2017 Australian Open while about eight weeks pregnant.",
      sources: [wiki("Serena_Williams")],
    },
    teammates: {
      athletes: ["Michael Jordan", "Scottie Pippen"],
      answer: "Chicago Bulls",
      wrong: ["Washington Wizards", "Houston Rockets", "Portland Trail Blazers"],
      explanation: "Jordan and Pippen won six NBA titles together with the Chicago Bulls in the 1990s. Jordan later played for Washington; Pippen also played for Houston and Portland, but never alongside Jordan.",
      sources: [wiki("Chicago_Bulls")],
    },
    replay: {
      clue: "Barely able to walk on two injured legs, a pinch-hitter limps to the plate in Game 1 of the 1988 World Series, homers off Oakland's star closer to win it, and pumps his fist as he rounds the bases.",
      answer: "Kirk Gibson",
      wrong: ["Mike Scioscia", "Steve Sax", "Mickey Hatcher"],
      explanation: "Kirk Gibson's two-run walk-off homer off Dennis Eckersley won Game 1 for the Dodgers, who went on to take the 1988 World Series. It was his only at-bat of the Series.",
      sources: [wiki("Kirk_Gibson's_1988_World_Series_home_run")],
    },
    timeline: {
      events: [
        ["Spain wins its first World Cup", 2010],
        ["Michael Phelps wins eight golds in Beijing", 2008],
        ["Germany beats Brazil 7–1 in a World Cup semifinal", 2014],
        ["Usain Bolt runs the 100 meters in 9.58 seconds", 2009],
      ],
      sources: [wiki("Michael_Phelps"), wiki("Usain_Bolt"), wiki("2010_FIFA_World_Cup"), wiki("Brazil_v_Germany_(2014_FIFA_World_Cup)")],
    },
    overtime: {
      prompt: "Which country is the only one to have played at every men's FIFA World Cup finals tournament?",
      answer: "Brazil",
      wrong: ["Germany", "Italy", "Argentina"],
      explanation: "Brazil has appeared at every World Cup since the first in 1930, and won a record five titles through 2022. Germany missed 1930 and 1950, Italy skipped 1930 and failed to qualify in 1958, 2018 and 2022, and Argentina skipped 1938, 1950 and 1954.",
      sources: [wiki("Brazil_at_the_FIFA_World_Cup")],
    },
  }),

  puzzle(2, {
    scout: {
      clue: "Nicknamed 'The Great One', this center won four Stanley Cups in Edmonton, was traded to Los Angeles in 1988, and retired with 2,857 career points, a record that still stands.",
      answer: "Wayne Gretzky",
      wrong: ["Mario Lemieux", "Mark Messier", "Gordie Howe"],
      explanation: "Wayne Gretzky finished with 894 goals and 1,963 assists for 2,857 points. The NHL retired his No. 99 for every team.",
      sources: [wiki("Wayne_Gretzky")],
    },
    teammates: {
      athletes: ["Kobe Bryant", "Shaquille O'Neal"],
      answer: "Los Angeles Lakers",
      wrong: ["Orlando Magic", "Miami Heat", "Phoenix Suns"],
      explanation: "Kobe and Shaq won three straight titles with the Los Angeles Lakers from 2000 to 2002. Shaq also played for Orlando, Miami and Phoenix; Kobe spent all 20 seasons with the Lakers.",
      sources: [wiki("Los_Angeles_Lakers")],
    },
    replay: {
      clue: "In front of more than 90,000 fans at the Rose Bowl, a defender scores the winning kick of the 1999 Women's World Cup final shootout against China and celebrates by whipping off her jersey.",
      answer: "Brandi Chastain",
      wrong: ["Mia Hamm", "Julie Foudy", "Kristine Lilly"],
      explanation: "Brandi Chastain converted the fifth U.S. penalty to beat China after a 0–0 draw, giving the United States its second Women's World Cup.",
      sources: [wiki("Brandi_Chastain"), wiki("1999_FIFA_Women's_World_Cup_final")],
    },
    timeline: {
      events: [
        ["Wilt Chamberlain scores 100 points in a game", 1962],
        ["Secretariat wins the Triple Crown", 1973],
        ["Jackie Robinson breaks MLB's color barrier", 1947],
        ["Roger Bannister runs the first sub-four-minute mile", 1954],
      ],
      sources: [wiki("Jackie_Robinson"), wiki("Roger_Bannister"), wiki("Wilt_Chamberlain's_100-point_game"), wiki("Secretariat_(horse)")],
    },
    overtime: {
      prompt: "Which franchise has won the most Stanley Cups?",
      answer: "Montreal Canadiens",
      wrong: ["Toronto Maple Leafs", "Detroit Red Wings", "Boston Bruins"],
      explanation: "The Montreal Canadiens won 24 Stanley Cups between 1916 and 1993. The Toronto Maple Leafs are next with 13.",
      sources: [wiki("List_of_Stanley_Cup_champions")],
    },
  }),

  puzzle(3, {
    scout: {
      clue: "A Jamaican sprinter known for an arrow-to-the-sky victory pose, he set world records of 9.58 seconds in the 100 meters and 19.19 in the 200 at the 2009 World Championships in Berlin.",
      answer: "Usain Bolt",
      wrong: ["Yohan Blake", "Asafa Powell", "Justin Gatlin"],
      explanation: "Usain Bolt set both sprint world records in Berlin in 2009 and won eight Olympic gold medals across three Games.",
      sources: [wiki("Usain_Bolt")],
    },
    teammates: {
      athletes: ["Joe Montana", "Jerry Rice"],
      answer: "San Francisco 49ers",
      wrong: ["Kansas City Chiefs", "Oakland Raiders", "Seattle Seahawks"],
      explanation: "Montana and Rice won two Super Bowls together with the San Francisco 49ers. Montana finished his career in Kansas City; Rice later played for Oakland and Seattle.",
      sources: [wiki("San_Francisco_49ers")],
    },
    replay: {
      clue: "In the thin air of Mexico City in 1968, a long jumper flies so far that the optical measuring device can't reach the mark, and officials have to bring out a tape: 8.90 meters.",
      answer: "Bob Beamon",
      wrong: ["Ralph Boston", "Mike Powell", "Igor Ter-Ovanesyan"],
      explanation: "Bob Beamon broke the world record by 55 centimeters. His mark stood until Mike Powell jumped 8.95 meters in 1991.",
      sources: [wiki("Bob_Beamon")],
    },
    timeline: {
      events: [
        ["Hank Aaron hits his 715th home run", 1974],
        ["Babe Ruth hits 60 home runs in a season", 1927],
        ["Barry Bonds hits 73 home runs in a season", 2001],
        ["Roger Maris hits 61 home runs in a season", 1961],
      ],
      sources: [wiki("Babe_Ruth"), wiki("Roger_Maris"), wiki("Hank_Aaron"), wiki("Barry_Bonds")],
    },
    overtime: {
      prompt: "Who became the first man to win 23 Grand Slam singles titles, at the 2023 French Open?",
      answer: "Novak Djokovic",
      wrong: ["Rafael Nadal", "Roger Federer", "Pete Sampras"],
      explanation: "Novak Djokovic's 2023 French Open win broke his tie with Rafael Nadal at 22. Federer retired with 20 and Sampras with 14.",
      sources: [wiki("Novak_Djokovic")],
    },
  }),

  puzzle(4, {
    scout: {
      clue: "A Brazilian forward who won three World Cups, the first in 1958 at age 17, he spent most of his career with Santos before finishing with the New York Cosmos.",
      answer: "Pelé",
      wrong: ["Garrincha", "Romário", "Zico"],
      explanation: "Pelé won the World Cup in 1958, 1962 and 1970, played for Santos from 1956 to 1974, and joined the New York Cosmos in 1975.",
      sources: [wiki("Pelé")],
    },
    teammates: {
      athletes: ["Babe Ruth", "Lou Gehrig"],
      answer: "New York Yankees",
      wrong: ["Boston Red Sox", "Boston Braves", "Detroit Tigers"],
      explanation: "Ruth and Gehrig anchored the New York Yankees' 'Murderers' Row' lineup. Ruth began with the Red Sox and ended with the Braves; Gehrig played only for the Yankees.",
      sources: [wiki("New_York_Yankees")],
    },
    replay: {
      clue: "With team gold on the line at the 1996 Atlanta Olympics, an American gymnast vaults on a badly injured ankle, lands on one foot, and is carried to the podium by her coach.",
      answer: "Kerri Strug",
      wrong: ["Dominique Moceanu", "Shannon Miller", "Dominique Dawes"],
      explanation: "Kerri Strug's second vault sealed gold for the 'Magnificent Seven', and Béla Károlyi carried her out for the medal ceremony.",
      sources: [wiki("Kerri_Strug")],
    },
    timeline: {
      events: [
        ["Mike Tyson becomes the youngest heavyweight champion", 1986],
        ["Ali and Frazier meet in the 'Fight of the Century'", 1971],
        ["Mike Tyson bites Evander Holyfield's ear", 1997],
        ["The 'Rumble in the Jungle' in Kinshasa", 1974],
      ],
      sources: [wiki("Fight_of_the_Century"), wiki("The_Rumble_in_the_Jungle"), wiki("Mike_Tyson"), wiki("Evander_Holyfield_vs._Mike_Tyson_II")],
    },
    overtime: {
      prompt: "Who holds MLB's career records for strikeouts and no-hitters?",
      answer: "Nolan Ryan",
      wrong: ["Randy Johnson", "Roger Clemens", "Sandy Koufax"],
      explanation: "Nolan Ryan struck out 5,714 batters and threw seven no-hitters over 27 seasons. Randy Johnson is second in strikeouts with 4,875.",
      sources: [wiki("Nolan_Ryan")],
    },
  }),

  puzzle(5, {
    scout: {
      clue: "After winning light-heavyweight gold at the 1960 Rome Olympics, this boxer became heavyweight champion in 1964, was stripped of the title for refusing the Vietnam draft, and won it back in the 'Rumble in the Jungle'.",
      answer: "Muhammad Ali",
      wrong: ["Joe Frazier", "George Foreman", "Sonny Liston"],
      explanation: "Muhammad Ali, then Cassius Clay, beat Sonny Liston for the title in 1964 and regained it by knocking out George Foreman in Zaire in 1974.",
      sources: [wiki("Muhammad_Ali")],
    },
    teammates: {
      athletes: ["Peyton Manning", "Marvin Harrison"],
      answer: "Indianapolis Colts",
      wrong: ["Denver Broncos", "Tennessee Titans", "New York Giants"],
      explanation: "Manning and Harrison connected for 112 regular-season touchdowns with the Indianapolis Colts and won Super Bowl XLI together. Manning later won another title with Denver; Harrison played only for the Colts.",
      sources: [wiki("Indianapolis_Colts")],
    },
    replay: {
      clue: "In a 1986 World Cup quarterfinal against England, a forward punches the ball into the net and later credits it to 'the hand of God', then dribbles past half the English team for a second goal four minutes later.",
      answer: "Diego Maradona",
      wrong: ["Jorge Valdano", "Mario Kempes", "Gabriel Batistuta"],
      explanation: "Diego Maradona scored both goals in Argentina's 2–1 win in Mexico City, then led his team to the 1986 title.",
      sources: [wiki("Argentina_v_England_(1986_FIFA_World_Cup)")],
    },
    timeline: {
      events: [
        ["Kerri Strug's one-footed vault", 1996],
        ["Simone Biles wins her first world all-around title", 2013],
        ["Nadia Comăneci scores the first perfect 10", 1976],
        ["Mary Lou Retton wins Olympic all-around gold", 1984],
      ],
      sources: [wiki("Nadia_Comăneci"), wiki("Mary_Lou_Retton"), wiki("Kerri_Strug"), wiki("Simone_Biles")],
    },
    overtime: {
      prompt: "Who holds MLB's career record for hits?",
      answer: "Pete Rose",
      wrong: ["Ty Cobb", "Hank Aaron", "Stan Musial"],
      explanation: "Pete Rose finished with 4,256 hits, passing Ty Cobb in September 1985.",
      sources: [wiki("Pete_Rose")],
    },
  }),

  puzzle(6, {
    scout: {
      clue: "An American gymnast with several skills named after her, she won all-around gold at the 2016 Rio Olympics, withdrew from events in Tokyo with 'the twisties', and won all-around gold again in Paris in 2024.",
      answer: "Simone Biles",
      wrong: ["Gabby Douglas", "Aly Raisman", "Sunisa Lee"],
      explanation: "Simone Biles won the Olympic all-around in 2016 and 2024, and is the most decorated gymnast in World Championships history.",
      sources: [wiki("Simone_Biles")],
    },
    teammates: {
      athletes: ["Cristiano Ronaldo", "Wayne Rooney"],
      answer: "Manchester United",
      wrong: ["Real Madrid", "Everton", "Juventus"],
      explanation: "Ronaldo and Rooney won three Premier League titles and the 2008 Champions League together at Manchester United. Ronaldo went on to Real Madrid and Juventus; Rooney started at Everton.",
      sources: [wiki("Manchester_United_F.C.")],
    },
    replay: {
      clue: "In the 1982 NFC Championship Game against Dallas, a receiver leaps at the back of the end zone to pull in Joe Montana's high pass for the winning touchdown, a play remembered simply as 'The Catch'.",
      answer: "Dwight Clark",
      wrong: ["Freddie Solomon", "Roger Craig", "Earl Cooper"],
      explanation: "Dwight Clark's fingertip grab sent the 49ers to their first Super Bowl, which they won two weeks later.",
      sources: [wiki("The_Catch_(American_football)")],
    },
    timeline: {
      events: [
        ["Magic Johnson and Larry Bird meet in the NCAA final", 1979],
        ["James Naismith invents basketball", 1891],
        ["Bill Russell's Celtics win their first NBA title", 1957],
        ["The first BAA (later NBA) season tips off", 1946],
      ],
      sources: [wiki("James_Naismith"), wiki("1946–47_BAA_season"), wiki("1957_NBA_Finals"), wiki("1979_NCAA_Division_I_basketball_championship_game")],
    },
    overtime: {
      prompt: "Which city hosted the first modern Olympic Games, in 1896?",
      answer: "Athens",
      wrong: ["Paris", "London", "St. Louis"],
      explanation: "Athens hosted the 1896 Games, organized by Pierre de Coubertin's new International Olympic Committee. Paris followed in 1900 and St. Louis in 1904.",
      sources: [wiki("1896_Summer_Olympics")],
    },
  }),

  puzzle(7, {
    scout: {
      clue: "Taken 199th overall in the 2000 NFL Draft, this quarterback won six Super Bowls with New England and a seventh with Tampa Bay before retiring in 2023.",
      answer: "Tom Brady",
      wrong: ["Peyton Manning", "Drew Brees", "Aaron Rodgers"],
      explanation: "Tom Brady won seven Super Bowls and five Super Bowl MVP awards, both records.",
      sources: [wiki("Tom_Brady")],
    },
    teammates: {
      athletes: ["Xavi", "Andrés Iniesta"],
      answer: "Barcelona",
      wrong: ["Vissel Kobe", "Al Sadd", "Real Madrid"],
      explanation: "Xavi and Iniesta ran Barcelona's midfield through four Champions League wins. Iniesta later moved to Vissel Kobe in Japan; Xavi finished his playing career at Al Sadd in Qatar.",
      sources: [wiki("FC_Barcelona")],
    },
    replay: {
      clue: "On July 4, 1939, a first baseman diagnosed with a fatal disease tells a packed Yankee Stadium that he considers himself 'the luckiest man on the face of the earth'.",
      answer: "Lou Gehrig",
      wrong: ["Babe Ruth", "Joe DiMaggio", "Bill Dickey"],
      explanation: "Lou Gehrig gave his farewell speech two months after ending his streak of 2,130 consecutive games, and shortly after being diagnosed with ALS.",
      sources: [wiki("Lou_Gehrig")],
    },
    timeline: {
      events: [
        ["The first Indianapolis 500", 1911],
        ["The first Kentucky Derby", 1875],
        ["The first Boston Marathon", 1897],
        ["The first Wimbledon Championships", 1877],
      ],
      sources: [wiki("Kentucky_Derby"), wiki("The_Championships,_Wimbledon"), wiki("Boston_Marathon"), wiki("Indianapolis_500")],
    },
    overtime: {
      prompt: "Which Soviet gymnast held the record for most Olympic medals for 48 years, until Michael Phelps passed her total of 18 in 2012?",
      answer: "Larisa Latynina",
      wrong: ["Věra Čáslavská", "Olga Korbut", "Ludmilla Tourischeva"],
      explanation: "Larisa Latynina won 18 medals, nine of them gold, at the 1956, 1960 and 1964 Olympics.",
      sources: [wiki("Larisa_Latynina")],
    },
  }),

  puzzle(8, {
    scout: {
      clue: "A swimmer from Baltimore, he won 28 Olympic medals, 23 of them gold, including a record eight golds at a single Games in Beijing in 2008.",
      answer: "Michael Phelps",
      wrong: ["Ryan Lochte", "Mark Spitz", "Ian Thorpe"],
      explanation: "Michael Phelps's eight golds in Beijing broke Mark Spitz's record of seven from 1972.",
      sources: [wiki("Michael_Phelps")],
    },
    teammates: {
      athletes: ["Steve Yzerman", "Nicklas Lidström"],
      answer: "Detroit Red Wings",
      wrong: ["Chicago Blackhawks", "Colorado Avalanche", "Toronto Maple Leafs"],
      explanation: "Yzerman and Lidström won three Stanley Cups together with the Detroit Red Wings, and both spent their entire NHL careers there.",
      sources: [wiki("Detroit_Red_Wings")],
    },
    replay: {
      clue: "With no time left against defending national champion Miami in 1984, a 5-foot-10 Boston College quarterback scrambles and heaves a 48-yard pass that is caught in the end zone for the win.",
      answer: "Doug Flutie",
      wrong: ["Bernie Kosar", "Vinny Testaverde", "Jim Kelly"],
      explanation: "Doug Flutie's Hail Mary to Gerard Phelan won the game 47–45, and he won the Heisman Trophy that season.",
      sources: [wiki("Hail_Flutie")],
    },
    timeline: {
      events: [
        ["Cal Ripken Jr. breaks Lou Gehrig's consecutive-games record", 1995],
        ["Bill Buckner's error in the World Series", 1986],
        ["A players' strike cancels the World Series", 1994],
        ["Kirk Gibson's World Series walk-off homer", 1988],
      ],
      sources: [wiki("Bill_Buckner"), wiki("Kirk_Gibson"), wiki("1994–95_Major_League_Baseball_strike"), wiki("Cal_Ripken_Jr.")],
    },
    overtime: {
      prompt: "Which team won the first Super Bowl, in January 1967?",
      answer: "Green Bay Packers",
      wrong: ["Kansas City Chiefs", "Dallas Cowboys", "Baltimore Colts"],
      explanation: "Vince Lombardi's Green Bay Packers beat the Kansas City Chiefs 35–10 in Super Bowl I, then won Super Bowl II as well.",
      sources: [wiki("Super_Bowl_I")],
    },
  }),

  puzzle(9, {
    scout: {
      clue: "A four-sport star at UCLA who played for the Kansas City Monarchs, he debuted for the Brooklyn Dodgers on April 15, 1947. Every MLB player now wears his number 42 on that date.",
      answer: "Jackie Robinson",
      wrong: ["Larry Doby", "Satchel Paige", "Roy Campanella"],
      explanation: "Jackie Robinson broke the modern major leagues' color barrier, won the first Rookie of the Year award, and was NL MVP in 1949.",
      sources: [wiki("Jackie_Robinson")],
    },
    teammates: {
      athletes: ["Larry Bird", "Kevin McHale"],
      answer: "Boston Celtics",
      wrong: ["Indiana Pacers", "Minnesota Timberwolves", "Philadelphia 76ers"],
      explanation: "Bird and McHale won three titles together with the Boston Celtics in the 1980s, and both played their whole careers there. Bird later coached Indiana and McHale ran Minnesota's front office.",
      sources: [wiki("Boston_Celtics")],
    },
    replay: {
      clue: "In extra time of the 2006 World Cup final, in the last match of his career, France's captain is sent off for headbutting Italy's Marco Materazzi in the chest.",
      answer: "Zinedine Zidane",
      wrong: ["Thierry Henry", "Patrick Vieira", "Franck Ribéry"],
      explanation: "Zinedine Zidane had scored a penalty earlier in the final. Italy won the shootout, and Zidane still won the Golden Ball as the tournament's best player.",
      sources: [wiki("2006_FIFA_World_Cup_final")],
    },
    timeline: {
      events: [
        ["The first Daytona 500", 1959],
        ["The first Masters Tournament", 1934],
        ["Jim Thorpe wins two golds in Stockholm", 1912],
        ["The first Winter Olympics, in Chamonix", 1924],
      ],
      sources: [wiki("Jim_Thorpe"), wiki("1924_Winter_Olympics"), wiki("1934_Masters_Tournament"), wiki("1959_Daytona_500")],
    },
    overtime: {
      prompt: "In February 2023, who passed Kareem Abdul-Jabbar to become the NBA's career scoring leader?",
      answer: "LeBron James",
      wrong: ["Kevin Durant", "Karl Malone", "Kobe Bryant"],
      explanation: "LeBron James passed Kareem's 38,387 points against Oklahoma City on February 7, 2023, and later became the first player to reach 40,000.",
      sources: [wiki("LeBron_James")],
    },
  }),

  puzzle(10, {
    scout: {
      clue: "A Swiss right-hander with a one-handed backhand, he won a record eight Wimbledon men's singles titles and 20 Grand Slams before retiring at the 2022 Laver Cup.",
      answer: "Roger Federer",
      wrong: ["Stan Wawrinka", "Pete Sampras", "Andy Roddick"],
      explanation: "Roger Federer won Wimbledon eight times between 2003 and 2017 and spent a record 237 consecutive weeks at No. 1.",
      sources: [wiki("Roger_Federer")],
    },
    teammates: {
      athletes: ["David Ortiz", "Pedro Martínez"],
      answer: "Boston Red Sox",
      wrong: ["Minnesota Twins", "Montreal Expos", "New York Mets"],
      explanation: "Ortiz and Martínez won the 2004 World Series together with the Boston Red Sox. Ortiz came up with Minnesota; Pedro also pitched for Montreal and the Mets.",
      sources: [wiki("Boston_Red_Sox")],
    },
    replay: {
      clue: "Tearing his hamstring in a 400-meter semifinal at the 1992 Barcelona Olympics, a British runner hobbles on until his father pushes past security to help him across the finish line.",
      answer: "Derek Redmond",
      wrong: ["Roger Black", "Linford Christie", "Kriss Akabusi"],
      explanation: "Derek Redmond was officially recorded as 'did not finish', but the crowd gave him and his father, Jim, a standing ovation.",
      sources: [wiki("Derek_Redmond")],
    },
    timeline: {
      events: [
        ["Steffi Graf completes the Golden Slam", 1988],
        ["Arthur Ashe wins Wimbledon", 1975],
        ["Serena Williams wins her first Grand Slam title", 1999],
        ["Billie Jean King beats Bobby Riggs", 1973],
      ],
      sources: [wiki("Battle_of_the_Sexes_(1973_tennis_match)"), wiki("Arthur_Ashe"), wiki("Steffi_Graf"), wiki("Serena_Williams")],
    },
    overtime: {
      prompt: "Which NFL team completed the league's only perfect season, unbeaten and untied through the Super Bowl?",
      answer: "Miami Dolphins",
      wrong: ["New England Patriots", "Chicago Bears", "Pittsburgh Steelers"],
      explanation: "The 1972 Miami Dolphins went 14–0 and won three playoff games, capped by Super Bowl VII. The 2007 Patriots went 18–0 before losing the Super Bowl.",
      sources: [wiki("1972_Miami_Dolphins_season")],
    },
  }),
];
