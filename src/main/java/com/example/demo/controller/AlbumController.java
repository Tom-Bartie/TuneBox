package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Album;
import com.example.demo.repository.AlbumRepository;

@RestController
@RequestMapping("api/")
public class AlbumController {

    @Autowired
    private AlbumRepository albumRepository;

    @GetMapping("/albums")
    public List<Album> getAlbums() {
        return (List<Album>) albumRepository.findAll();
    }

    @GetMapping("/albums/{id}")
    public Album getAlbum(@PathVariable("id") long id) {
        return albumRepository.getReferenceById(id);
    }

    @PostMapping("/albums")
    void addAlbums(@RequestBody Album album) {
        albumRepository.save(album);
    }
}
