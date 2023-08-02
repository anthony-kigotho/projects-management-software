BEGIN TRY
CREATE TABLE userTable(

    email VARCHAR(250) NOT NULL PRIMARY KEY,
    userName VARCHAR(250) NOT NULL,
    about VARCHAR(500) NULL,
    profile_pic VARCHAR(500) NULL,
    role VARCHAR(15) CHECK (role IN ('admin', 'user'))  DEFAULT 'user',
    isAssigned BIT DEFAULT 0,
    password VARCHAR(250) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
);

END TRY
BEGIN CATCH
    THROW 5001, 'Table already exists',1;
END CATCH

GO

SELECT * FROM userTable
