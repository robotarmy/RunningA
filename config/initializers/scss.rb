Sass::Plugin.options[:style]              = :compressed
Sass::Plugin.options[:template_location]  = (Rails.root + 'app' + 'scss').to_s
Sass::Plugin.options[:css_location]       = (Rails.root + 'public' + 'stylesheets').to_s
