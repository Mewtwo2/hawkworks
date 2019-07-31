Rails.application.routes.draw do
  root 'pages#home'
  
  resources :admins
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  get '/about' => 'pages#about'
  get '/members' => 'pages#members'
  get '/mission' => 'pages#mission'
  get '/outreach' => 'pages#outreach'
  get '/sponsorship' => 'pages#sponsorship'
  get '/contact' => 'pages#contact'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
