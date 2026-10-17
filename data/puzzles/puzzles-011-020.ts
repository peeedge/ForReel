import { puzzle, wiki } from "./builders";

export const PUZZLES_011_020 = [
  puzzle(11, {
    scout: {
      clue: "He joined Barcelona's academy as a boy after the club agreed to pay for his growth-hormone treatment. The Argentine forward went on to win a record eight Ballon d'Or awards and lift the World Cup in 2022.",
      answer: "Lionel Messi",
      wrong: ["Sergio Agüero", "Ángel Di María", "Gonzalo Higuaín"],
      explanation: "Lionel Messi moved from Rosario to Barcelona at 13, scored a club-record 672 goals there, and captained Argentina to the 2022 World Cup.",
      sources: [wiki("Lionel_Messi")],
    },
    teammates: {
      athletes: ["Tim Duncan", "Tony Parker"],
      answer: "San Antonio Spurs",
      wrong: ["Charlotte Hornets", "Dallas Mavericks", "Phoenix Suns"],
      explanation: "Duncan and Parker won four titles together with the San Antonio Spurs. Duncan never played anywhere else; Parker spent his final season in Charlotte.",
      sources: [wiki("San_Antonio_Spurs")],
    },
    replay: {
      clue: "In the 10th inning of Game 6 of the 1986 World Series, Mookie Wilson's slow roller trickles between the legs of Boston's first baseman, and the Mets' winning run scores.",
      answer: "Bill Buckner",
      wrong: ["Wade Boggs", "Jim Rice", "Dwight Evans"],
      explanation: "Bill Buckner's error capped a three-run Mets rally, and New York won Game 7 two nights later.",
      sources: [wiki("Bill_Buckner")],
    },
    timeline: {
      events: [
        ["Wayne Gretzky retires", 1999],
        ["Alex Ovechkin breaks Gretzky's career goals record", 2025],
        ["Bobby Orr's flying Stanley Cup-winning goal", 1970],
        ["Wayne Gretzky is traded to the Los Angeles Kings", 1988],
      ],
      sources: [wiki("Bobby_Orr"), wiki("The_Trade_(ice_hockey)"), wiki("Wayne_Gretzky"), wiki("Alex_Ovechkin")],
    },
    overtime: {
      prompt: "In 1998, who became the first player to break Roger Maris's single-season record of 61 home runs?",
      answer: "Mark McGwire",
      wrong: ["Sammy Sosa", "Ken Griffey Jr.", "Barry Bonds"],
      explanation: "Mark McGwire hit No. 62 on September 8, 1998, and finished with 70. Sammy Sosa passed Maris days later and ended with 66.",
      sources: [wiki("1998_Major_League_Baseball_home_run_record_chase")],
    },
  }),

  puzzle(12, {
    scout: {
      clue: "He putted against Bob Hope on national TV at age two, won the 1997 Masters by 12 strokes, and held all four major titles at once after winning the 2001 Masters.",
      answer: "Tiger Woods",
      wrong: ["Phil Mickelson", "Rory McIlroy", "Vijay Singh"],
      explanation: "Tiger Woods's run from the 2000 U.S. Open to the 2001 Masters became known as the 'Tiger Slam'. He has won 15 majors.",
      sources: [wiki("Tiger_Woods")],
    },
    teammates: {
      athletes: ["Stephen Curry", "Klay Thompson"],
      answer: "Golden State Warriors",
      wrong: ["Dallas Mavericks", "Sacramento Kings", "Denver Nuggets"],
      explanation: "The 'Splash Brothers' won four titles together with the Golden State Warriors. Thompson joined Dallas in 2024; Curry has spent his whole career with Golden State.",
      sources: [wiki("Golden_State_Warriors")],
    },
    replay: {
      clue: "Three days before Super Bowl III, the brash quarterback of the AFL's New York Jets publicly guarantees victory over the heavily favored Baltimore Colts, and then delivers.",
      answer: "Joe Namath",
      wrong: ["Johnny Unitas", "Earl Morrall", "Len Dawson"],
      explanation: "Joe Namath's Jets won 16–7, the first Super Bowl victory for an AFL team, and he was named the game's MVP.",
      sources: [wiki("Super_Bowl_III")],
    },
    timeline: {
      events: [
        ["Andy Murray wins Wimbledon", 2013],
        ["Rafael Nadal wins his first French Open", 2005],
        ["Novak Djokovic wins his first Australian Open", 2008],
        ["Roger Federer wins his first Wimbledon", 2003],
      ],
      sources: [wiki("Roger_Federer"), wiki("Rafael_Nadal"), wiki("Novak_Djokovic"), wiki("Andy_Murray")],
    },
    overtime: {
      prompt: "Which driver won five consecutive Formula One world titles with Ferrari, from 2000 to 2004?",
      answer: "Michael Schumacher",
      wrong: ["Sebastian Vettel", "Alain Prost", "Mika Häkkinen"],
      explanation: "Michael Schumacher's five Ferrari titles, added to two with Benetton, gave him a then-record seven championships.",
      sources: [wiki("Michael_Schumacher")],
    },
  }),

  puzzle(13, {
    scout: {
      clue: "At the 1935 Big Ten championships, this Ohio State athlete set three world records and tied a fourth in about 45 minutes. A year later he won four gold medals at the Berlin Olympics.",
      answer: "Jesse Owens",
      wrong: ["Ralph Metcalfe", "Eddie Tolan", "Glenn Cunningham"],
      explanation: "Jesse Owens won the 100 meters, 200 meters, long jump and 4x100 relay in Berlin in 1936.",
      sources: [wiki("Jesse_Owens")],
    },
    teammates: {
      athletes: ["LeBron James", "Kyrie Irving"],
      answer: "Cleveland Cavaliers",
      wrong: ["Boston Celtics", "Brooklyn Nets", "Miami Heat"],
      explanation: "LeBron and Kyrie won the 2016 title together with the Cleveland Cavaliers. Kyrie later played for Boston and Brooklyn; LeBron also won titles in Miami.",
      sources: [wiki("Cleveland_Cavaliers")],
    },
    replay: {
      clue: "In Game 3 of the 1932 World Series at Wrigley Field, a slugger appears to point toward center field and then hits the next pitch there, a home run known ever since as the 'called shot'.",
      answer: "Babe Ruth",
      wrong: ["Lou Gehrig", "Jimmie Foxx", "Hack Wilson"],
      explanation: "Whether Babe Ruth really called it is still argued over, but the Yankees swept the Cubs in four games.",
      sources: [wiki("Babe_Ruth's_called_shot")],
    },
    timeline: {
      events: [
        ["Muhammad Ali lights the Olympic cauldron in Atlanta", 1996],
        ["Mark Spitz wins seven golds in Munich", 1972],
        ["Carl Lewis wins four golds in Los Angeles", 1984],
        ["Eric Heiden wins five speed-skating golds", 1980],
      ],
      sources: [wiki("Mark_Spitz"), wiki("Eric_Heiden"), wiki("Carl_Lewis"), wiki("1996_Summer_Olympics")],
    },
    overtime: {
      prompt: "Which country hosted and won the first FIFA World Cup, in 1930?",
      answer: "Uruguay",
      wrong: ["Argentina", "Italy", "Brazil"],
      explanation: "Uruguay beat Argentina 4–2 in the final in Montevideo, and won a second title in 1950.",
      sources: [wiki("1930_FIFA_World_Cup")],
    },
  }),

  puzzle(14, {
    scout: {
      clue: "Winner of 39 Grand Slam titles across singles, doubles and mixed doubles, she founded the Women's Tennis Association and beat Bobby Riggs in the 1973 'Battle of the Sexes'.",
      answer: "Billie Jean King",
      wrong: ["Chris Evert", "Margaret Court", "Rosie Casals"],
      explanation: "Billie Jean King won 12 singles, 16 doubles and 11 mixed doubles Grand Slam titles, and campaigned for equal prize money.",
      sources: [wiki("Billie_Jean_King")],
    },
    teammates: {
      athletes: ["Walter Payton", "Mike Singletary"],
      answer: "Chicago Bears",
      wrong: ["Philadelphia Eagles", "Green Bay Packers", "Detroit Lions"],
      explanation: "Payton and Singletary won Super Bowl XX with the 1985 Chicago Bears, and both played their entire careers in Chicago.",
      sources: [wiki("1985_Chicago_Bears_season")],
    },
    replay: {
      clue: "With ten minutes left at Lake Placid in 1980, the U.S. captain fires a wrist shot past the Soviet goaltender for the go-ahead goal in what becomes the 'Miracle on Ice'.",
      answer: "Mike Eruzione",
      wrong: ["Jim Craig", "Mark Johnson", "Neal Broten"],
      explanation: "Mike Eruzione's goal made it 4–3, and Jim Craig held off the Soviets for the rest of the game. The U.S. then beat Finland for gold.",
      sources: [wiki("Miracle_on_Ice")],
    },
    timeline: {
      events: [
        ["Italy wins the World Cup in Spain", 1982],
        ["England wins the World Cup on home soil", 1966],
        ["Johan Cruyff's Netherlands reach the World Cup final", 1974],
        ["Pelé wins his first World Cup", 1958],
      ],
      sources: [wiki("1958_FIFA_World_Cup"), wiki("1966_FIFA_World_Cup"), wiki("1974_FIFA_World_Cup"), wiki("1982_FIFA_World_Cup")],
    },
    overtime: {
      prompt: "Which heavyweight champion retired in 1956 with a perfect 49–0 record?",
      answer: "Rocky Marciano",
      wrong: ["Joe Louis", "Larry Holmes", "Floyd Patterson"],
      explanation: "Rocky Marciano retired as champion without a loss or a draw. Larry Holmes reached 48–0 before losing to Michael Spinks in 1985.",
      sources: [wiki("Rocky_Marciano")],
    },
  }),

  puzzle(15, {
    scout: {
      clue: "A defensive center from the University of San Francisco, he won 11 NBA championships in 13 seasons with one team, the last two as its player-coach.",
      answer: "Bill Russell",
      wrong: ["Wilt Chamberlain", "Bob Cousy", "Elgin Baylor"],
      explanation: "Bill Russell won 11 titles with the Celtics between 1957 and 1969. The NBA Finals MVP award is named after him.",
      sources: [wiki("Bill_Russell")],
    },
    teammates: {
      athletes: ["Brett Favre", "Reggie White"],
      answer: "Green Bay Packers",
      wrong: ["Philadelphia Eagles", "Minnesota Vikings", "New York Jets"],
      explanation: "Favre and White won Super Bowl XXXI together with the Green Bay Packers. White came from Philadelphia; Favre later played for the Jets and Vikings.",
      sources: [wiki("Green_Bay_Packers")],
    },
    replay: {
      clue: "Trailing Kentucky by one with 2.1 seconds left in overtime of the 1992 East Regional final, Duke's big man catches a full-court inbound pass, dribbles once, turns and hits the winning jumper.",
      answer: "Christian Laettner",
      wrong: ["Bobby Hurley", "Thomas Hill", "Brian Davis"],
      explanation: "Christian Laettner took Grant Hill's pass and finished the game a perfect 10 for 10 from the field. Duke went on to win its second straight title.",
      sources: [wiki("Christian_Laettner")],
    },
    timeline: {
      events: [
        ["The WNBA plays its first season", 1997],
        ["Kathrine Switzer runs the Boston Marathon", 1967],
        ["The first Women's World Cup", 1991],
        ["Title IX is signed into law", 1972],
      ],
      sources: [wiki("Kathrine_Switzer"), wiki("Title_IX"), wiki("1991_FIFA_Women's_World_Cup"), wiki("1997_WNBA_season")],
    },
    overtime: {
      prompt: "Who is the NFL's career rushing yards leader?",
      answer: "Emmitt Smith",
      wrong: ["Walter Payton", "Barry Sanders", "Frank Gore"],
      explanation: "Emmitt Smith ran for 18,355 yards, passing Walter Payton's record in 2002.",
      sources: [wiki("Emmitt_Smith")],
    },
  }),

  puzzle(16, {
    scout: {
      clue: "At the 1976 Montreal Olympics, this 14-year-old Romanian gymnast earned a score the scoreboard could only display as 1.00.",
      answer: "Nadia Comăneci",
      wrong: ["Olga Korbut", "Mary Lou Retton", "Ecaterina Szabo"],
      explanation: "Nadia Comăneci scored the first perfect 10 in Olympic gymnastics, on the uneven bars, and went on to earn six more in Montreal.",
      sources: [wiki("Nadia_Comăneci")],
    },
    teammates: {
      athletes: ["Troy Aikman", "Emmitt Smith"],
      answer: "Dallas Cowboys",
      wrong: ["Arizona Cardinals", "Houston Oilers", "New York Giants"],
      explanation: "Aikman and Smith won three Super Bowls in four seasons with the Dallas Cowboys. Smith finished his career in Arizona; Aikman played only for Dallas.",
      sources: [wiki("Dallas_Cowboys")],
    },
    replay: {
      clue: "Leading the 1999 Open Championship at Carnoustie by three strokes on the final hole, a Frenchman rolls up his trousers and wades into the Barry Burn, then makes triple bogey and loses in a playoff.",
      answer: "Jean van de Velde",
      wrong: ["Paul Lawrie", "Justin Leonard", "Thomas Levet"],
      explanation: "Jean van de Velde needed only a double bogey to win. Paul Lawrie beat him and Justin Leonard in the four-hole playoff.",
      sources: [wiki("Jean_van_de_Velde_(golfer)")],
    },
    timeline: {
      events: [
        ["Michael Jordan's 'flu game' in the NBA Finals", 1997],
        ["Michael Jordan retires for the first time", 1993],
        ["The Chicago Bulls draft Michael Jordan", 1984],
        ["Michael Jordan wins his first NBA title", 1991],
      ],
      sources: [wiki("Michael_Jordan")],
    },
    overtime: {
      prompt: "In April 2025, who broke Wayne Gretzky's NHL record of 894 career goals?",
      answer: "Alex Ovechkin",
      wrong: ["Sidney Crosby", "Jaromír Jágr", "Gordie Howe"],
      explanation: "Alex Ovechkin scored his 895th goal against the New York Islanders on April 6, 2025, in his 20th season with Washington.",
      sources: [wiki("Alex_Ovechkin")],
    },
  }),

  puzzle(17, {
    scout: {
      clue: "A Sac and Fox athlete who won the pentathlon and decathlon at the 1912 Stockholm Olympics, he was stripped of the medals over semi-pro baseball pay, then played in both MLB and the NFL.",
      answer: "Jim Thorpe",
      wrong: ["Bob Mathias", "Red Grange", "Glenn Morris"],
      explanation: "Jim Thorpe's Olympic titles were restored in 1982, and in 2022 the IOC recognized him as the sole champion of both events.",
      sources: [wiki("Jim_Thorpe")],
    },
    teammates: {
      athletes: ["Terry Bradshaw", "Franco Harris"],
      answer: "Pittsburgh Steelers",
      wrong: ["Seattle Seahawks", "Cleveland Browns", "Baltimore Colts"],
      explanation: "Bradshaw and Harris won four Super Bowls together with the Pittsburgh Steelers in the 1970s. Harris played one final season in Seattle.",
      sources: [wiki("Pittsburgh_Steelers")],
    },
    replay: {
      clue: "In the ninth inning of the deciding 1951 playoff game, a New York Giants hitter takes Ralph Branca deep to win the pennant, as the radio announcer screams 'The Giants win the pennant!'",
      answer: "Bobby Thomson",
      wrong: ["Willie Mays", "Monte Irvin", "Alvin Dark"],
      explanation: "Bobby Thomson's three-run homer, the 'Shot Heard 'Round the World', beat the Brooklyn Dodgers. A rookie Willie Mays was on deck.",
      sources: [wiki("Shot_Heard_'Round_the_World_(baseball)")],
    },
    timeline: {
      events: [
        ["Lewis Hamilton wins his first F1 title", 2008],
        ["Ayrton Senna wins his first F1 title", 1988],
        ["Dale Earnhardt is killed at the Daytona 500", 2001],
        ["Michael Schumacher wins his first F1 title", 1994],
      ],
      sources: [wiki("Ayrton_Senna"), wiki("Michael_Schumacher"), wiki("Dale_Earnhardt"), wiki("Lewis_Hamilton")],
    },
    overtime: {
      prompt: "Which cyclist was stripped of seven Tour de France titles in 2012 after a doping investigation?",
      answer: "Lance Armstrong",
      wrong: ["Miguel Induráin", "Floyd Landis", "Greg LeMond"],
      explanation: "Lance Armstrong lost his 1999–2005 titles after a U.S. Anti-Doping Agency report, and the wins were left vacant. Floyd Landis was stripped of the 2006 title.",
      sources: [wiki("Lance_Armstrong_doping_case")],
    },
  }),

  puzzle(18, {
    scout: {
      clue: "A British driver who won his first Formula One title with McLaren in 2008, he added six more with Mercedes and moved to Ferrari for the 2025 season.",
      answer: "Lewis Hamilton",
      wrong: ["Jenson Button", "Sebastian Vettel", "Nico Rosberg"],
      explanation: "Lewis Hamilton's seven titles tie Michael Schumacher's record, and he holds the record for most Grand Prix wins.",
      sources: [wiki("Lewis_Hamilton")],
    },
    teammates: {
      athletes: ["Thierry Henry", "Dennis Bergkamp"],
      answer: "Arsenal",
      wrong: ["Ajax", "Barcelona", "Inter Milan"],
      explanation: "Henry and Bergkamp were teammates at Arsenal, including the unbeaten 'Invincibles' season of 2003–04. Bergkamp came from Ajax and Inter; Henry later joined Barcelona.",
      sources: [wiki("Arsenal_F.C.")],
    },
    replay: {
      clue: "Leading off the 12th inning of Game 6 of the 1975 World Series, a Red Sox catcher lofts a long fly down the left-field line and waves his arms, urging it to stay fair. It hits the foul pole.",
      answer: "Carlton Fisk",
      wrong: ["Carl Yastrzemski", "Fred Lynn", "Bernie Carbo"],
      explanation: "Carlton Fisk's walk-off homer beat Cincinnati and forced Game 7, which the Reds won.",
      sources: [wiki("Carlton_Fisk")],
    },
    timeline: {
      events: [
        ["UConn's women finish a 35–0 season", 1995],
        ["Villanova upsets Georgetown in the NCAA final", 1985],
        ["Texas Western's all-Black starting five wins the NCAA title", 1966],
        ["NC State's buzzer-beater wins the NCAA final", 1983],
      ],
      sources: [wiki("1966_NCAA_University_Division_basketball_championship_game"), wiki("1983_NCAA_Division_I_basketball_championship_game"), wiki("1985_NCAA_Division_I_basketball_championship_game"), wiki("1994–95_UConn_Huskies_women's_basketball_team")],
    },
    overtime: {
      prompt: "Which team won the 2016 World Series, ending a championship drought that dated back to 1908?",
      answer: "Chicago Cubs",
      wrong: ["Cleveland Indians", "Chicago White Sox", "Boston Red Sox"],
      explanation: "The Chicago Cubs beat Cleveland 8–7 in 10 innings of Game 7, after trailing the Series three games to one.",
      sources: [wiki("2016_World_Series")],
    },
  }),

  puzzle(19, {
    scout: {
      clue: "After nine seasons in Japan, this outfielder joined the Seattle Mariners in 2001 and won both Rookie of the Year and MVP, then set MLB's single-season hit record with 262 in 2004.",
      answer: "Ichiro Suzuki",
      wrong: ["Hideki Matsui", "Shohei Ohtani", "Kosuke Fukudome"],
      explanation: "Ichiro Suzuki collected 3,089 MLB hits after 1,278 in Japan, and was elected to the Hall of Fame in 2025.",
      sources: [wiki("Ichiro_Suzuki")],
    },
    teammates: {
      athletes: ["Steven Gerrard", "Jamie Carragher"],
      answer: "Liverpool",
      wrong: ["LA Galaxy", "Everton", "Chelsea"],
      explanation: "Gerrard and Carragher came through Liverpool's academy together and won the 2005 Champions League. Gerrard ended his playing career at LA Galaxy; Carragher never left Liverpool.",
      sources: [wiki("Liverpool_F.C.")],
    },
    replay: {
      clue: "In the 3,000-meter final at the 1984 Los Angeles Olympics, the American favorite tangles with barefoot runner Zola Budd, falls onto the infield, and is carried off in tears.",
      answer: "Mary Decker",
      wrong: ["Joan Benoit", "Maricica Puică", "Wendy Sly"],
      explanation: "Mary Decker blamed Budd for the collision, though officials cleared her. Maricica Puică of Romania won the race.",
      sources: [wiki("Mary_Decker")],
    },
    timeline: {
      events: [
        ["Don Larsen throws a perfect game in the World Series", 1956],
        ["Ted Williams bats .406", 1941],
        ["The 'Black Sox' throw the World Series", 1919],
        ["The Baseball Hall of Fame opens in Cooperstown", 1939],
      ],
      sources: [wiki("Black_Sox_Scandal"), wiki("National_Baseball_Hall_of_Fame_and_Museum"), wiki("Ted_Williams"), wiki("Don_Larsen's_perfect_game")],
    },
    overtime: {
      prompt: "Who holds the NBA record for career assists?",
      answer: "John Stockton",
      wrong: ["Chris Paul", "Jason Kidd", "Magic Johnson"],
      explanation: "John Stockton retired in 2003 with 15,806 assists, all for the Utah Jazz. He also holds the career steals record.",
      sources: [wiki("John_Stockton")],
    },
  }),

  puzzle(20, {
    scout: {
      clue: "A left-handed serve-and-volleyer who defected from Czechoslovakia in 1975, she won a record nine Wimbledon singles titles.",
      answer: "Martina Navratilova",
      wrong: ["Chris Evert", "Hana Mandlíková", "Pam Shriver"],
      explanation: "Martina Navratilova won 18 Grand Slam singles titles, nine of them at Wimbledon, the last in 1990.",
      sources: [wiki("Martina_Navratilova")],
    },
    teammates: {
      athletes: ["Zinedine Zidane", "Ronaldo Nazário"],
      answer: "Real Madrid",
      wrong: ["Juventus", "Barcelona", "Inter Milan"],
      explanation: "Zidane and Ronaldo were both 'Galácticos' at Real Madrid, winning La Liga in 2003. Zidane came from Juventus; Ronaldo had played for Barcelona and Inter.",
      sources: [wiki("Real_Madrid_CF")],
    },
    replay: {
      clue: "After winning the 200 meters at the 1968 Mexico City Olympics in world-record time, an American sprinter stands shoeless on the podium and raises a black-gloved fist beside his bronze-medal teammate.",
      answer: "Tommie Smith",
      wrong: ["John Carlos", "Lee Evans", "Jim Hines"],
      explanation: "Tommie Smith and bronze medalist John Carlos made the human-rights salute, and Australia's Peter Norman, the silver medalist, wore a badge in support.",
      sources: [wiki("1968_Olympics_Black_Power_salute")],
    },
    timeline: {
      events: [
        ["The Patriots' 28–3 Super Bowl comeback", 2017],
        ["John Elway wins his first Super Bowl", 1998],
        ["The '85 Bears win Super Bowl XX", 1986],
        ["Malcolm Butler's goal-line interception wins the Super Bowl", 2015],
      ],
      sources: [wiki("Super_Bowl_XX"), wiki("Super_Bowl_XXXII"), wiki("Super_Bowl_XLIX"), wiki("Super_Bowl_LI")],
    },
    overtime: {
      prompt: "Which country has won the most Olympic gold medals in men's ice hockey?",
      answer: "Canada",
      wrong: ["Soviet Union", "United States", "Sweden"],
      explanation: "Canada had won nine men's hockey golds through the 2022 Games. The Soviet Union won seven, plus one more as the Unified Team in 1992.",
      sources: [wiki("Ice_hockey_at_the_Olympic_Games")],
    },
  }),
];
