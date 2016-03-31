Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resource :playlists
  resource :recordings

  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:show, :index]
    resources :recordings
  end
end
