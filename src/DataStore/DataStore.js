import React, { createContext, useState } from 'react';
// import Main from '../Compo/Main';
// import Home from '../Compo/Home';
export const StoreData = createContext();

function DataStore(props) {
    const [data, dataf] = useState([{
        topic: "India vs Pakistan: Virat Kohli hits 47th ODI century, breaks Sachin Tendulkar’s record for fastest to 13000 runs",
        category: "sports",
        info: "Virat Kohli broke Sachin Tendulkar’s record of the fastest batter to 13000 runs in ODI cricket. He achieved the feat in India’s Asia Cup 2023 match against Pakistan.",
        detail: "Virat Kohli, on Monday, September 11, became the fastest batter to score 13000 runs in ODIs. The veteran broke the record of Sachin Tendulkar, who set the record way back in 2004 against Pakistan in Rawalpindi.Kohli achieved the feat in India’s Asia Cup 2023 Super Four match against Pakistan at the R Premadasa Stadium in Colombo. Even as Sachin accomplished the feat in his 321st innings, Kohli got there in his 267th innings of his ODI career.",
        image: "https://english.madhyamam.com/h-upload/2022/09/08/1752698-r0rhv8mvirat-kohli-afp625x30008september22.webp"
    },
    {
        topic: "5 breakfast items you should never start your day with",
        category: "food",
        info: "Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
    },
    {
        id: 1,
        topic: "Jawan box office collection worldwide: Shah Rukh Khan starrer crosses 500 crore in just four days",
        category: "bollywood",
        info: "Shah Rukh Khan's new action thriller Jawan is smashing the box office with a record-breaking opening.",
        detail: "Directed by Atlee (pseudonym of Arun Kumar), the Bollywood film sees Khan in a double role. The actor plays both Azad Rathore, the prison officer of a woman's correctional facility in Mumbai, and his father Captain Vikram Rathore, with the two characters teaming up to fight corruption.",
        image: "https://images.thequint.com/thequint%2F2023-05%2F503815c7-4ecd-4729-aae7-19fbc7f18220%2F345061970_251814084030084_2588271394147414388_n.jpg?rect=0%2C0%2C1080%2C608",
        date: "12/09/2023"
    },
    {
        id: 2,
        topic: "AR Rahman apologises for Chennai concert controversy after backlash from netizens; Says 'terribly disturbed",
        category: "bollywood",
        info: "After a huge backlash, the Oscar winning music composer AR Rahman reacted to the Chennai concert controversy and held himself accountable for the incident",
        detail: "AR Rahman's Chennai concert, Marakuma Nenjam has left music lovers, fans and audiences alike seething with anger over its extremely callous management. After a huge backlash, the Oscar-winning music composer apologized and said he was 'terribly disturbed'. He is ready to refund the amount of the tickets to people who couldn't attend the concert and holds himself accountable for the incident.",
        image: "https://www.pinkvilla.com/images/2023-09/1012838989_ar-rahman-apologises-for-chennai-concert-controversy-after-backlash-from-netizens-says-terribly-disturbed-1.jpg",
        date: "10/09/2023"
    },
    {
        id: 3,
        topic: "The Great Indian Family Trailer OUT: Vicky Kaushal is bhajan's 'undisputed king', Manushi Chhillar shines",
        category: "bollywood",
        info: "The official trailer of Vicky Kaushal and Manushi Chillar starrer comedy drama The Great Indian Family is out now",
        detail: "Vicky Kaushal is one of the most successful and exciting actors in Bollywood these days. His script choices are quite distinct and they have also turned out to be money spinners lately. One of the most hyped films of Vicky has to be the comedy-drama film The Great Indian Family, which also stars Manushi Chhillar in the lead role.",
        image: "https://www.pinkvilla.com/images/2023-09/13382436_the-great-indian-family.jpg",
        date: "28/08/2023"
    },
    {
        id: 4,
        topic: "Ayushmann Khurrana wants to work with Shah Rukh Khan's Jawan director Atlee; wishes to do South films",
        category: "bollywood",
        info: "Actor Ayushmann Khurrana has discussed his love for South cinema and said that he will enter the industry if he finds something “exciting”",
        detail: "Bollywood actor Ayushmann Khurrana has won over the audiences right from his debut in the industry with the 2023 hit Vicky Donor. He has continued to grow and evolve on-screen with movies like Article 15 and Andhadhun. Lately, he has been soaring high with his latest release Dream Girl 2, which also starred Ananya Panday. In a media interaction, Ayushmann opened up about veering towards the South film industry and how “validations” have been pouring in from South. ",
        image: "https://www.pinkvilla.com/images/2023-09/472703926_ayu-1280-final.jpg",
        date: "12/09/2023"
    },
    {
        id: 5,
        topic: "Pushpa 2 Release Date: Allu Arjun and Sukumar's film to be out on Independence Day; Details Inside",
        category: "bollywood",
        info: "Pushpa 2: The Rule is all set to release on Independence Day. Mythri Movie Makers, the producers of the film, have just announced the official release date.",
        detail: "The much anticipated Allu Arjun starrer Pushpa 2: The Rule is all set to hit the theaters on 15th August 2024. The film is the sequel to the 2021 film Pushpa: The Rise, which won the National Award for ‘Best Actor’ and ‘Best Music Director’.",
        image: "https://www.pinkvilla.com/images/2023-09/706149604_pushpa-2-release-date-1.jpg",
        date: "07/05/2023"
    },
    {
        id: 6,
        topic: "Rohit Shetty and Ajay Devgn likely to delay Singham Again; will avoid clash with Pushpa 2",
        category: "bollywood",
        info: "Rohit Shetty and Ajay Devgn were pleasantly surprised when they heard the release date announcement by Sukumar and Allu Arjun to bring Pushpa 2 on Independence Day.",
        detail: "Since then, multiple discussions have taken place at Shetty's office and the meetings led to the conclusion about them delaying the release of Singham Again from the already announced Independence Day release date.",
        image: "https://media5.bollywoodhungama.in/wp-content/uploads/2023/09/Rohit-Shetty-and-Ajay-Devgn-likely-to-delay-Singham-Again-will-avoid-clash-with-Pushpa-2-2.jpg",
        date: "23/07/2023"
    },
    {
        id: 7,
        topic: "EXCLUSIVE: Sanya Malhotra ECSTATIC with the response to Jawan; excitedly talks about Shah Rukh Khan’s old look:",
        category: "bollywood",
        info: "EXCLUSIVE: Sanya Malhotra ECSTATIC with the response to Jawan; excitedly talks about Shah Rukh Khan’s old look: “SRK as Vikram Rathore, oh my goodness! Of course I have a soft spot for Azad but Vikram Rathore was something else”",
        detail: "Definitely. It’s an important film for me as an actor. I got a chance to learn so much. I was quite aware that Jawan will be a massive one for my filmography and for my career. Moreover, getting to work with Shah Rukh sir was one of the major reasons why I said ‘yes’ to the film. As a fan, I just wanted to be around him. This was the perfect opportunity.",
        image: "https://media5.bollywoodhungama.in/wp-content/uploads/2023/09/Sanya-main.jpg",
        date: "12/09/2023"
    },
    {
        id: 8,
        topic: "Nelson Dilipkumar expresses gratitude towards Rajinikanth, Tamannaah Bhatia, among others after the grand success of Jailer",
        category: "bollywood",
        info: "Jailer, which released on August 10, ended up doing great business domestically and internationally",
        detail: "Rajinikanth starrer Jailer has become one of the biggest hits of the year after its release last month. Now, director Nelson Dilipkumar took to his Instagram on Monday to pen a heartfelt tribute for Rajinikanth, and the rest of the cast and crew for the film's huge success at the box office. (Also read: Jailer box office collection: Rajinikanth film steadily marches towards impressive ₹650 crore milestone)",
        image: "https://www.hindustantimes.com/ht-img/img/2023/09/11/550x309/Jailer_1693801825950_1694428993686.jpg",
        date: "20/08/2023"
    },
    {
        id: 9,
        topic: "Rajinikanth meets Malaysian Prime Minister, laughs as he recreates Sivaji The Boss move. ",
        category: "bollywood",
        info: "Actor Rajinikanth met the Prime Minister of Malaysia a few days ago and bonded over his movies, specially Sivaji The Boss.",
        detail: "Tamil superstar Rajinikanth recently met Malaysian Prime Minister Anwar Ibrahim. The politician took to X to share a note about their meet up, along with some pictures of them. (Also read: Jailer box office collection: Rajinikanth film steadily marches towards impressive ₹650 crore milestone)",
        image: "https://www.hindustantimes.com/ht-img/img/2023/09/12/550x309/rajinikanth_1694510899978_1694510900247.jpg",
        date: "12/09/2023"
    },
    {
        id: 10,
        topic: "Karan Johar on Priyanka Chopra moving to Hollywood:",
        category: "bollywood",
        info: "Karan Johar calls Priyanka Chopra's move to Hollywood 'fantastic'. The filmmaker also praised her for the success she has achieved since making the shift.",
        detail: "Earlier this year, Priyanka Chopra made headlines for her interview, where she revealed how she had 'beef' with some people in the Hindi film industry, and therefore chose to move to Hollywood. Months after Priyanka's viral interview with Dax Shepard, Karan Johar was asked to comment on Priyanka's shift to Hollywood. He was speaking with ET Canada on the sidelines of Toronto International Film Festival 2023, where he attended the premiere of Kill, which he has co-produced.",
        image: "https://www.hindustantimes.com/ht-img/img/2023/09/12/550x309/priyanka-karan-big_1694506941180.jpg",
        date: "14/03/2023"
    },
    {
        id: 11,
        topic: "After Alia Bhatt, Deepika Padukone congratulates PM Narendra Modi on 'groundbreaking' success of G20 Summit in India",
        category: "bollywood",
        info: "Deepika Padukone, Ranveer Singh and Alia Bhatt hail Prime Minister Narendra Modi for ‘fostering unity’ at ‘historic’ G20 Summit in Delhi.",
        detail: "Several Bollywood celebrities have praised Prime Minister Narendra Modi for the successful presidency of G20 and the recent G20 Summit in Delhi. Joining them is actor Deepika Padukone. On Tuesday, she took to Instagram Stories and called it India's 'remarkable accomplishment' as she spoke about the G20 Summit. Her husband, actor Ranveer Singh, had also congratulated PM Modi for the success of the summit. Recently, actor Alia Bhatt has also tweeted about the summit, calling it, 'a historic moment for India'. Also read: Shah Rukh Khan congratulates PM Narendra Modi for G20 Summit",
        image: "https://www.hindustantimes.com/ht-img/img/2023/09/12/550x309/Alia_Bhatt_Modi_G20_Deepika_Padukone_1694501734112_1694501744670.jpeg",
        date: "12/09/2023"
    },
    {
        id: 12,
        topic: "Gadar 2 box office collection day 32: Sunny Deol's film witnesses significant drop amid Jawan tsunami",
        category: "bollywood",
        info: "Gadar 2 box office collection: On its fifth Friday, the Anil Sharma film earned only ₹90 lakh. The action film hit theatres on August 11.",
        detail: "Gadar 2 box office collection: Gadar 2, helmed by director Anil Sharma, has witnessed a significant drop in its box office collection a few days after breaking records. As per Sacnilk.com, the film earned just over ₹70 lakh on its fifth Monday. Gadar 2 starred Sunny Deol, Ameesha Patel, and Utkarsh Sharma in lead roles. It released in theatres on August 11. (Also Read | Sunny Deol cries during interview as live audience welcomes him with loud cheers)",
        image: "https://www.hindustantimes.com/ht-img/img/2023/09/12/550x309/sunny_deol_1694496131679_1694496141404.png",
        date: "10/09/2023"
    },
    {
        id: 13,
        topic: "Anushka Sharma, Athiya Shetty react to Virat Kohli and KL Rahul's centuries during India vs Pakistan Asia Cup 2023 clash",
        category: "bollywood",
        info: "Virat Kohli and KL Rahul scored impressive centuries in the match between India and Pakistan. The cricketers were lauded by wives Anushka Sharma, Athiya Shetty.",
        detail: "After Virat Kohli and KL Rahul hit a century each in Monday's Asia Cup 2023 match between India and Pakistan, their proud wives-actors Anushka Sharma and Athiya Shetty, showered love on them. Not only them, KL Rahul's father-in-law, actor Suniel Shetty, also shared a post congratulating the cricketer for scoring an unbeaten 111",
        image: "https://www.hindustantimes.com/ht-img/img/2023/09/12/550x309/Virat_Kohli_KL_Rahul_score_Pakistan_Asia_Cup_1694488895462_1694488895721.jpeg",
        date: "11/09/2023"
    },
    {
        id: 14,
        topic: "My name is not Khan: When Aishwarya Rai floored everyone with her Koffee With Karan rapid fire answers",
        category: "bollywood",
        info: "Aishwarya Rai was once asked to pick between the Khans of Bollywood. She was also asked to name the better actress between Kareena and Priyanka on KWK.",
        detail: "Actor Aishwarya Rai has been an excellent orator since her modelling days. She is best known for her witty answers and is often regarded as beauty with brains. Proving the same, she once appeared on Karan Johar's chat show Koffee With Karan and left everyone including the director in splits with her savage replies. A video of the same has resurfaced on Reddit.",
        image: "https://www.koimoi.com/wp-content/new-galleries/2023/07/aishwarya-rai-bachchans-old-video-teasing-a-reporter-after-he-asked-if-men-are-intimidated-by-her-goes-viral-read-on-001.jpg",
        date: "14/06/2017"
    },
    {
        id: 15,
        topic: "Jawan box office collection day 5: Shah Rukh Khan film becomes third Hindi film to cross ₹300 cr nett in India in 2023",
        category: "bollywood",
        info: "Jawan became the fastest Hindi movie to cross the ₹500 crore mark at the global box office. It earned ₹520.79 crore gross globally in its first weekend",
        detail: "Jawan, helmed by Atlee, has entered the ₹300 crore club at the domestic box office collection five days after its release. As per Sacnilk.com, the action thriller has become the third Hindi film to cross ₹300 crore nett in India this year. Jawan hit the theatres on Thursday last week in Hindi, Tamil and Telugu.",
        image: "https://www.hindustantimes.com/ht-img/img/2023/09/12/550x309/jawan_shah_Rukh_khan_1694482371493_1694482371730.jpg",
        date: "12/09/2023"
    },
    {
        id: 16,
        topic: "iPhone 15’s shift to USB-C has hidden potential to streamline computing",
        category: "technology",
        info: "Apple is set to reveal the iPhone 15 at a special event held tomorrow, Tuesday September 12",
        detail: "Apple is set to reveal the iPhone 15 at a special event held tomorrow, Tuesday September 12, and we already know a lot about what to expect thanks to rumors and supply chain sources — but this time thanks also to European Union regulators. That last source strongly suggests that the newest iPhone will get a USB-C connector, replacing the Lightning connector that Apple introduced with the iPhone 5 in 2012.",
        image: "https://techcrunch.com/wp-content/uploads/2021/08/apple_news-partner-program_news-plus-mac-iphone_08262021_big.jpg.large_2x.jpg?w=1390&crop=1",
        date: "11/09/2023"
    },
    {
        id: 17,
        topic: "TikTok Shop officially launches in the U.S.",
        category: "technology",
        info: "After months of testing, TikTok has finally launched its e-commerce product, TikTok Shop, in the U.S ",
        detail: "After months of testing, TikTok has finally launched its e-commerce product, TikTok Shop, in the U.S — where it has more than 150 million users. As part of the rollout, the company is bringing features such as a dedicated shop tab on the home screen, live video shopping, shoppable ads, and affiliate programs for creators.",
        image: "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1248389538.jpg?w=1390&crop=1",
        date: "11/09/2023"
    },
    {
        id: 18,
        topic: "Square says daylong outage caused by DNS error",
        category: "technology",
        info: "Square said there was “no evidence” a cyberattack caused an outage that left customers and small businesses unable to use the payment giant’s technology ",
        detail: "The payments technology giant said in a post-mortem of the daylong outage that the outage was caused by a DNS issue. DNS, or domain name system, is the global protocol that converts human-readable web addresses into IP addresses, which allow computers to find and load websites from all over the world.",
        image: "https://techcrunch.com/wp-content/uploads/2023/09/square-contactless-payment.jpg?w=1390&crop=1",
        date: "15/05/2023"
    },
    {
        id: 19,
        topic: "Apple fixes zero-day bugs used to plant Pegasus spyware",
        category: "technology",
        info: "Apple released security updates on Thursday that patch two zero-day exploits — meaning hacking techniques that were unknown at the time Apple found out about them",
        detail: "Citizen Lab, an internet watchdog group that investigates government malware, published a short blog post explaining that last week they found a zero-click vulnerability — meaning that the hackers’ target doesn’t have to tap or click anything, such as an attachment — used to target victims with malware. The researchers said the vulnerability was used as part of an exploit chain designed to deliver NSO Group’s malware, known as Pegasus.",
        image: "https://techcrunch.com/wp-content/uploads/2023/09/nso-group-hq-logo.jpg?w=1390&crop=1",
        date: "26/08/2023"
    },
    {
        id: 20,
        topic: "This week in AI: The generative AI boom drives demand for custom chips",
        category: "technology",
        info: "Keeping up with an industry as fast-moving as AI is a tall order. So until an AI can do it for you,",
        detail: "This week in AI, d-Matrix, an AI chip startup, raised $110 million to commercialize what it’s characterizing as a “first-of-its-kind” inference compute platform. D-Matrix claims that its tech enables inference — that is, running AI models — at a lower cost of ownership than GPU-based alternatives.",
        image: "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1413881188.jpg?w=1390&crop=1",
        date: "18/03/2023"
    },
    {
        id: 21,
        topic: "Google.org to invest $20M into AI-focused grants for think tanks and academic institutions",
        category: "technology",
        info: "Ahead of Wednesday’s AI-focused private congressional meeting with tech giants, Google this morning announced a new initiative ",
        detail: "Ahead of Wednesday’s AI-focused private congressional meeting with tech giants, Google this morning announced a new initiative aimed at supporting researchers and public policy solutions around AI with the debut of the Digital Futures Project. As part of the effort, Google’s charitable arm Google.org is establishing a $20 million fund that will provide grants to think tanks and academic institutions developing AI expertise.",
        image: "https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=1390&crop=1",
        date: "27/08/20"
    },
    {
        id: 22,
        topic: "Snapchat partners with MTV to let users vote for VMAs through Lenses",
        category: "technology",
        info: "MTV has partnered with Snapchat to let users vote for a Video Music Awards category through Lenses",
        detail: "MTV has partnered with Snapchat to let users vote for a Video Music Awards category through Lenses. The entertainment company is leveraging Snap’s Camera Kit to integrate AR-based experiences into the award show.Users will be able to vote on the Best New Artist once the three finalists are decided. They can use a special Lens, developed by Saucealitos, to signal one, two or three using their fingers to select an artist to vote. These votes will count toward the final tally, but it is tough to say if the amount of people voting through Snapchat will make a significant difference.",
        image: "https://techcrunch.com/wp-content/uploads/2021/06/snapchat-speed-blur.jpg?w=1390&crop=1",
        date: "06/07/2023"
    },
    {
        id: 23,
        topic: "iPhone 15 Pro, Pro Max launch today: Expected specs, India price, design and everything else",
        category: "technology",
        info: "Apple event 2023: While there are still a few hours for the event to start, here is a look at the expected specs, design, and India price of the iPhone 15 Pro and iPhone 15 Pro Max models.",
        detail: "The iPhone 15 series will launch tonight at Apple's 'Wonderlust' event, which will be held tonight at 10:30PM in India. The launch is being hosted at Apple's headquarters in Cupertino, California. But, people who are interested in watching the iPhone 15 livestream can head to Apple's YouTube channel to watch the event. While there are still a few hours for the event to start, here is a look at the expected specs, design, and India price of the iPhone 15 Pro and iPhone 15 Pro Max models.",
        image: "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-color-lineup-geo-230912_big.jpg.large.jpg",
        date: "13/09/2023"
    },
    {
        id: 24,
        topic: "Elon Musk faced bullying in childhood, was hospitalised and forced to leave school",
        category: "technology",
        info: "Elon Musk's new biography by Walter Isaacson reveals traumatic bullying experiences from Musk's childhood. The book states that Elon Musk was the youngest and smallest in his class, which made him an easy target for bullies.",
        detail: "Elon Musk is often referred to as a dark and angry man who behaves horribly towards the people around him. Musk is also frequently quoted as a 'man-child' depicted with high ambitions and an ego to match. However, despite the wealth and attitude, the billionaire was not all born with a silver spoon and experienced a troubled childhood, reveals his new biography by Walter Isaacson.",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/elon-musk-131432705-16x9.jpg?VersionId=lKXoOsTUmjZfq2HwMkERU2pcAKsELvPo&size=690:388",
        date: "02/02/2018"
    },
    {
        id: 25,
        topic: "Mark Zuckerberg, Elon Musk want their employees back in office because it will be better for their career",
        category: "technology",
        info: "Tech companies that previously supported remote work are now releasing mandates requiring workers to spend a significant portion of their week in the office. They stress that in-person collaboration boosts productivity and professional development.",
        detail: "Mark Zuckerberg and Elon Musk, two prominent leaders in the tech industry, are strongly advocating for a return to the traditional office setting for their employees, citing the potential benefits it could bring to their careers. In contrast to the remote work trend that gained momentum in recent years, the Meta and Tesla CEOs believe that in-person collaboration and workplace interactions hold significant advantages, not only for the growth of their companies but also for the professional development of their workforce.",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/mark-zuckerberg-and-elon-musk-132258222-16x9.jpg?VersionId=Slzcmpch6TgreT5aHHeTCho4v5v35OpL&size=690:388",
        date: "09/08/2023"
    },
    {
        id: 26,
        topic: "Tecno launches MegaBook T1 laptop with Core 11th-Gen i7 and 16GB RAM, priced at Rs 57,999",
        category: "technology",
        info: "The Tecno MegaBook T1's price in India starts at Rs 39,999 for the Intel Core i3 variant (8GB RAM and 512GB SSD) and goes up to Rs 57,999 for the top i7 variant with 16GB RAM and 1TB SSD.",
        detail: "Chinese smartphone maker Tecno has forayed into the laptop segment with the new Tecno MegaBook T1. The new laptop may attract a lot of potential customers because of the aggressive pricing despite offering up to Intel Core i7, 1TB SSD, and 16GB of RAM. The laptop boasts a sleek design, which may also resemble Apple MacBooks. It features an aluminium metal casing and a large trackpad. The display has a considerable chin with Tecno branding, which again resembles the MacBook branding on Apple laptops.",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/tecno-megabook-t1-132336513-16x9.jpg?VersionId=g1dHEWww1kJzJjkBxXYJy6VgS5qzJITI&size=690:388",
        date: "13/09/2023"
    },
    {
        id: 27,
        topic: "OnePlus 11 users can now try Android 14 with OxygenOS 14 open beta programme",
        category: "technology",
        info: "OnePlus warns in its community forum that the Android 14-based OxygenOS 14 beta version is unstable and users may face bugs. OnePlus even goes on to say that 'by installing this update, you accept the potential risks.'",
        detail: "OnePlus has started rolling out Android 14-based OxygenOS 14 to OnePlus 11 users in India. However, the current release is only open beta form, meaning users have to separately enrol to test the new Android version. The stable version will be showcased by OnePlus on September 25. In the coming days, open beta access will likely come to more OnePlus devices, including the OnePlus Nord 3, which was available to select users via the closed beta programme.",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/oxygenos-14-130131585-16x9.jpg?VersionId=0oBGfJgx6AUuQHf0X0f0BeQJG5JNkhQ2&size=690:388",
        date: "26/07/2023"
    },
    {
        id: 28,
        topic: "iQOO Neo 7 Pro review: A complete package for gamers",
        category: "technology",
        info: "The iQOO Neo 7 Pro is a powerful mid-range phone that will prove to be a delight for gamers. Should you buy the phone for Rs 34,999? We find out in this review.",
        detail: "Many companies these days have standardised their phone designs with little room left for imagination. But iQOO is not amongst these brands and that is evident with the recently-launched Neo 7 Pro. The phone not only looks great, but also packs a powerful performance that will delight all the gamers.",
        image: "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/12/iqoo-neo-7-racing.jpg?fit=1200%2C675&ssl=1",
        date: "04/07/2023"
    },
    {
        id: 29,
        topic: "Samsung Galaxy S23 FE likely to launch in India soon, teaser spotted on Flipkart",
        category: "technology",
        info: "After months of speculation, it seems that Samsung has finally decided to launch a new model in its Galaxy S FE series. The company is widely rumoured to announce the Samsung Galaxy S23 FE in India soon, as a support page for the same has been spotted on the official website of Samsung.",
        detail: "After months of speculation, it seems that Samsung has finally decided to launch a new model in its Galaxy S FE series. The company is widely rumoured to announce the Samsung Galaxy S23 FE in India soon, as a support page for the same has been spotted on the official website of Samsung. Now, the teaser for the alleged 5G phone has made an appearance on Flipkart, which was first spotted by tipster Abhishek Yadav.",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/samsjpg-284057-16x9_0.jpg?VersionId=716r91dSHd3zdkaWfrNjgvSgpDmt1EvB&size=690:388",
        date: "11/09/2023"
    },
    {
        id: 30,
        topic: "Tech Mahindra shows salaries for freshers and supercoders during campus placement, student reacts in horror",
        category: "technology",
        info: "Tech Mahindra is a company that often visits Indian colleges and tech institutes to hire software engineers. But the question you may have is: how much does Tech Mahindra pay fresh engineering graduates? ",
        detail: "If you are a computer engineering student at one of India's umpteen colleges, you must have wondered about the salary you will get in your first job. And more so if that job comes about in a campus placement. Now, different companies have different job and salary policies, and surely some people do get lucky to get into a role and company where they are offered tens of lakhs rupees, but for most the beginnings are more modest. If we are to believe what Tech Mahindra offers during its campus placement, it seems that the starting salary for fresh software engineering graduates at the company lies between Rs 3.2 lakh to Rs 5.5 lakh.",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/tech-mahindra-080126-16x9.jpg?VersionId=xxPdaJBmVv9tybUT3CMAq7lf5blH.Q4h&size=690:388",
        date: "12/09/2023"
    }
    ])
    return (
        <StoreData.Provider value={[data, dataf]}>
            {props.children}
        </StoreData.Provider>
    )
}

export default DataStore