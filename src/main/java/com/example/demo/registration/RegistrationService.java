package com.example.demo.registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository; 



@Service
public class RegistrationService {
    
    @Autowired
    private UserRepository repo;

    public User saveUser(User user){

        return repo.save(user);
    }

    public User fetchUserByEmail(String email){
       return repo.findByEmail(email);
    }
}
