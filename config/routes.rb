Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create, :edit, :update]

  resource :session, only: [:new, :create, :destroy]
  resource :playlists
  resource :recordings

  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:create, :show, :index, :edit, :update, :destroy]
    resources :recordings
    get "recent", to: "recordings#recent"
    resource :session, only: [:show, :create, :destroy]
    resources :follows, only: [:destroy, :create, :show, :index]
  end
end
