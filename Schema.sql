DROP TABLE IF EXISTS PROFILE CASCADE;
DROP TABLE IF EXISTS SONG CASCADE;
DROP TABLE IF EXISTS REVIEW CASCADE;
DROP TABLE IF EXISTS ALBUM CASCADE;

CREATE TABLE PROFILE(
    ProfileID   integer not null,
    Username    varchar(20) not null,
    Password    varchar(20) not null,
    Email       varchar(50) not null,

    CONSTRAINT PK_PROFILE PRIMARY KEY (ProfileID)
);

CREATE TABLE ALBUM(
    AlbumID       integer not null,
    Title         varchar(100) not null,
    Artist        varchar(100) not null,
    Year          integer not null,
    Genre         varchar(30) not null,
    AverageRating decimal(12,2) not null,

    CONSTRAINT PK_ALBUM PRIMARY KEY (AlbumID)
);

CREATE TABLE SONG(
    SongID      integer not null,
    Title       varchar(100) not null,
    Artist      varchar(100) not null,
    AlbumID     integer not null,
    Length      decimal(12,2) not null,
    Genre       varchar(30) not null,

    CONSTRAINT PK_SONG PRIMARY KEY (SongID),
    CONSTRAINT FK_ALBUM FOREIGN KEY (AlbumID) REFERENCES ALBUM
);

CREATE TABLE REVIEW(
    ReviewID    integer not null,
    ProfileID   integer not null,
    AlbumID     integer not null,
    Rating      decimal(12, 2) not null,
    Content     varchar(1000),

    CONSTRAINT PK_REVIEW PRIMARY KEY (ReviewID),
    CONSTRAINT FK_PROFILE FOREIGN KEY (ProfileID) REFERENCES PROFILE,
    CONSTRAINT FK_ALBUM FOREIGN KEY (AlbumID) REFERENCES ALBUM
);
