# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Contact.destroy_all

user_one = User.create({first_name:"Ben", last_name: "Bailey", email: "BBailey@gmail.com"})
user_two = User.create({first_name:"Haley", last_name: "Hinkle", email: "Haleyh125@me.com"})
user_three = User.create({first_name:"Howard", last_name: "Hugh", email: "Hughdog003@yahoo.com"})


contact_one = Contact.create({first_name: "Ashley", last_name: "Lowe", phone_number: "404-229-0769", user_id: user_one.id})
contact_two  = Contact.create({first_name: "Hank", last_name: "Hammer", phone_number: "404-229-0769", user_id: user_two.id})
contact_three  = Contact.create({first_name: "Larry", last_name: "Lands", phone_number: "404-229-0769", user_id: user_three.id})
contact_four  = Contact.create({first_name: "Walker", last_name: "Miller", phone_number: "404-229-0769", user_id: user_one.id})
contact_five  = Contact.create({first_name: "Kelsey", last_name: "kale", phone_number: "404-229-0769", user_id: user_one.id})
contact_six  = Contact.create({first_name: "Jeff", last_name: "Campbell", phone_number: "404-229-0769", user_id: user_two.id})
contact_seven  = Contact.create({first_name: "Amy", last_name: "Adams", phone_number: "404-229-0769", user_id: user_two.id})
contact_eight  = Contact.create({first_name: "Ryan", last_name: "Reynolds", phone_number: "404-229-0769", user_id: user_three.id})
contact_nine  = Contact.create({first_name: "Sara", last_name: "Sanders", phone_number: "404-229-0769", user_id: user_one.id})
contact_ten  = Contact.create({first_name: "Loren", last_name: "Strickland", phone_number: "404-229-0769", user_id: user_one.id})
contact_eleven  = Contact.create({first_name: "Harry", last_name: "Hayes", phone_number: "404-229-0769", user_id: user_three.id})
contact_twelve  = Contact.create({first_name: "Adler", last_name: "Seabolt", phone_number: "404-229-0769", user_id: user_three.id})
contact_thirteen  = Contact.create({first_name: "Toni", last_name: "Holton", phone_number: "404-229-0769", user_id: user_two.id})