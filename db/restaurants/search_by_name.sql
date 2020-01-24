SELECT rest_name
FROM restaurant
WHERE to_tsvector(rest_name) @@ to_tsquery(${name});
