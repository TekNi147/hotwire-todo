class UsersController < ApplicationController
  def email
    user = User.find(params[:id])
    render json: { email: user.email }
  end
end
