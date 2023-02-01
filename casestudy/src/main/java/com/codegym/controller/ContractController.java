package com.codegym.controller;

import com.codegym.model.contract.AttachFacility;
import com.codegym.model.contract.Contract;
import com.codegym.model.contract.ContractDetail;
import com.codegym.service.contract.IAttachFacilityService;
import com.codegym.service.contract.IContractDetailService;
import com.codegym.service.contract.IContractService;
import com.codegym.service.customer.ICustomerService;
import com.codegym.service.employee.IEmployeeService;
import com.codegym.service.facility.IFacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/contract")
public class ContractController {

    @Autowired
    private IContractService iContractService;
    @Autowired
    private ICustomerService iCustomerService;
    @Autowired
    private IEmployeeService iEmployeeService;
    @Autowired
    private IFacilityService iFacilityService;
    @Autowired
    private IAttachFacilityService iAttachFacilityService;
    @Autowired
    private IContractDetailService iContractDetailService;

    @RequestMapping
    public String getHome(Model model) {
//      model.addAttribute("list",iContractService.getAllDTO3());
      model.addAttribute("listAttach",iAttachFacilityService.findAll());
      model.addAttribute("customerList",iCustomerService.findAllNew());
      model.addAttribute("employeeList",iEmployeeService.findAll());
      model.addAttribute("facilityList",iFacilityService.newFindAll());
      model.addAttribute("contractDetail",new ContractDetail());
      model.addAttribute("contract",new Contract());
      return "view/contract/list";
    }


    @PostMapping("/add")
    public String addContractDetail(ContractDetail contractDetail) {
        iContractDetailService.save(contractDetail);
        return "redirect:/contract";
    }
    @GetMapping("/view/{id}")
    public String getAttachFacility(RedirectAttributes redirectAttributes, @PathVariable("id") int id) {
        redirectAttributes.addFlashAttribute("listAttachFacilityOf",iAttachFacilityService.findById2(id));
        redirectAttributes.addFlashAttribute("modal",true);
        return "redirect:/contract";
    }

    @PostMapping("/addContract")
    public String addContract(Contract contract) {
        iContractService.save(contract);
        return "redirect:/contract";
    }
}
