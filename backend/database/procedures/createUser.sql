-- a procedure to insert into the user table 


CREATE PROCEDURE addUserTable 
    @email VARCHAR,
    @userName VARCHAR,
    @password VARCHAR

AS BEGIN 

INSERT INTO userTable (email, userName,password) 

VALUES (@email,@userName,@password)
END;