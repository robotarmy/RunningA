
var tweet = {

  return {
  }  
}

window.inject_tweet = function(tweet,location,_opts_ ) {
  var opts = _opts_ || {}
  var el = jQuery('<span></span>')
  el.addClass('tweet')
  add_tweet(el,tweet)
  if (opts.save) {
    add_save(el,tweet)
  }
  if (location)
    jQuery(location).append(el)
}

window.add_tweet = function(el,tweet) {
  for(attr in tweet) {
    var s = jQuery('<span></span>')
    s.text(tweet[attr])
    s.addClass(attr)
    if (attr == 'id') {
      el.attr('id',tweet[attr])
    }
    el.append(s)
  }
}

window.add_save = function(el,tweet) {
  var save = jQuery('<a>save</a>')
  save.click(function(){
    jQuery.post("/tweets",
                {tweet:{json:JSON.stringify(tweet)}},
                function(data){
                  var id = el.attr('id')
                  jQuery('#'+id).fadeOut()
                })
  })
  el.append(save)
}

window.load_tweets = function(opts) {
  jQuery.getJSON("http://search.twitter.com/search.json\?result_type=recent&q='a'&callback=?",
                 function(data){
    if (data.results) {
      for(id in data.results) {
        window.inject_tweet(data.results[id],'body',opts)
      }
    }
  })
}
