package com.codegym.service;

import com.codegym.model.Doctor;
import com.codegym.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService implements IDoctorService{

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public List<Doctor> getAll() {
        return doctorRepository.getAll();
    }
}
