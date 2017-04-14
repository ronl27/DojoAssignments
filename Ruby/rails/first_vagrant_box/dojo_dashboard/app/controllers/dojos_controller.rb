class DojosController < ApplicationController
  def index
    # Get all the dojos information
    @dojos = Dojo.all
  end

  def show
    @dojo = Dojo.find(params[:id])
    @students = @dojo.students
    # render text: "welcome to the show method in DojosController"
  end

  def edit
    @dojos = Dojo.find(params[:id])
    # render json: params
  end

  def new
    @dojos = Dojo.new
  end

  def update
    @dojos = Dojo.find(params[:id])

    if @dojos.update(dojo_params)
      redirect_to '/', notice:"You have updated the Dojo"
    else
      flash[:errors] = @dojos.errors.full_messages
      redirect_to :back
    end
    # render json: params
    # redirect_to '/dojos'
  end

  def create
    @dojos = Dojo.new(dojo_params)

    if @dojos.save
      redirect_to '/dojos', notice:"You have successfully created a Dojo"
    else
      flash[:errors] = @dojo.errors.full_messages
      redirect_to :back
    end
    # render text: "Made it to create"
    # render json: params

  end

  def destroy
    # render json: params
    Dojo.find(params[:id]).destroy
    redirect_to '/dojos'
  end

  private
  def dojo_params
    params.require(:dojo).permit(:branch, :street, :city, :state)
  end
end
