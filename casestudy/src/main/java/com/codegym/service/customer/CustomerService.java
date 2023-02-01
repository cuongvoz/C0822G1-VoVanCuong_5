package com.codegym.service.customer;

import com.codegym.model.customer.Customer;
import com.codegym.repository.customer.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService{

    @Autowired
   private ICustomerRepository iCustomerRepository;

    @Override
    public Page<Customer> findALL(Pageable pageable) {
        return iCustomerRepository.findAll(pageable);
    }

    @Override
    public void save(Customer customer) {
        iCustomerRepository.save(customer);
    }

    @Override
    public Customer findById(int id) {
        return iCustomerRepository.findById(id).get();
    }

    @Override
    public void delete(int id) {
        Customer customer = findById(id);
        customer.setDelete(true);
        iCustomerRepository.save(customer);
    }

    @Override
    public Page<Customer> findByAll(String name, String email, String type, Pageable pageable) {
        return iCustomerRepository.findByAll(name, email,type,pageable);
    }

    @Override
    public List<Customer> findAllNew() {
        return iCustomerRepository.findAllNew();
    }
}
