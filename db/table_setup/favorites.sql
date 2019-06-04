create table favorites(
favorite_id serial primary key,
user int REFERENCES users(user_id)
)