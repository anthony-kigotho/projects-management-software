CREATE OR ALTER PROCEDURE updateUser
    @email VARCHAR(250),
    @userName VARCHAR(250),
    @password VARCHAR(250),
    @about VARCHAR(500),
    @isAssigned Bit,
    @profile_pic VARCHAR(500)
    AS BEGIN

    UPDATE userTable SET 
    userName = COALESCE (@userName,userName),
    password = COALESCE (@password,password), 
    about = COALESCE (@about,about),
    isAssigned = COALESCE (@isAssigned,isAssigned),
    profile_pic = COALESCE (@profile_pic,profile_pic)
    
    WHERE email = @email
    END;