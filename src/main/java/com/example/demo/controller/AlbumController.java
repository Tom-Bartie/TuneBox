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

import com.example.demo.model.Album;
import com.example.demo.service.AlbumService;

@RestController
@RequestMapping("/album")
public class AlbumController {

    @Autowired
    private final AlbumService albumService;

    public AlbumController(AlbumService albumService) {
        this.albumService = albumService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Album>> getAllUReviews() {
        List<Album> albums = albumService.findAllAlbums();
        return new ResponseEntity<>(albums, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Album> getUserByID(@PathVariable("id") Long id) throws Throwable {
        Album albums = albumService.findAlbumByID(id);
        return new ResponseEntity<>(albums, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Album> addAlbum(@RequestBody Album album) {
        Album newAlbum = albumService.addAlbum(album);
        return new ResponseEntity<>(newAlbum, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Album> updateUser(@RequestBody Album album) {
        Album updatedReview = albumService.addAlbum(album);
        return new ResponseEntity<>(updatedReview, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        albumService.deleteAlbum(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
