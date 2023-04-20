package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "reviews")
public class Review implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long profileID;
    private long albumID;
    private long rating;
    private String content;
    private String reviewCode;

    public Review() {

    }

    public Review(int ProfileID, int AlbumID, int rating, String Content, String reviewCode) {
        this.albumID = AlbumID;
        this.content = Content;
        this.profileID = ProfileID;
        this.rating = rating;
        this.reviewCode = reviewCode;
    }

    public long getProfileID() {
        return profileID;
    }

    public void setProfileID(int ProfileID) {
        this.profileID = ProfileID;
    }

    public long getAlbumID() {
        return albumID;
    }

    public void setAlbumID(int AlbumID) {
        this.albumID = AlbumID;
    }

    public long getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String Content) {
        this.content = Content;
    }

    public String getReviewCode() {
        return reviewCode;
    }

    public void setReviewCode(String reviewCode) {
        this.reviewCode = reviewCode;
    }

}