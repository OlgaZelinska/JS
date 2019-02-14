var str = []
$(document).ready(function(){           //https://docs.google.com/spreadsheets/d/18Beym5X4TpLA_8SXQ6rsRbF7d2m0FwIguAp54fO2zE0/edit?usp=sharing
			var spreadsheetID = '18Beym5X4TpLA_8SXQ6rsRbF7d2m0FwIguAp54fO2zE0'
			var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
			$.getJSON(url, function(data){
                   for(var i = 0; i < data.feed.entry.length; i++){
                       var obj= {
                           name:data.feed.entry[i].gsx$name.$t,
                           dicription:data.feed.entry[i].gsx$dicription.$t,
                           img:data.feed.entry[i].gsx$img.$t,
                           price:data.feed.entry[i].gsx$price.$t,
                           presence:data.feed.entry[i].gsx$presence.$t,
                           add:data.feed.entry[i].gsx$add.$t
                       }
					str.push(obj);
				}
          console.log(str)
     var script = document.createElement("SCRIPT"),
     head = document.getElementsByTagName("head")[0]
     script.type = "text/javascript";
     script.src = 'script.js';
     head.appendChild(script);
			})
		})