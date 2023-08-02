CREATE PROCEDURE createAdmin 
    @email VARCHAR,
    @userName VARCHAR,
    @password VARCHAR,
    @role VARCHAR
AS
BEGIN
    INSERT INTO Admin (email, userName, password, role)
    VALUES (@email, @userName, @password, @role);
END