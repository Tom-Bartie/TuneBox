package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

import com.example.demo.repository.AlbumRepository;
import com.example.demo.repository.ReviewRepository;
import com.example.demo.repository.UserRepository;

/* NOTE: Here are some links on how I am implementing the backend
 * 
 * https://www.baeldung.com/spring-boot-angular-web
 * 
*/
@SpringBootApplication
public class TuneBoxBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(TuneBoxBackendApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private AlbumRepository albumRepository;

	@Autowired
	private ReviewRepository reviewRepository;

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public void run(String... args) throws Exception {
		// this.userRepository.save(new User("tom-bartie", "password123",
		// "tjb141@pitt.edu"));
		// String sql = "INSERT INTO PROFILE (UserID, UserName, Password, Email) VALUES
		// ('2','username', 'password123', 'pitt@pitt.edu')";
		// int rows = jdbcTemplate.update(sql);

	}

}
