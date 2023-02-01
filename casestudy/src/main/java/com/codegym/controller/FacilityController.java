package com.codegym.controller;

import com.codegym.model.facility.Facility;
import com.codegym.model.facility.FacilityDTO;
import com.codegym.service.facility.IFacilityService;
import com.codegym.service.facility.IFacilityTypeService;
import com.codegym.service.facility.IRentTypeService;
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
@RequestMapping("/facility")
public class FacilityController {

    @Autowired
    private IFacilityService facilityService;
    @Autowired
    private IFacilityTypeService iFacilityTypeService;
    @Autowired
    private IRentTypeService iRentTypeService;

    @RequestMapping
    public String getHome(Model model, @PageableDefault(value = 5) Pageable pageable) {
        model.addAttribute("list", facilityService.findAll(pageable));
        model.addAttribute("listRent", iRentTypeService.findAll());
        model.addAttribute("listType", iFacilityTypeService.findAll());
        model.addAttribute("facility", new FacilityDTO());
        return "view/facility/list";
    }

    @PostMapping("/add")
    public String addFacility(@Validated @ModelAttribute("facility") FacilityDTO facilityDTO, BindingResult bindingResult, Model model, @PageableDefault(value = 5) Pageable pageable,String validate) {
        new FacilityDTO().check(facilityService.newFindAll(),facilityDTO,bindingResult);
        if (bindingResult.hasErrors()) {
            model.addAttribute("list", facilityService.findAll(pageable));
            model.addAttribute("listRent", iRentTypeService.findAll());
            model.addAttribute("listType", iFacilityTypeService.findAll());
            model.addAttribute("validate",validate);
            model.addAttribute("typez",facilityDTO.getFacilityType().getId());
            return "view/facility/list";
        }
        Facility facility = new Facility();
        BeanUtils.copyProperties(facilityDTO,facility);
        facilityService.save(facility);
        return "redirect:/facility";
    }

    @PostMapping("/delete")
    public String deleteFacility(int id) {
        facilityService.deleteById(id);
        return "redirect:/facility";
    }

    @GetMapping("/find")
    public String seach(String name, String type, Model model, @PageableDefault(value = 5) Pageable pageable) {
        Page<Facility> list = facilityService.search(name, type, pageable);
        model.addAttribute("list", list);
        model.addAttribute("listRent", iRentTypeService.findAll());
        model.addAttribute("listType", iFacilityTypeService.findAll());
        model.addAttribute("facility", new Facility());
        model.addAttribute("typeFind", type);
        model.addAttribute("nameFind", name);
        if (list.isEmpty()) {
            model.addAttribute("isEmpty", true);
        }
        return "view/facility/list";
    }
}
