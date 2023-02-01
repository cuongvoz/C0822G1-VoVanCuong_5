package com.codegym.service.employee;

import com.codegym.model.contract.AttachFacility;
import com.codegym.model.employee.Employee;

import java.util.List;

public interface IEmployeeService {
    List<Employee> findAll();
    Employee findById(int id);

}
