/*
This is empty on purpose! Your code to build the resume will go here.
 */
//Create objects which contain data for page
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
		"JavaScript", "HTML", "CSS", "Quality Assurance", "Microsoft Excel"
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
			"title" : "Cheree Honey Model Page",
			"dates" : "October 2015",
			"description" : "Web site which displays HTML and CSS experience. Also showcases use of Bootstrap framework, including using modals.",
			"images" : [
				"images/model_site_1.jpg", "images/model_site_2.jpg"
			]
		},
				{
			"title" : "Portfolio Web Page",
			"dates" : "October 2015",
			"description" : "Simple web site which displays HTML and CSS experience. Also showcases use of Bootstrap framework.",
			"images" : [
				"images/portfolio_site_1.jpg"
			]
		}
	]
}

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

	for (skills in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skills]);
		$("#skills").append(formattedSkill);
	}
}

//format jobs and append to div with id workExperience
work.display = function() {
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

work.display();

//format projects and append to div with id projects
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

//format and append education to div with id education
education.display = function() {
	//format and append schools to div with id education
	for (newSchool in education.schools) {
		if (education.schools.hasOwnProperty(newSchool)) {
			$("#education").append(HTMLschoolStart);

			//format and append school name and degree
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[newSchool].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[newSchool].degree);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);	

			//format and append school dates
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[newSchool].dates);
			$(".education-entry:last").append(formattedSchoolDates);	

			//format and append school location
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[newSchool].location);
			$(".education-entry:last").append(formattedSchoolLocation);	

			//format and append school major
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[newSchool].major);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}

	//add heading for Online Courses
	$("#education").append('<h3 id="onlineCourse">Online Courses</h3>');

	//format and append online courses
	for (newOnlineCourse in education.onlineCourse) {
		if (education.onlineCourse.hasOwnProperty(newOnlineCourse)) {
			$("#education").append(HTMLonlineClasses);

			//format and append online course name and degree
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[newOnlineCourse].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[newOnlineCourse].school);
			$(".online-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

			//format and append online course dates
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[newOnlineCourse].dates);
			$(".online-entry:last").append(formattedOnlineDates);

			//format and append online course url
			var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourse[newOnlineCourse].url);
			$(".online-entry:last").append(formattedOnlineUrl);
		}
	}
}

education.display();

//append "Where have I worked" map to div with id mapDiv
$("#mapDiv").append(googleMap);


/*
//Hidden Internationalization Button 
function inName(name) {
	//create name array by removing trailing and leading white space and splitting on the space
	name = name.trim().split(" ");
	
	//print name to console to check for accuracy
	console.log(name);

	//manipulate second item in array to uppercase
	name[1] = name[1].toUpperCase();

	//ensure that first item in array will always start with a capital letter and end with lowercase letters
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	//return the two items in the array joined by a space
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
*/