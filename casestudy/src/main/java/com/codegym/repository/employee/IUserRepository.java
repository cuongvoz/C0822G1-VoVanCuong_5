package com.codegym.repository.employee;

import com.codegym.model.employee.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User,Integer> {
    User findByUsername(String username);
}
