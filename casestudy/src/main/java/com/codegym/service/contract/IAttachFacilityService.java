package com.codegym.service.contract;

import com.codegym.model.contract.AttachFacility;
import com.codegym.model.contract.AttachFacilityDTO;

import java.util.List;

public interface IAttachFacilityService {
    List<AttachFacility> findAll();
    List<AttachFacility> findById2(int id);
    AttachFacility findById(int id);
    List<AttachFacilityDTO> getAttachDTO(int id);
}
