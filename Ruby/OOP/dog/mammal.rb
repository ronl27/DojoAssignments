# In this file, create a Mammal Class. A mammal should have a default health attribute with value of 150. Also add a method called display_health, which when invoked, prints the health of the Mammal

class Mammal
  def initialize
    @health = 150
  end

  def display_health
    puts @health
  end
end
