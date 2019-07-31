class AdminsController < ApplicationController
  def new
    @admin = Admin.new
  end

  def create
    @admin = Admin.new(admin_params)

    if @admin.save
      log_in(@admin)
      redirect_to @admin
    else
      render 'new'
    end
  end

  def edit
  end

  def index
  end

  def show
    @admin = Admin.find(params[:id])
  end

  def admin_params
    params.require(:admin).permit(:username,:password)
  end
end
