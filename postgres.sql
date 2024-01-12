CREATE DATABASE bookdb;

CREATE TABLE bookstb (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255),
    author VARCHAR (255)
);

INSERT INTO bookstb (
    id,
    title,
    author
)
VALUES
    (
        126,
        'Take it Easy',
        'Mr. Easy'
    );
    -- (
    --     108,
    --     'Don't take it Easy',
    --     'Mrs. Easy'
    -- );