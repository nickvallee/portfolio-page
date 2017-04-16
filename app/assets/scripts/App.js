import $ from'jquery';
import projectsMod from './modules/Projects';

var projects = projectsMod.projects;


function createProjects(projects) {

    for (var i = 0; i < projects.length; i++) {
        var index = "index" + (i + 1);

    //TODO:figure out why link in image does not work
    var linkedProjectImage ='<div class="featured-work__project__crop"><a href="'+projects[i].url+'"><img class="featured-work__project__img" src="'+ projects[i].image + '" alt="' + projects[i].title +'"></a></div>';
    var linkedProjectTitle ='<h2 class="featured-work__project__title"><a href="'+projects[i].url+'">'+ projects[i].title +'</a></h2>';
    var projectDescription = '<p class="featured-work__project__url">'+ projects[i].description +'</p>';

    var projectDiv = '<div class="featured-work__project">'+ linkedProjectImage + linkedProjectTitle + projectDescription +'</div>';

    console.log(projectDiv);
    $('.featured-work').append(projectDiv);


    }
}


createProjects(projects);