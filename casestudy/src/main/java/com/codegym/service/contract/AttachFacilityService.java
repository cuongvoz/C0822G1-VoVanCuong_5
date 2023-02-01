package com.codegym.service.contract;

import com.codegym.model.contract.AttachFacility;
import com.codegym.model.contract.AttachFacilityDTO;
import com.codegym.repository.contract.IAttachFacilityRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AttachFacilityService implements IAttachFacilityService{

    @Autowired
    private IAttachFacilityRepository iAttachFacilityRepository;


    @Override
    public List<AttachFacility> findAll() {
        return iAttachFacilityRepository.findAll();
    }

    @Override
    public List<AttachFacility> findById2(int id) {
        return iAttachFacilityRepository.findById2(id);
    }

    @Override
    public AttachFacility findById(int id) {
        return iAttachFacilityRepository.findById(id).orElse(null);
    }

    @Override
    public List<AttachFacilityDTO> getAttachDTO(int id) {
        List<AttachFacility> list = iAttachFacilityRepository.findById2(id);
        List<AttachFacilityDTO> list1 = new ArrayList<>();
        for (AttachFacility x: list) {
            AttachFacilityDTO attachFacilityDTO = new AttachFacilityDTO();
            BeanUtils.copyProperties(x,attachFacilityDTO);
            attachFacilityDTO.setQuantity(iAttachFacilityRepository.getQuantity(x.getId(),id));
            attachFacilityDTO.setTotal(attachFacilityDTO.getCost() * attachFacilityDTO.getQuantity());
            list1.add(attachFacilityDTO);
        }
        return list1;
    }


}
