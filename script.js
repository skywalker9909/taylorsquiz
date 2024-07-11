const quizData = [
    {
        id: "q1",
        question: "Which best describes your relationship status?",
        options: ["Single", "In a Relationship", "Complicated"],
        next: ["q2", "q3", "q4"]
    },
    {
        id: "q2",
        question: "Which best describes your dating life?",
        options: ["I'm going through a breakup", "I want a partner...", "I'm happily single XD"],
        next: ["q5", "q24", "q29"]
    },
    {
        id: "q3",
        question: "Are you happy in your relationship?",
        options: ["Yes", "No"],
        next: ["q42", "q43"]
    },
    {
        id: "q4",
        question: "Which best defines your situation?",
        options: ["I'm in an on/off again relationship", "I'm in a situationship... / not official relationship"],
        next: ["q66","q67"]
    },
    {
        id: "q5",
        question: "Which best describes the breakup?",
        options: ["It was one-sided","There was an age gap / We weren't in the same place in life", "Our family / friends did not approve", "Someone cheated","We both agreed it wasn't right" ],
        next: ["q6","q9","q18","q19","q23"]
    },
    {
        id: "q6",
        question: "Who led the breakup?",
        options: ["Me", "Not me"],
        next: ["q7","q12"]
    },
    {
        id: "q7",
        question: "Are you happy that the breakup happened?",
        options: ["Yes", "No, but it had to be done", "No, I really regret it"],
        next:["q8","q41","SS5"]
    },    {
        id: "q8",
        question: "Pick a Taylor Swift Album",
        options: ["Reputation","Midnights","Lover"],
        next: ["SS62","SS1","SS8" ]
    },    {
        id: "q9",
        question: "Who was older?",
        options: ["Me", "Them"],
        next: ["q10","q11"],
    },    {
        id: "q10",
        question: "Who initiated the break-up?",
        options: ["Me","Them"],
        next: ["SS9", "SS10"],
    },    {
        id: "q11",
        question: "Who initiated the break-up?",
        options: ["Me","Them"],
        next: ["SS11","SS12"],
    },    {
        id: "q12",
        question: "that sucks... which emotion do you resonate to the most?",
        options: ["Anger","Sadness","Betrayal","Relief"],
        next: ["q13","q14","q15","SS8"],
    },    {
        id: "q13",
        question: "Do you want an upbeat or low-tempo song?",
        options: ["Slow","High-tempo"],
        next: ["SS6,SS7"]
    },    {
        id: "q14",
        question: "Do you want an upbeat or low-tempo song?",
        options: ["Slow","High-tempo"],
        next: ["q16","q17"],
    },    {
        id: "q15",
        question: "Do you want an upbeat or low-tempo song?",
        options: ["Slow","High-tempo"],
        next: ["SS73","SS74"],
    },    {
        id: "q16",
        question: "Pick a Taylor Swift album",
        options: ["Fearless","Speak Now","Red","Folklore","The Tortured Poets Department"],
        next: ["SS64", "SS65", "SS66", "SS67", "SS68"],
    },    {
        id: "q17",
        question: "Pick a Taylor Swift album",
        options: ["Fearless","Speak Now","Lover","1989"],
        next: ["SS69","SS70","SS71","SS10"],
    },    {
        id: "q18",
        question: "Which best describes the situation?",
        options: ["My partner was a bad influence","My friends/family could tell the relationship was unhealthy","They don't support my sexuality"],
        next: ["SS13","SS14","SS79"],
    },    {
        id: "q19",
        question: "Who cheated?",
        options: ["They did","I did..."],
        next: [" "],
    },    {
        id: "q20",
        question: "Do you want an upbeat or low-tempo song?",
        options: ["Slow","High-tempo"],
        next: ["SS108","q22"],
    },    {
        id: "q21",
        question: "Do you want an upbeat or low-tempo song?",
        options: ["Slow","High-tempo"],
        next: ["SS19","SS20"],
    },    {
        id: "q22",
        question: "Which emotion do you resonate to the most?",
        options: ["Anger","Sadness","Betrayal"],
        next: ["SS16","SS17","SS18"],
    },    {
        id: "q23",
        question: "Are you interested in anyone new?",
        options: ["Yes...","Not yet"],
        next: ["SS29","SS28"],
    },    {
        id: "q24",
        question: "How would you describe your current situation",
        options: ["I want a partner but I'm not actively looking","I want a partner AND am actively looking", "I have a crush on someone haha"],
        next: ["q25","q28","q39"],
    },    {
        id: "q25",
        question: "Which statement do you relate to most?",
        options: ["I'm working hard on myself","I'm stil reeling from heartbreak","I haven't had luck wih love in the past"],
        next: ["SS30","q26","q27"],
    },    {
        id: "q26",
        question: "Do you want an upbeat or low-tempo song?",
        options: ["Slow","High-tempo"],
        next: ["SS31","SS32"],
    },    {
        id: "q27",
        question: "How would you desribe your outlook on love?",
        options: ["I feel hopeless :(","I know it will happen for me eventually", "I'm so tired of failing at relationships "],
        next: ["SS33","SS34","SS35"],
    },    {
        id: "q28",
        question: "Pick a Taylor Swift album",
        options: ["Fearless","1989","Red"],
        next: [" "],
    },    {
        id: "q29",
        question: "Who is your main support system?",
        options: ["Friends","Family","Myself"],
        next: ["q30","q31","q32"],
    },    {
        id: "q30",
        question: "What is your ideal place to live?",
        options: ["A big city","By the beach","Countryside"],
        next: ["q33","q34","q35","q36"],
    },    {
        id: "q31",
        question: "Which parent are you closer to?",
        options: ["Mom","Dad","Both, I can't pick"],
        next: ["SS36","SS37","SS38","SS36"],
    },    {
        id: "q32",
        question: "Do you wish you had a bigger support system?",
        options: ["I know I can trust myself","Yes I do"],
        next: ["SS39","q37"],
    },    {
        id: "q33",
        question: "Do you want an upbeat or low-tempo song?",
        options: ["Slow","High-tempo"],
        next: ["SS26","SS27"],
    },    {
        id: "q34",
        question: "Do you want an upbeat or low-tempo song?",
        options: ["Slow","High-tempo"],
        next: ["SS75","SS28"],
    },    {
        id: "q35",
        question: "Do you want an upbeat or low-tempo song?",
        options: ["Slow","High-tempo"],
        next: ["SS100","SS101"],
    },    {
        id: "q36",
        question: "Do you want an upbeat or low-tempo song?",
        options: ["Slow","High-tempo"],
        next: ["SS102","SS103"]
    },    {
        id: "q37",
        question: "Which do you relate to?",
        options: ["I feel kinda lonely in life","I have trust issues","I don't put myself out there enough"],
        next: ["SS104","q38","SS107"],
    },    {
        id: "q38",
        question: "Do you want an upbeat or low-tempo song?",
        options: ["Slow","High-tempo"],
        next: ["SS105","SS106"],
    },    {
        id: "q39",
        question: "Are you friends with this person?",
        options: ["Yes, good friends","We've barely interacted"],
        next: ["q40","SS21"],
    },    {
        id: "q40",
        question: "Do you think the crush is reciprocated?",
        options: ["Yes","No because they are taken","no:(","I don't know.."],
        next: ["SS23","SS24","SS25",,"SS22"],
    },    {
        id: "q41",
        question: "Pick a Taylor Swift album",
        options: ["The Tortured Poets Department","Evermore","Midnights"],
        next: ["SS2","SS3","SS4"],
    },    {
        id: "q42",
        question: "How long have you guys been together?",
        options: ["less than 6 months","btw 6 months and 3 years","more than 3 years"],
        next: ["q45","q46","q47"],
    },    {
        id: "q43",
        question: "Which best describes the situation?",
        options: ["I'm interested in someone else","The love is gone","It's a toxic relationship"],
        next: ["SS40","SS9","q44"],
    },    {
        id: "q44",
        question: "That sucks :( Which best describes the situation?",
        options: ["My partner takes me for granted", "I know I don’t treat my partner right","My partner stopped trying", "We both have wandering eyes..."],
        next: ["SS43","SS67","SS44","SS45"],
    },    {
        id: "q45",
        question: "Where did you guys meet?",
        options: ["School/College","Neighbours/Family Friends","Work","Bar/Club","Dating App","Others"],
        next: ["SS56","SS90","SS83","SS93","SS60","SS61"],
    },    {
        id: "q46",
        question: "Where did you guys meet?",
        options: ["School/College","Neighbours/Family Friends","Work","Bar/Club","Dating App","Others"],
        next: ["SS53","SS54","SS55","SS56","SS57","SS58"],
    },    {
        id: "q47",
        question: "Where did you guys meet?",
        options: ["School/College","Neighbours/Family Friends","Work","Bar/Club","Dating App","Others"],
        next: ["q48","q51","q54","q57","q60","q63"],
    },    {
        id: "q48",
        question: "Do your friends & family support your relationship?",
        options: ["Yes","No","They don't know about us..."],
        next: ["SS77","q49","q50"],
    },    {
        id: "q49",
        question: "What is the main reason for this?",
        options: ["They think my partner is a bad influence","They don't support any relationship I'm in", "They don't support my sexuality"],
        next: ["SS78","SS79","SS80"],
    },    {
        id: "q50",
        question: "What is the main reason for this?",
        options: ["It's too soon","It's taboo","I want to keep it private"],
        next: ["SS61","SS81","SS82"],
    },    {
        id: "q51",
        question: "Do your friends & family support your relationship?",
        options: ["Yes","No","They don't know about us..."],
        next: ["SS54","q52","q53"],
    },    {
        id: "q52",
        question: "What is the main reason for this?",
        options: ["They think my partner is a bad influence","They don't support any relationship I'm in", "They don't support my sexuality"],
        next: ["SS81","SS79","SS90"],
    },    {
        id: "q53",
        question: "What is the main reason for this?",
        options: ["It's too soon","It's taboo","I want to keep it private"],
        next: ["SS91","SS90","SS82"],
    },    {
        id: "q54",
        question: "Do your friends & family support your relationship?",
        options: ["Yes","No","They don't know about us..."],
        next: ["SS83","q55","q56"]
    },    {
        id: "q55",
        question: "What is the main reason for this?",
        options: ["They think my partner is a bad influence","They don't support any relationship I'm in", "They don't support my sexuality"],
        next: ["SS84","SS79","SS85"],
    },    {
        id: "q56",
        question: "What is the main reason for this?",
        options: ["It's too soon","It's taboo","I want to keep it private"],
        next: ["SS60","SS87","SS82"],
    },    {
        id: "q57",
        question: "Do your friends & family support your relationship?",
        options: ["Yes","No","They don't know about us..."],
        next: ["SS88","q58","q59"]
    },    {
        id: "q58",
        question: "What is the main reason for this?",
        options: ["They think my partner is a bad influence","They don't support any relationship I'm in", "They don't support my sexuality"],
        next: ["SS91","SS79","SS92"],
    },    {
        id: "q59",
        question: "What is the main reason for this?",
        options: ["It's too soon","It's taboo","I want to keep it private"],
        next: ["SS93","SS87","SS94"],
    },    {
        id: "q60",
        question: "Do your friends & family support your relationship?",
        options: ["Yes","No","They don't know about us..."],
        next: ["SS95","q61","q62"]
    },    {
        id: "q61",
        question: "What is the main reason for this?",
        options: ["They think my partner is a bad influence","They don't support any relationship I'm in", "They don't support my sexuality"],
        next: ["SS80","SS79","SS91"],
    },    {
        id: "q62",
        question: "What is the main reason for this?",
        options: ["It's too soon","It's taboo","I want to keep it private"],
        next: ["SS96","SS97","SS98"],
    },    {
        id: "q63",
        question: "Do your friends & family support your relationship?",
        options: ["Yes","No","They don't know about us..."],
        next: ["SS99","q64","q65"]
    },    {
        id: "q64",
        question: "What is the main reason for this?",
        options: ["They think my partner is a bad influence","They don't support any relationship I'm in", "They don't support my sexuality"],
        next: ["SS81","SS79","SS80"],
    },    {
        id: "q65",
        question: "What is the main reason for this?",
        options: ["It's too soon","It's taboo","I want to keep it private"],
        next: ["SS93","SS90","SS82"],
    },    {
        id: "q66",
        question: "Do you want an upbeat or low-tempo song?",
        options: ["Slow","High-tempo"],
        next: ["SS46","SS47"],
    },    {
        id: "q67",
        question: "Are both of you content being not official?",
        options: ["Yes","No, I want more","No, they want more"],
        next: ["SS48","q68","SS8"],
    },    {
        id: "q68",
        question: "Pick a Taylor Swift album",
        options: ["Speak Now","Midnights","The Tortured Poets Department"],
        next: ["SS50","SS51","SS52"],
    },
];

// Generate song entries from 1 to 105
for (let i = 1; i <= 105; i++) {
    quizData.push({
        id: `SS${i}`,
        question: "Are you ready?",
        options: ["yes..."],
        next: [`S${i}`]
    });
}

const songDetails = {
    "S1": {
        title: "Bejeweled",
        description: "This confidence-boosting song is perfect for you! You may have been in a relationship that dulled your shine, but now you remember, when you walk into a room, you make the whole place shimmer.",
        image: "path_to_song1_image.jpg"
    },
    "S2": {
        title: "The Bolter",
        description: "You tend to run away from situations you don’t like. If something gets too deep too quick, you’re the first one out. To you, leaving feels like breathing",
        image: "path_to_song2_image.jpg"
    },
    "S3": {
        title: "happiness",
        description: "Your last relationship was meaningful, truly, but you had to be the brave one and end it. It wasn’t easy, it might never be, but you can appreciate the love you shared and admit that it wasn’t right.",
        image: "path_to_song3_image.jpg"
    },
    "S4": {
        title: "You’re Losing Me (From The Vault)",
        description: "Your last breakup was tough. You might’ve thought they were the one, but at the end of the day, you need to be chosen back",
        image: "path_to_song4_image.jpg"
    },
    "S5": {
        title: "Back to December",
        description: "You’ve found yourself reminiscing about that past relationship, the one that got away. Breaking up felt right at the time, but now you’re looking back with a heart full of regret. You miss the moments you shared and wish you could turn back the clock to December, make things right, and hold on a little tighter.",
        image: "path_to_song5_image.jpg"
    },
    "S6": {
        title: "You love screaming your lungs out to this bridge because that’s how much you relate! You may forget them, but you’ll never forgive.",
        description: "Description for Song 6.",
        image: "path_to_song6_image.jpg"
    },
    "S7": {
        title: "Mr. Perfectly Fine",
        description: "You are so done with Mr. Perfectly Fine. Turns out, everything doesn’t revolve around him, and when he finally realizes what he’s done, he will indeed be Mr. Too Late!",
        image: "path_to_song7_image.jpg"
    },
    "S8": {
        title: "I forgot that you existed",
        description: "You might’ve been sad about your recent breakup for a few days, but then, you forgot that they existed. After all, indifference is the best revenge!",
        image: "path_to_song8_image.jpg"
    },
    "S9": {
        title: "So Long, London",
        description: "Had a good run, but they’re not the one. It was time to say goodbye to this relationship, and that’s okay.",
        image: "path_to_song9_image.jpg"
    },
    "S10": {
        title: "All you had to do was stay",
        description: "Don’t worry, the real ones always stay. You shouldn’t have to beg them to.",
        image: "path_to_song10_image.jpg"
    },
    "S11": {
        title: "Would’ve, Could’ve, Should’ve",
        description: "You regret them all the time. ALL THE TIME. We’ve all had relationships we now regret. Don’t worry, it’s past you now.",
        image: "path_to_song11_image.jpg"
    },
    "S12": {
        title: "Dear John",
        description: "Nothing hurts like a 7-minute song about the devil personified. You can relate, and this listening experience will be so cathartic for you.",
        image: "path_to_song12_image.jpg"
    },
    "S13": {
        title: "I Can Fix Him (no really i can)",
        description: "It’s always fun to date the bad boy until you realize they’re gone beyond repair. Sometimes your family and friends know best.",
        image: "path_to_song13_image.jpg"
    },
    "S14": {
        title: "imgonnagetyouback",
        description: "You’re not quite sure how you’re going to get this particular ex back. I say, hit them where it hurts, but sometimes, getting them back in the literal sense is part of the process",
        image: "path_to_song14_image.jpg"
    },
    "S16": {
        title: "Better Than Revenge",
        description: "What was it? She was a moth to the flame, you were a mattress? Regardless, revenge is a dish best served cold, and you’re gonna get some tonight.",
        image: "path_to_song16_image.jpg"
    },
    "S17": {
        title: "I Knew You Were Trouble",
        description: "Sometimes trouble is exciting. Sometimes it’s gutwrenching. Somehow, it was both for you.",
        image: "path_to_song17_image.jpg"
    },
    "S18": {
        title: "Babe (From The Vault)",
        description: "You can’t stop picturing it in your head, and I can’t blame you. It’s a tough pill to swallow, but ultimately, they didn’t honor the promises, and this is the last time you’ll call them babe.",
        image: "path_to_song18_image.jpg"
    },
    "S19": {
        title: "illicit affairs",
        description: "It always starts out fun, sneaking in parking lots and making glances across the room, but it always ends up in lies. You can always make up a new language, just for yourself.",
        image: "path_to_song19_image.jpg"
    },
    "S20": {
        title: "High Infidelity",
        description: "Do I want to know where you were April 29th? Probably not, but you’re going to tell me anyways, right?",
        image: "path_to_song20_image.jpg"
    },
    "S21": {
        title: "Gorgeous",
        description: "Crushes from afar, we’ve all had them. I know the prospect of speaking to someone gorgeous is always a little scary, but what’s the worst that can happen? You go home to your cats?.",
        image: "path_to_song21_image.jpg"
    },
    "S22": {
        title: "Enchanted",
        description: "The ultimate crush song. I know you’re blushing all the way home, and every time your eyes meet, you feel a little spark. Don’t you let it go.",
        image: "path_to_song22_image.jpg"
    },
    "S23": {
        title: "Glitch",
        description: "You were supposed to be just friends, but I think there’s been a glitch. A slight malfunction, if you may. And that’s romance.",
        image: "path_to_song23_image.jpg"
    },
    "S24": {
        title: "You Belong With Me",
        description: "I know it’s hard to see someone you like with another person, but it’ll happen if you’re meant to be. Just know, sometimes the ones on the bleachers are better than those on the team.",
        image: "path_to_song24_image.jpg"
    },
    "S25": {
        title: "Hey Stephen",
        description: "You get bonus points if their name is actually Stephen. This cutesy fun song is perfect for you and how you feel right now. Always a little nervous and awestruck by your crush.",
        image: "path_to_song25_image.jpg"
    },
    "S26": {
        title: "State of Grace (acoustic version)",
        description: "This is a worthwhile fight, and you give it your all every day. You have a unique love for life that hasn’t even been tainted. Don’t lose that.",
        image: "path_to_song26_image.jpg"
    },
     "S27": {
        title: "Welcome to New York",
        description: "You are absolutely ready to take on the world with your friends. And rightly so, it’s been waiting for you!",
        image: "path_to_song27_image.jpg"
    },
    "S28": {
        title: "Florida!!!",
        description: "It really is one hell of a drug. The only one you might need right now.",
        image: "path_to_song28_image.jpg"
    },
    "S29": {
        title: "Fresh Out The Slammer",
        description: "After countless summers taking cover, you might just find a new home. It’s always nice to have someone on speeddial.",
        image: "path_to_song29_image.jpg"
    },
    "S30": {
        title: "The Man",
        description: "You’re on your hustle right now. Working on yourself, and that counts for so much more than people give you credit for.",
        image: "path_to_song30_image.jpg"
    },
    "S31": {
        title: "the 1",
        description: "It would’ve been fun, indeed. But they weren’t the 1. Don’t dig that grave up another time.",
        image: "path_to_song31_image.jpg"
    },
    "S32": {
        title: "Cornelia Street",
        description: "I know it’s hard right now. But I promise, one day you’ll feel strong enough to walk Cornelia Street again.",
        image: "path_to_song32_image.jpg"
    },
    "S33": {
        title: "The Prophecy",
        description: "Love is exhausting, but it’s also beautiful. You have NOT sealed your fate. Someone, somewhere, wants your company. You just haven’t met them yet.",
        image: "path_to_song33_image.jpg"
    },
    "S34": {
        title: "long story short",
        description: "You know one day you’re going to find someone, and walk hand in hand with them for the rest of time. It might just take kissing some frogs to find your prince.",
        image: "path_to_song34_image.jpg"
    },
    "S35": {
        title: "This is why we can’t have nice things",
        description: "It might just be time to swim in a champagne sea. I’M KIDDING! Don’t worry, you’ll eventually find someone who knows how to take care of nice things.",
        image: "path_to_song35_image.jpg"
    },
    "S36": {
        title: "The Best Day",
        description: "Your family means everything to you. They always have your back, and you will always have theirs. Whether its laughing in the car with your mom or watching a game with your dad, cherish every moment.",
        image: "path_to_song36_image.jpg"
    },
    "S37": {
        title: "Never Grow Up",
        description: "I know it feels like growing up is the dream, but trust me, it’s the other way around. Cherish your youth, your family, and every little moment. Just try to never grow up.",
        image: "path_to_song37_image.jpg"
    },
    "S38": {
        title: "seven",
        description: "Family is complicated, but you still love each other through it. Sometimes, just having someone is enough and you may not know it until it’s too late.",
        image: "path_to_song38_image.jpg"
    },
    "S39": {
        title: "You’re on your own, kid",
        description: "The person you spend most of your life with is yourself. You can face this, so take the moment and taste it.",
        image: "path_to_song39_image.jpg"
    },
    "S40": {
        title: "Guilty as Sin",
        description: "As they say, there’s no such thing as bad thoughts, only actions talk. So, I guess it depends whether or not you intend to act on this longing",
        image: "path_to_song40_image.jpg"
    },
    "S43": {
        title: "tolerate it",
        description: "You give your all to your relationship, and somehow, you get pennies in return. You deserve someone who deeply cherishes your love, not someone who simply tolerates it. It’s time to take the dagger out.",
        image: "path_to_song43_image.jpg"
    },
    "S44": {
        title: "Renegade",
        description: "They always seem to have an excuse. The baggage, or the anxiety, or something else. It’s exhausting, to always feel like you’re the only one who cares.",
        image: "path_to_song44_image.jpg"
    },
    "S45": {
        title: "Is It Over Now?",
        description: "You are drawn to each other, endlessly, but both of you have the same nasty habit. Was it over then? And is it over now? ",
        image: "path_to_song45_image.jpg"
    },
    "S46": {
        title: "’tis the damn season",
        description: "Somehow, every time you see each other, you end up in the same place. It’s like you’re on two opposite ends of a magnet",
        image: "path_to_song46_image.jpg"
    },
    "S47": {
        title: "Style",
        description: "You are just drawn to each other. No matter the distance, the time, or the circumstances, it’s like you’re on two opposite ends of a magnet. Plus, you never go out of style.",
        image: "path_to_song47_image.jpg"
    },
    "S48": {
        title: "So It Goes…",
        description: "They did a number on you, but who’s counting? You’re enjoying your situation right now, reveling in it, and you have no plans on stopping.",
        image: "path_to_song48_image.jpg"
    },
    "S50": {
        title: "Foolish One (From The Vault",
        description: "Stop checking your mailbox for confessions of love. Someone always ends up hurt in a situationship, just make sure it isn’t you.",
        image: "path_to_song50_image.jpg"
    },
    "S51": {
        title: "Maroon",
        description: "That’s a real lasting legacy, to leave.",
        image: "path_to_song51_image.jpg"
    },
    "S52": {
        title: "The Tortured Poets Department",
        description: "Everyone around you knows why you’re meant to be. Well, I’m not gonna say it! Just know you’re not Dylan Thomas or Patti Smith",
        image: "path_to_song52_image.jpg"
    },
    "S53": {
        title: "The Alchemy",
        description: "You get bonus points if they’re a football player! Who are you to fight the alchemy? This only happens once every few lifetimes",
        image: "path_to_song53_image.jpg"
    },
    "S54": {
        title: "Mary’s Song (Oh My My My)",
        description: "Everyone, from your parents to your friends, know you are meant to be. It’s truly a fairytale come to life, and you’re happier than ever.",
        image: "path_to_song54_image.jpg"
    },
    "S55": {
        title: "Daylight",
        description: "You don’t want to look at anything else now that you’ve seen them. You have found your sun, a person who is everything you could ever want and need, and it feels like you’ve finally woken up from a darkness.",
        image: "path_to_song55_image.jpg"
    },
    "S56": {
        title: "EndGame",
        description: "BIG REPUTATION! They’re all it: your first string, A-team, and of course, your end game.",
        image: "path_to_song56_image.jpg"
    },
    "S57": {
        title: "Sparks Fly",
        description: "You saw them on a screen the first time, and that’s when sparks flew. Now, they go off every time they smile. It’s wondrous.",
        image: "path_to_song57_image.jpg"
    },
    "S58": {
        title: "You are in Love",
        description: "You can hear it in the silence, silence, you can feel it on the way home. You have found your best friend and lover in one person. What more can someone ask for?",
        image: "path_to_song58_image.jpg"
    },
    "S60": {
        title: "Snow on the Beach",
        description: "You never saw this coming, but now you can’t imagine another day without your love. Just like snow on the beach.",
        image: "path_to_song60_image.jpg"
    },
  "S61": {
        title: "Call It What You Want",
        description: "You're deeply in love and choose to keep your relationship private and special. I’m certain you wear a chain with their initial around your neck, and who can blame you?",
        image: "path_to_song61_image.jpg"
    },
  "S62": {
        title: "Getaway Car",
        description: "You may have gotten into your most recent relationship as an escape from something else entirely. It was fun while it lasted, but ultimately, nothing good starts in a getaway car.",
        image: "path_to_song62_image.jpg"
    },
  "S64": {
        title: "Breathe (ft. Colbie Caillat)",
        description: "I know it feels like you can’t breathe without them, but you have to try. For all you know, the air may actually be fresher",
        image: "path_to_song64_image.jpg"
    },
  "S65": {
        title: "Last Kiss",
        description: "You really thought you found the one, but it turns out he’s just like Joe Jonas in 2008. Welp, there’s always July 10th!",
        image: "path_to_song65_image.jpg"
    },
  "S66": {
        title: "Sad Beautiful Tragic",
        description: "COULD YOU JUST TRY TO LISTEN??? Your relationship was full of distance, fighting, breakdowns, and crying. For all you know, this may be for the better.",
        image: "path_to_song66_image.jpg"
    },
  "S67": {
        title: "exile",
        description: "You gave so many signs. They gave so many signs. Maybe it just wasn’t meant to be.",
        image: "path_to_song67_image.jpg"
    },
  "S68": {
        title: "loml",
        description: "A true, wrenching, loss. But don’t let yourself be too hurt by another tortured Brit. It’s time to find your Travis Kelce.",
        image: "path_to_song68_image.jpg"
    },
  "S69": {
        title: "Forever and Always",
        description: "Sometimes, those three words mean much more to us than others. You can’t hang on to them forever",
        image: "path_to_song69_image.jpg"
    },
  "S70": {
        title: "Haunted",
        description: "You love rock Taylor, and although you’re heartbroken, nothing trumps rock Taylor.",
        image: "path_to_song70_image.jpg"
    },
  "S71": {
        title: "Death by a thousand cuts",
        description: "You were slighted by your last breakup, but trust me, the traffic lights aren’t the ones to ask why",
        image: "path_to_song71_image.jpg"
    },
  "S73": {
        title: "right where you left me",
        description: "I know you’re still at the restaurant, but it may just be time to move on. Or at least, move tables.",
        image: "path_to_song73_image.jpg"
    },
  "S74": {
        title: "Say Don’t Go (From The Vault)",
        description: "Two easy words, yet you never heard them. Somehow, people always seem to overpromise and underperform.",
        image: "path_to_song74_image.jpg"
    },
  "S75": {
        title: "the last great american dynasty",
        description: "The loudest woman this town has ever seen! You are having an absolutely marvelous time.",
        image: "path_to_song75_image.jpg"
      },
  "S77": {
        title: "Paper Rings",
        description: "Love is in the air, and every moment feels perfect. No issues, just pure happiness. Sometimes high school sweethearts work.",
        image: "path_to_song77_image.jpg"
    },
  "S78": {
        title: "Don’t Blame Me",
        description: "I know you live for the don’t blame me to LYWMMD transition on the eras tour. And it’s true, they can’t blame you, love made you crazy",
        image: "path_to_song78_image.jpg"
    },
  "S79": {
        title: "ivy",
        description: "Loving someone in secret is the worst, but if that’s what you have to do, so be it. Drink all the wine in the world if you have to.",
        image: "path_to_song79_image.jpg"
    },
  "S80": {
        title: "But Daddy I Love Him",
        description: "You would love to run around in an open field scream-singing this song. Screw all those judgemental freaks sanctimoniously performing soliloquies you’ll never see!",
        image: "path_to_song80_image.jpg"
    },
  "S81": {
        title: "Ours",
        description: "People throw rocks at things that shine. Don’t let them take it away from you, though. Your love is yours.",
        image: "path_to_song81_image.jpg"
    },
  "S82": {
        title: "Paris",
        description: "You’re so in love that you might stop breathing. Romance is not dead, if you keep it just yours.",
        image: "path_to_song82_image.jpg"
    },
  "S83": {
        title: "Everything Has Changed",
        description: "Your relationship is a beautiful, seamless journey, with comfort in every corner. 'All I know is we said hello, and your eyes look like coming home.' You never saw this coming, and now you can’t imaging life without it",
        image: "path_to_song83_image.jpg"
    },
  "S84": {
        title: "Out of the Woods",
        description: "You face challenges from friends and family, but your love perseveres. Don’t worry, you’re almost out of the woods yet. Almost in the clear.",
        image: "path_to_song84_image.jpg"
    },
  "S85": {
        title: "Slut!",
        description: "Don’t worry, I’m not calling you that! But you would take it if you had to, because that’s what this love means to you. It might just be worth it for once",
        image: "path_to_song85_image.jpg"
    },
  "S87": {
        title: "Cruel Summer",
        description: "Sneaking in through the garden gate sounds like so much fun until you’re the one doing it. Don’t worry though, at least you have a banger bridge.",
        image: "path_to_song87_image.jpg"
    },
  "S88": {
        title: "New Years Day",
        description: "Don’t read the last page, but they stay. They always will, even on New Years Day. Hold on to the memories, and don’t let them become a stranger whose laugh you could recognize anywhere.",
        image: "path_to_song88_image.jpg"
    },
  "S90": {
        title: "Love Story",
        description: "I just know this song was your jam in middle school. You never thought you’d relate to the fairytale of it all, but somehow, here you are. Just remember, it has a happy ending!",
        image: "path_to_song90_image.jpg"
    },
  "S91": {
        title: "I Know Places",
        description: "Your love may faces challenges from society, but you find solace in each other. They can chase their tails but they’ll never find you.",
        image: "path_to_song91_image.jpg"
    },
  "S92": {
        title: "New Romantics",
        description: "You stand strong despite some not supporting you, embracing your  love. You are too busy dancing to get knocked off your feet, and nothing thrown your way can change that.",
        image: "path_to_song92_image.jpg"
    },
  "S93": {
        title: "Delicate",
        description: "They like you for you. It may feel delicate right now, but you are stronger than you could ever dream of. 1,2,3, let’s go!",
        image: "path_to_song93_image.jpg"
    },
  "S94": {
        title: "You were perfectly fine on your own, really. This was the last thing you saw coming, but now they try on calling you baby like trying on clothes. And you wouldn’t have it any other way",
        description: "Description for Song 94.",
        image: "path_to_song94_image.jpg"
    },
  "S95": {
        title: "Lover",
        description: "3 summers and many more to come. You are truly, madly, deeply, in love.",
        image: "path_to_song95_image.jpg"
    },
  "S97": {
        title: "Miss Americana and the Heartbreak Prince",
        description: "Voted most likely to run away with you!.",
        image: "path_to_song97_image.jpg"
    },
  "S98": {
        title: "Mastermind",
        description: "You knew what you wanted, and you went for it. You might have even put the dominoes in place. All it took was one touch of a hand and they were yours.",
        image: "path_to_song98_image.jpg"
    },
  "S99": {
        title: "Timeless",
        description: "Whether it’s 1944 or 2024, this love is standing strong for eternities. You’ve found your match, and you can’t believe you once existed without them.",
        image: "path_to_song99_image.jpg"
    },
  "S100": {
        title: "dorothea",
        description: "We’ve all got our own dorothea. The one who, no matter how long you go without seeing each other, always has your back. The two of you are all you need",
        image: "path_to_song100_image.jpg"
    },
  "S101": {
        title: "august",
        description: "Salt air, and the rust on your door. August is the time to have fun, to go to malls with your friends, and to never cancel plans in case someone calls.",
        image: "path_to_song101_image.jpg"
    },
  "S102": {
        title: "Fifteen",
        description: "You’ve got that one friend from eighth grade, who you’ve seen through and who has seen you through everything. Soulmates aren’t always romantic, and you’ve found one of yours!",
        image: "path_to_song102_image.jpg"
    },
  "S103": {
        title: "Long Live",
        description: "You are savoring every moment of life. Fighting every dragon and remembering every moment. Be sure to capture them and share them with your kids someday.",
        image: "path_to_song103_image.jpg"
    },
  "S104": {
        title: "this is me trying",
        description: "You try so hard every single day, but it still doesn’t feel like it’s enough.  I know it feels like an uphill battle, but you’re so close. I’m proud of you, and you should be proud of yourself.",
        image: "path_to_song104_image.jpg"
    },
  "S105": {
        title: "The Archer",
        description: "Who could stay? You could. You could stay for yourself every day, and it will be the best decision you make, every single day.",
        image: "path_to_song105_image.jpg"
    },
  "S106": {
        title: "Anti-Hero",
        description: "You learned a particular lesson early in life. Everyone will betray you. Just know, it’s not fact, and can most definitely be changed any day.",
        image: "path_to_song106_image.jpg"
    },
  "S107": {
        title: "I hate it here",
        description: "You love fiction. Whether its books or movies or songs, you love transporting to another world, where you feel understood and like yourself. Make sure you pay a visit to the famous lakes!",
        image: "path_to_song107_image.jpg"
    },
  "S108": {
        title: "cardigan",
        description: "It’s fun to reminisce, but just know, they’ll return. They always do. It’s up to you if you take them back.",
        image: "path_to_song108_image.jpg"
    },
  "S109": {
        title: "Electric Touch (From The Vault)",
        description: "This could either break your heart of bring it back to life, but I’d say it’s worth the risk. One time is all it takes to get it right.",
        image: "path_to_song108_image.jpg"
    },
  "S110": {
        title: "How You Get The Girl",
        description: "I mean, just send these lyrics over to the next one, and hopefully this time they’ll listen!",
        image: "path_to_song108_image.jpg"
    },
  "S111": {
        title: "Begin Again",
        description: "Your jokes are funny. Your records are never too much. It’s time to do what you enjoy, and someone will appreciate you for you",
        image: "path_to_song108_image.jpg"
    },

};

let currentQuestionId = "q1";

function startQuiz() {
    document.getElementById('start-container').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    const currentQuestion = quizData.find(question => question.id === currentQuestionId);
    
    const question = document.createElement('h2');
    question.innerText = currentQuestion.question;
    quizContainer.appendChild(question);
    
    const optionsContainer = document.createElement('div');
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
    
    quizContainer.appendChild(optionsContainer);
}

function selectOption(index) {
    const currentQuestion = quizData.find(question => question.id === currentQuestionId);
    const nextQuestionId = currentQuestion.next[index];
    
    if (songDetails[nextQuestionId]) {
        showResult(nextQuestionId);
    } else {
        currentQuestionId = nextQuestionId;
        loadQuestion();
    }
}

function showResult(result) {
    const quizContainer = document.getElementById('quiz');
    const songDetail = songDetails[result];
    quizContainer.innerHTML = `
        <h2>"${songDetail.title}" is the perfect song for you right now.</h2>
        <p>${songDetail.description}</p>
        <img src="${songDetail.image}" alt="${songDetail.title}">
    `;
}

window.onload = () => {
    // Initial setup
};
