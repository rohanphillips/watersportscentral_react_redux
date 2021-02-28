# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_30_125444) do

  create_table "comments", force: :cascade do |t|
    t.integer "user_id"
    t.string "comment_text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "events", force: :cascade do |t|
    t.integer "user_id"
    t.integer "location_id"
    t.integer "sport_id"
    t.string "name"
    t.string "description"
    t.datetime "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "events_comments", force: :cascade do |t|
    t.integer "event_id"
    t.integer "comment_id"
  end

  create_table "events_questions", force: :cascade do |t|
    t.integer "event_id"
    t.integer "question_id"
  end

  create_table "locations", force: :cascade do |t|
    t.integer "user_id"
    t.string "name"
    t.string "description"
    t.string "location_info"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "locations_comments", force: :cascade do |t|
    t.integer "location_id"
    t.integer "comment_id"
  end

  create_table "locations_questions", force: :cascade do |t|
    t.integer "location_id"
    t.integer "question_id"
  end

  create_table "questions", force: :cascade do |t|
    t.integer "user_id"
    t.string "question_text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sports", force: :cascade do |t|
    t.integer "user_id"
    t.string "name"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "active", default: true
    t.boolean "admin", default: false
  end

end
