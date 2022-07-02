//test value
const jsonTest = [
	{
		_id: "62ba433e05b4a12c6ac2a4a6",
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
		_id: "62ba433e05b4a12c6ac2a4a7",
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
];

jsonParseToArray();

async function jsonParseToArray() {
	// // just loops thru array of json
	// for (let i = 0; i < jsonTest.length; i++) {
	// 	creditParse(jsonTest[i].credits);
	// }

	//allows us to break up projects by key
	jsonTest.forEach((project) => {
		for (let key in project) {
			if (key === "credits") {
				creditParse(project[key], 2);
			}
		}
	});
}

async function creditParse(credits, columnDecider) {
	//Splits every credit line into a different index
	const creditArray = credits.split("\n");

	const creditArrDivider = Math.round(creditArray.length / 3);

	const creditCol1Arr = [];
	const creditCol2Arr = [];
	const creditCol3Arr = [];

	console.log(`CreditArrary length is: ${creditArray.length}`);
	console.log(`CreditArrDivider is: ${creditArrDivider}`);

	//if credits are less than 9 lines, put all credits in first column
	//if credits are greater than or equal to 9, divide credits by 3 and return based on column is called
	//return empty else
	if (creditArray.length < 9 && columnDecider === 1) {
		return creditArray;
	} else if (creditArray.length >= 9) {
		for (let i = 0; i < creditArray.length; i++) {
			if (i < creditArrDivider) {
				creditCol1Arr[i] = creditArray[i];
				console.log("testing creditCol1Arr: " + creditCol1Arr[i]);
			} else if (i >= creditArrDivider && i < creditArrDivider * 2) {
				creditCol2Arr[i] = creditArray[i];
				console.log("testing creditCol2Arr: " + creditCol2Arr[i]);
			} else {
				creditCol3Arr[i] = creditArray[i];
				console.log("testing creditCol3Arr: " + creditCol3Arr[i]);
			}
		}

		if (columnDecider === 1) {
			console.log("TESTING CREDCOL1ARR: " + creditCol1Arr);
			console.log("END OF CREDIT PARSE 1");
			return creditCol1Arr;
		}
		if (columnDecider === 2) {
			console.log("TESTING CREDCOL2ARR: " + creditCol1Arr);
			console.log("END OF CREDIT PARSE 2");
			return creditCol2Arr;
		}
		if (columnDecider === 3) {
			console.log("TESTING CREDCOL3ARR: " + creditCol1Arr);
			console.log("END OF CREDIT PARSE 3");
			return creditCol3Arr;
		}
	} else {
		return;
	}
	console.log("END OF CREDIT PARSE EMPTY RETURN");
}
