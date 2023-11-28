CREATE TABLE Usuarios (
                          ID INT PRIMARY KEY AUTO_INCREMENT,
                          Nom VARCHAR(50) NOT NULL,
                          Cognoms VARCHAR(50) NOT NULL,
                          email VARCHAR(100) NOT NULL,
                          password VARCHAR(255) NOT NULL,
                          DNI_complet VARCHAR(20) NOT NULL
);


/* Insert */

INSERT INTO Usuarios (Nom, Cognoms, email, password, DNI_complet)
VALUES ('Juan', 'Apellido', 'juan@gmail.com', '1234', '53001373N');

INSERT INTO Usuarios (Nom, Cognoms, email, password, DNI_complet)
VALUES ('María', 'Apellido', 'maria@gmail.com', '123456', '42720478W');

INSERT INTO Usuarios (Nom, Cognoms, email, password, DNI_complet)
VALUES ('Pedro', 'Apellido', 'pedro@gmail.com', '1234567', '10264046C');
