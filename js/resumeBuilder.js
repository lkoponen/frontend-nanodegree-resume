/*
This is empty on purpose! Your code to build the resume will go here.
 */

 /*Code exercises from beginning of course*/
// var awesomeThoughts = "I am Lili and I am awesome!";
// var funThoughts = awesomeThoughts.replace("awesome", "fun");
// console.log(awesomeThoughts);
// console.log(funThoughts);

// $("#main").append(funThoughts);

// var name = "Lili Koponen";
// var role = "Front-end Web Developer";

// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// var skills = 
// 	["awesomeness", "programming", "teaching", "JS"];

// // $("#main").append(skills);
// $("#main").append(skills[0]);


var bio = {
	"name" : "Lili Koponen",
	"role" : "Front-end Web Developer",
	"contacts" : {
		"mobile" : "916-284-6352",
		"email" : "ljkoponen@gmail.com",
		"github" : "https://github.com/lkoponen",
		"location" : "Los Angeles, CA"
	},
	"pictureUrl" : "images/profile.jpg",
	"welcomeMessage" : "Hello! Welcome to my resume!",
	"skills" : [
		"JavaScript", "HTML", "CSS", "QA"
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "The J. Paul Getty Trust",
			"title" : "Associate IT Education Specialist",
			"location" : "Los Angeles, CA",
			"dates" : "May 2013 - Present",
			"description" : "Develop curriculum for and teach classes for new employee technical onboarding and application upgrades. Write and edit technical documentation. Maintain internal staff website. Script, film, and edit training videos."			
		},
		{
			"employer" : "Lingerie Fashion Shop",
			"title" : "Web Producer",
			"location" : "Los Angeles, CA",
			"dates" : "April 2012 - April 2013",
			"description" : "Manage social media presence for store. Update and manage website through Volusion CMS. Photograph and edit new product images. Deliver online customer service."
		},
		{
			"employer" : "Le Marche Gourmet",
			"title" : "Web Intern",
			"location" : "Sacramento, CA",
			"dates" : "February 2011 - September 2011",
			"description" : "Transfer website contents from Volusion CMS to Shopify CMS. Update and maintain website. Design layout and organization of new site. Copywriting."
		}
	]
}

var education = {
	"schools" : [
		{
			"name" : "UCLA",
			"dates" : "2005-2010",
			"degree" : "BA",
			"major" : "Political Science",
			"location" : "Los Angeles, CA",
			"url" : "http://www.ucla.edu/"
		},
		{
			"name" : "Udacity",
			"dates" : "2015",
			"degree" : "Nanodegree",
			"major" : "Front-end Development",
			"location" : "Los Angeles, CA",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	],
	"onlineCourse" : [
		{
			"title" : "Outlook 2013: Efficient Email Management",
			"school" : "lynda.com",
			"dates" : "April 27, 2015",
			"url" : "http://www.lynda.com/Outlook-tutorials/Outlook-2013-Efficient-Email-Management/179051-2.html"
		},
		{
			"title" : "Web Design Fundamentals (2010)",
			"school" : "lynda.com",
			"dates" : "July 27, 2013",
			"url" : "http://www.lynda.com/Web-Design-tutorials/Web-Design-Fundamentals/177837-2.html"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Portfolio Web Pages",
			"dates" : "October 2015",
			"description" : "Web pages which display HTML experience. Also showcase use of Bootstrap framework.",
			"images" : [
				"http:lorempixel.com/400/200/animals", "http:lorempixel.com/400/205/animals"
			]
		},
				{
			"title" : "Portfolio Web Pages",
			"dates" : "October 2015",
			"description" : "Web pages which display HTML experience. Also showcase use of Bootstrap framework.",
			"images" : [
				"http:lorempixel.com/400/200/animals", "http:lorempixel.com/400/205/animals"
			]
		}
	]
}


// $("#main").append(bio.name);
// $("#main").append(bio.role);
// $("#main").append(bio.contacts);
// $("#main").append(bio.pictureUrl);
// $("#main").append(bio.welcomeMessage);
// $("#main").append(bio.skills);
// $("#main").append(work["currentPosition"]);
// $("#main").append(education.name);

//format name and role in header and prepend to header
var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedHeaderRole);

var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedHeaderName);

//format contact information and append to header
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

//format and append bio picture to header
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
$("#header").append(formattedBioPic);

//format and append welcome message to header
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

//format skills and append to div with id skills
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}


function displayWork() {
	for (professions in work.jobs) {
		if (work.jobs.hasOwnProperty(professions)) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[professions].employer);

			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[professions].title);

			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[professions].location);

			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[professions].dates);

			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[professions].description);

			$(".work-entry:last").append(formattedEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription);
		}
	}
}

displayWork();

projects.display = function() {
	for (newProject in projects.projects) {
		if (projects.projects.hasOwnProperty(newProject)) {
			$("#projects").append(HTMLprojectStart);

			//format and append project title
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[newProject].title);
			$(".project-entry:last").append(formattedProjectTitle);

			//format and append project dates
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[newProject].dates);
			$(".project-entry:last").append(formattedProjectDates);

			//format and append project description
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[newProject].description);
			$(".project-entry:last").append(formattedProjectDescription);

			//forEach loop which will format and append project images
			projects.projects[newProject].images.forEach(function (val) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", val);
				$(".project-entry:last").append(formattedProjectImage);
			});
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);

//Hidden Internationalization Button
// function inName(name) {
// 	//create name array by removing trailing and leading white space and splitting on the space
// 	name = name.trim().split(" ");
	
// 	//print name to console to check for accuracy
// 	console.log(name);

// 	//manipulate second item in array to uppercase
// 	name[1] = name[1].toUpperCase();

// 	//ensure that first item in array will always start with a capital letter and end with lowercase letters
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

// 	//return the two items in the array joined by a space
// 	return name[0] + " " + name[1];
// }

// $("#main").append(internationalizeButton);