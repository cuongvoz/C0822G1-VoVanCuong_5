package com.codegym.service;

import com.codegym.model.BenhAn;
import com.codegym.repository.BenhAnRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BenhAnService implements IBenhAnService{
   @Autowired
   private BenhAnRepository benhAnRepository;
    @Override
    public Page<BenhAn> getAll(Pageable pageable) {
        return this.benhAnRepository.getAll(pageable);
    }

    @Override
    public void deleteByID(String id) {
        this.benhAnRepository.deleteByID(id);
    }

    @Override
    public void delete(String id) {
        this.benhAnRepository.deleteById(id);
    }

    @Override
    public BenhAn findById(String id) {
        return this.benhAnRepository.findById(id).orElse(null);
    }

    @Override
    public void update(String startDay, String endDay, String reason, String method, int doctorID, String id) {
        this.benhAnRepository.update(startDay,endDay,reason,method,doctorID,id);
    }

    @Override
    public void addBenhAn(String id, String startDay, String endDay, String reason, String method, int doctorID, String patientID) {
        this.benhAnRepository.addBenhAn(id, startDay, endDay, reason, method, doctorID, patientID);
    }

    @Override
    public List<BenhAn> search(String name) {
        return this.benhAnRepository.search(name);
    }


}
