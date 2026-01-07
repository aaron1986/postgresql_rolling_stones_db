TRUNCATE TABLE rolling_stones RESTART IDENTITY;

\copy rolling_stones(artist, album_title, album_cover, year_released, billboard_200_position, uk_top_40_position) FROM '/home/aaron/northcoders/React_Projects/MVC_Project/Rolling_Stones.csv' CSV HEADER;

