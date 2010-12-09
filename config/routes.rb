RunningA::Application.routes.draw do
 resources :tweets

 root :to => "running#index"
end
