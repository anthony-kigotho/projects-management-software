BEGIN TRY
    CREATE TABLE projectTable (
        id VARCHAR(250) NOT NULL PRIMARY KEY,
        project_name VARCHAR(250) NOT NULL,
        project_description VARCHAR(500) NULL,
        user_Id VARCHAR(250) NULL, -- Use the same data type as the referenced column
        isAssigned BIT DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    
    ALTER TABLE projectTable
    ADD CONSTRAINT FK_projectTable_userTable FOREIGN KEY (user_Id) REFERENCES userTable(id);
    
END TRY
BEGIN CATCH
    THROW 5001, 'Table already exists',1;
END CATCH

GO
