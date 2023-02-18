package com.codegym.repository;

import com.codegym.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor,Integer> {
    @Query(value = "select * from doctor",nativeQuery = true)
    List<Doctor> getAll();
}
