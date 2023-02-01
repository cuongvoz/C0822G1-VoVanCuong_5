package com.codegym.controller.rest;

import com.codegym.model.contract.*;
import com.codegym.model.customer.Customer;
import com.codegym.model.employee.Employee;
import com.codegym.model.facility.Facility;
import com.codegym.service.contract.IAttachFacilityService;
import com.codegym.service.contract.IContractDetailService;
import com.codegym.service.contract.IContractService;
import com.codegym.service.customer.ICustomerService;
import com.codegym.service.employee.IEmployeeService;
import com.codegym.service.facility.IFacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@RestController
@RequestMapping("/contracts")
@CrossOrigin("*")
public class ContractRestController {
    @Autowired
    private IContractService iContractService;
    @Autowired
    private IAttachFacilityService iAttachFacilityService;
    @Autowired
    private IContractDetailService iContractDetailService;

    @Autowired
    private IFacilityService iFacilityService;
    @Autowired
    private IEmployeeService iEmployeeService;
    @Autowired
    private ICustomerService iCustomerService;


    @GetMapping
    public ResponseEntity<List<ContractDTO3>> getList(){
        List<ContractDTO3> list = iContractService.getAllDTO3();
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    @GetMapping("view/{id}")
    public ResponseEntity<List<AttachFacilityDTO>> getAttachFacility(RedirectAttributes redirectAttributes, @PathVariable("id") int id) {
       List<AttachFacilityDTO> list = iAttachFacilityService.getAttachDTO(id);
        return new  ResponseEntity<>(list, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<Contract> createContract(@RequestBody ContractDTO contractDTO){
        Facility facility = iFacilityService.findById(contractDTO.getFacility());
        Employee employee = iEmployeeService.findById(contractDTO.getEmployee());
        Customer customer = iCustomerService.findById(contractDTO.getCustomer());
        Contract contract = new Contract();
        contract.setStartDate(contractDTO.getStartDate());
        contract.setEndDate(contractDTO.getEndDate());
        contract.setDeposit(contractDTO.getDeposit());
        contract.setCustomer(customer);
        contract.setEmployee(employee);
        contract.setFacility(facility);
        iContractService.save(contract);
        return new ResponseEntity<>(contract,HttpStatus.CREATED);
    }
    @PostMapping("/update")
    public ResponseEntity<Contract> updateContract(@RequestBody ContractDTO contractDTO){
        Facility facility = iFacilityService.findById(contractDTO.getFacility());
        Employee employee = iEmployeeService.findById(contractDTO.getEmployee());
        Customer customer = iCustomerService.findById(contractDTO.getCustomer());
        Contract contract = new Contract();
        contract.setId(contractDTO.getId());
        contract.setStartDate(contractDTO.getStartDate());
        contract.setEndDate(contractDTO.getEndDate());
        contract.setDeposit(contractDTO.getDeposit());
        contract.setCustomer(customer);
        contract.setEmployee(employee);
        contract.setFacility(facility);
        iContractService.save(contract);
        return new ResponseEntity<>(contract,HttpStatus.CREATED);
    }


    @PostMapping("/createDetail")
    public ResponseEntity<ContractDetail> createContractDetail(@RequestBody ContractDetailDTO contractDetailDTO){
        ContractDetail contractDetail= new ContractDetail();
        contractDetail.setContract(iContractService.findById(contractDetailDTO.getContractId()));
        contractDetail.setAttachFacility(iAttachFacilityService.findById(contractDetailDTO.getAttachId()));
        contractDetail.setQuantity(contractDetailDTO.getQuantity());
        iContractDetailService.save(contractDetail);
        return new ResponseEntity<>(contractDetail,HttpStatus.CREATED);
    }
}
