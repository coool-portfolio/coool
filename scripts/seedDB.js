const mongoose = require("mongoose");
const db = require("../models");
const { insertMany } = require("../models/Project");

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/cooolprojects",
	{ useNewURLParser: true }
);

const projectSeed = [
	{
		client: "K-Swiss\nMethod & Madness",
		mainPageActive: true,
		title: "Hideout",
		year: "2022",
		credits:
			"Director: coool\nExecutive Producer: Casey Lock\nProducer: Brendan Brown\nProd. Company: Method and Madness\n\nDP: Kevin Horn\n1st AC: Javier Castillo & Carlos Cabrera-Mayol\nSteadicam Op: Kevin Veselka\n\nGaffer: Stephen Wester\nKey Grip: William Westgaard\nGrip: Brandon Hinsley\n\n1st AD: Phil Evans\nPA: Alex Leeds\n\nProduction Designer: Mitch Ransdell\nEditor: Max Mooney\nColorist: Kevin Horn\nOriginal Music, Sound Design and Mix: Ethan Houser\n\nThank you to:\nJorie and Mike Landfear\nChinatown Square Association\nThe Grove\nAtlas Lighting\n\nThief #1: Kenyon Ellsworth\nGuard #1: Nic Gohl\nThief #2: Jimmy Sisto\nThief #3: Ryan Nolen\nGuard #2: Buddy Heeley",
		preview: "https://player.vimeo.com/video/722579273?h=c0ad86b01e",
		fullVideo:
			"https://player.vimeo.com/video/589106246?h=188fd4f2fb&title=0&byline=0&portrait=0&autoplay=1&loop=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978111-a9e4ae2c-df98-440a-920d-d479c5ac67e0.jpg",
		notes: "",
	},
	{
		client: "Kum & Go\nBrand Opus",
		mainPageActive: false,
		title: "Sad Food, Fresh Food",
		year: "2022",
		credits:
			"Director: John TerEick\nDP: David Hughes Jr.\nMix and Mastering: Ryan Deffet",
		preview: "",
		fullVideo: "https://www.youtube.com/watch?v=pSCPdO7Yxfc",
		stillImg:
			"https://drive.google.com/file/d/113Vp9nXgwx1L84NnzYvw0y7tazE5X3Rj/view",
		notes: "not yet released",
	},
	{
		client: "Walker\nMajestic Casual",
		mainPageActive: false,
		title: "Majestic Sessions",
		year: "2022",
		credits:
			"Director: John TerEick\nDP: David Hughes Jr.\nMix and Mastering: Ryan Deffet",
		preview: "",
		fullVideo: "https://www.youtube.com/watch?v=pSCPdO7Yxfc",
		stillImg:
			"https://drive.google.com/file/d/113Vp9nXgwx1L84NnzYvw0y7tazE5X3Rj/view",
		notes: "",
	},
	{
		client: "Portraits of Men Crying",
		mainPageActive: true,
		title: "Portraits of Men Crying",
		year: "2021",
		credits:
			"Directed by coool (John TerEick and Jake Nokovic)\n\nDirector of Photography\nDavid Hughes Jr.\n\nEditor Max Mooney\n\nArt Direction and Design\nBrian Hedrick\n\nColorist\nSam Howells\n\nSound Design and Mix\nAndrew TerEick\n\nBilly Hoffman\n\nJamaal Harris\n\nRyan Nolen\n\nJohn TerEick\n\nTravis Delgado\n\nJames Sisto\n\nSteve Pavlik\n\nOriginal Score\nAndrew TerEick\n\nAdditional Photography\nGarret Justus\n\nThanks\nLainey Muhlberg",
		preview: "https://player.vimeo.com/video/722578866?h=8c8e8f3648",
		fullVideo:
			"https://player.vimeo.com/video/546246624?h=396eb1378e&title=0&byline=0&portrait=0&autoplay=1&loop=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978152-3b05a0b7-cf52-4f7c-8a8a-48f6d70c57a3.jpeg",
		notes: "",
	},
	{
		client: "Ratboys\nTopshelf Records",
		mainPageActive: false,
		title: "Happy Birthday Ratboy",
		year: "2021",
		credits:
			"Directed by John TerEick\n\nDirector of Photography - Ryan Zeller \nCamera Assistant - Lucinda Harstrick \nGaffer - Stephen Wester \n\nEditor - Max Mooney \nColorist - David Hughes Jr. \n\nLocation Sound - Andrew TerEick \nFilm Sound Design and Mix - Andrew TerEick \nMusic Recording Engineer - Adam Beck \nRecording Assist / Monitors Engineer - Corey Willis \n\nRatboys is Julia Steiner, Dave Sagan, Sean Neumann, and Marcus Nuccio \n\nRhodes, Pocket Piano, Tambourine - Evan Loritsch \n\nSpecial Thanks To: \nSchubas Tavern \nPogi Studios \nAtlas Lighting \nTom Conrad\nEmily Egerton \nDan Apodaca  \nLainey Muhlberg \nDelia Nuccio ",
		preview: "",
		fullVideo: "https://www.youtube.com/watch?v=ajVAcqo6SpA&t=31s",
		stillImg:
			"https://drive.google.com/file/d/1hSrRsZPSeTceMwv3jk_fEK6HgZohlmFU/view",
		notes: "",
	},
	{
		client: "Disq\nSaddle Creek Records",
		mainPageActive: false,
		title: "Gentle",
		year: "2021",
		credits:
			"Directed by: coool (Jake Nokovic and John TerEick) \n\nStarring: Greta White\n\nDirector of Photography: David Hughes Jr\nFirst AC: Nichole Harmon\n\nEditor: Jake Nokovic\nColorist: Sam Howells\nVFX: John TerEick",
		preview: "",
		fullVideo: "https://www.youtube.com/watch?v=FX5XiGWQtiU",
		stillImg:
			"https://drive.google.com/file/d/1HxCZEXQ8VdPiNvaP47piCFHkugFfoZ2g/view",
		notes: "",
	},
	{
		client: "Sam Evian\nFat Possum Records",
		mainPageActive: true,
		title: "Time to Melt",
		year: "2021",
		credits:
			"Directed and Edited by: John TerEick\nProduced by: Lainey Muhlberg\n\nStarring\nAudrey Harden\nJan Cohen-Owens\n\nDirector of Photography: David Hughes \nJr.1st AC: Kenna Hynes\nGaffer: Adam MuroGrip: Evan Pritchard \nChoreographer: Kathy Patino\nProduction Assistant: Andrew TerEick\nColorist: Kevin Horn\nVFX: John TerEickPost\nSound Mix: Andrew TerEick\n\nThanks: Hannah Cohen, Mike Farino",
		preview: "https://player.vimeo.com/video/722579159?h=7608bd8e12",
		fullVideo: "https://www.youtube.com/embed/7EIyD_lQaXU?autoplay=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978361-95a4ba44-6e16-41c5-a15a-a3beaf3c4144.png",
		notes: "",
	},
	{
		client: "Tasha\nFather Daughter Records",
		mainPageActive: false,
		title: "Perfect Wife",
		year: "2021",
		credits:
			"Directed by: coool (John TerEick and Jake Nokovic)\n\nDirector of Photography: Cain Camacho\n1st AC: Bryan Wright\nGaffer: Kevin Veselka\n\nEditor: Max Mooney\nColorist: Cody L. Sandberg\n\nChoreography: Natalia White\n\nThanks: Pogi Studios, Atlas Lighting, Mitch McAndrew, Liam Brekke, Kai Lee Liu, Ryan Stephens, Kenyon Ellsworth, Lainey Muhlberg, Ashley Guerrero, Jessi Frick",
		preview: "",
		fullVideo: "https://www.youtube.com/watch?v=c-K2hAQNmss",
		stillImg:
			"https://drive.google.com/file/d/10ns_gP5FODAIu4-41EHbmFo1rZ28Ovi-/view",
		notes: "",
	},
	{
		client: "Lainey Strange\nLGM Records",
		mainPageActive: false,
		title: "Cowgirl Angels",
		year: "2021",
		credits:
			"Directed and Edited by: John TerEick\nDirector of Photography: David Hughes Jr.\nGaffer & Steadicam Operator: Kevin Veselka\nColorist: David Hughes Jr.\nTitles: Brian Hedrick\n\nStarring:\nLainey Muhlberg\nLuna\n\nSpecial Thanks:\nMarco Morales and Elise Metzger\nAmbler’s Texaco Station\nVillage of Dwight\nMitch Ransdell\nThe Grove\nCasey Lock",
		preview: "",
		fullVideo: "https://www.youtube.com/watch?v=tA0h8ypYb8M",
		stillImg:
			"https://drive.google.com/file/d/1vo4_ULppklVirUAdFsPczssstWM1reYM/view",
		notes: "",
	},
	{
		client: "Pet Symmetry\nTriple Crown Records",
		mainPageActive: true,
		title: "2021: A Personal Space Odyssey",
		year: "2021",
		credits:
			"Directed, Produced and Edited by: John TerEick (itscoool.com)\nDirector of Photography: David Hughes Jr\nGaffer: Carlos Cabrera-Mayol\nColorist: David Hughes Jr.\nThanks: Poste Golden, Future Use Studio, Asian Man Records, SCLTD, No Ear Buds, and You!",
		preview: "https://player.vimeo.com/video/722579118?h=c4e0c70e9d",
		fullVideo: "https://www.youtube.com/embed/B2nXcWyBYdE?autoplay=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978248-6f8f8008-10e9-4fdc-9af0-500b9f8d1643.png",
		notes: "",
	},

	{
		client: "Into It. Over It.\nTriple Crown Records",
		mainPageActive: true,
		title: "Dressing Down",
		year: "2021",
		credits:
			"Directed by: John TerEick\n\nDirector of Photography: David Hughes Jr\nGaffer: Ryan Zeller\n\nProduction Designer: Greta White\nArt Assistant: Heinrich Haley\nCostumer: Greta White\n\nProduction Manager: Lainey Muhlberg\n\nColorist: Sam Howells\nEditor: Jake Nokovic\nDIT: Same Howells\n\nStarring:\nAdriana Rose, Michael Wilson, Evan Thomas Weiss, Joe George, Adam Beck, Matt Frank, Angella Miller,  Nicolette Alvarez, Christine Goodwyne, Sam Porter, Michelle Johnsons, Laura Desousa, Chrissy Rosebud, Heinrich Haley",
		preview: "https://player.vimeo.com/video/722579427?h=2558561ea0",
		fullVideo: "https://www.youtube.com/embed/PchaMpnIhBU?autoplay=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978291-164c05d2-684a-4f68-942e-ee8dc42408be.png",
		notes: "",
	},
	{
		client: "Gagosian\nLittle Dot Studios",
		mainPageActive: true,
		title: "Gagosian Premieres: Gregory Crewdson",
		year: "2020",
		credits:
			"Chicago Unit\nDirected by: coool\nProduction Company: Little Dot Studios\nDirector of Photography: Adam Yafai\nGaffer: Ryan Zeller\nLocation Sound: Cody Wallace",
		preview: "https://player.vimeo.com/video/722579367?h=1f085cc247",
		fullVideo: "https://www.youtube.com/embed/GARXqyRfFcY?autoplay=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978398-184bc131-89b6-4326-aae8-bfadac975a66.png",
		notes: "",
	},
	{
		client: "Ratboys\nTopshelf Records",
		mainPageActive: false,
		title: "I Go Out at Night",
		year: "2020",
		credits:
			"Directed by: coool (John TerEick + Jake Nokovic)\nProducer: Lainey Muhlberg\nExecutive Producer: Casey Lock\nProduction Company: Method and Madness\n1st AD: Phil Evans\n\nDirector of Photography: David Hughes Jr\n1st AC: Nichole Harmon\nGaffer: Ethan Sandock\nGrips: Elena Baj, Gary Walker\n\nProduction Designer: Mitch Ransdell\nProduction Assistants: Brian Hedrick, Seamus Kreitzer, Jake Sagan\n\nEditor: Max Mooney\nColorist: Sam Howells\n\nSound Design and Mix: Zach Scheitlin\nTitle design: Brian Hedrick\n\nStarring: Julia Steiner, Dave Sagan, Sean Neumann, Marcus Nuccio, Joette Waters, Chloe the Pug\n\nSpecial thanks: The Grove, Tim Crisp, Lorin Ottlinger, Carol DiLorenzo, Whitehouse Post Chicago, Ross Zuchowski, Keynon Ellsworth, Kate Grube",
		preview: "",
		fullVideo: "https://www.youtube.com/watch?v=EeTcmm_tq7U",
		stillImg:
			"https://drive.google.com/file/d/1t7q-CSV96elMMWbVqqn3iO9Bo7ufRlf1/view",
		notes: "",
	},
	{
		client: "Hala\nCinematic Records",
		mainPageActive: true,
		title: "Emotional R&B",
		year: "2020",
		credits:
			"Directed by: coool (Jake Nokovic + John TerEick)\n\nProducer: Casey Lock\n1st AD: Phil Evans\nProduction Company: Method and Madness\n\nDirector of Photography: David Hughes Jr\n1st AC: Neil Shukla\nGaffer: Ryan Zeller\nGrips: Jacob Joiner, Luke Dyra\nSet Photographer: Haley Atherton\n\nProduction Designer: Dae Gonzalez\nArt PA: Cody Wallace\nProduction Assistants: Zach Krueger\n\nEditor: Max Mooney\nColorist: Sam Howells\nVisual Effects Designer: Anj Puglise\nTitle Design: John TerEick\n\nThanks: Adam Sarraga, Michael Crino, Ross Zuchowski, Whitehouse Post, Atlas Lighting Chicago, Motion Source",
		preview: "https://player.vimeo.com/video/722579380?h=53205fd7fd",
		fullVideo: "https://www.youtube.com/embed/bHHHbpQnd-4?autoplay=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978470-110c15c0-bee7-400b-b231-2b6393f3c211.png",
		notes: "",
	},
	{
		client: "Hala\nCinematic Records",
		mainPageActive: true,
		title: "Somehow",
		year: "2020",
		credits:
			"Directed by: coool (Jake Nokovic + John TerEick)\nProducer: Casey Lock\n1st AD: Phil Evans\nProduction Company: Method and Madness\n\nDirector of Photography: David Hughes Jr\n1st AC: Neil Shukla\nGaffer: Ryan Zeller\nGrips: Jacob Joiner, Luke Dyra\nSet Photographer: Haley Atherton\n\nProduction Designer: Dae Gonzalez\nArt PA: Cody Wallace\nProduction Assistants: Zach Krueger, Alex Leeds\n\nEditor: Max Mooney\nColorist: Sam Howells\nSound Design and Mix: Andrew TerEick\nTitle Design: John TerEick\n\nGutter Gang: Ian Ruhala, Aoibheann Parks, Christina Reis, David Heeley\nKing Pins: Billy Hoffman, Joe Fujan, Kellen Shaffer, Laura De Sousa\nReferee/Scorekeeper: Bob Kuhn\n\nBackground: Sam Howells, Shelby Slanger, Francis Harrington, Maddie Rogers, Matt Sigur, Lily Garcia, Savanna Ruiz, Seamus Kreitzer, Colleen Kennedy Larkin McGarr Steve Pavlik\n\nThanks: Timber Lanes Chicago, Adam Karstens, Bob Kuhn, Adam Sarraga, Michael Crino, Ross Zuchowski, Whitehouse Post, Atlas Lighting Chicago",
		preview: "https://player.vimeo.com/video/722578900?h=9292857ea0",
		fullVideo: "https://www.youtube.com/embed/U00fIl_ArHQ?autoplay=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978477-31abe61b-0498-4ca3-bd52-1f60e8156064.png",
		notes: "",
	},
	{
		client: "Slow Pulp\nWinspear Records",
		mainPageActive: true,
		title: "At It Again",
		year: "2020",
		credits:
			"Directed by coool (Jake Nokovic + John TerEick)\n\nExecutive Producer: Casey Lock \nProducer: Lucas Anderson \nDirector of Photography: David Hughes Jr.\n1st Assistant Camera: Nichole Harmon\n\nEditor: Max Mooney\nColorist: Sam Howells",
		preview: "https://player.vimeo.com/video/722579668?h=26cf5f979f",
		fullVideo: "https://www.youtube.com/embed/VRiENpklOO4?autoplay=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978490-463f0a23-f9f3-4915-acdf-bf6d1cdb6b0d.png",
		notes: "",
	},
	{
		client: "Deeper\nFire Talk Records",
		mainPageActive: true,
		title: "The Knife",
		year: "2020",
		credits:
			"Directed & Produced by coool\n(Jake Nokovič & John TerEick)\nExecutive Producer - Casey Lock\nAssistant Director - Phil Evans\n\nDirector of Photography - Jake Brusha\n1st AC - Kelsey Bunner\nDIT - Max Mooney\nGaffer - Josh Binder\nKey Grip - Brendan Davis\nProduction Assistants - Alex Leeds & Margo Hess\n\nStarring \nSteve Pavlik\nNic Gohl\nDrew McBride\nShiraz Bhatti\nKevin Fairbairn\n\nEditor - Max Mooney\nColorist - Sam Howells\nTitle Design - Dean Bengsten\n\nThanks\nMethod & Madness\nFast Lane Automotive\nJuan Del Castillo\nLainey Muhlberg\nAoibheann Parks\nSergio Gaspar\nMohammad Malik\nMiguel Olmedo",
		preview: "https://player.vimeo.com/video/722579630?h=16467148ad",
		fullVideo: "https://www.youtube.com/embed/6109rocRH-Q?autoplay=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978516-025d1c48-25fc-4ed8-8492-72accc1682b8.png",
		notes: "",
	},
	{
		client: "Into It. Over It.\nTriple Crown Records",
		mainPageActive: false,
		title: "We Prefer Indoors",
		year: "2020",
		credits:
			"Directed by: coool (John TerEick and Jake Nokovic) \nDirector of Photography: David Hughes Jr\nColorist: Sam Howells\nEditor: John TerEick\n\nEvan Thomas Weiss\nAdam Edward Beck\nMatthew Eugene Frank\nJoe George Shadid\n\nAlso featuring\nErik Czaja\nChristine Goodwyne\nAndy Hendricks\nJared Karns\nMike Kinsella\nMichael Lux\nMegan McCoy\nEmily McKern\nBob Nanna\nMarcus Nuccio\nClaire Parrott\nNicolette Sara\nJuj Sutton\nStephen Sutton\nPeter Tuerk\nJim Tuerk\n\nAlso featuring Bella, Nick, and Tux",
		preview: "",
		fullVideo: "https://www.youtube.com/watch?v=RAS2OCzOjUo",
		stillImg:
			"https://drive.google.com/file/d/1y6R_4EP8zy9aHAr8_HCroY-t8GK-zloU/view",
		notes: "",
	},
	{
		client: "Tenci\nKeeled Scales Records",
		mainPageActive: true,
		title: "No Wings",
		year: "2020",
		credits:
			"Directed by: coool (John TerEick and Jake Nokovic)\nProduction Manager: Lainey Muhlberg\n\nDirector of Photography: David Hughes Jr\nFirst AC: Jacob Velander\nSecond AC: Hannah Germaine\n\nEditor: Max Mooney\nColorist: Kalvin Johnson\nColor Producer: Brad Martin @ Optimus Chicago\n\nThanks: Casey Lock, Cinequipt, The LaVine Family, The Tomas Family, The TerEick Family",
		preview: "https://player.vimeo.com/video/722579197?h=435cc4f5a1",
		fullVideo: "https://www.youtube.com/embed/kq2QPimzQRw?autoplay=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978583-fe5503bd-0703-46bb-a5de-c729c1f27b16.jpg",
		notes: "",
	},
	{
		client: "Tenci\nKeeled Scales Records",
		mainPageActive: false,
		title: "Forgot My Horses Name",
		year: "2020",
		credits:
			"Directed by: coool (John TerEick and Jake Nokovic) \nProduction Manager: Lainey Muhlberg \n\nDirector of Photography: David Hughes Jr\nFirst AC: Jacob Velander\nSecond AC: Hannah Germaine\n\nColorist: Sam Howells\nTitle Design: Kenyon Elsworth\nSound Design and Mix: Andrew TerEick\n\nThanks: Casey Lock, Cinequipt, Sapphire The Horse, The LaVine Family, The Tomas Family",
		preview: "",
		fullVideo: "https://www.youtube.com/watch?v=YGhLl_61Pzs",
		stillImg:
			"https://drive.google.com/file/d/1V5dbAtRKRhhLmJq2LsV0HCX8cTZKrzwn/view",
		notes: "",
	},
	{
		client: "Tenci\nKeeled Scales Records",
		mainPageActive: false,
		title: "Serpent",
		year: "2020",
		credits:
			"Directed and Edited by: John TerEick\nDirector of Photography: Ariel Pomerantz\nThanks: Tina Scarpello, Danny Kutnink, Belle's Bagels, The City of Angels, Alex Pomerantz",
		preview: "",
		fullVideo: "https://www.youtube.com/watch?v=nqY0H3lsrEs",
		stillImg:
			"https://drive.google.com/file/d/1pXAdA0CjrtPCgZ3X7zoLtCTWSPQL6dyn/view",
		notes: "",
	},
	{
		client: "Disq\nSaddle Creek Records",
		mainPageActive: true,
		title: "Daily Routine",
		year: "2020",
		credits:
			"Directed by: coool (John TerEick + Jake Nokovic)\nProducer: Lainey Muhlberg\nExecutive Producer: Casey Lock\n1st AD: Phil Evans\nProduction Company: Method and Madness\n\nDirector of Photography: David Hughes Jr\n1st AC: Andrew Chapman\nGaffer: Jacob Joiner\nGrips: Gary Walker, Josh Bloome\n\nProduction Designer: Dae Gonzalez\nCostumer: Dae Gonzalez\nProduction Assistants: Alyssa Coyle\n\nEditor: Max Mooney\nColorist: Sam Howells\n\nStarring: Isaac de Broux-Slone, Raina Bock, Logan Severson, Shannon Connor, Brendan Manley\n\nThanks: Marco Morales, Jimmy Sisto, Kenyon Elsworth, Jeff Tafolla, Michael Crino, Patrick Burke, Ross Zuchowski, Whitehouse Post, Atlas Lighting Chicago, Eleven 04 Productions Chicago, Harry Holm, Sultan’s Market",
		preview: "https://player.vimeo.com/video/722579588?h=08f8d01693",
		fullVideo: "https://www.youtube.com/embed/_Xv1JByUZ9E?autoplay=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978616-3e3edd3a-9959-4997-9a00-aaac333bff8d.png",
		notes: "",
	},

	{
		client: "Disq\nSaddle Creek Records",
		mainPageActive: true,
		title: "Loneliness",
		year: "2020",
		credits: "",
		preview: "https://player.vimeo.com/video/722579545?h=a7b8d5b7ae",
		fullVideo: "https://www.youtube.com/embed/SGtD82ExtAQ?autoplay=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978645-9565864a-a4f8-4e01-aa64-c6b0605a14ba.png",
		notes: "",
	},
	{
		client: "Fat Night\nAcrophase Records",
		mainPageActive: false,
		title: "Live For Each Other",
		year: "2020",
		credits:
			"Directed by coool (John TerEick & Jake Nokovic)\nEdited by Max Mooney\nSound design and mix by Andrew TerEick\n\nBottle design by James Edmonson (OH no Type Co)\n\nStarring:\nFat Night (Dan Hanson, Gabe Gundacker, Ted Issen, Nik Ritchie)\nWyatt Waddell\nJohn TerEick\nMiranda Elaine\nDanielle Jones\nJake Pearson\nJake Nokovic\n...and introducing Yorick",
		preview: "",
		fullVideo: "https://www.youtube.com/watch?v=XzsuFBRDFhM&feature=youtu.be",
		stillImg:
			"https://drive.google.com/file/d/1GmL7gKw8gCp9dTJ_AFXNpNz5-9OAjl73/view",
		notes: "",
	},
	{
		client: "Ratboys\nTopshelf Records",
		mainPageActive: true,
		title: "Alien With A Sleepmask On",
		year: "2019",
		credits:
			"Directed by: coool (John TerEick + Jake Nokovic)\nProducer: Lainey Muhlberg\nExecutive Producer: Casey Lock\nProduction Company: Method and Madness\n1st AD: Phil Evans\n\nDirector of Photography: David Hughes Jr\n1st AC: Karena Amy\nGaffer: Bryan Racine\nGrips: Garrett Garcia, Mayank Mishra\n\nProduction Designer: Chris Tuttle\nWardrobe, Hair and Makeup: Casey Wood\nSpecial FX Makeup: Jamie Leodones\nArt PA: Daemon Gonzalez\nProduction Assistants: Logan Petitto, Brian Hedrick, Madolyn Rusen\nStill Photographer: Garret Cabello\n\nEditor: Max Mooney\nColorist: Sam Howells\nVisual Effects Designer: Anj Puglise\nAdditional Compositing: Carbon Chicago\nFlame Artists: Steven Wind, Ed Nichols\nCarbon Executive Producer: Gretchen Praeger\nSound Design and Mix: Marco Morales\nTitle design: Brian Hedrick\n\nStarring: Julia Steiner, Dave Sagan, Sean Neumann, Marcus Nuccio, Luke Asen, Clare Teeling, Grace Urrutia, Tim Crisp, Brian Hedrick\n\nThanks: Whitehouse Post Chicago, Ross Zuchowski, Stovetop Roasters, Adam Karstens, Keynon Ellsworth",
		preview: "https://player.vimeo.com/video/722578961?h=64f8ae2025",
		fullVideo: "https://www.youtube.com/embed/uqDNufv66Wg?autoplay=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978670-96a356ba-28e0-4927-a5fd-e32838cf9b4c.jpeg",
		notes: "",
	},
	{
		client: "Kim Tee",
		mainPageActive: false,
		title: "Too Deep",
		year: "2019",
		credits:
			"Directed by Jake Nokovic\nProduced by Lucas Anderson\n\nDirector of Photography: Spencer Nelson\n1st AC: Christian Spraungel\nGrip: Owen Seaton\n\nProduction Designer: Francine Thompson\n\nProduction Assistant: Will Tooke",
		preview: "",
		fullVideo: "https://www.youtube.com/watch?v=KTTRFhZNaVE",
		stillImg:
			"https://drive.google.com/file/d/105C097FgzrNMHJbq5qxmtiOXMMR1rscK/view",
		notes: "",
	},
	{
		client: "Katie Dey\nRun For Cover Records",
		mainPageActive: true,
		title: "Dissolving",
		year: "2019",
		credits:
			"Directed by: John TerEick and Dakota Sillyman\n1st AD: Tayler Robinson\nProducer: Lainey Muhlberg\nDirector of Photography: David Hughes Jr\n1st AC: Nichole Harmon\nProduction Designer: Chris Tuttle\nWardrobe, Hair and Makeup: Greta White\nProduction Assistant: Mikey Castillo\n\nStarring: Ashley Thompson\n\nEditor: John TerEick\nColor: The Mill Chicago\nColorist: Lindsey Mazur\nVFX: Anj Puglise\nTitle design: Brian Hedrick\nSound FX Provided by: Migell2\n\nThanks: Ashley Hutchison, Brad Hutchison, Tereasa Surratt, David Hernandez, Camp Wandawega, Spencer Radcliffe, Jay Noir, Jorie Landfear",
		preview: "https://player.vimeo.com/video/722579513?h=5295a81a22",
		fullVideo: "https://www.youtube.com/embed/JdQl53qwSAc?autoplay=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978688-527a8256-a4d0-4a22-bc0c-c86ef04923dd.png",
		notes: "",
	},
	{
		client: "Spencer Radcliffe\nRun For Cover Records",
		mainPageActive: true,
		title: "Here Comes the Snow",
		year: "2019",
		credits:
			"Directed by: Dakota Sillyman and John TerEick\n1st AD: Ash Thompson\nProduction Manager: Nick Barone\nDirector of Photography: Dan Frantz\n1st AC: Nichole Harmon\nGaffer / Grip: JT Klingenmeier and Jeremy Freedberg\nProduction Designer: Mitch Ransdell\nWardobe/Art/Set Dec: Greta White\nProduction Assistants: Katie Samuelsen, Jimmy Sisto, Carly Harrison, Myra Rivera, Abbie Brasch\n\nEditor: John TerEick\nColor: The Mill Chicago\nColorist: Lindsey Mazur\nColor Producer: Dan Butler\nSound: Noisefloor LTD.\nSound Designer & Mixer: A.J. Olstad\nArt Director: Brian Hedrick\n\nBand: Spencer Radcliffe, Tina Scarpello, Grant Engstrom, Jack Schenenauer\nCast: Jimmy Sisto, Jess Shoman, Courtney Coleman, Spencer Labute, Kate Sierzputowski, Caroline Walp, Kathryn Wilson, Elizabeth Smarz\nThanks: Spyners Pub, Maureen Sullivan",
		preview: "https://player.vimeo.com/video/722579315?h=31f97263b2",
		fullVideo: "https://www.youtube.com/embed/tZFUcZTyqD4?autoplay=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978784-17f0fcaa-fa95-4725-99df-a0c18ac0b529.png",
		notes: "",
	},
	{
		client: "Fat Night\nAcrophase Records",
		mainPageActive: false,
		title: "Sweet Nothings",
		year: "2019",
		credits:
			"Directed and Produced by: John TerEick\n1st AD: Tayler Robinson\nDirector of Photography: Jake Brusha\n1st AC: Igor Cedeno\nGaffer: Josh Binder\nProduction Assistants: Katie Samuelsen, Emma Kupor\n\nChoreography: Christina Reis\nDancers: Christina Reis & Katherine Stewart\n\nVenue lighting: Maya Bauman\n\nEditor: John TerEick\nColorist: Sam Howells\n\nThanks: Rachel Lee, Sleeping Village, & Hunter Korgel",
		preview: "",
		fullVideo: "https://www.youtube.com/watch?v=yINLTWJqhZo",
		stillImg:
			"https://drive.google.com/file/d/1tE79FQJO2vQ44IuvpoI--wmzwMt68n3C/view",
		notes: "",
	},
	{
		client: "Nike x Off-White\nPiff MPLS",
		mainPageActive: false,
		title: "",
		year: "2018",
		credits: "Directed by: Jake Nokovic\nPA: Will Tooke",
		preview: "",
		fullVideo: "https://vimeo.com/363653604",
		stillImg:
			"https://drive.google.com/file/d/1Ol-9i7E_9f1ylT_DZaPACYb4shj1t16u/view",
		notes: "",
	},
	{
		client: "Muerte's Death",
		mainPageActive: true,
		title: "Muerte's Death",
		year: "2018",
		credits:
			"Directed by: coool\nDir. of Photography: Jake Brusha\nProducer: Donny",
		preview: "https://player.vimeo.com/video/722579233?h=bc23b206c9",
		fullVideo:
			"https://player.vimeo.com/video/362910525?h=9b4df0fbf9&title=0&byline=0&portrait=0&autoplay=1&loop=1",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176978822-c9f29f62-1637-4d64-baba-ab797c65abe0.png",
		notes: "",
	},
	{
		client: "Urban Outfitters\nDizzy Fae",
		mainPageActive: true,
		title: "New Sounds x Dizzy Fae",
		year: "2018",
		credits: "Directed by: Jake Nokovic\nPA: Brendan Lauer & Hannah Germaine",
		preview: "https://player.vimeo.com/video/722579473?h=64d1bdaba0",
		fullVideo:
			"https://player.vimeo.com/video/285129219?h=30852f60df&autoplay=1&loop=1&color=ffffff&portrait=0",
		stillImg:
			"https://user-images.githubusercontent.com/89707381/176979381-c02cb638-3ee3-4464-9bdb-e3c56975c1db.png",
		notes: "",
	},
	{
		client: "Space Gators",
		mainPageActive: false,
		title: "Is it Right? Is it Wrong?",
		year: "2018",
		credits:
			"Directed by: coool \nDirector of Photography: Jake Brusha\nEditor: John TerEick\nColorist: Jacob McKee @ The Mill Chicago\nTalent: Jon Levert\nAC: Hannah Germaine\nGaffer / Grip: JT Klingenmeier\nProduction Assistants:\nEditor: John TerEick\nColor: The Mill Chicago\nColorist: Jacob McKee\nColor Producer: Dan Butler\nSound Designer & Mixer: Ryan Deffet\nArt Director: Brian Hedrick\nAnimation: Jason Noir",
		preview: "",
		fullVideo: "https://www.youtube.com/watch?v=npqsHq-m6ww",
		stillImg:
			"https://drive.google.com/file/d/1C2YHXby8s0o36fosAUrBMAVz1rcpKOFn/view",
		notes: "",
	},
	{
		client: "La Croix",
		mainPageActive: false,
		title: "Crying",
		year: "2019",
		credits:
			"Directed by: coool\nCinematographer: Joe McNairy\nArt director: Kayleigh O'brien\nCopywriter: Bobby Kuhn\nColourist: Lindsey Mazur\nDigital Intermediate: The Mill Chicago\nAnimator: Carolina Lopez\nThanks: Cinequipt, Greenhouse",
		preview: "",
		fullVideo: "https://vimeo.com/362910551",
		stillImg:
			"https://drive.google.com/file/d/1e6BiJmUvcvKRGrcGrJywPeDA2H53VCku/view",
		notes: "",
	},
	{
		client: "REI",
		mainPageActive: false,
		title: "Two of Us",
		year: "2018",
		credits:
			"Directed by: coool\nCinematographer: Joe McNairy\nAC: spencer nelson\nSound Design / Mix: A.J. Olstad\nColorist: Lindsey Mazur\nThanks: Matthew Berglund, Cinequipt, Pixel Farm, Noisefloor, The Tomas Family",
		preview: "",
		fullVideo: "https://vimeo.com/362909701",
		stillImg:
			"https://drive.google.com/file/d/180mkTlV2-8Lz7BNfCc84cA4qe8umTaAK/view",
		notes: "",
	},
	// {
	// 	client: "",
	//  mainPageActive: false,
	// 	title: "",
	// 	year: "",
	// 	credits: "",
	// 	preview: "",
	// 	fullVideo: "",
	// 	stillImg: "",
	// 	notes: "",
	// },
];

db.Project.deleteMany({})
	.then(() => db.Project.collection.insertMany(projectSeed))
	.then((data) => {
		console.log(data.result + " records inserted");
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
