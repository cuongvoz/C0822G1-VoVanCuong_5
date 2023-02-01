package com.codegym.service.customer;

import com.codegym.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICustomerService {
    Page<Customer> findALL(Pageable pageable);
    void save(Customer customer);
    Customer findById(int id);
    void delete(int id);
    Page<Customer> findByAll(String name, String email, String type, Pageable pageable);
    List<Customer> findAllNew();
}
