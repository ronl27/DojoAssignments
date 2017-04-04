### HERO CLASS ###

class Hero
  @@no_of_heros = 0 #this is a class variable due to @@
  def initialize (id, name, power)
    # this is a INSTANCE VARIABLE '@' and is available to all instances of the class.
    @hero_id = id
    @hero_name = name
    @hero_power = power
    @@no_of_heros += 1 #will increase count when a hero has been created
    puts "Created hero No: #{@@no_of_heros}"
  end

  def hello
    puts "Hello our new Hero"
  end

  def display_all
    puts "Hero ID: #{@hero_id}"
    puts "Hero Name: #{@hero_name}"
    puts "Hero Power::#{@hero_power}"
  end
end

#Using the above class, lets create Objects
hero = Hero.new(1, "Logan", "Slow aging and able to Heal on his own")
hero.display_all
hero2 = Hero.new(2, "Spider-Man", "He moves like a Spider")
hero2.display_all
