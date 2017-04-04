class Project
  attr_reader :name, :description
  def initialize (name, description)
    @project_name = name
    @project_description = description
  end

  def elevator_pitch
    "Here is the new Project. Its called #{@project_name}, #{@project_description}"

  end
end

project1 = Project.new("Project Oculus", "You will be able to see through the eyes of another user")
puts project1.elevator_pitch
project1.elevator_pitch
