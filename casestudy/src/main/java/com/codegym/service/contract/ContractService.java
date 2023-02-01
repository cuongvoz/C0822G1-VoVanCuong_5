package com.codegym.service.contract;

import com.codegym.model.contract.AttachFacility;
import com.codegym.model.contract.Contract;
import com.codegym.model.contract.ContractDTO3;
import com.codegym.repository.contract.IContractRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ContractService implements IContractService {
    @Autowired
    private IContractRepository iContractRepository;


    @Override
    public List<Contract> findAll() {
        return iContractRepository.findAll();
    }

    @Override
    public void save(Contract contract) {
        iContractRepository.save(contract);
    }

    @Override
    public Contract findById(int id) {
        return iContractRepository.findById(id).orElse(null);
    }

    @Override
    public Double calculateTotal(int id) {
        return iContractRepository.calculateTotal(id);
    }

    @Override
    public List<ContractDTO3> getAllDTO3() {
        List<Contract> list = iContractRepository.findAll();
        List<ContractDTO3> list1 = new ArrayList<>();
        double totalMoney = 0;
        for (Contract x: list) {
            ContractDTO3 contractDTO3 = new ContractDTO3();
            BeanUtils.copyProperties(x,contractDTO3);
            contractDTO3.setTotal(iContractRepository.calculateTotal(x.getId()));
            totalMoney += contractDTO3.getTotal();
            list1.add(contractDTO3);
        }
        list1.get(0).setTotalMoney(totalMoney);
        return list1;
    }


}
