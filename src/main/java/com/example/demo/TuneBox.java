package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class TuneBox {

	/*
	 * This will be our REST API - Uses Spring MVC so
	 * we will be using MVC as an architectural pattern
	 */
	@RestController
	public class Controller {

	}

	public static void main(String[] args) {
		SpringApplication.run(TuneBox.class, args);
	}

}
