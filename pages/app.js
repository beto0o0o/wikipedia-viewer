var title;
var url;
var resultUrl;
var thumb;

function lookFor(){
	title = document.getElementById("field").value;
	url = "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&generator=prefixsearch&gpssearch="+title+"&gpslimit=10&prop=pageimages%7Cpageterms&piprop=thumbnail&pithumbsize=50&pilimit=10&redirects=&wbptterms=description&origin=*"	
	$("ul").empty();
	$.getJSON(url,function(data){
		$(data.query.pages).each(function(){
			resultUrl = "https://en.wikipedia.org/?curid=" + this.pageid;
			thumb = "<img src='" + this.thumbnail.source + "'" + "width=" + "50px" + "height=" + "50px" + "img>";
			$("ul").append("<li class = 'result'>" + thumb + "<a target='_blank' class='result-link' href='" + resultUrl + "'" + ">" + "<p>" + "<strong>" + this.title + "</strong>" + "<br>" + this.terms.description + "</p>" + "</a>" + "</li>");
			$("li").addClass("list-item");
			console.log(resultUrl);
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

