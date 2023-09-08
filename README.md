database used mongodb nosql
<!-- env variables to be defined after creating .
env file-->
dbName="your_database_name"
password="your_password"

<!-- url and json structure to make api request to the app -->
url = http://localhost:3001/user

<!-- get request -->
body = empty(means req.body is not required)

<!-- put request -->
body -:
{
  "id":"64faf505a9e3218a9e491533",
  "status":"pending/Completed/Pending/completed"
}
<!-- post request -->
body -:
{
  "title":" party Shopping",
  "taskDes":"nachos",
  "status":"pending/Completed/Pending/completed"
}

<!-- delete request= -->
body-:
{
  "id":"64faf455a9e3218a9e49152e"
}