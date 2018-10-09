class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save!
      login!(@user)
      render :show
    else
      # flash[:errors] = errors.full_messages
      errors = @user.errors.full_messages
      render json: {
        status: 422,
        message: [errors]
      }.to_json
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
