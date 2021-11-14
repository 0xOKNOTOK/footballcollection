CREATE DATABASE footballcollection;

-- \c into footballcollection database.

CREATE TABLE teams (
  team_id integer NOT NULL,
  data jsonb
);

CREATE TABLE fixtures(
    fixture_id SERIAL PRIMARY KEY,

)
