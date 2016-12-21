 $(document).ready(function(){
    
       $.getJSON('content.json', function(data) {
        var pathsOutput="<ul>";
        for (var i in data.app.bundle.paths) {
			var count = "location"+i;
            pathsOutput+="<li>" + 
			"<div class='btn pathbutton' id='"+count+"' '>" + 
			data.app.bundle.paths[i].id + " "  + 
			data.app.bundle.paths[i].name + "</div>" + 
			"<div class='btn placesbutton' id='"+count+"' >"  + 
			data.app.bundle.paths[i].places.namePOI +
			"<div class='infotext'>"  +
			"<p>" + data.app.bundle.paths[i].places.infoPOI + " "  +"</p>" + 
			"</div>" +
			"<div class='extrainfo'>" +
			"<p>"+"Radius: " +data.app.bundle.paths[i].places.radiusPOI + " "  +"</p>" +
			"<p>"+"Position: " +data.app.bundle.paths[i].places.positionPOI + " "  +"</p>" +
			"<p>" +data.app.bundle.paths[i].places.imagePOI + " "  +"</p>" +
			"</div>" +
			"</div>" + 
			"</li>"
		}
		 pathsOutput+="</ul>";
        document.getElementById("placeholder").innerHTML=pathsOutput;
    });
});
window.onload = function(){
$("[id^=location]").click(function(){
		 $(this).toggleClass("fullscreen");
});

}


