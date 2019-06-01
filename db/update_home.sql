update houses
set name = $2, address = $3, city = $4, state = $5, zip = $6, img = $7, mortgage = $8, rent = $9
where id = $1;

select *
from houses;


