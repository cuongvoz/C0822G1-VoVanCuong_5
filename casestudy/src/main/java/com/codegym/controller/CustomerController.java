package com.codegym.controller;

import com.codegym.model.customer.Customer;
import com.codegym.model.customer.CustomerDTO;
import com.codegym.service.customer.ICustomerService;
import com.codegym.service.customer.ICustomerTypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private ICustomerService service;

    @Autowired
    private ICustomerTypeService iCustomerTypeService;

    @RequestMapping
    public String showList(Model model, @PageableDefault(value = 5) Pageable pageable) {
        model.addAttribute("customer", new CustomerDTO());
        model.addAttribute("list", this.service.findALL(pageable));
        model.addAttribute("listType", this.iCustomerTypeService.findAll());
        return "view/customer/list";
    }

    @PostMapping("/add")
    public String addCustomer(@Validated @ModelAttribute("customer") CustomerDTO customerDTO, BindingResult bindingResult,
                              Model model, @PageableDefault(value = 5) Pageable pageable, String validate, RedirectAttributes redirectAttributes) {
        new CustomerDTO().check(service.findAllNew(),customerDTO,bindingResult);
        if (bindingResult.hasErrors()) {
            model.addAttribute("validate",validate);
            model.addAttribute("list", this.service.findALL(pageable));
            model.addAttribute("listType", this.iCustomerTypeService.findAll());
            return "view/customer/list";
        }
        Customer customer = new Customer();
        BeanUtils.copyProperties(customerDTO,customer);
        service.save(customer);
        redirectAttributes.addFlashAttribute("successCrud",validate);
        redirectAttributes.addFlashAttribute("addSuccess",customer.getName());
        return "redirect:/customer";
    }

    @PostMapping("/delete")
    public String deleteCustomer(int id) {
        service.delete(id);
        return "redirect:/customer";
    }

    @GetMapping("/find")
    public String search(String name, String email, String type, @PageableDefault(value = 5) Pageable pageable, Model model) {
        model.addAttribute("customer", new Customer());
        Page<Customer> list = this.service.findByAll(name, email, type, pageable);
        if (list.isEmpty()) {
            model.addAttribute("isEmpty", true);
        } else {
            model.addAttribute("isEmpty", false);
        }
        model.addAttribute("list", list);
        model.addAttribute("listType", this.iCustomerTypeService.findAll());
        model.addAttribute("nameFind", name);
        model.addAttribute("emailFind", email);
        model.addAttribute("typeFind", type);
        return "view/customer/list";
    }
}
