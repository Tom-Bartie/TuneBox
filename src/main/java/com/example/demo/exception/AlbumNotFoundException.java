package com.example.demo.exception;

public class AlbumNotFoundException extends RuntimeException {
    public AlbumNotFoundException(String msg) {
        super(msg);
    }
}
