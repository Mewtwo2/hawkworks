class SessionsController < ApplicationController
  def new
  end

  def create
    @admin = Admin.find_by(username: params[:session][:username])

    if @admin && @admin.authenticate(params[:session][:password])
      log_in(@admin)
      redirect_to @admin
    else
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_path
  end
end
