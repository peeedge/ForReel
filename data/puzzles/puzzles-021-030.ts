import { puzzle, wiki } from "./builders";

export const PUZZLES_021_030 = [
  puzzle(21, {
    scout: {
      clue: "Matching Jesse Owens's haul with four golds at the 1984 Los Angeles Olympics, he went on to win the long jump at four straight Games and finished with nine Olympic golds.",
      answer: "Carl Lewis",
      wrong: ["Mike Powell", "Edwin Moses", "Leroy Burrell"],
      explanation: "Carl Lewis won the 100 meters, 200 meters, long jump and 4x100 relay in 1984, and took the long jump again in 1988, 1992 and 1996.",
      sources: [wiki("Carl_Lewis")],
    },
    teammates: {
      athletes: ["Mario Lemieux", "Jaromír Jágr"],
      answer: "Pittsburgh Penguins",
      wrong: ["Washington Capitals", "New York Rangers", "Philadelphia Flyers"],
      explanation: "Lemieux and Jágr won back-to-back Stanley Cups with the Pittsburgh Penguins in 1991 and 1992. Lemieux played only for Pittsburgh; Jágr later played for Washington, the Rangers, the Flyers and others.",
      sources: [wiki("Pittsburgh_Penguins")],
    },
    replay: {
      clue: "Needing to score to keep Italy alive in the first World Cup final decided on penalties, in 1994, the team's ponytailed star sends his kick over the crossbar, and Brazil are champions.",
      answer: "Roberto Baggio",
      wrong: ["Paolo Maldini", "Alessandro Del Piero", "Giuseppe Signori"],
      explanation: "Roberto Baggio had carried Italy to the final, but his miss gave Brazil a fourth title after a 0–0 draw at the Rose Bowl.",
      sources: [wiki("1994_FIFA_World_Cup_final")],
    },
    timeline: {
      events: [
        ["The first Rugby World Cup", 1987],
        ["The first America's Cup race", 1851],
        ["The first Cricket World Cup", 1975],
        ["The first Ryder Cup", 1927],
      ],
      sources: [wiki("America's_Cup"), wiki("1927_Ryder_Cup"), wiki("1975_Cricket_World_Cup"), wiki("1987_Rugby_World_Cup")],
    },
    overtime: {
      prompt: "Which horse won the 1973 Belmont Stakes by 31 lengths to complete the Triple Crown?",
      answer: "Secretariat",
      wrong: ["Seattle Slew", "Affirmed", "American Pharoah"],
      explanation: "Secretariat's Belmont time of 2:24 is still the record for a mile and a half on dirt. It was the first Triple Crown in 25 years.",
      sources: [wiki("Secretariat_(horse)")],
    },
  }),

  puzzle(22, {
    scout: {
      clue: "A Heisman Trophy winner from Auburn, he played Major League Baseball for the Kansas City Royals and NFL football for the Los Angeles Raiders until a hip injury in 1991.",
      answer: "Bo Jackson",
      wrong: ["Deion Sanders", "Herschel Walker", "Brian Jordan"],
      explanation: "Bo Jackson was an All-Star in baseball and a Pro Bowler in football, the first athlete to be both.",
      sources: [wiki("Bo_Jackson")],
    },
    teammates: {
      athletes: ["Patrick Roy", "Joe Sakic"],
      answer: "Colorado Avalanche",
      wrong: ["Montreal Canadiens", "Quebec Nordiques", "Detroit Red Wings"],
      explanation: "Roy and Sakic won Stanley Cups together with the Colorado Avalanche in 1996 and 2001. Roy came from Montreal; Sakic began when the franchise was the Quebec Nordiques.",
      sources: [wiki("Colorado_Avalanche")],
    },
    replay: {
      clue: "When the game becomes official in the fifth inning on September 6, 1995, a Baltimore shortstop breaks Lou Gehrig's record of 2,130 consecutive games and takes a victory lap around Camden Yards.",
      answer: "Cal Ripken Jr.",
      wrong: ["Eddie Murray", "Brady Anderson", "Mike Mussina"],
      explanation: "Cal Ripken Jr. extended the streak to 2,632 games before sitting out in September 1998.",
      sources: [wiki("Cal_Ripken_Jr.")],
    },
    timeline: {
      events: [
        ["The first London Marathon", 1981],
        ["The first Monaco Grand Prix", 1929],
        ["The first Tour de France", 1903],
        ["The first Ironman triathlon", 1978],
      ],
      sources: [wiki("1903_Tour_de_France"), wiki("1929_Monaco_Grand_Prix"), wiki("Ironman_World_Championship"), wiki("London_Marathon")],
    },
    overtime: {
      prompt: "Who won all four Grand Slam singles titles and Olympic gold in the same year, 1988?",
      answer: "Steffi Graf",
      wrong: ["Martina Navratilova", "Chris Evert", "Gabriela Sabatini"],
      explanation: "Steffi Graf's 'Golden Slam' ended with a win over Gabriela Sabatini in the Olympic final in Seoul. No other player has done it in a calendar year.",
      sources: [wiki("Steffi_Graf")],
    },
  }),

  puzzle(23, {
    scout: {
      clue: "A forward who starred at North Carolina, she won two World Cups and two Olympic golds with the U.S. team and retired in 2004 with 158 international goals.",
      answer: "Mia Hamm",
      wrong: ["Abby Wambach", "Michelle Akers", "Julie Foudy"],
      explanation: "Mia Hamm retired as the top international goalscorer in history, man or woman. Abby Wambach passed her in 2013.",
      sources: [wiki("Mia_Hamm")],
    },
    teammates: {
      athletes: ["Willie Mays", "Willie McCovey"],
      answer: "San Francisco Giants",
      wrong: ["New York Mets", "San Diego Padres", "Oakland Athletics"],
      explanation: "Mays and McCovey shared the San Francisco Giants lineup from 1959 to 1972. Mays finished with the Mets; McCovey also played for San Diego and Oakland.",
      sources: [wiki("San_Francisco_Giants")],
    },
    replay: {
      clue: "On the Giants' final drive of Super Bowl XLII, Eli Manning escapes a collapsing pocket and heaves a pass that a little-used receiver pins against his helmet while falling to the turf.",
      answer: "David Tyree",
      wrong: ["Plaxico Burress", "Amani Toomer", "Kevin Boss"],
      explanation: "David Tyree's 32-yard catch set up Plaxico Burress's winning touchdown, ending the Patriots' bid for a 19–0 season.",
      sources: [wiki("Helmet_Catch")],
    },
    timeline: {
      events: [
        ["Major League Soccer plays its first season", 1996],
        ["The AFL–NFL merger is completed", 1970],
        ["The Premier League kicks off", 1992],
        ["ESPN launches", 1979],
      ],
      sources: [wiki("AFL–NFL_merger"), wiki("ESPN"), wiki("Premier_League"), wiki("Major_League_Soccer")],
    },
    overtime: {
      prompt: "Which golfer's record of 82 PGA Tour wins did Tiger Woods tie in 2019?",
      answer: "Sam Snead",
      wrong: ["Jack Nicklaus", "Ben Hogan", "Arnold Palmer"],
      explanation: "Sam Snead won his 82nd PGA Tour event in 1965. Tiger Woods matched him at the 2019 Zozo Championship in Japan; Jack Nicklaus is third with 73.",
      sources: [wiki("Sam_Snead")],
    },
  }),

  puzzle(24, {
    scout: {
      clue: "An Ohio-born golfer who beat Arnold Palmer in a playoff for his first major in 1962, he won a record 18 men's major championships, the last of them the 1986 Masters at age 46.",
      answer: "Jack Nicklaus",
      wrong: ["Arnold Palmer", "Gary Player", "Tom Watson"],
      explanation: "Jack Nicklaus's first major was the 1962 U.S. Open at Oakmont, and his six Masters wins are a record.",
      sources: [wiki("Jack_Nicklaus")],
    },
    teammates: {
      athletes: ["Jackie Robinson", "Pee Wee Reese"],
      answer: "Brooklyn Dodgers",
      wrong: ["Kansas City Monarchs", "St. Louis Cardinals", "Philadelphia Athletics"],
      explanation: "Robinson and Reese were Brooklyn Dodgers teammates for a decade and won the 1955 World Series together. Robinson had played for the Kansas City Monarchs in the Negro leagues; Reese never did.",
      sources: [wiki("Brooklyn_Dodgers")],
    },
    replay: {
      clue: "On April 8, 1974, in Atlanta, a Braves slugger drives an Al Downing pitch over the left-field fence for career home run No. 715, passing Babe Ruth.",
      answer: "Hank Aaron",
      wrong: ["Willie Mays", "Frank Robinson", "Eddie Mathews"],
      explanation: "Hank Aaron finished with 755 home runs, the record until Barry Bonds passed it in 2007.",
      sources: [wiki("Hank_Aaron")],
    },
    timeline: {
      events: [
        ["LeBron James passes Kareem as the NBA's scoring leader", 2023],
        ["Magic Johnson announces he has HIV", 1991],
        ["Kareem passes Wilt Chamberlain as the NBA's scoring leader", 1984],
        ["Shaq and Kobe win their first title together", 2000],
      ],
      sources: [wiki("Kareem_Abdul-Jabbar"), wiki("Magic_Johnson"), wiki("2000_NBA_Finals"), wiki("LeBron_James")],
    },
    overtime: {
      prompt: "Which team lost four consecutive Super Bowls in the early 1990s?",
      answer: "Buffalo Bills",
      wrong: ["Minnesota Vikings", "Denver Broncos", "Cincinnati Bengals"],
      explanation: "The Buffalo Bills lost Super Bowls XXV through XXVIII. The Vikings lost four Super Bowls and the Broncos five, but never four in a row.",
      sources: [wiki("Buffalo_Bills")],
    },
  }),

  puzzle(25, {
    scout: {
      clue: "A Texan who won two track and field golds at the 1932 Los Angeles Olympics, she later turned to golf, won 10 major championships, and helped found the LPGA.",
      answer: "Babe Didrikson Zaharias",
      wrong: ["Wilma Rudolph", "Patty Berg", "Althea Gibson"],
      explanation: "Babe Didrikson Zaharias won the javelin and 80-meter hurdles in 1932, plus a silver in the high jump.",
      sources: [wiki("Babe_Didrikson_Zaharias")],
    },
    teammates: {
      athletes: ["Dan Marino", "Mark Clayton"],
      answer: "Miami Dolphins",
      wrong: ["Green Bay Packers", "New York Jets", "Buffalo Bills"],
      explanation: "Marino and Clayton, one half of the 'Marks Brothers' receiving duo, were teammates on the Miami Dolphins from 1983 to 1992. Clayton spent his final season in Green Bay; Marino played only for Miami.",
      sources: [wiki("Miami_Dolphins")],
    },
    replay: {
      clue: "Anchoring the 4x100-meter freestyle relay at the 2008 Beijing Olympics, an American swimmer chases down France's Alain Bernard in the final 50 meters, keeping Michael Phelps's eight-gold quest alive.",
      answer: "Jason Lezak",
      wrong: ["Garrett Weber-Gale", "Cullen Jones", "Ryan Lochte"],
      explanation: "Jason Lezak swam a 46.06-second split, the fastest relay leg ever at the time, and the U.S. won by eight hundredths of a second.",
      sources: [wiki("Jason_Lezak")],
    },
    timeline: {
      events: [
        ["Leicester City wins the Premier League", 2016],
        ["Argentina wins the World Cup in Qatar", 2022],
        ["Liverpool comes back from 3–0 down to win in Istanbul", 2005],
        ["Barcelona completes a sextuple", 2009],
      ],
      sources: [wiki("2005_UEFA_Champions_League_final"), wiki("2009_FIFA_Club_World_Cup"), wiki("2015–16_Leicester_City_F.C._season"), wiki("2022_FIFA_World_Cup_final")],
    },
    overtime: {
      prompt: "Which country has won the most Davis Cup titles?",
      answer: "United States",
      wrong: ["Australia", "France", "Great Britain"],
      explanation: "The United States has won the Davis Cup 32 times, most recently in 2007. Australia is next with 28.",
      sources: [wiki("Davis_Cup")],
    },
  }),

  puzzle(26, {
    scout: {
      clue: "A left-handed Spaniard from Mallorca, he won the French Open a record 14 times and retired after the 2024 Davis Cup Finals.",
      answer: "Rafael Nadal",
      wrong: ["Carlos Alcaraz", "David Ferrer", "Juan Carlos Ferrero"],
      explanation: "Rafael Nadal won 22 Grand Slam singles titles, 14 of them at Roland Garros, where he lost only four matches.",
      sources: [wiki("Rafael_Nadal")],
    },
    teammates: {
      athletes: ["Hakeem Olajuwon", "Clyde Drexler"],
      answer: "Houston Rockets",
      wrong: ["Portland Trail Blazers", "Toronto Raptors", "Utah Jazz"],
      explanation: "Olajuwon and Drexler, college teammates at the University of Houston, won the 1995 title together with the Houston Rockets. Drexler came from Portland; Olajuwon finished in Toronto.",
      sources: [wiki("Houston_Rockets")],
    },
    replay: {
      clue: "At the 1968 Mexico City Olympics, an Oregon State high jumper wins gold by going over the bar backward and head-first, a technique soon copied by nearly everyone.",
      answer: "Dick Fosbury",
      wrong: ["Valeriy Brumel", "Dwight Stones", "John Thomas"],
      explanation: "Dick Fosbury's 'Fosbury Flop' cleared an Olympic-record 2.24 meters.",
      sources: [wiki("Dick_Fosbury")],
    },
    timeline: {
      events: [
        ["The first FIFA World Cup", 1930],
        ["The first Super Bowl", 1967],
        ["The first modern Olympics, in Athens", 1896],
        ["The first World Series", 1903],
      ],
      sources: [wiki("1896_Summer_Olympics"), wiki("1903_World_Series"), wiki("1930_FIFA_World_Cup"), wiki("Super_Bowl_I")],
    },
    overtime: {
      prompt: "Who holds the record for most international goals in men's soccer?",
      answer: "Cristiano Ronaldo",
      wrong: ["Ali Daei", "Lionel Messi", "Sunil Chhetri"],
      explanation: "Cristiano Ronaldo passed Iran's Ali Daei, who scored 109, in 2021 and has kept adding to his total for Portugal.",
      sources: [wiki("Cristiano_Ronaldo")],
    },
  }),

  puzzle(27, {
    scout: {
      clue: "At the 1980 Lake Placid Olympics, this American speed skater won all five men's events, from 500 to 10,000 meters, then took up professional cycling.",
      answer: "Eric Heiden",
      wrong: ["Dan Jansen", "Apolo Anton Ohno", "Shani Davis"],
      explanation: "Eric Heiden set four Olympic records and a world record in Lake Placid, later rode the 1986 Tour de France, and became an orthopedic surgeon.",
      sources: [wiki("Eric_Heiden")],
    },
    teammates: {
      athletes: ["Karl Malone", "John Stockton"],
      answer: "Utah Jazz",
      wrong: ["Los Angeles Lakers", "Portland Trail Blazers", "Seattle SuperSonics"],
      explanation: "Stockton and Malone played 18 seasons together for the Utah Jazz and reached two NBA Finals. Malone spent his final season with the Lakers; Stockton never played anywhere else.",
      sources: [wiki("Utah_Jazz")],
    },
    replay: {
      clue: "On March 2, 1962, in Hershey, Pennsylvania, a Philadelphia Warriors center scores 100 points against the Knicks in a game that was never televised.",
      answer: "Wilt Chamberlain",
      wrong: ["Elgin Baylor", "Nate Thurmond", "Walt Bellamy"],
      explanation: "Wilt Chamberlain made 36 field goals and 28 free throws in the Warriors' 169–147 win. He averaged 50.4 points that season.",
      sources: [wiki("Wilt_Chamberlain's_100-point_game")],
    },
    timeline: {
      events: [
        ["Doug Flutie's Hail Mary beats Miami", 1984],
        ["Joe Namath's Super Bowl III guarantee", 1969],
        ["'The Catch' sends the 49ers to the Super Bowl", 1982],
        ["The 'Immaculate Reception'", 1972],
      ],
      sources: [wiki("Super_Bowl_III"), wiki("Immaculate_Reception"), wiki("The_Catch_(American_football)"), wiki("Hail_Flutie")],
    },
    overtime: {
      prompt: "Which country won the first Rugby World Cup, in 1987?",
      answer: "New Zealand",
      wrong: ["Australia", "France", "England"],
      explanation: "New Zealand beat France 29–9 in the final at Eden Park in Auckland. The tournament was co-hosted with Australia.",
      sources: [wiki("1987_Rugby_World_Cup")],
    },
  }),

  puzzle(28, {
    scout: {
      clue: "An elusive Detroit Lions running back who rushed for 2,053 yards in 1997, he retired abruptly before the 1999 season, within reach of the career rushing record.",
      answer: "Barry Sanders",
      wrong: ["Eric Dickerson", "Walter Payton", "Thurman Thomas"],
      explanation: "Barry Sanders retired at 31 with 15,269 rushing yards, about 1,450 short of Walter Payton's record at the time.",
      sources: [wiki("Barry_Sanders")],
    },
    teammates: {
      athletes: ["Pete Rose", "Johnny Bench"],
      answer: "Cincinnati Reds",
      wrong: ["Philadelphia Phillies", "Montreal Expos", "Pittsburgh Pirates"],
      explanation: "Rose and Bench powered the Cincinnati Reds' 'Big Red Machine' to the 1975 and 1976 World Series titles. Rose also played for Philadelphia and Montreal; Bench played only for the Reds.",
      sources: [wiki("Big_Red_Machine")],
    },
    replay: {
      clue: "Before Game 7 of the 1970 NBA Finals, the Knicks' injured captain limps onto the Madison Square Garden court, hits the team's first two baskets, and inspires a win over the Lakers.",
      answer: "Willis Reed",
      wrong: ["Walt Frazier", "Dave DeBusschere", "Bill Bradley"],
      explanation: "Willis Reed scored only those four points, but Walt Frazier added 36 and the Knicks won their first NBA title.",
      sources: [wiki("Willis_Reed")],
    },
    timeline: {
      events: [
        ["Tiger Woods wins his first Masters", 1997],
        ["The 'Miracle on Ice'", 1980],
        ["The Dream Team plays at the Barcelona Olympics", 1992],
        ["Maradona's 'Hand of God' goal", 1986],
      ],
      sources: [wiki("Miracle_on_Ice"), wiki("Argentina_v_England_(1986_FIFA_World_Cup)"), wiki("1992_United_States_men's_Olympic_basketball_team"), wiki("1997_Masters_Tournament")],
    },
    overtime: {
      prompt: "Which club has won the European Cup and Champions League the most times?",
      answer: "Real Madrid",
      wrong: ["AC Milan", "Bayern Munich", "Liverpool"],
      explanation: "Real Madrid had won 15 European Cup and Champions League titles through 2024, more than double AC Milan's seven.",
      sources: [wiki("List_of_European_Cup_and_UEFA_Champions_League_finals")],
    },
  }),

  puzzle(29, {
    scout: {
      clue: "A San Francisco-born center fielder who played 13 seasons for the Yankees, he hit safely in 56 straight games in 1941 and was briefly married to Marilyn Monroe.",
      answer: "Joe DiMaggio",
      wrong: ["Mickey Mantle", "Ted Williams", "Stan Musial"],
      explanation: "Joe DiMaggio's 56-game hitting streak remains the MLB record, and his Yankees won nine World Series in his 13 seasons.",
      sources: [wiki("Joe_DiMaggio")],
    },
    teammates: {
      athletes: ["Kareem Abdul-Jabbar", "Oscar Robertson"],
      answer: "Milwaukee Bucks",
      wrong: ["Cincinnati Royals", "Los Angeles Lakers", "Boston Celtics"],
      explanation: "Kareem, then known as Lew Alcindor, and Oscar Robertson won the 1971 title with the Milwaukee Bucks. Robertson came from the Cincinnati Royals; Kareem later starred for the Lakers.",
      sources: [wiki("Milwaukee_Bucks")],
    },
    replay: {
      clue: "Seven minutes from the end of extra time in the 2014 World Cup final, a 22-year-old substitute chests down a cross from André Schürrle and volleys in the only goal against Argentina.",
      answer: "Mario Götze",
      wrong: ["Thomas Müller", "Miroslav Klose", "Toni Kroos"],
      explanation: "Mario Götze's goal gave Germany its fourth World Cup, the first won by a European team in the Americas.",
      sources: [wiki("2014_FIFA_World_Cup_final")],
    },
    timeline: {
      events: [
        ["LeBron James announces 'The Decision'", 2010],
        ["The Cubs win their first World Series since 1908", 2016],
        ["Kobe Bryant scores 81 points in a game", 2006],
        ["The Red Sox end the 'Curse of the Bambino'", 2004],
      ],
      sources: [wiki("2004_World_Series"), wiki("Kobe_Bryant's_81-point_game"), wiki("The_Decision_(TV_program)"), wiki("2016_World_Series")],
    },
    overtime: {
      prompt: "Who is the only player to win the Heisman Trophy twice?",
      answer: "Archie Griffin",
      wrong: ["Tim Tebow", "Doug Flutie", "Herschel Walker"],
      explanation: "Archie Griffin won in 1974 and 1975 as an Ohio State running back. Tim Tebow won once and finished third the following year.",
      sources: [wiki("Archie_Griffin")],
    },
  }),

  puzzle(30, {
    scout: {
      clue: "Left off his high school varsity team as a sophomore, this shooting guard won six NBA titles with Chicago, taking a break in the middle to play minor league baseball.",
      answer: "Michael Jordan",
      wrong: ["Kobe Bryant", "Clyde Drexler", "Dwyane Wade"],
      explanation: "Michael Jordan won two three-peats with the Bulls, from 1991 to 1993 and 1996 to 1998, and was Finals MVP all six times.",
      sources: [wiki("Michael_Jordan")],
    },
    teammates: {
      athletes: ["David Beckham", "Landon Donovan"],
      answer: "LA Galaxy",
      wrong: ["Everton", "Real Madrid", "Bayern Munich"],
      explanation: "Beckham and Donovan won MLS Cups in 2011 and 2012 with the LA Galaxy. Beckham also played for Real Madrid; Donovan had loan spells at Everton and Bayern Munich.",
      sources: [wiki("LA_Galaxy")],
    },
    replay: {
      clue: "At the buzzer of Game 7 in the 2019 Eastern Conference semifinals, a Toronto forward's fadeaway from the corner bounces on the rim four times before dropping through to eliminate Philadelphia.",
      answer: "Kawhi Leonard",
      wrong: ["Kyle Lowry", "Pascal Siakam", "Serge Ibaka"],
      explanation: "Kawhi Leonard's shot was the first Game 7 buzzer-beater in NBA history, and Toronto went on to win its first championship.",
      sources: [wiki("Kawhi_Leonard")],
    },
    timeline: {
      events: [
        ["Joe DiMaggio's 56-game hitting streak", 1941],
        ["Bobby Thomson's 'Shot Heard 'Round the World'", 1951],
        ["Jesse Owens wins four golds in Berlin", 1936],
        ["Lou Gehrig's farewell speech", 1939],
      ],
      sources: [wiki("Jesse_Owens"), wiki("Lou_Gehrig"), wiki("Joe_DiMaggio"), wiki("Shot_Heard_'Round_the_World_(baseball)")],
    },
    overtime: {
      prompt: "Which franchise won eight consecutive NBA championships, from 1959 to 1966?",
      answer: "Boston Celtics",
      wrong: ["Minneapolis Lakers", "Philadelphia Warriors", "St. Louis Hawks"],
      explanation: "Bill Russell's Boston Celtics won eight straight titles, the longest run in North American major professional sports.",
      sources: [wiki("Boston_Celtics")],
    },
  }),
];
