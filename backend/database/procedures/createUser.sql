-- a procedure to insert into the user table 


CREATE OR ALTER PROCEDURE addUser 
    @email VARCHAR(255),
    @userName VARCHAR(255),
    @password VARCHAR(255)

AS BEGIN 

INSERT INTO userTable (email, userName,password) 

VALUES (@email,@userName,@password)
END;