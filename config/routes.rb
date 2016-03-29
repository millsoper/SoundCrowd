Rails.application.routes.draw do
  root to: "sessions#new"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resource :playlists

  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:show, :index]
  end
end
