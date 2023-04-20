package com.example.demo.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.AlbumNotFoundException;
import com.example.demo.model.Album;
import com.example.demo.repository.AlbumRepository;

@Service
public class AlbumService {
    private final AlbumRepository albumRepository;

    @Autowired
    public AlbumService(AlbumRepository albumRepository) {
        this.albumRepository = albumRepository;
    }

    public Album addAlbum(Album album) {
        album.setAlbumCode(UUID.randomUUID().toString());
        return albumRepository.save(album);
    }

    public List<Album> findAllAlbums() {
        return albumRepository.findAll();
    }

    public Album updateAlbum(Album album) {
        return albumRepository.save(album);
    }

    public void deleteAlbum(Long id) {
        albumRepository.deleteAlbumByID(id);
    }

    public Album findAlbumByID(Long id) throws Throwable {
        return albumRepository.findAlbumByID(id)
                .orElseThrow(() -> new AlbumNotFoundException("User by id " + id + " was not found in database"));
    }
}
