package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Album;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Long> {

    void deleteAlbumByID(Long id);

    Optional<Album> findAlbumByID(Long id);
}
