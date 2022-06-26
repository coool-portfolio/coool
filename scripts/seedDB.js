const mongoose = require("mongoose");
const db = require("../models");
const { insertMany } = require("../models/project");

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
		preview:
			"https://drive.google.com/file/d/1JM4qSy8XMWQpy8noCtIMUDJSMuF_vi4q/view",
		fullVideo: "https://vimeo.com/589106246",
		stillImg:
			"https://drive.google.com/file/d/1-4NifBOt4qw0eDExMM44Y5_Ddb1oYcsQ/view",
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
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "Portraits of Men Crying",
		mainPageActive: true,
		title: "Portraits of Men Crying",
		year: "2021",
		credits:
			"Directed by coool (John TerEick and Jake Nokovic)\n\nDirector of Photography\nDavid Hughes Jr.\n\nEditor Max Mooney\n\nArt Direction and Design\nBrian Hedrick\n\nColorist\nSam Howells\n\nSound Design and Mix\nAndrew TerEick\n\nBilly Hoffman\n\nJamaal Harris\n\nRyan Nolen\n\nJohn TerEick\n\nTravis Delgado\n\nJames Sisto\n\nSteve Pavlik\n\nOriginal Score\nAndrew TerEick\n\nAdditional Photography\nGarret Justus\n\nThanks\nLainey Muhlberg",
		preview: "https://vimeo.com/722578866/8c8e8f3648",
		fullVideo: "https://vimeo.com/546246624/396eb1378e",
		stillImg:
			"https://drive.google.com/file/d/1yTBSGUVrKgkdKfLLuBN5EOCY_JgDyRaD/view",
		notes: "",
	},
	{
		client: "Ratboys\nTopshelf Records",
		mainPageActive: false,
		title: "Happy Birthday Ratboy",
		year: "2021",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "Disq\nSaddle Creek Records",
		mainPageActive: false,
		title: "Gentle",
		year: "2021",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "Sam Evian\nFat Possum Records",
		mainPageActive: true,
		title: "Time to Melt",
		year: "2021",
		credits:
			"Directed and Edited by: John TerEick\nProduced by: Lainey Muhlberg\n\nStarring\nAudrey Harden\nJan Cohen-Owens\n\nDirector of Photography: David Hughes \nJr.1st AC: Kenna Hynes\nGaffer: Adam MuroGrip: Evan Pritchard \nChoreographer: Kathy Patino\nProduction Assistant: Andrew TerEick\nColorist: Kevin Horn\nVFX: John TerEickPost\nSound Mix: Andrew TerEick\n\nThanks: Hannah Cohen, Mike Farino",
		preview: "https://vimeo.com/722579159/7608bd8e12",
		fullVideo: "https://www.youtube.com/watch?v=7EIyD_lQaXU",
		stillImg:
			"https://drive.google.com/file/d/1D0iTODdzFpyhP4lIQc6872g1Um4jSyKv/view",
		notes: "",
	},
	{
		client: "Tasha\nFather Daughter Records",
		mainPageActive: false,
		title: "Perfect Wife",
		year: "2021",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "Lainey Strange\nLGM Records",
		mainPageActive: false,
		title: "Cowgirl Angels",
		year: "2021",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "Pet Symmetry\nTriple Crown Records",
		mainPageActive: true,
		title: "2021: A Personal Space Odyssey",
		year: "2021",
		credits:
			"Directed, Produced and Edited by: John TerEick (itscoool.com)\nDirector of Photography: David Hughes Jr\nGaffer: Carlos Cabrera-Mayol\nColorist: David Hughes Jr.\nThanks: Poste Golden, Future Use Studio, Asian Man Records, SCLTD, No Ear Buds, and You!",
		preview: "https://vimeo.com/722579118/c4e0c70e9d",
		fullVideo: "https://www.youtube.com/watch?v=B2nXcWyBYdE",
		stillImg:
			"https://drive.google.com/file/d/19ZKIxTC3AeHz8j0dXqsL61rZFY3A1xJM/view",
		notes: "",
	},

	{
		client: "Into It. Over It.\nTriple Crown Records",
		mainPageActive: true,
		title: "Dressing Down",
		year: "2021",
		credits:
			"Directed by: John TerEick\n\nDirector of Photography: David Hughes Jr\nGaffer: Ryan Zeller\n\nProduction Designer: Greta White\nArt Assistant: Heinrich Haley\nCostumer: Greta White\n\nProduction Manager: Lainey Muhlberg\n\nColorist: Sam Howells\nEditor: Jake Nokovic\nDIT: Same Howells\n\nStarring:\nAdriana Rose, Michael Wilson, Evan Thomas Weiss, Joe George, Adam Beck, Matt Frank, Angella Miller,  Nicolette Alvarez, Christine Goodwyne, Sam Porter, Michelle Johnsons, Laura Desousa, Chrissy Rosebud, Heinrich Haley",
		preview: "https://vimeo.com/722579427/2558561ea0",
		fullVideo: "https://www.youtube.com/watch?v=PchaMpnIhBU",
		stillImg:
			"https://drive.google.com/file/d/1gLO7WY4DnCGOMHXoyNLuKLfCpYahoWje/view",
		notes: "",
	},
	{
		client: "Gagosian\nLittle Dot Studios",
		mainPageActive: true,
		title: "Gagosian Premieres: Gregory Crewdson",
		year: "2020",
		credits:
			"Chicago Unit\nDirected by: coool\nProduction Company: Little Dot Studios\nDirector of Photography: Adam Yafai\nGaffer: Ryan Zeller\nLocation Sound: Cody Wallace",
		preview: "https://vimeo.com/722579367/1f085cc247",
		fullVideo: "https://www.youtube.com/watch?v=GARXqyRfFcY&t=4s",
		stillImg:
			"https://drive.google.com/file/d/1TEcxwNgQy_tJ2U_vVGIdVLceZRbLGh_O/view",
		notes: "",
	},
	{
		client: "Ratboys\nTopshelf Records",
		mainPageActive: false,
		title: "I Go Out at Night",
		year: "2020",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "Hala\nCinematic Records",
		mainPageActive: true,
		title: "Emotional R&B",
		year: "2020",
		credits:
			"Directed by: coool (Jake Nokovic + John TerEick)\n\nProducer: Casey Lock\n1st AD: Phil Evans\nProduction Company: Method and Madness\n\nDirector of Photography: David Hughes Jr\n1st AC: Neil Shukla\nGaffer: Ryan Zeller\nGrips: Jacob Joiner, Luke Dyra\nSet Photographer: Haley Atherton\n\nProduction Designer: Dae Gonzalez\nArt PA: Cody Wallace\nProduction Assistants: Zach Krueger\n\nEditor: Max Mooney\nColorist: Sam Howells\nVisual Effects Designer: Anj Puglise\nTitle Design: John TerEick\n\nThanks: Adam Sarraga, Michael Crino, Ross Zuchowski, Whitehouse Post, Atlas Lighting Chicago, Motion Source",
		preview: "https://vimeo.com/722579380/53205fd7fd",
		fullVideo: "https://www.youtube.com/watch?v=bHHHbpQnd-4",
		stillImg:
			"https://drive.google.com/file/d/11Akj4cuEDhXGmFDbpOQ3lbvPehGl_xlU/view",
		notes: "",
	},
	{
		client: "Hala\nCinematic Records",
		mainPageActive: true,
		title: "Somehow",
		year: "2020",
		credits:
			"Directed by: coool (Jake Nokovic + John TerEick)\nProducer: Casey Lock\n1st AD: Phil Evans\nProduction Company: Method and Madness\n\nDirector of Photography: David Hughes Jr\n1st AC: Neil Shukla\nGaffer: Ryan Zeller\nGrips: Jacob Joiner, Luke Dyra\nSet Photographer: Haley Atherton\n\nProduction Designer: Dae Gonzalez\nArt PA: Cody Wallace\nProduction Assistants: Zach Krueger, Alex Leeds\n\nEditor: Max Mooney\nColorist: Sam Howells\nSound Design and Mix: Andrew TerEick\nTitle Design: John TerEick\n\nGutter Gang: Ian Ruhala, Aoibheann Parks, Christina Reis, David Heeley\nKing Pins: Billy Hoffman, Joe Fujan, Kellen Shaffer, Laura De Sousa\nReferee/Scorekeeper: Bob Kuhn\n\nBackground: Sam Howells, Shelby Slanger, Francis Harrington, Maddie Rogers, Matt Sigur, Lily Garcia, Savanna Ruiz, Seamus Kreitzer, Colleen Kennedy Larkin McGarr Steve Pavlik\n\nThanks: Timber Lanes Chicago, Adam Karstens, Bob Kuhn, Adam Sarraga, Michael Crino, Ross Zuchowski, Whitehouse Post, Atlas Lighting Chicago",
		preview: "https://vimeo.com/722578866/8c8e8f3648",
		fullVideo: "https://www.youtube.com/watch?v=U00fIl_ArHQ",
		stillImg:
			"https://drive.google.com/file/d/1EwIFdhzDuqmX3lpvRB3rqEFOU2opDGV2/view",
		notes: "",
	},
	{
		client: "Slow Pulp\nWinspear Records",
		mainPageActive: true,
		title: "At It Again",
		year: "2020",
		credits:
			"Directed by coool (Jake Nokovic + John TerEick)\n\nExecutive Producer: Casey Lock \nProducer: Lucas Anderson \nDirector of Photography: David Hughes Jr.\n1st Assistant Camera: Nichole Harmon\n\nEditor: Max Mooney\nColorist: Sam Howells",
		preview: "https://vimeo.com/722579668/26cf5f979f",
		fullVideo: "https://www.youtube.com/watch?v=VRiENpklOO4",
		stillImg:
			"https://drive.google.com/file/d/1s9mMFDZ6IZtE3V_MQfKB3u-aAKXhjy1s/view",
		notes: "",
	},
	{
		client: "Deeper\nFire Talk Records",
		mainPageActive: true,
		title: "The Knife",
		year: "2020",
		credits:
			"Directed & Produced by coool\n(Jake Nokovič & John TerEick)\nExecutive Producer - Casey Lock\nAssistant Director - Phil Evans\n\nDirector of Photography - Jake Brusha\n1st AC - Kelsey Bunner\nDIT - Max Mooney\nGaffer - Josh Binder\nKey Grip - Brendan Davis\nProduction Assistants - Alex Leeds & Margo Hess\n\nStarring \nSteve Pavlik\nNic Gohl\nDrew McBride\nShiraz Bhatti\nKevin Fairbairn\n\nEditor - Max Mooney\nColorist - Sam Howells\nTitle Design - Dean Bengsten\n\nThanks\nMethod & Madness\nFast Lane Automotive\nJuan Del Castillo\nLainey Muhlberg\nAoibheann Parks\nSergio Gaspar\nMohammad Malik\nMiguel Olmedo",
		preview: "https://vimeo.com/722579630/16467148ad",
		fullVideo: "https://www.youtube.com/watch?v=6109rocRH-Q&t=2s",
		stillImg:
			"https://drive.google.com/file/d/1V_4OX2H9bYxFWGn5nZ_BmPekUvM9HtCo/view",
		notes: "",
	},
	{
		client: "Into It. Over It.\nTriple Crown Records",
		mainPageActive: false,
		title: "We Prefer Indoors",
		year: "2020",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "Tenci\nKeeled Scales Records",
		mainPageActive: true,
		title: "No Wings",
		year: "2020",
		credits:
			"Directed by: coool (John TerEick and Jake Nokovic)\nProduction Manager: Lainey Muhlberg\n\nDirector of Photography: David Hughes Jr\nFirst AC: Jacob Velander\nSecond AC: Hannah Germaine\n\nEditor: Max Mooney\nColorist: Kalvin Johnson\nColor Producer: Brad Martin @ Optimus Chicago\n\nThanks: Casey Lock, Cinequipt, The LaVine Family, The Tomas Family, The TerEick Family",
		preview: "https://vimeo.com/722579197/435cc4f5a1",
		fullVideo: "https://www.youtube.com/watch?v=kq2QPimzQRw",
		stillImg:
			"https://drive.google.com/file/d/1rIBU1R5B7enY67wvMiqgHUkjgYdxG9t7/view",
		notes: "",
	},
	{
		client: "Tenci\nKeeled Scales Records",
		mainPageActive: false,
		title: "Forgot My Horses Name",
		year: "2020",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "Tenci\nKeeled Scales Records",
		mainPageActive: false,
		title: "Serpent",
		year: "2020",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "Disq\nSaddle Creek Records",
		mainPageActive: true,
		title: "Daily Routine",
		year: "2020",
		credits:
			"Directed by: coool (John TerEick + Jake Nokovic)\nProducer: Lainey Muhlberg\nExecutive Producer: Casey Lock\n1st AD: Phil Evans\nProduction Company: Method and Madness\n\nDirector of Photography: David Hughes Jr\n1st AC: Andrew Chapman\nGaffer: Jacob Joiner\nGrips: Gary Walker, Josh Bloome\n\nProduction Designer: Dae Gonzalez\nCostumer: Dae Gonzalez\nProduction Assistants: Alyssa Coyle\n\nEditor: Max Mooney\nColorist: Sam Howells\n\nStarring: Isaac de Broux-Slone, Raina Bock, Logan Severson, Shannon Connor, Brendan Manley\n\nThanks: Marco Morales, Jimmy Sisto, Kenyon Elsworth, Jeff Tafolla, Michael Crino, Patrick Burke, Ross Zuchowski, Whitehouse Post, Atlas Lighting Chicago, Eleven 04 Productions Chicago, Harry Holm, Sultan’s Market",
		preview: "https://vimeo.com/722579588/08f8d01693",
		fullVideo: "https://www.youtube.com/watch?v=_Xv1JByUZ9E",
		stillImg:
			"https://drive.google.com/file/d/1oZ0e571zvoyz1z3SO9itlk3Hea9r4Had/view",
		notes: "",
	},

	{
		client: "Disq\nSaddle Creek Records",
		mainPageActive: true,
		title: "Loneliness",
		year: "2020",
		credits: "",
		preview: "https://vimeo.com/722579545/a7b8d5b7ae",
		fullVideo: "https://www.youtube.com/watch?v=SGtD82ExtAQ",
		stillImg:
			"https://drive.google.com/file/d/1c-GMlmngSq8NNc7ibpPgp4fYW5CsI8lN/view",
		notes: "",
	},
	{
		client: "Fat Night\nAcrophase Records",
		mainPageActive: false,
		title: "Live For Each Other",
		year: "2020",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "Ratboys\nTopshelf Records",
		mainPageActive: true,
		title: "Alien With A Sleepmask On",
		year: "2019",
		credits:
			"Directed by: coool (John TerEick + Jake Nokovic)\nProducer: Lainey Muhlberg\nExecutive Producer: Casey Lock\nProduction Company: Method and Madness\n1st AD: Phil Evans\n\nDirector of Photography: David Hughes Jr\n1st AC: Karena Amy\nGaffer: Bryan Racine\nGrips: Garrett Garcia, Mayank Mishra\n\nProduction Designer: Chris Tuttle\nWardrobe, Hair and Makeup: Casey Wood\nSpecial FX Makeup: Jamie Leodones\nArt PA: Daemon Gonzalez\nProduction Assistants: Logan Petitto, Brian Hedrick, Madolyn Rusen\nStill Photographer: Garret Cabello\n\nEditor: Max Mooney\nColorist: Sam Howells\nVisual Effects Designer: Anj Puglise\nAdditional Compositing: Carbon Chicago\nFlame Artists: Steven Wind, Ed Nichols\nCarbon Executive Producer: Gretchen Praeger\nSound Design and Mix: Marco Morales\nTitle design: Brian Hedrick\n\nStarring: Julia Steiner, Dave Sagan, Sean Neumann, Marcus Nuccio, Luke Asen, Clare Teeling, Grace Urrutia, Tim Crisp, Brian Hedrick\n\nThanks: Whitehouse Post Chicago, Ross Zuchowski, Stovetop Roasters, Adam Karstens, Keynon Ellsworth",
		preview: "https://vimeo.com/722578961/64f8ae2025",
		fullVideo: "https://www.youtube.com/watch?v=uqDNufv66Wg",
		stillImg:
			"https://drive.google.com/file/d/1JDhRnGMlVBJOSzDZnKqWMU_oQVO9y1jl/view",
		notes: "",
	},
	{
		client: "Kim Tee",
		mainPageActive: false,
		title: "Too Deep",
		year: "2019",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "Katie Dey\nRun For Cover Records",
		mainPageActive: true,
		title: "Dissolving",
		year: "2019",
		credits:
			"Directed by: John TerEick and Dakota Sillyman\n1st AD: Tayler Robinson\nProducer: Lainey Muhlberg\nDirector of Photography: David Hughes Jr\n1st AC: Nichole Harmon\nProduction Designer: Chris Tuttle\nWardrobe, Hair and Makeup: Greta White\nProduction Assistant: Mikey Castillo\n\nStarring: Ashley Thompson\n\nEditor: John TerEick\nColor: The Mill Chicago\nColorist: Lindsey Mazur\nVFX: Anj Puglise\nTitle design: Brian Hedrick\nSound FX Provided by: Migell2\n\nThanks: Ashley Hutchison, Brad Hutchison, Tereasa Surratt, David Hernandez, Camp Wandawega, Spencer Radcliffe, Jay Noir, Jorie Landfear",
		preview: "https://vimeo.com/722579513/5295a81a22",
		fullVideo: "https://www.youtube.com/watch?v=JdQl53qwSAc",
		stillImg:
			"https://drive.google.com/file/d/1Mt9USamEredeTef_V3QdAFJunzFSx-Bo/view",
		notes: "",
	},
	{
		client: "Spencer Radcliffe\nRun For Cover Records",
		mainPageActive: true,
		title: "Here Comes the Snow",
		year: "2019",
		credits:
			"Directed by: Dakota Sillyman and John TerEick\n1st AD: Ash Thompson\nProduction Manager: Nick Barone\nDirector of Photography: Dan Frantz\n1st AC: Nichole Harmon\nGaffer / Grip: JT Klingenmeier and Jeremy Freedberg\nProduction Designer: Mitch Ransdell\nWardobe/Art/Set Dec: Greta White\nProduction Assistants: Katie Samuelsen, Jimmy Sisto, Carly Harrison, Myra Rivera, Abbie Brasch\n\nEditor: John TerEick\nColor: The Mill Chicago\nColorist: Lindsey Mazur\nColor Producer: Dan Butler\nSound: Noisefloor LTD.\nSound Designer & Mixer: A.J. Olstad\nArt Director: Brian Hedrick\n\nBand: Spencer Radcliffe, Tina Scarpello, Grant Engstrom, Jack Schenenauer\nCast: Jimmy Sisto, Jess Shoman, Courtney Coleman, Spencer Labute, Kate Sierzputowski, Caroline Walp, Kathryn Wilson, Elizabeth Smarz\nThanks: Spyners Pub, Maureen Sullivan",
		preview: "https://vimeo.com/722579315/31f97263b2",
		fullVideo: "https://www.youtube.com/watch?v=tZFUcZTyqD4",
		stillImg:
			"https://drive.google.com/file/d/1R_aSzpAxZTo-XvX1HJNy13sv-tKuuKuC/view",
		notes: "",
	},
	{
		client: "Fat Night\nAcrophase Records",
		mainPageActive: false,
		title: "Sweet Nothings",
		year: "2019",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "Nike x Off-White\nPiff MPLS",
		mainPageActive: false,
		title: "",
		year: "2018",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "Muerte's Death",
		mainPageActive: true,
		title: "Muerte's Death",
		year: "2018",
		credits:
			"Directed by: coool\nDir. of Photography: Jake Brusha\nProducer: Donny",
		preview: "https://vimeo.com/722579233/bc23b206c9",
		fullVideo: "https://vimeo.com/362910525",
		stillImg:
			"https://drive.google.com/file/d/1gCaE-Yc7H3CkJqzZ0f6RLFuNmUObCB9Y/view",
		notes: "",
	},
	{
		client: "Urban Outfitters\nDizzy Fae",
		mainPageActive: true,
		title: "New Sounds x Dizzy Fae",
		year: "2018",
		credits: "Directed by: Jake Nokovic\nPA: Brendan Lauer & Hannah Germaine",
		preview: "https://vimeo.com/722579473/64d1bdaba0",
		fullVideo:
			"https://vimeo.com/285129219?embedded=true&source=video_title&owner=12831423",
		stillImg:
			"https://drive.google.com/file/d/1KbkxYch8_oLS8EipvGK5E-sfqyZ1stOj/view",
		notes: "",
	},
	{
		client: "Space Gators",
		mainPageActive: false,
		title: "Is it Right? Is it Wrong?",
		year: "2018",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "La Croix",
		mainPageActive: false,
		title: "Crying",
		year: "2019",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
		notes: "",
	},
	{
		client: "REI",
		mainPageActive: false,
		title: "Two of Us",
		year: "2018",
		credits: "",
		preview: "",
		fullVideo: "",
		stillImg: "",
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

db.Project.remove({})
	.then(() => db.Project.collection.insertMany(projectSeed))
	.then((data) => {
		console.log(data.result + " records inserted");
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
