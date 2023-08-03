-- a procedure to insert into the user table 


CREATE OR ALTER PROCEDURE addUser 
    @id VARCHAR(255),
    @email VARCHAR(255),
    @userName VARCHAR(255),
    @password VARCHAR(255)

AS BEGIN 

INSERT INTO userTable (id,email, userName,password) 

VALUES (@id,@email,@userName,@password)
END;