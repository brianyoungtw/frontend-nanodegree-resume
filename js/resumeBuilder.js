// Name
function displayName() {
    var formattedName = HTMLheaderName.replace("%data%", "Brian Young");
    var formattedRole = HTMLheaderRole.replace("%data%", "Rule breaker");

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
}
displayName();

// bio
var bio = {
    "name": "Brian Young",
    "role": "Rule breaker",
    "contacts": {
        "mobile": HTMLmobile.replace("%data%", "控巴控控"),
        "email": HTMLemail.replace("%data%", "wrongemail@gmail.com"),
        "github": HTMLgithub.replace("%data%", "brianyoungtw"),
        "twitter": HTMLtwitter.replace("%data%", "brianyoungtw"),
        "blog": HTMLblog.replace("%data%", "brianyoungtw.blogspot.tw/"),
        "location": HTMLlocation.replace("%data%", "Taipei"),
    },
    "welcomeMessage": HTMLwelcomeMsg.replace("%data%", "Hi from inside your screen!"),
    "skills": ["Being bad-ass", "Breathing", "Having fun", "Staring at you from inside your screen"],
    "bioPic": HTMLbioPic.replace("%data%", "images/Brian_pic.jpg"),
    //display
    "display": function() {
        $("#topContacts").append(bio.contacts.mobile);
        $("#topContacts").append(bio.contacts.email);
        $("#topContacts").append(bio.contacts.twitter);
        $("#topContacts").append(bio.contacts.github);
        $("#topContacts").append(bio.contacts.blog);
        $("#topContacts").append(bio.contacts.location);
        $("#header").append(bio.bioPic);
        $("#header").append(bio.welcomeMessage);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
            $("#skills").append(formattedSkills);
            formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
            $("#skills").append(formattedSkills);
            formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
            $("#skills").append(formattedSkills);
            formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
            $("#skills").append(formattedSkills);
        }
    }
};
bio.display();

// Work
var work = {
    "jobs": [{
        "employer": "The Future of Learning",
        "url": "https://www.facebook.com/groups/EdTech.NewEdWays/",
        "title": "掃地僧",
        "dates": "Mar.2015~current",
        "location": "Taipei",
        "description": "The first edtech community in Taiwan - Let's make learning exciting!"
    }, {
        "employer": "EdSurge",
        "url": "https://www.linkedin.com/in/brian-young-12b64331",
        "title": "Analyst / Sales Associate intern",
        "dates": "Aug.2015~Dec.2015",
        "location": "San Francisco",
        "description": "dummy text"
    }, {
        "employer": "IBM Taiwan",
        "url": "https://www.linkedin.com/in/brian-young-12b64331",
        "title": "Sales Representative / Consultant",
        "dates": "Apr.2013~Feb.2015",
        "location": "Taipei / Hsinchu",
        "description": "dummy text"
    }],
    "display": function() {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var fomattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = fomattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDate);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDescription = HTMLprojectDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};
work.display();

// projects
var projects = {
    "projects": [{
        "name": "The Future of Learning",
        "dates": "Mar.2015-Current",
        "description": "Come join in the conversation at the first edtech community in Taiwan!",
        "image": "./images/web_dev.jpg",
        "url": "https://www.facebook.com/groups/EdTech.NewEdWays/",
        "other": ""
    }, {
        "name": "Hayao Miyazaki(宮崎駿) fan project",
        "dates": "TBD",
        "description": "Love his animations and music!",
        "image": "./images/dodoro.jpeg",
        "url": "",
        "other": ""
    }, {
        "name": "The happy project",
        "dates": "Mar.2016",
        "description": "Please play the song below - 'Ode to joy' while singing along using these lyrics: <br></br><p>All my clients drive me crazy</p><p>never show no guts at all</p><p>For the peanuts that they pay me</p><p>they get logos 10 feet tall</p><p>Want to see three new directions</p><p>for tomorrow’s drop dead line</p><p>Picks the worst and mixes sections </p><p>we wind up with Frankenstein.<br></br></p>",
        "image": "",
        "url": "http://www.brianyoungtw.com",
        "other": ""
    }],
    "display": function() {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].name).replace("#", projects.projects[project].url));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].image));
            $(".project-entry:last").append(projects.projects[project].other);
        }
        $(".project-entry:last").append(HTMLaudio);
    }
};
projects.display();

// education
var education = {
    "schools": [{
        "name": "NTHU",
        "location": "Hsinchu, Taiwan",
        "degree": "B.S.",
        "majors": ["Quantitative Finance"],
        "dates": "2008 - 2011",
        "url": "http://www.qf.nthu.edu.tw/bin/home.php?Lang=en"
    }, {
        "name": "Universitaet Tuebingen",
        "location": "Tuebingen, Germany",
        "degree": "Exchange student",
        "majors": ["Economics", "BA"],
        "dates": "2010",
        "url": "https://www.uni-tuebingen.de/"
    }, {
        "name": "Zhejiang University",
        "location": "Zhejiang, China",
        "degree": "Exchange student",
        "majors": ["Economics"],
        "dates": "2009",
        "url": "http://www.zju.edu.cn/english/"
    }, ],
    "onlineCourses": [{
        "title": "Front End Web Dev. Nanodegree",
        "school": "Udacity",
        "dates": "Feb. 2016 - Current",
        "schoolUrl": "https://www.udacity.com/",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    //display
    "display": function() {
        for (var edu in education.schools) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[edu].name).replace("#", education.schools[edu].url));
            $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[edu].degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[edu].dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[edu].location));
            for (var major in education.schools[edu].majors) {
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[edu].majors[major]));
            }
        }
        //onlineCourses
        $("#education").append(HTMLonlineClasses);
        for (edu in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title).replace("#", education.onlineCourses[edu].schoolUrl));
            $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[edu].school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[edu].dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[edu].url));
        }
    }
};
education.display();

// Map
$("#mapDiv").append(googleMap);

// Footer Contacts
var footer = {
    "display": function() {
        $("#footerContacts").append(bio.contacts.mobile);
        $("#footerContacts").append(bio.contacts.email);
        $("#footerContacts").append(bio.contacts.twitter);
        $("#footerContacts").append(bio.contacts.github);
    }
};
footer.display();