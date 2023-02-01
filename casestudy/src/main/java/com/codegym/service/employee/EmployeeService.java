package com.codegym.service.employee;

import com.codegym.model.contract.AttachFacility;
import com.codegym.model.employee.Employee;
import com.codegym.repository.employee.IEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements IEmployeeService{
    @Autowired
    private IEmployeeRepository iEmployeeRepository;

    @Override
    public List<Employee> findAll() {
        return iEmployeeRepository.findAll();
    }

    @Override
    public Employee findById(int id) {
        return iEmployeeRepository.findById(id).orElse(null);
    }


}
