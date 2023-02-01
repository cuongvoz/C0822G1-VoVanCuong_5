package com.codegym.controller.rest;

import com.codegym.model.customer.Customer;
import com.codegym.model.customer.CustomerDTO;
import com.codegym.model.customer.CustomerType;
import com.codegym.model.customer.customerDTO2;
import com.codegym.service.customer.ICustomerService;
import com.codegym.service.customer.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customers")
public class CustomerResController {

    @Autowired
    private ICustomerService iCustomerService;
    @Autowired
    private ICustomerTypeService iCustomerTypeService;

    @RequestMapping
    public ResponseEntity<Page<Customer>> showList(@PageableDefault(value = 5) Pageable pageable) {
        Page<Customer> list = iCustomerService.findALL(pageable);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestBody CustomerDTO customerDTO) {
        iCustomerService.delete(customerDTO.getId());
        return new ResponseEntity<>(customerDTO, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody customerDTO2 customerDTO2) {
        CustomerType customerType = iCustomerTypeService.findById(customerDTO2.getCustomerType());
        Customer customer = new Customer();
        customer.setAddress(customerDTO2.getAddress());
        customer.setEmail(customerDTO2.getEmail());
        customer.setName(customerDTO2.getName());
        customer.setGender(customerDTO2.isGender());
        customer.setiDCard(customerDTO2.getiDCard());
        customer.setPhoneNumber(customerDTO2.getPhoneNumber());
        customer.setDateOfBirth(customerDTO2.getDateOfBirth());
        customer.setDelete(false);
        customer.setCustomerType(customerType);
        iCustomerService.save(customer);
        return new ResponseEntity<>(customer, HttpStatus.CREATED);
    }
}
