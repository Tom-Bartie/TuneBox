package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Review;
import com.example.demo.service.ReviewService;

@RestController
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Review>> getAllUReviews() {
        List<Review> reviews = reviewService.findAllReviews();
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Review> getUserByID(@PathVariable("id") Long id) throws Throwable {
        Review review = reviewService.findReviewByID(id);
        return new ResponseEntity<>(review, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Review> addUser(@RequestBody Review review) {
        Review newUser = reviewService.addReview(review);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Review> updateUser(@RequestBody Review review) {
        Review updatedReview = reviewService.addReview(review);
        return new ResponseEntity<>(updatedReview, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        reviewService.deleteReview(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}