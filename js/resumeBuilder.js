'use strict';

// bio
var bio = {
    "name": "Brian Young",
    "role": "Rule breaker",
    "contacts": {
        "mobile": "控巴控控",
        "email": "wrongemail@gmail.com",
        "github": "brianyoungtw",
        "twitter": "brianyoungtw",
        "location": "Taipei",
        "blog": "brianyoungtw.blogspot.tw/"
    },
    "welcomeMessage": "Hi from inside your screen!",
    "skills": ["Being bad-ass", "Breathing", "Having fun", "Staring at you from inside your screen"],
    "bioPic": "images/Brian_pic.jpg",
    //display
    "display": function() {
    	$("#header").prepend(HTMLheaderName.replace("%data%", "Brian Young"),HTMLheaderRole.replace("%data%", "Rule breaker"));

        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile),HTMLemail.replace("%data%", bio.contacts.email),HTMLtwitter.replace("%data%", bio.contacts.twitter),HTMLgithub.replace("%data%", bio.contacts.github),HTMLblog.replace("%data%", bio.contacts.blog),HTMLlocation.replace("%data%", bio.contacts.location));
        $('#header').append(HTMLbioPic.replace("%data%", bio.bioPic),HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[0]),HTMLskills.replace("%data%", bio.skills[1]),HTMLskills.replace("%data%", bio.skills[2]),HTMLskills.replace("%data%", bio.skills[3]));
        }
        $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile),HTMLemail.replace("%data%", bio.contacts.email),HTMLtwitter.replace("%data%", bio.contacts.twitter),HTMLgithub.replace("%data%", bio.contacts.github),HTMLblog.replace("%data%", bio.contacts.blog),HTMLlocation.replace("%data%", bio.contacts.location));
    }
};
bio.display();

// Work
var work = {
    "jobs": [{
        "employer": "The Future of Learning",
        "title": "掃地僧",
        "location": "Taipei",
        "dates": "Mar.2015~current",
        "description": "The first edtech community in Taiwan - Let's make learning exciting!",
		"url": "https://www.facebook.com/groups/EdTech.NewEdWays/"
    }, {
        "employer": "EdSurge",
        "title": "Analyst / Sales Associate intern",
        "location": "San Francisco",
        "dates": "Aug.2015~Dec.2015",
        "description": "dummy text",
        "url": "https://www.linkedin.com/in/brian-young-12b64331"
    }, {
        "employer": "IBM Taiwan",
        "title": "Sales Representative / Consultant",
        "location": "Taipei / Hsinchu",
        "dates": "Apr.2013~Feb.2015",
        "description": "dummy text",
        "url": "https://www.linkedin.com/in/brian-young-12b64331"
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
        "title": "The Future of Learning",
        "dates": "Mar.2015-Current",
        "description": "Come join in the conversation at the first edtech community in Taiwan!",
        "images": ["./images/fol.jpg","./images/web_dev.jpg"],
        "url": "https://www.facebook.com/groups/EdTech.NewEdWays/",
        "other": ""
    }, {
        "title": "Hayao Miyazaki(宮崎駿) fan project",
        "dates": "TBD",
        "description": "Love his animations and music!",
        "images": ["./images/dodoro.jpeg"],
        "url": "",
        "other": ""
    }, {
        "title": "The happy project",
        "dates": "Mar.2016",
        "description": "Please play the song below - 'Ode to joy' while singing along using these lyrics: <br></br><p>All my clients drive me crazy</p><p>never show no guts at all</p><p>For the peanuts that they pay me</p><p>they get logos 10 feet tall</p><p>Want to see three new directions</p><p>for tomorrow’s drop dead line</p><p>Picks the worst and mixes sections </p><p>we wind up with Frankenstein.<br></br></p>",
        "images": [],
        "url": "http://www.brianyoungtw.com",
        "other": ""
    }],
    "display": function() {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
            projects.projects[project].images.forEach(function(val) {
            	$(".project-entry:last").append(HTMLprojectImage.replace("%data%", val));
            });
        };
        $(".project-entry:last").append(HTMLaudio);
    }
};
var array = ["c","d"];
array.forEach(function(val){
	console.log(val);
});

projects.display();

// education
var education = {
    "schools": [{
        "name": "National Tsing Hua University",
        "location": "Hsinchu, Taiwan",
        "degree": "B.S.",
        "majors": ["Quantitative Finance"],
        "date": "2008 - 2011",
        "url": "http://www.qf.nthu.edu.tw/bin/home.php?Lang=en"
    }, {
        "name": "Universitaet Tuebingen",
        "location": "Tuebingen, Germany",
        "degree": "Exchange student",
        "majors": ["Economics & BA"],
        "date": "Sep. 2010 - Feb. 2011",
        "url": "https://www.uni-tuebingen.de/"
    }, {
        "name": "Zhejiang University",
        "location": "Zhejiang, China",
        "degree": "Exchange student",
        "majors": ["Economics"],
        "date": "Jul. 2009 - Sep. 2009",
        "url": "http://www.zju.edu.cn/english/"
    }, ],
    "onlineCourses": [{
        "title": "Front End Web Dev. Nanodegree",
        "school": "Udacity",
        "date": "Feb. 2016 - Current",
        "schoolUrl": "https://www.udacity.com/",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    //display
    "display": function() {
        for (var edu in education.schools) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[edu].name+HTMLschoolDegree.replace("%data%", education.schools[edu].degree)).replace("#", education.schools[edu].url));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[edu].date),HTMLschoolLocation.replace("%data%", education.schools[edu].location));
            for (var major in education.schools[edu].majors) {
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[edu].majors[major]));
            }
        }
        //onlineCourses
        $("#education").append(HTMLonlineClasses);
        for (edu in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title+HTMLonlineSchool.replace("%data%", education.onlineCourses[edu].school)).replace("#", education.onlineCourses[edu].schoolUrl));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[edu].date),HTMLonlineURL.replace("%data%", education.onlineCourses[edu].url));
        }
    }
};
education.display();

// Map
$("#mapDiv").append(googleMap);