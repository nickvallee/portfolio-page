import $ from'jquery';
import projectsMod from './modules/Projects';

var projects = projectsMod.projects;




function createProjects(projects) {

    for (var i = 0; i < projects.length; i++) {
        var index = "index" + (i + 1);

    var projectDiv = '<div class="featured-work__project"><img class="featured-work__project__img" src="'+ projects[i].image + '" alt="' + projects[i].title +'"><h2 class="featured-work__project__title">'+ projects[i].title +'</h2><p class="featured-work__project__url">'+ projects[i].url +'</p></div>';

    console.log(projectDiv);
    $('.featured-work').append(projectDiv);


    }
}


createProjects(projects);