(1) I created a database using postgresql
    To access the db use 'psql -d rolling_stones_db'
        rolling_stones_db=> \dt
            SELECT * FROM rolling_stones LIMIT 5;
(2) npm i react-router-dom import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
(3) npm install express.
(4) created the controller, model and view files.
(5) I created a new folder called db and place a newly created file called index.js inside the folder
(6) I installed cors in the terminal
(7) I created a new folder called backend and placed newly created files called app.js and server.js inside. (8) I created the following folders and files inside the backend folder: controllers -> album.constoller.js, db -> index.js, models -> album.models.js, routes -> album.routes.js
(9) I created a new file called 'seed_rolling_stones.sql'


(1) psql -U aaron rolling_stones_db

(2) rolling_stones_db=> \c postgres

(3) postgres=> DROP DATABASE rolling_stones_db;

(4) CREATE DATABASE rolling_stones_db;

(5) Connect to new database: \c rolling_stones_db

(6) Create Tables

CREATE TABLE rolling_stones (
    id SERIAL PRIMARY KEY,
    artist TEXT NOT NULL,
    album_title TEXT NOT NULL,
    album_cover TEXT,
    year_released INTEGER,
    billboard_200_position INTEGER,
    uk_top_40_position INTEGER
);

(7) Come out of PSQL \q

(8) Seed the Database tables psql -U aaron -d rolling_stones_db -f seed_rolling_stones.sql

(9) Check to see if tables are filled with data: 
In the Viual Sudio terminal: psql -d rolling_stones_db
 rolling_stones_db=> rolling_stones_db=> \dt
 rolling_stones_db=> SELECT * FROM rolling_stones LIMIT 5;


//To Turn on server
(1) Open two terminals in Visual Studio
(2) In the terminal write: node backend/server.js
(3) type: npm run dev in the terminal

