var fs = require("fs");
var path = require("path");

function getSpeakerInfo() {
	const speakersPath = "./assets/speaker_data/";
	var speakers = fs.readdirSync(speakersPath).filter(item => item != ".DS_Store");

	var info = {}

	for(var i in speakers) {
		var speaker = speakers[i];

		var speakerName = speaker.split("_").map(function(word) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		}).join(" ");

		if (fs.lstatSync(speakersPath).isDirectory(speaker)) {
			info[speakerName] = {}

			var dataDir = speakersPath + speaker;

			// get image
			var imagePath = dataDir + "/image.jpg";
			if (fs.existsSync(imagePath)) {
				info[speakerName].imagePath = imagePath;
			}

			// get lecture information
			var lectureInfoPath = dataDir + "/lecture_info.txt";
			if (fs.existsSync(lectureInfoPath)) {
				info[speakerName].lectureInfoPath = lectureInfoPath;
				contents = fs.readFileSync(lectureInfoPath).toString();
				contents = contents.split("\n").filter(item => item);
				info[speakerName].lectureHeading = contents[0];
				info[speakerName].lectureAbstract = contents.slice(1);
			}

			// get category
			var categoryInfoPath = dataDir + "/category.txt";
			if (fs.existsSync(categoryInfoPath)) {
				info[speakerName].categoryInfoPath = categoryInfoPath;
				info[speakerName].category = fs.readFileSync(categoryInfoPath).toString();
			}

			// get affiliation
			var affiliationInfoPath = dataDir + "/affiliation.txt";
			if (fs.existsSync(affiliationInfoPath)) {
				info[speakerName].affiliationInfoPath = affiliationInfoPath;
				info[speakerName].affiliation = fs.readFileSync(affiliationInfoPath).toString();
			}
		}
	}

	return info;
}

function getSponsorInfo() {
	const sponsorsPath = "./assets/images/sponsors/";
	const cssPath = "./assets/css/";
	var sponsors = fs.readdirSync(sponsorsPath).filter(item => item != ".DS_Store");

	var info = []

	for(var i in sponsors) {
		sponsor_secton = [];
		var sponsor = sponsors[i];

		var filePath = sponsorsPath + sponsor;
		if (fs.lstatSync(filePath).isFile()) {
			sponsor_secton.push(filePath);
			sponsor_secton.push("http://www."+sponsor.split(".")[0].split("_").join("."));
		}

		if(sponsor_secton) {
			info.push(sponsor_secton)
		}
	}

	return info;
}

function getOrganiserData() {
	const speakersPath = "./assets/organiser_data/";
	var speakers = fs.readdirSync(speakersPath).filter(item => item != ".DS_Store");

	var info = {}

	for(var i in speakers) {
		var speaker = speakers[i];

		var speakerName = speaker.split("_").map(function(word) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		}).join(" ");

		if (fs.lstatSync(speakersPath).isDirectory(speaker)) {
			info[speakerName] = {}

			var dataDir = speakersPath + speaker;

			// get image
			var imagePath = dataDir + "/image.jpg";
			if (fs.existsSync(imagePath)) {
				info[speakerName].imagePath = imagePath;
			}

			// get category
			var linkInfoPath = dataDir + "/link.txt";
			if (fs.existsSync(linkInfoPath)) {
				info[speakerName].linkInfoPath = linkInfoPath;
				info[speakerName].link = fs.readFileSync(linkInfoPath).toString();
			}

			// get affiliation
			var affiliationInfoPath = dataDir + "/affiliation.txt";
			if (fs.existsSync(affiliationInfoPath)) {
				info[speakerName].affiliationInfoPath = affiliationInfoPath;
				info[speakerName].affiliation = fs.readFileSync(affiliationInfoPath).toString();
			}
		}
	}

	return info;
}

// console.log(getSpeakerInfo());
// console.log(getSponsorInfo());
console.log(getOrganiserData());
