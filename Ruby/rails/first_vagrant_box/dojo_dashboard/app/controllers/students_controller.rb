class StudentsController < ApplicationController

  def new
    # render text:"Made it to the new method"
    @dojos = Dojo.all
    @dojo = Dojo.find(params[:dojo_id])
  end

  def edit
    @dojo = Dojo.all
    @student = Student.find(params[:id])
  end

  def create
    @students = Student.new(student_params)

    if @students.save
      redirect_to '/dojos/#{@student.dojo_id}', notice:"You have joined the Dojo"
    else
      flash[:errors] = @students.errors.full_messages
      redirect_to :back
    end
    # redirect_to '/dojos/:id/students/:id'
    # render text: "Made it to the create method"
  end

  def show
    @student = Student.with_dojo(params[:id])
    @cohort = Student.cohort(@student)
    # render text: "Made it to the show method"
    # render json: @student
  end

  def update
      @student = Student.find(params[:id])

    if @student.update(student_params)
      redirect_to dojo_student_path(@student.dojo_id, @student.id)
    else
      flash[:errors] = @student.errors.full_messages
      redirect_to :back
    end
  end

  def destroy
    Student.find(params[:id]).destroy
    redirect_to :root
  end

  private
  def student_params
    params.require(:student).permit(:first_name, :last_name, :email, :dojo_id)
  end
end
