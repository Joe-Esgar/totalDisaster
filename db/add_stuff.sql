ALTER TABLE houses
ADD COLUMN mortgage INT;

ALTER TABLE houses
ADD COLUMN rent INT;

ALTER TABLE houses
ADD FOREIGN KEY (serial_killer_id)
REFERENCES killers (id);