// Mock submissions database for 12 days from simulated participants
const MOCK_SUBMISSIONS = {
  1: [
    {
      id: "elena",
      author: "Elena Rostova",
      time: "2 hours ago",
      text: "How do I love thee? Let me count the ways. I love thee to the depth and breadth and height My soul can reach, when feeling out of sight For the ends of being and ideal grace. I love thee to the level of every day's Most quiet need, by sun and candle-light. I love thee freely, as men strive for right. I love thee purely, as they turn from praise. I love thee with the passion put to use In my old griefs, and with my childhood's faith. I love thee with a love I seemed to lose With my lost saints. I love thee with the breath, Smiles, tears, of all my life; and, if God choose, I shall but love thee better after death. (Aligning with Browning's original words felt incredibly satisfying. Her vocabulary choice is timeless.)",
      avatarColor: "#5b8266" // Forest Green
    },
    {
      id: "marcus",
      author: "Marcus Chen",
      time: "5 hours ago",
      text: "How do I love thee? Let me count the ways. I love thee to the depth and ocean and silence My mind can reach, when feeling out of bounds For the ends of being and ideal peace. I love thee to the level of every day's Most quiet breath, by sun and stars. I love thee freely, as men strive for truth. I love thee purely, as they turn from vanity. I love thee with the energy put to use In my old struggles, and with my childhood's trust. I love thee with a love I seemed to lose With my lost dreams. I love thee with the laughter, Smiles, sighs, of all my journey; and, if God choose, I shall but love thee better after parting. (I decided to depart from the original. Using 'silence' instead of 'soul' completely shifts the weight of the second line.)",
      avatarColor: "#c89d53" // Gold/Amber
    }
  ],
  2: [
    {
      id: "sophia",
      author: "Sophia Varma",
      time: "4 hours ago",
      text: "It was midnight in the crowded city. A purple balloon floated past my window, an echo of a pocket full of gold. I wanted to hurry, to forget the sudden rust on the river, but my easy-going friend told me to walk soft on the grass.",
      avatarColor: "#896a9e" // Amethyst
    },
    {
      id: "julian",
      author: "Julian Finch",
      time: "6 hours ago",
      text: "The old ladder stood near the lemon tree. It was a distant memory of a fast, easy-going summer. I could hear a whisper through the glass, a sudden echo that made me tremble as the gold afternoon began to melt.",
      avatarColor: "#587291" // Slate Blue
    }
  ],
  3: [
    {
      id: "clara",
      author: "Clara Martinez",
      time: "1 hour ago",
      text: "Your scene: young woman and old man, in a kitchen. In the air — warmth slowly turning to unease.\n\nShe sat at the kitchen counter, peeling the apple in one long, unbroken red spiral. The old man watched her hands, his fingers tapping a slow rhythm against his teacup. \"You look like your mother,\" he said. The knife slipped. A bead of red rose to the surface of her thumb. \"No,\" she said, wiping it on her apron. \"I don't.\"",
      avatarColor: "#b24c63" // Crimson
    },
    {
      id: "david",
      author: "David Sterling",
      time: "3 hours ago",
      text: "Your scene: boy and old woman, in a park. In the air — an old grudge, gently surfacing.\n\nThe boy kept kicking the gravel with his sneaker, sending small showers of grey stones against the bench where she sat. \"He wanted you to have the pocketwatch,\" she said, her voice dry as the autumn leaves. The boy stopped kicking. \"He could have given it to me himself,\" he said, looking at the pond. She sighed, adjusting her wool coat. \"Some people don't know how to say goodbye.\"",
      avatarColor: "#3d7eaa" // Ocean Blue
    }
  ],
  4: [
    {
      id: "arthur",
      author: "Arthur Pendleton",
      time: "2 hours ago",
      text: "Instructions for eating spaghetti:\nFirst, secure a fork in your dominant hand. Do not use a spoon; that is a crutch for the faint-hearted. Lower the fork into the center of the pasta mass. Twist the fork clockwise, wrapping a small bundle of noodles around the tines. Lift the fork. If a long, stray noodle hangs down like a pendulum, do not panic. Bring the fork to your mouth and consume the bundle, using a light inhalation to draw in the tail. Repeat until the plate is clear.",
      avatarColor: "#8c6b53" // Brown
    },
    {
      id: "elena",
      author: "Elena Rostova",
      time: "5 hours ago",
      text: "Instructions for opening an umbrella:\nHold the handle firmly. Point the tip away from your face and the faces of any nearby citizens. Locate the runner—the sliding plastic collar on the shaft. Press the release button and push the runner upward until it clicks into the top notch. The fabric will bloom like a dark flower. Ensure the canopy is taut. Walk out into the rain.",
      avatarColor: "#5b8266"
    }
  ],
  5: [
    {
      id: "julian",
      author: "Julian Finch",
      time: "4 hours ago",
      text: "In the café, an old man sits by the window. He has a leather notebook, but he isn't writing. Instead, he spends ten minutes carefully removing the paper wrapper from a sugar cube, folding it into a tiny crane, and placing it next to his coffee. His eyes are bright, but his hands tremble. It's clear he is waiting for someone who is already very late.",
      avatarColor: "#587291"
    },
    {
      id: "marcus",
      author: "Marcus Chen",
      time: "7 hours ago",
      text: "A young woman at the library counter. She wears a yellow raincoat, though it hasn't rained since Tuesday. She speaks to the librarian in a whisper so quiet the librarian has to lean forward until their foreheads almost touch. She returns a single, heavy book on astronomy, then immediately borrows another copy of the exact same book.",
      avatarColor: "#c89d53"
    }
  ],
  6: [
    {
      id: "sophia",
      author: "Sophia Varma",
      time: "3 hours ago",
      text: "In the mall food court, two teenage boys are arguing over a single slice of pepperoni pizza. \"You had the bigger half of the fries,\" one says, stabbing his straw into a paper cup. \"Yeah, but you got the last chicken nugget,\" the other shoots back. A girl sits between them, ignoring them, scrolling on her phone. She suddenly laughs and turns the screen to them. They both look, forget the pizza, and burst into laughter. The tension evaporates instantly.",
      avatarColor: "#896a9e"
    },
    {
      id: "david",
      author: "David Sterling",
      time: "6 hours ago",
      text: "At the crowded bus stop, a woman is trying to balance three grocery bags while holding a child's hand. The child is crying, pointing at a puddle. \"Look, mommy, the sky is in the dirt!\" The woman looks down, her tired face softening for a split second. \"Yes, baby,\" she says, \"the sky fell.\" She shifts the grocery bags, her exhaustion temporarily replaced by a quiet, shared smile.",
      avatarColor: "#3d7eaa"
    }
  ],
  7: [
    {
      id: "elena",
      author: "Elena Rostova",
      time: "2 hours ago",
      text: "Fear is not a shadow; it is a physical weight that sits directly behind the ribs. When the floorboard creaked in the empty house, my lungs ceased their expansion. My eyes scanned the darkness, searching for a face where there was only dust. The cold sweat gathered in the hollow of my throat, sliding slowly down my collarbone like a droplet of ice. I stayed absolutely still, holding my breath, hoping that the silence of the room would swallow my heartbeat.",
      avatarColor: "#5b8266"
    },
    {
      id: "marcus",
      author: "Marcus Chen",
      time: "4 hours ago",
      text: "Anger begins as a low vibration in the wrists, a heat that rises through the forearms until the teeth are clenched. The glass on the table did not break, but the hand that held it was white at the knuckles. I stared at the papers, the ink blurring into grey smears under the glare of the desk lamp. The urge to sweep the oak desk clean was a physical thrum, a spark waiting for a breath of wind to turn it into a blaze.",
      avatarColor: "#c89d53"
    }
  ],
  8: [
    {
      id: "arthur",
      author: "Arthur Pendleton",
      time: "3 hours ago",
      text: "The tiny gears lay in neat ceramic dishes, organized by teeth size. He knew the precise squeak of the third drawer and which oil bottle was nearly empty. He did not know that the floorboards beneath his stool were rotting from the cellar damp, but he knew the shelf above was exactly three inches too low for his forehead. He reached for the magnifying lens by touch alone, his thumb finding the smooth notch worn into the brass handle.",
      avatarColor: "#8c6b53"
    },
    {
      id: "sophia",
      author: "Sophia Varma",
      time: "5 hours ago",
      text: "The chalkboard was permanently greyed with a decade of chalk dust. She knew which desk had the loose leg that rattled when a student wrote too fast. She did not know what was written in the folded note passing between the back row, but she knew the exact angle of the clock that meant her day was finally over. She kept her fingers wrapped around the stub of blue chalk, feeling its chalky grit transfer to her skin.",
      avatarColor: "#896a9e"
    }
  ],
  9: [
    {
      id: "clara",
      author: "Clara Martinez",
      time: "2 hours ago",
      text: "A tall man in a navy wool coat stood ahead in the post office line. He kept checking his wristwatch, his heels shifting from side to side on the linoleum. Every time the door opened, he adjusted his glasses and took a half-step forward, his grip tightening on a small manila envelope. When the clerk called \"Next,\" he let out a sharp, ragged breath and practically ran to the counter, leaving a faint scent of wet cedar behind.",
      avatarColor: "#b24c63"
    },
    {
      id: "david",
      author: "David Sterling",
      time: "5 hours ago",
      text: "The woman in front of me at the bakery smelled of lavender and damp wool. She wore a faded red coat with mismatching buttons, and her hands were tucked deep into her pockets. She kept staring at the sugar-dusted buns, her lips moving silently as if calculating. When it was her turn, she pointed to a single plain roll, paid in exact pennies, and smiled warmly at the cashier.",
      avatarColor: "#3d7eaa"
    }
  ],
  10: [
    {
      id: "clara",
      author: "Clara Martinez",
      time: "2 hours ago",
      text: "A greasy technician stood in the server room. He might be wiped of all that thermal paste, eventually—but not of so many nose rings. No more than nineteen, with baggy, unstable pants like a parachute, he kept leaning backward, dropping chip crumbs onto the keyboard. Still, the manager, who’d opened the door—easily distracted, susceptible to technology—found she couldn’t fire him.",
      avatarColor: "#b24c63"
    },
    {
      id: "david",
      author: "David Sterling",
      time: "5 hours ago",
      text: "She bought one of those greasy, cheap little hamburgers called \"sliders,\" which look as though they had been squashed under the wheel of a truck. And soon, mechanically, starving after a brutal day with the prospect of an exhausting shift, I raised to my mouth a bite of the bun in which I had smeared a glob of yellow mustard.",
      avatarColor: "#3d7eaa"
    }
  ],
  11: [
    {
      id: "clara",
      author: "Clara Martinez",
      time: "1 hour ago",
      text: "Mother died today. Or maybe yesterday; I can't be sure. But the bakery down the street was still open, and the smell of fresh baguettes was exactly the same as it had been last week. I bought one, still warm, and ate it while walking to the funeral parlor. The sun was hot on my neck, and I wondered if they would have chairs inside or if we'd have to stand by the coffin.",
      avatarColor: "#b24c63"
    },
    {
      id: "david",
      author: "David Sterling",
      time: "3 hours ago",
      text: "It was a bright cold day in April, and the clocks were striking thirteen. In the carnival plaza, the fortune teller laughed and told the children that time had finally broken. We all bought pink cotton candy and watched the clock hands spin backward, feeling a strange, wild freedom we hadn't known since the winter began.",
      avatarColor: "#3d7eaa"
    }
  ],
  12: [
    {
      id: "clara",
      author: "Clara Martinez",
      time: "1 hour ago",
      text: "Waiting for the bus: The engine roared like a waking beast [Hearing]. The diesel exhaust smelled of burnt rubber and cold iron [Smell]. A cold rain drop splattered on my bare forehead [Touch]. The yellow headlights cut through the grey fog [Sight]. The metallic taste of copper coins lingered on my tongue [Taste].",
      avatarColor: "#b24c63"
    },
    {
      id: "david",
      author: "David Sterling",
      time: "3 hours ago",
      text: "Buttering toast: The sharp crack of the toaster lever releasing echoed in the kitchen [Hearing]. A golden crust of sourdough slid onto the plate [Sight]. The hot bread burned my fingertips [Touch]. The yeasty aroma of roasted wheat filled the air [Smell]. The salty, melted butter coated my mouth [Taste].",
      avatarColor: "#3d7eaa"
    }
  ],
  13: [
    {
      id: "clara",
      author: "Clara Martinez",
      time: "1 hour ago",
      text: "This task was a revelation. I took my Day 3 kitchen scene and rewrote it from scratch twice. The first rewrite went off on a tangent about a house fire, but the second one brought back the tension between the characters with a much sharper edge. Combining the best elements from both attempts helped me find the exact right words for the ending. (Freewriting really helped me break through my initial block!)",
      avatarColor: "#b24c63"
    },
    {
      id: "david",
      author: "David Sterling",
      time: "2 hours ago",
      text: "Freewriting was incredibly liberating. I used my Day 8 classroom scene. By letting myself get distracted, I ended up writing about the teacher's childhood, which gave me a much deeper understanding of her character. The final text feels much more alive than my first draft. It felt like uncovering layers of soil to find a hidden spring.",
      avatarColor: "#3d7eaa"
    }
  ]
};
