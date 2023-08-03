BEGIN TRY
    CREATE TABLE userTable (
        id VARCHAR(250) NOT NULL PRIMARY KEY,
        email VARCHAR(250) NOT NULL UNIQUE,
        userName VARCHAR(250) NOT NULL,
        about VARCHAR(500) NULL,
        profile_pic VARCHAR(500) NULL,
        project_Id VARCHAR(250) NULL, -- Use the same data type as the referenced column
        role VARCHAR(15) CHECK (role IN ('admin', 'user')) DEFAULT 'user',
        isAssigned BIT DEFAULT 0,
        password VARCHAR(250) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    
    ALTER TABLE userTable
    ADD CONSTRAINT FK_userTable_projectTable FOREIGN KEY (project_Id) REFERENCES projectTable(id);
    
END TRY
BEGIN CATCH
    THROW 50000, 'Table already exists',1;
END CATCH

GO
