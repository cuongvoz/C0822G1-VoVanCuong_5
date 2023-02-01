package com.codegym.service.facility;

import com.codegym.model.facility.Facility;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IFacilityService {
    Page<Facility> findAll(Pageable pageable);
    void save(Facility facility);
    void deleteById(int id);
    Page<Facility> search(String name,String type,Pageable pageable);
    List<Facility> newFindAll();
    Facility findById(int id);
}
