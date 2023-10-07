const events = [
	{
		index: 0,
		month: "Jan"
	},
	{
		index: 1,
		mon: "Jan",
		day: "NATIONAL SCIENCE FICTION DAY",
		date: 2,
		desc: "Every year on the 2nd of January, authors and fans celebrate National Science Fiction Day. It’s held on famed science fiction writer Isaac Asimov's birthday. The goal is to celebrate a genre that has captivated the imaginations of millions of people all around the world. This is a perfect day for you to read sci-fi books like Asimov’s I, Robot or Foundation or watch generation-defining films like the cult-favorite Moon.",
		img: "https://th.bing.com/th/id/OIP.PYipJ_hSncugM2SwnZitvgHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
	},
	{
		index: 2,
		mon: "Jan",
		day: "NATIONAL PUZZLE DAY",
		date: 29,
		desc: "National Puzzle Day is celebrated each year on January 29th. For this fun day, you can celebrate by solving different kinds of puzzles like a jigsaw, crossword, sudoku, trivia, and many more. Don’t forget the Rubix Cube or LEGOs!"
	},
	{
		index: 3,
		month: "Feb"
	},
	{
		index: 4,
		mon: "Feb",
		date: 7,
		day: "NATIONAL PERIODIC TABLE DAY",
		desc: "National Periodic Table Day is observed on February 7th to commemorate the publication of the first periodic table by a man named John Newlands in 1863. To celebrate its creation, you can play trivia games about different elements with your friends and family."
	},
	{
		index: 5,
		mon: "Feb",
		date: 11,
		day: "INTERNATIONAL DAY OF WOMEN AND GIRLS IN SCIENCE",
		desc: "February 11th marks the International Day of Women and Girls in Science. The day honors the vital role played by women and girls in Science, Technology, Engineering, and Mathematics (STEM). It promotes full and equal access to and participation in science for women and girls. Pay tribute to women in science by learning and sharing their contributions. Join the conversation on social media with #WomenInScience and inspire a young girl with a book like Women in Science: 50 Fearless Pioneers Who Changed the World! "
	},
	{
		index: 6,
		mon: "Feb",
		date: 12,
		day: "DARWIN DAY",
		desc: "Darwin Day is an annual commemoration of Charles Darwin's birthday, which falls on February 12th. On this day we honor Darwin's contributions to science and to encourage people to be curious and the world around them. Make sure to join the celebration by attending local events that may host free lectures and movies or you can host a “Phylum Feast” -- a potluck dinner where dishes are as biodiverse as possible. "
	},
	{
		index: 7,
		mon: "Feb",
		date: 13,
		day: "WORLD RADIO DAY",
		desc: "World Radio Day is celebrated all over the world on February 13th. Radio informs, transforms, and unites us. It brings people and communities together for a positive change. Join the worldwide event by actively listening to the radio and find out how radio continues to help shape our society."
	},
	{
		index: 8,
		mon: "Feb",
		date: 22,
		day: "ENGINEERING WEEK",
		desc: "Engineering Week or EWeek is an entire week dedicated to engineers. Founded by the National Society of Professional Engineers (NSPE), it celebrates the contribution of engineers to our society and engages the next generation of innovators. Engineering Week changes every year but it is always celebrated on the week of George Washington’s birthday (February 22) who many believed to be the United State’s first engineer. Help celebrate Engineering Week by sharing on social media with hashtag #EWeek, encouraging young engineers, or sharing an inspiring story. If you know an engineer deserving of a great gift, check out our curated list of Best Gifts for Engineers."
	},
	{
		index: 9,
		mon: "Feb",
		date: 28,
		day: "NATIONAL SCIENCE DAY",
		desc: "28th February is celebrated as National Science Day (NSD) in India. NSD is celebrated to commemorate discovery of the 'Raman Effect', which led to Sir C.V. Raman winning the Noble Prize."
	},
	{
		index: 10,
		month: "Mar"
	},
	{
		index: 11,
		mon: "Mar",
		date: 10,
		day: "NATIONAL LANDLINE TELEPHONE DAY",
		desc: "On March 10, 1876, Alexander Graham Bell made the first telephone call when he called his assistant Thomas Watson in the next room. The first sentence transmitted on the telephone system was “Mr. Watson—Come here—I want to see you.” The day became the National Landline Telephone Day to honor Alexander Graham Bell’s amazing invention. Be part of the event by calling someone through a landline (if you can find one)!"
	},
	{
		index: 12,
		mon: "Mar",
		date: 14,
		day: "PI DAY",
		desc: "Pi Day is celebrated on March 14 (3/14) which is the first three digits of the mathematical constant Pi (“π”) 3.14159265359… Pi is a very important constant in mathematics. It is the ratio of a circle's circumference to its diameter. Pi has been used by engineers and mathematicians throughout history but is first recorded by Archimedes of Syracuse (287 BC - 212 BC) who first used Pi in a calculation. Since the discovery, Pi has been used every day. Celebrate Pi Day by baking a delicious pie for you to enjoy with friends or family!"
	},
	{
		index: 13,
		mon: "Mar",
		date: 22,
		day: "WORLD WATER DAY",
		desc: "Since 1993, World Water Day has been commemorated on March 22nd every year to highlight the importance of freshwater. It also aims to raise awareness of the billions of people around the world who do not have access to safe water. Visit the World Water Day website to learn more!"
	},
	{
		index: 14,
		mon: "Mar",
		date: 23,
		day: "WORLD METEOROLOGICAL DAY",
		desc: "The World Meteorological Day occurs every year on March 23. It was established to commemorate the World Meteorological Organization’s creation on the 23rd of March, 1950. It promotes international cooperation in atmospheric science, climatology, hydrology, and geophysics. Be a part of the celebration by simply watching your local weather news!"
	},
	{
		index: 15,
		mon: "Mar",
		date: 31,
		day: "NATIONAL BUNSEN BURNER DAY",
		desc: "Every year on March 31st, National Bunsen Burner Day commemorates the birthday of German chemist Robert Wilhelm Eberhard von Bunsen. He changed laboratories around the world with his invention of the Bunsen burner in 1854. Since then, his invention continues to be an important tool in chemistry labs and helps students and professionals understand science. There are a lot of ways to celebrate this event. You can start by learning the concept behind the Bunsen burner. Share your Bunsen burner experiences from science class or in the lab with your friends, family, colleagues, or on social media with the hashtag #NationalBunsenBurnerDay!"
	},
	{
		index: 16,
		month: "Apr"
	},
	{
		index: 17,
		mon: "Apr",
		date: 3,
		day: "NATIONAL ROBOTICS WEEK",
		desc: "National Robotics Week is celebrated in the month of April. It aims to promote and inspire students in STEM-related fields all around the world to share their fun experiences with robotics. Celebrate this day by building a LEGO robot, or programming a more advanced one with a Raspberry Pi!"
	},
	{
		index: 18,
		mon: "Apr",
		date: 7,
		day: "WORLD HEALTH DAY",
		desc: "World Health Day is an annual global health awareness day that is celebrated every 7th of April. The designation started in 1950 and has continued to raise awareness on important health issues such as mental health, food safety, and child care. For this day, you can contribute by volunteering at local organizations or by donating blood to your local blood donation centers."
	},
	{
		index: 19,
		mon: "Apr",
		date: 21,
		day: "WORLD CREATIVITY AND INNOVATION DAY",
		desc: "World Creativity and Innovation Day is observed on April 21st every year. The purpose of this celebration is to encourage people to use their creativity to make the world a better place. World Creativity and Innovation Day (April 21) is the day before Earth Day (April 22) and this is to highlight the role of creative thinking in making the earth more sustainable. Celebrate World Creativity and Innovation Day by sharing your own innovative ideas that can help your community become more sustainable."
	},
	{
		index: 20,
		mon: "Apr",
		date: 22,
		day: "EARTH DAY",
		desc: "Every year, April 22nd marks the celebration of Earth Day. This day is celebrated by billions of people to remind everyone to take care of our mother earth. As global warming continues unabated, it’s even more important to modify our behavior for environmental protection and reducing our carbon footprint. We can celebrate Earth Day in many ways such as planting trees, switching to reusable bags, riding a bike to work, or planning out more plant-based meals!"
	},
	{
		index: 21,
		mon: "Apr",
		date: 23,
		day: "WORLD LABORATORY DAY",
		desc: "World Laboratory Day is an annual event that happens every 23rd of April. It honors the places where groundbreaking discoveries, innovations, and medical breakthroughs are made. This one is our personal favorite because it makes scientists think a little more about their place of research and how we can continue to make it a better place. Participate in this day by learning more about the world’s most advanced laboratories and thinking about how you can make your laboratory a welcoming and productive space! Share your findings on social media to help spread awareness with the hashtag #WorldLaboratoryDay."
	},
	{
		index: 22,
		mon: "Apr",
		date: 26,
		day: "RICHTER SCALE DAY",
		desc: "The Richter Scale Day is celebrated on April 26 to commemorate the birth of the Richter Scale's inventor, Charles F. Richter - an American seismologist. The logarithmic Richter scale is used to rate the magnitude of an earthquake. Learning about the geological processes causing earthquakes and Charles Richter’s scientific career are just some of the activities that you can do to celebrate this day. "
	},
	{
		index: 23,
		month: "May"
	},
	{
		index: 24,
		mon: "May",
		date: 7,
		day: "NATIONAL SPACE DAY",
		desc: "National Space Day is celebrated on the first Friday of May every year and was created to celebrate extraordinary achievements and inspire us to pursue knowledge and understanding of our universe. A fun way to celebrate this day is to build a rocket model with your friends and family. Or you can just stay at home and watch movies and documentaries about space! Our favorites are Gravity and Interstellar. "
	},
	{
		index: 25,
		mon: "May",
		date: 11,
		day: "NATIONAL TECHNOLOGY DAY",
		desc: "National Technology Day in India is an annual event held every year on May 11th. A day that is dedicated to celebrating the achievements and contributions of scientists, researchers, engineers, and trainers"
	},
	{
		index: 26,
		mon: "May",
		date: 17,
		day: "WORLD TELECOMMUNICATION AND INFORMATION SOCIETY DAY",
		desc: "The World Telecommunication and Information Society Day is celebrated annually on May 17th. It aims to raise global awareness of the social changes brought on by the Internet and new technology, as well as reduce the digital divide. Help spread awareness on social media by using the hashtag #WTISD and make sure to watch The Social Dilemma on Netflix if you haven’t already!"
	},
	{
		index: 27,
		mon: "May",
		date: 22,
		day: "INTERNATIONAL DAY FOR BIOLOGICAL DIVERSITY",
		desc: "Every year on May 22, the International Day for Biological Diversity is commemorated. The goal of this day is to raise awareness about challenges affecting our global biological diversity and to improve our understanding of biodiversity. You can visit a local zoo, a nature park, a forest, or any conservation area to get back in touch with nature and appreciate all of its natural diversity."
	},
	{
		index: 28,
		mon: "May",
		date: 26,
		day: "NATIONAL PAPER AIRPLANE DAY",
		desc: "National Paper Airplane Day is a fun holiday observed on May 26th each year to honor the basic aeronautical toy that has been around for 2000 years. The day is celebrated with a flight contest and social gathering where participants build and fly paper airplanes. If you can’t find one, host your own!"
	},
	{
		index: 29,
		mon: "May",
		date: 31,
		day: "AUTONOMOUS VEHICLE DAY",
		desc: "In the United States, May 31st is National Autonomous Vehicle Day. A self-driving car, also known as an autonomous vehicle, driverless car, or robo-car, is a vehicle that can sense its surroundings and drive itself safely with little or no human intervention. On this day, do some research on the newest advancements in the technology and see if you can find one that will (ever) fit into your budget!"
	},
	{
		index: 30,
		month: "Jun"
	},
	{
		index: 31,
		mon: "Jun",
		date: 23,
		day: "INTERNATIONAL WOMEN IN ENGINEERING DAY",
		desc: "International Women in Engineering Day is a global awareness campaign that aims to enhance the visibility of women in engineering and draw attention to the exciting career opportunities accessible to young women in this field. It honors the exceptional accomplishments of female engineers throughout the world. Join the celebration on International Women in Engineering Day by posting about an inspiring female engineer in your life!"
	},
	{
		index: 32,
		mon: "Jun",
		date: 30,
		day: "ASTEROID DAY",
		desc: "Asteroid Day is an annual global commemoration of the Siberian Tunguska catastrophe, which occurred on June 30, 1908, and was the most destructive known asteroid-related event on Earth in recent history. Its goal is to promote awareness about asteroids and what we can do to protect our planet, our families, communities, and future generations from asteroid strikes in the future. You can join the online celebration here! For some added fun, queue up a movie marathon of Armageddon and Deep Impact."
	},
	{
		index: 33,
		month: "Jul"
	},
	{
		index: 34,
		mon: "Jul",
		date: 20,
		day: "NATIONAL MOON DAY",
		desc: "The first lunar landing is commemorated on National Moon Day. NASA’s Apollo 11 mission landed the first humans on July 20, 1969. On this day, Neil Armstrong and Buzz Aldrin spent two and a half hours on the moon's surface collecting samples, taking measurements, and planting the USA flag. For this day, visit a planetarium near you or dedicate a few minutes to staring at the moon and appreciating this massive technological achievement."
	},
	{
		index: 35,
		month: "Aug"
	},
	{
		index: 36,
		mon: "Aug",
		date: 19,
		day: "NATIONAL AVIATION DAY",
		desc: "Every year on August 19th, the United States commemorates National Aviation Day to honor the history and development of aviation. Franklin Delano Roosevelt established the holiday in 1939 when he issued a presidential proclamation designating the anniversary of Orville Wright's birth as National Aviation Day. Celebrate this special day by visiting an aviation museum or building a model plane."
	},
	{
		index: 37,
		mon: "Aug",
		date: 24,
		day: "NATIONAL PLUTO DEMOTED DAY",
		desc: "On August 24th, Pluto Demoted Day commemorates the sad day in 2006 when the International Astronomical Union (IAU) reduced Pluto's status from a full-size planet to a dwarf planet. For the first 76 years, it was considered the ninth planet from the Sun. Celebrate National Pluto Demoted Day by exploring this interactive NASA site about the (now) dwarf planet or visiting a planetarium near you."
	},
	{
		index: 38,
		month: "Sept"
	},
	{
		index: 39,
		mon: "Sept",
		date: 8,
		day: "INTERNATIONAL LITERACY DAY",
		desc: "Since 1967, International Literacy Day (ILD) celebrations have taken place annually around the world to remind the public of the importance of literacy as a matter of dignity and human rights, and to advance the literacy agenda towards a more literate and sustainable society. Despite progress made, literacy challenges persist with at least 771 million young people and adults lacking basic literacy skills today."
	},
	{
		index: 40,
		mon: "Sept",
		date: 12,
		day: "NATIONAL VIDEO GAME DAY",
		desc: "Every year on September 12th, National Video Games Day is observed to commemorate all things related to video games. Video games from Atari to Halo have brought decades of entertainment to different generations. Enjoy this day by playing a classic video game with a friend and see the development from the earliest games up to the current realistic video games. For a hit of nostalgia, read or watch Ready Player One (my favorite book about video games)!"
	},
	{
		index: 41,
		mon: "Sept",
		date: 16,
		day: "INTERNATIONAL DAY FOR THE PRESERVATION OF THE OZONE LAYER",
		desc: "Every year on September 16th, the United Nations commemorates the International Day for the Preservation of the Ozone Layer. The day promotes activities that raise public awareness about climate change and the risks of ozone depletion. The ozone layer is our shield from the harmful effects of the sun so it’s important we continue to mitigate the destruction of our ozone layer. Help spread awareness about the importance of preserving the ozone layer by sharing this day on social media!"
	},
	{
		index: 42,
		mon: "Sept",
		date: 28,
		day: "ASK A STUPID QUESTION DAY",
		desc: "This might at first seem like a silly holiday, but it’s of utmost importance to science! In the 1980s, teachers created this holiday to encourage students to ask more questions in the classroom. Teachers were aware that the majority of students had numerous questions that could make interesting discussions, but they believed they kept them to themselves for fear of being ridiculed. This is the perfect day to feed your curiosity and reject the idea of embarrassment by asking as many questions as you want! "
	},
	{
		index: 43,
		month: "Oct"
	},
	{
		index: 44,
		mon: "Oct",
		date: 1,
		day: "MANUFACTURING DAY",
		desc: "Manufacturing Day happens annually on the first Friday in October. Its goal is to show students, parents, and the general public the wonderful complexities of modern manufacturing. Through more than 2,600 open houses and events, they try to address the common misconceptions around the manufacturing industry. Get involved by visiting a local manufacturing site or join an online local event."
	},
	{
		index: 45,
		mon: "Oct",
		date: 10,
		day: "NATIONAL METRIC DAY",
		desc: "National Metric Day is celebrated every year on the 10th day of the 10th month, October 10th (10/10) to promote the metric system. It is solely recognized in the United States and was designated by the United States Metric Association (USMA) and the National Council of Teachers of Mathematics (NCTM). Be a part of the event by solving problems using the metric system!"
	},
	{
		index: 46,
		mon: "Oct",
		date: 12,
		day: "ADA LOVELACE DAY",
		desc: "Ada Lovelace Day is an annual event held on the second Tuesday in October to honor Ada Lovelace - the first computer programmer. It celebrates women's accomplishments in science, technology, engineering, and mathematics (STEM) and encourages girls and women to seek careers in these fields. One of the simplest ways to commemorate Ada Lovelace Day is to honor women's achievements in all fields of science, math, and technology. You can also learn how to code or attend Ada Lovelace Day events near you or online and share your experience on Twitter with the hashtag #AdaLovelaceDay."
	},
	{
		index: 47,
		mon: "Oct",
		date: 17,
		day: "NATIONAL CHEMISTRY WEEK",
		desc: "National Chemistry Week (NCW) is a yearly event in the United States hosted by the American Chemical Society (ACS) that aims to enhance public awareness of the importance of chemistry in everyday life. It occurs during the third week of October and typically the same week as National Mole Day. The American Chemical Society (ACS) provides all kinds of free, fun ways to celebrate chemistry week. Make sure to join the fun by sharing your research or doing a chemistry experiment at home to inspire a younger student!"
	},
	{
		index: 48,
		mon: "Oct",
		date: 18,
		day: "NUCLEAR SCIENCE WEEK",
		desc: "Nuclear Science Week is an annual international event that takes place in the third week of October. It promotes the importance of nuclear science and activities that highlight both past achievements in nuclear science and future opportunities. Join the event on the official website of Nuclear Science Week and be a part of the discussions with educators, employers, and community members."
	},
	{
		index: 49,
		mon: "Oct",
		date: 23,
		day: "NATIONAL MOLE DAY",
		desc: "National Mole Day is a big day for the chemistry world. It is celebrated annually from 6:02 am to 6:02 pm on October 23rd, commemorating Avogadro’s number (6.022 x 1023) which is a basic measuring unit in chemistry. Mole Day's goal is to pique people's curiosity in chemistry. Mole Day, however you choose to commemorate it, is an excellent opportunity to reflect on chemistry in general and the wonderfully named unit of the mole in particular."
	},
	{
		index: 50,
		mon: "Oct",
		date: 29,
		day: "INTERNATIONAL INTERNET DAY",
		desc: "International Internet Day has been marked annually since 2005 to honor a breakthrough moment in the history of telecommunications and technology. In 1969, this was the day of the first electronic message, which was sent from one computer to another. Get involved in this fun day by sharing on social media how the internet made your life easier or learn the history of the internet and those scientists who made it a reality."
	},
	{
		index: 51,
		month: "Nov"
	},
	{
		index: 52,
		mon: "Nov",
		date: 8,
		day: "NATIONAL STEM/STEAM DAY",
		desc: "An exciting day in November is the STEM/STEAM Day that occurs every year on November 8th. The day is an opportunity to focus on supporting children in their advancement in the fields of science, technology, engineering, art, and mathematics. By inspiring and instilling curiosity in these fields, today's children have the potential to transform future generations. Celebrate the day by sharing your work in STEAM or inspiring the next generation with outreach activities. Make sure to share it on social media to get others on board!"
	},
	{
		index: 53,
		mon: "Nov",
		date: 10,
		day: "WORLD SCIENCE DAY FOR PEACE AND DEVELOPMENT",
		desc: "UNESCO established the World Science Day for Peace and Development in 2001. Celebrated every 10th of November, its goal is to keep citizens up to date on scientific discoveries. It also emphasizes the importance of scientists in increasing our understanding of the amazing, fragile planet we call home and in ensuring the sustainability of our society. For this day, discuss with your friends and family the importance of scientific discoveries continuing to help the world achieve peace and solidity"
	},
	{
		index: 54,
		mon: "Nov",
		date: 23,
		day: "FIBONACCI DAY",
		desc: "Fibonacci Day is celebrated on November 23rd (11/23), the date that corresponds to the Fibonacci sequence's first three numbers: 1 1 2 3. It is named after Leonardo Bonacci, one of the most famous Middle Ages mathematicians. Many items in nature grow in shapes represented by Fibonacci numbers, so we take this time to honor the mathematical beauty of the natural world. To honor Leonardo Bonacci, learn more about his life and other famous mathematicians, or make your own Fibonacci spiral!"
	},
	{
		index: 55,
		month: "Dec"
	},
	{
		index: 56,
		mon: "Dec",
		date: 6,
		day: "COMPUTER SCIENCE EDUCATION WEEK",
		desc: "Do you really understand how computers work? How are semiconductors programmed to perform logic operations? Celebrated on the 2nd week of December, Computer Science Education Week aims to inspire young students to get involved in computer science. Celebrate the day by teaching a young student about computer science and get involved with local and online events."
	}
];

export default events;
