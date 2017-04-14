#Start a new project (the name of the project should be 'dojo_ninjas')

rails new dojo_ninjas

#Create appropriate tables/models
rails g model Dojo name:string, city:string, state:string

rails g model Ninja first_name: string, last_name: string

# Using Ruby console:

# Create 3 dojos (insert some blank entries just to make sure it's allowing you to insert empty entries)

Dojo.create(name:"Coding Dojo San Jose", city:"San Jose", state:"CA")

Dojo.create(name: "Coding Dojo Seattle", city:"Seattle", state:"CA")

Dojo.create(name:"Coding Dojo New York", city:"New York", state:"WA")

# Change your models so that it does the following validations:

# For the dojo, require the presence of the name, city, and state; also require the state to be two characters long

validates :name, :city, :state, presence: true
validates :state, length: { minimum: 2 }

#For the ninja, require the presence of the first name and last name
validates :first_name, :last_name, presence: true

# Delete the three dojos you created (e.g. Dojo.find(1).destroy; also look up destroy_all method)
Dojo.find(1).destroy
#or
Dojo.destroy_all #which deletes all the Dojos.

# Try to create a few more dojos but without specifying some of the required fields. Make sure that the validation works and generates the errors.

a = Dojo.create(name:"New Dojo in the works", state:"CA")
a.save # => false
a.valid? # => false
a.errors # => #<ActiveModel::Errors:0x000000032f0be0 @base=#<Dojo id: nil, name: "Coding Dojo LA Coming soon", city: nil, state: "CA", created_at: nil, updated_at: nil>, @messages={:city=>["can't be blank"]}
a.errors.full_messages #=> ["City can't be blank"]

#Create 3 ninjas that belong to the first dojo you created.

# *only doing one to save time.
Ninja.create(first_name:"Ronnel", last_name:"Bautista", dojo:Dojo.find(4))

# Create 3 more ninjas and have them belong to the second dojo you created.

# *only doing one to save time.
Ninja.create(first_name:"Ryan", last_name:"Bautista", dojo:Dojo.find(5))

# Create 3 more ninjas and have them belong to the third dojo you created.

# *only doing one to save time.
Ninja.create(first_name:"Steve", last_name:"Rodgers", dojo:Dojo.find(6))

#Make sure you understand how to get all of the ninjas for any dojo (e.g. get all the ninjas for the first dojo, second dojo, etc).

Dojo.find(4).ninjas
Dojo.find(5).ninjas
Dojo.find(6).ninjas

#How would you only retrieve the first_name of the ninjas that belong to the second dojo and order the result by created_at DESC order?

Ninja.where(dojo: Dojo.find(5)).select(:id, :first_name).order(created_at: :desc) #pay close attn to the space in the .order parenthesis
#or
Ninja.where(dojo: Dojo.second).select(:id, :first_name).order(created_at: :desc)


#Delete the second dojo.

Dojo.find(5).delete
#or
Dojo.second.delete

#How could you adjust your model so that it automatically removes all of the ninjas associated with that dojo?
class Dojo < ActiveRecord::Base
  #add dependent: destroy
  has_many :ninjas, dependent :destroy #without dependent, the ninja will exist still in the DB.
  validates :name, :city, :state, presence: true
  validates :state, length: { minimum: 2 }
end
