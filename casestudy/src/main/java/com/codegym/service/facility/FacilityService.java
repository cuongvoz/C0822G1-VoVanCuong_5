package com.codegym.service.facility;

import com.codegym.model.facility.Facility;
import com.codegym.repository.facility.IFacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FacilityService implements IFacilityService{
    @Autowired
    private IFacilityRepository iFacilityRepository;

    @Override
    public Page<Facility> findAll(Pageable pageable) {
        return iFacilityRepository.findAll(pageable);
    }

    @Override
    public void save(Facility facility) {
        iFacilityRepository.save(facility);
    }

    @Override
    public void deleteById(int id) {
        iFacilityRepository.deleteById(id);
    }

    @Override
    public Page<Facility> search(String name, String type, Pageable pageable) {
        return iFacilityRepository.search(name,type,pageable);
    }

    @Override
    public List<Facility> newFindAll() {
        return iFacilityRepository.newFindAll();
    }

    @Override
    public Facility findById(int id) {
        return iFacilityRepository.findById(id).orElse(null);
    }
}
