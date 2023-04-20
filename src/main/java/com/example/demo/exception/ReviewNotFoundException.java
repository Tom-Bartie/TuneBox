package com.example.demo.exception;

public class ReviewNotFoundException extends RuntimeException {
    public ReviewNotFoundException(String msg) {
        super(msg);
    }
}
