// Answers of Question 1

/*
jQuery(document).ready(function(){
    jQuery("p[name*='marlabs']").css('border','1px solid green');
});
*/

/*
jQuery(document).ready(function(){
    jQuery("p[name='marlabs']").css('border','1px solid green');
});
*/
/*
jQuery(document).ready(function(){
    jQuery("p[name^='marlabs']").css('border','1px solid green');
});
*/
/*
jQuery(document).ready(function(){
    jQuery("p[name$='marlabs']").css('border','1px solid green');
});
*/
/*
jQuery(document).ready(function(){
    jQuery("p[name~='marlabs']").css('border','1px solid green');
});
*/
/*
jQuery(document).ready(function(){
    jQuery("p").last().css('border','1px solid green');
});
*/

// Answers of Question 2
//   Resize
/*      
jQuery(document).ready(function(){
    jQuery(window).resize(function(){
        console.log("Hello Marlabs");
    });
});
*/

//       Scroll
/*       
jQuery(document).ready(function(){
    jQuery("#target").scroll(function(){
        console.log("Hello Marlabs");
    });
});
*/

//ON and trigger together
/*
jQuery(document).ready(function(){
    jQuery("#other").on('click',function(){
        alert('Hello Marlabs');    
    });
    jQuery( "#other" ).trigger( "click" );
});
*/

//  One 
/*
jQuery(document).ready(function(){
    jQuery("#other").one('click',function(){
        console.log("Hello Marlabs");
    });
});
*/
//   Double click
/*
jQuery(document).ready(function(){
    jQuery( "#other" ).dblclick(function() {
        console.log("Hello Marlabs");
      });
});
*/

// keypress, keydown and keyup
//jQuery(document).ready(function(){
    // jQuery( "#target2" ).keydown(function(e) {
    //     console.log( "Hello Marlabs"+" "+e.key );
    //   });

    //   jQuery( "#target2" ).keypress(function(e) {
    //     console.log( "Hello Marlabs"+" "+e.key );
    //   });

    //   jQuery( "#target2" ).keyup(function(e) {
    //     console.log( "Hello Marlabs"+" "+e.key );
    //   });
//});

//    Hover
// jQuery(document).ready(function(){
//     jQuery( "#other" ).hover(function() {
//         console.log("Hello Marlabs");
//       });
// });


// Answers of Question 3
// Javascript for GET request 
/*
const Http = new XMLHttpRequest();
const url = 'https://pokeapi.co/api/v2/pokemon/ditto/';
Http.open('GET',url,true);
Http.send();
Http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){        
        var strToJson = JSON.parse(this.responseText);
        var getJsonData = strToJson.game_indices;
        var result = getJsonData.map((element)=>{
            return element.version['name'];
        });
        console.log(result);
    }
}
*/


// Jquery for GET request 
/*
jQuery(document).ready(function(){
    jQuery.ajax({
        'type':'GET',
        'url':'https://pokeapi.co/api/v2/pokemon/ditto/',
        'dataType':'json',
        'success': function(data){
            //console.log(data);
            var getData = data.game_indices;
            var result = getData.map((element)=>{
                return element.version['name'];
            });
            console.log(result);
        }
    });
});
*/









