var bio = {
    "name" : "Kyle Struthers",
    "role" : "Web Developer",
    "welcomeMessage" : "Take a look at my resume!",
    "contacts" : {
        "mobile" : "480-495-5236",
        "email" : "kstruthe@gmail.com",
        "github" : "kstrut",
        "location" : "Austin, TX"
    },
    "bioPic" : "images/PuppyProfile.jpeg",
    "skills" : ["HTML", "CSS" , "Javascript" , "Python"]   
}

// display all bio information
bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    $("#topContacts , #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts , #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts , #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts , #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLskillsStart);
    for (skills in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skills]));
    }
}

bio.display();

var projects = {
    "projects" : [
        {
            "title" : "Javascript Resume",
            "dates" : 2017,
            "description" : "Resume made using Javascript",
            "images" : ["images/Project1.png" , "images/Project2.png"]
        }
    ]
}

var work = {
    "jobs" : [
        {
            "employer" : "Under Armour Connected Fitness",
            "title" : "Escalations Specialist",
            "location" : "Austin, TX",
            "dates" : "2016-2017",
            "description" : "Led project to build a data pipeline which pulled third party support data into user account database resulting in a long-term, scalable method to increase visibility of customer support data. Worked with cross-functional partners to scope specifications and requirements for new support tool and improve its reliability and efficiency. Pushed code to build and improve support tools. Developed and maintained multiple dashboards to promote visibility of known issues and feature requests, which resulted in improved prioritization of engineering resources"
        },
        {
            "employer" : "St. Jude Medical",
            "title" : "EP-TSS",
            "location" : "College Station, TX",
            "dates" : "2011-2014",
            "description" : "Worked cross functionally with Engineering, Marketing, and Sales teams during the launch and implementation of new products resulting in 25% increase in revenue. Advocated on behalf of the customer by discovering device performance trends and clearly communicating recommendations. I simultaneously offered field sales support to accounts in Austin, College Station, Waco, Temple and San Antonio."
        },
        {
            "employer" : "St. Jude Medical",
            "title" : "EP-TSS Field Intern",
            "location" : "Riverside, CA",
            "dates" : "2014-2016",
            "description" : "I improved engagement metric by identifying process inefficiencies in product enrollment program and implementing solutions with the ability to scale process to other regions. This achieved an enrollment rate 50% higher than other top practices in the region. I did this by collaborating with my support team to scope inefficiencies and roadmap an engagement strategy over the course of one year. I was instrumental in achieving 100% contract continuation at highest grossing account in territory in 2014."
        }
    ]
}

var education = {
    "schools" : [
        {
            "name" : "Cal Poly SLO",
            "location" : "San Luis Obispo, CA",
            "degree" : "Bachlor of Science",
            "dates" : "2006-2011",
            "major" : "Biomedical Engineering"
        },
        {
            "name" : "Cal Poly SLO",
            "location" : "San Luis Obispo, CA",
            "degree" : "Master of Science",
            "dates" : "2006-2011",
            "major" : "Biomedical Engineering"
        }
    ],
    "onlineCourses" : [
        {
            "title": "Udacity Javascript",
            "school" : "Udacity",
            "dates" : 2017,
            "url" : "https://www.udacity.com/"
        }
    ]
}

// display education information
education.display = function() {
    for (school in education.schools) { 
        $("#education").append(HTMLschoolStart);
        
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolName + " " + formattedSchoolDegree)

        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
    }

    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);        
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineUrl);
    }
}

education.display();

// display all work information
work.display = function() {
    for (job in work.jobs) { 
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = HTMLemployerTitle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
}

work.display();

//display project information
projects.display= function() {
    for (project in projects.projects) { 
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
            }
        } 
    }
}

projects.display();

// Displays map
$("#mapDiv").append(googleMap);

