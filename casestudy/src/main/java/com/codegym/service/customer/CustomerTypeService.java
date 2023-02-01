package com.codegym.service.customer;

import com.codegym.model.customer.CustomerType;
import com.codegym.repository.customer.ICustomerTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerTypeService implements ICustomerTypeService{
    @Autowired
   private ICustomerTypeRepository iCustomerTypeRepository;


    @Override
    public List<CustomerType> findAll() {
        return iCustomerTypeRepository.findAll();
    }

    @Override
    public CustomerType findById(int id) {
        return iCustomerTypeRepository.findById(id).orElse(null);
    }
}
