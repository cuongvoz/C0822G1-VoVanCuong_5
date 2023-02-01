package com.codegym.service.contract;

import com.codegym.model.contract.AttachFacility;
import com.codegym.model.contract.Contract;
import com.codegym.model.contract.ContractDTO3;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IContractService {
    List<Contract> findAll();
    void save(Contract contract);
   Contract findById(int id);
   Double calculateTotal(int id);
   List<ContractDTO3> getAllDTO3();

}
