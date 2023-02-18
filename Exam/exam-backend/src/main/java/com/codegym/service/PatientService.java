package com.codegym.service;

import com.codegym.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService implements IPatientService{
    @Autowired
    private PatientRepository patientRepository;

    @Override
    public void update(String name, String id) {
        this.patientRepository.update(name,id);
    }

    @Override
    public void create(String name, String id) {
        this.patientRepository.addPatient(name,id);
    }
}
