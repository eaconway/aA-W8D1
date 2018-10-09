class Api::SessionController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render :show
    else
      render json: {
        status: 422,
        message: 'invalid login credentials'
      }.to_json
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: {
        status: 404
      }.to_json
    end

  end

end
