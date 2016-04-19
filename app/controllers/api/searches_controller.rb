class Api::SearchesController < ApplicationController
  def index
    @results = PgSearch.multisearch(params[:search])
    render :index
  end
end
