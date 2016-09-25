function lookFor(){
	var title = document.getElementById("field").value;
	var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&generator=prefixsearch&gpssearch="+title+"&gpslimit=10&prop=pageimages%7Cpageterms&piprop=thumbnail&pithumbsize=50&pilimit=10&redirects=&wbptterms=description&origin=*"	
	$("ul").empty();
	$.getJSON(url,function(data){
		$(data.query.pages).each(function(index, value){
			var resultUrl = "https://en.wikipedia.org/?curid=" + value.pageid;
			var thumb = "<img src='images/search.png' width=50px height=50px img>";
			if ( value.hasOwnProperty('thumbnail') ) {
				thumb = "<img src='" + value.thumbnail.source + "'" + "width=" + "50px" + "height=" + "50px" + "img>";
			}
			var description = 'No description';
			if ( value.hasOwnProperty('terms') &&
			     value.terms.hasOwnProperty('description') ) {
				description = value.terms.description;
			}
			$("ul").append("<li class = 'result list-item'>" + thumb + "<a target='_blank' class='result-link' href='" + resultUrl + "'" + ">" + "<p>" + "<strong>" + value.title + "</strong>" + "<br>" + description + "</p>" + "</a>" + "</li>");
		});

	});
};

function show() {
	$(".icon").addClass("hidden");
	$(".instruction").addClass("hidden");
	$("#field").removeClass("hidden");
	$(".fa-times").removeClass("hidden");
}
function hide() {
	$(".icon").removeClass("hidden");
	$(".instruction").removeClass("hidden");
	$("#field").addClass("hidden");
	$(".fa-times").addClass("hidden");
}

