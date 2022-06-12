import React from "react";
import IndexCard from "../components/index/IndexCard";
import KSwissImg from "../assets/images/project-images/K-Swiss-Img.jpeg";
import HalaImg from "../assets/images/project-images/Hala-Somehow-Img.jpg";

const projects = [
    { client: 'K-Swiss', project: 'Hideout', year: '2021', img: KSwissImg, director: 'coool', execprod: 'Executive Producer: Casey Lock', producer: 'Brendan Brown', prodcompany: 'Method and Madness', dp: 'Kevin Horn', firstAC: 'Javier Castillo & Carlos Cabrera-Mayol', steadicam: 'Steadicam Op: Kevin Veselka', gaffer: 'Stephen Wester', keygrip: 'Key Grip: William Westgaard', grip: 'Grip: Brandon Hinsley', firstAD: 'Phil Evans', pa: 'Alex Leeds', productiondesigner: 'Mitch Ransdell', editor: 'Max Mooney', colorist: 'Kevin Horn', origmusic: 'Original Music, Sound Design, and Mix:  Ethan Houser', thankyou1: 'Jorie and Mike Landfear', thankyou2: 'Chinatown Square Association', thankyou3: 'The Grove', thankyou4: 'Atlas Lighting', actor1: "Thief #1: Kenyon Ellsworth", actor2: "Guard #1: Nic Gohl", actor3: "Thief #2: Jimmy Sisto", actor4: "Thief #3: Ryan Nolen", actor5: "Guard #2: Buddy Heeley", actor6: "SWAT #1: Ric Morgan", actor7: "SWAT #2: Mitch McAndrew",
	actor8: "SWAT #3: Jake Nokovic", actor9: "SWAT #4: John TerEick", actor10: "SWAT #5: Kenyon Ellsworth", 
	extra1: "Mitch McAndrew", extra2: "Grace Moore", extra3: "Lainey Muhlberg", extra4: "Alicia Maciel", extra5: "Amandari Karaca", extra6: "Traer Schon", extra7: "Emily Nolan"
	},
    { client: 'Hala', project: 'Somehow', year: '2020', img: HalaImg, director: 'coool', producer: 'Casey Lock', prodcompany: 'Method and Madness', dp: 'David Hughes Jr', firstAC: 'Neil Shukla', gaffer: 'Ryan Zeller', grip: 'Grips: Jacob Joiner, Luke Dyra', setphotography: "Set Photography: Haley Atherton", firstAD: 'Phil Evans', pa: 'Zach Krueger, Alex Leeds', productiondesigner: 'Dae Gonzalez', artpa: "Art PA: Cody Wallace", editor: 'Max Mooney', colorist: 'Sam Howells', sounddesign: 'Sound Design and Mix: Andrew TerEick', titledesign: "Title Design: John TerEick", actor6: "Gutter Gang: Ian Ruhala, Aoibheann Parks, Christina Reis, David Heeley", actor7: "King Pins: Billy Hoffman, Joe Fujan, Kellen Shaffer, Laura De Sousa"
	},
]
 
function Index() {
	return (
		<div>
			<IndexCard client='Client' project='Project' year='Year' projects={projects} />
		</div>
	);
}

export default Index;
