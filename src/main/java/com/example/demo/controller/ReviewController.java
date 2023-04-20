package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Review;
import com.example.demo.repository.ReviewRepository;

@RestController
@RequestMapping("api/")
public class ReviewController {

    @Autowired
    private ReviewRepository ReviewRepository;

    @GetMapping("/review")
    public List<Review> getReviews() {
        return (List<Review>) ReviewRepository.findAll();
    }

    @PostMapping("/review")
    void addReview(@RequestBody Review review) {
        ReviewRepository.save(review);
    }
}