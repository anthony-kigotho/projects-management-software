-- deleting a user 
CREATE PROCEDURE deleteUser
@email VARCHAR(250)
AS BEGIN
    DELETE FROM userTable WHERE email = @email
END;
