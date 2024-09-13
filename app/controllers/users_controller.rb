class UsersController < ApplicationController
  def info
    user = User.find(params[:id])
    render json: { email: user.email, name: user.name }
  end
end
