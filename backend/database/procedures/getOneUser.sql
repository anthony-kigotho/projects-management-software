

CREATE OR ALTER PROCEDURE getOneUser
    @email VARCHAR(255)
AS BEGIN
SELECT * FROM userTable WHERE email = @email
END;