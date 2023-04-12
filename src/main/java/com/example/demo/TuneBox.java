package com.example.demo;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/* NOTE: Here are some links on how I am implementing the backend
 * 
 * https://www.baeldung.com/spring-boot-angular-web
 * 
*/
@SpringBootApplication
public class TuneBox {

	/*
	 * This will be our REST API - Uses Spring MVC so
	 * we will be using MVC as an architectural pattern
	 */
	@RestController
	public class Controller {
		private final UserRepository userRepository;

		public Controller(UserRepository userRepository) {
			this.userRepository = userRepository;
		}

		@GetMapping("/users")
		public List<User> getUsers() {
			return (List<User>) userRepository.findAll();
		}

		@PostMapping("/users")
		void addUser(@RequestBody User user) {
			userRepository.save(user);
		}
	}

	@Repository
	public interface UserRepository extends CrudRepository<User, Long> {
	}

	@Entity
	public class User {

		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private long id;
		private final String userName;
		private final String password;
		private final String email;

		// standard constructors / setters / getters / toString

		public User(String email, String userName, String password) {
			this.email = email;
			this.userName = userName;
			this.password = password;
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(TuneBox.class, args);
	}

}
