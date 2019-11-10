SELECT name
FROM restaurant
WHERE to_tsvector('english', rest_name) @@ to_tsquery('english', ${rest_name});
