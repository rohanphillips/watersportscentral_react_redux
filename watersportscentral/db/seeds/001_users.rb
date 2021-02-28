u = User.create(username: "testuser1", first_name: "Test1", email: "test1@test.com", password: "test")
Sport.create(user_id: u.id, name: "Hydrofoiling")
Sport.create(user_id: u.id, name: "Wakeboarding")
Location.create(user_id: u.id, name: "Location1")
Location.create(user_id: u.id, name: "Location3")


u = User.create(username: "testuser2", first_name: "Test2", email: "test2@test.com", password: "test")
Sport.create(user_id: u.id, name: "Waterskiing")
Sport.create(user_id: u.id, name: "Kite Surfing")
Location.create(user_id: u.id, name: "Location2")
Location.create(user_id: u.id, name: "Location4")