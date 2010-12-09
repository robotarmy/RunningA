
window.inject_tweet = function(tweet,location) {
  var el = jQuery('<span></span>')
  el.addClass('tweet')

  for(attr in tweet) {
    var s = jQuery('<span></span>')
    s.text(tweet[attr])
    s.addClass(attr)
    if (attr == 'id') {
      el.attr('id',tweet[attr])
    }
    el.append(s)
  }
  var save = jQuery('<a>save</a>')
  save.click(function(){
    jQuery.post("/tweets",
                {tweet:{json:tweet}},
                function(data){
                  var id = el.attr('id')
                  console.log('#'+id)
                  jQuery('#'+id).fadeOut()
                })
  })
  el.append(save)

  console.log(el)
  if (location)
    jQuery(location).append(el)
}
jQuery(document).ready(function() {
  jQuery('body .load').ajaxStart(function(){
    $(this).show();
  })
  jQuery('body .load').ajaxStop(function(){
    $(this).hide();
  })
  jQuery.getJSON("http://search.twitter.com/search.json\?result_type=recent&q='a'&callback=?",
                 function(data){
    if (data.results) {
      for(id in data.results) {
        window.inject_tweet(data.results[id],'body')
      }
    }
  })
})
