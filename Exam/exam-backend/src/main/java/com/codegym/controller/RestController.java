package com.codegym.controller;

import com.codegym.model.BenhAn;
import com.codegym.model.BenhAnDTO;
import com.codegym.model.Doctor;
import com.codegym.service.IBenhAnService;
import com.codegym.service.IDoctorService;
import com.codegym.service.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("benhAns")
@CrossOrigin("*")
public class RestController {
    @Autowired
    private IBenhAnService iBenhAnService;

    @Autowired
    private IDoctorService iDoctorService;

    @Autowired
    private IPatientService iPatientService;

    @GetMapping()
    public ResponseEntity<Page<BenhAn>> getAll(@PageableDefault(value = 3)Pageable pageable) {
        Page<BenhAn> benhAns = iBenhAnService.getAll(pageable);
        return new ResponseEntity<>(benhAns, HttpStatus.OK);
    }
    @GetMapping("/doctors")
    public ResponseEntity<List<Doctor>> getAllDoctor() {
        List<Doctor> doctors = iDoctorService.getAll();
        return new ResponseEntity<>(doctors, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> Delete(@PathVariable("id") String id) {
        this.iBenhAnService.deleteByID(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("")
    public ResponseEntity<?> Update(@RequestBody BenhAnDTO benhAnDTO) {
        System.out.println(benhAnDTO);
//        String startDay,String endDay,String reason,String method,int doctorID,String id,String name,String idz
        this.iBenhAnService.update(benhAnDTO.getStartDay(),benhAnDTO.getEndDay(),benhAnDTO.getReason(),benhAnDTO.getMethod(),benhAnDTO.getDoctor().getId(),benhAnDTO.getId());
        this.iPatientService.update( benhAnDTO.getPatientName(), benhAnDTO.getPatientID());
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("")
    public ResponseEntity<?> Create(@RequestBody BenhAnDTO benhAnDTO) {
        System.out.println(benhAnDTO);
//        String startDay,String endDay,String reason,String method,int doctorID,String id,String name,String idz
        this.iPatientService.create( benhAnDTO.getPatientName(), benhAnDTO.getPatientID());
        this.iBenhAnService.addBenhAn(benhAnDTO.getId(),benhAnDTO.getStartDay(),benhAnDTO.getEndDay(),benhAnDTO.getReason(),benhAnDTO.getMethod(),benhAnDTO.getDoctor().getId(),benhAnDTO.getPatientID());

        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/search/{name}")
    public ResponseEntity<List<BenhAn>> search(@PathVariable("name") String name) {
        List<BenhAn> benhAns = iBenhAnService.search(name);
        return new ResponseEntity<>(benhAns, HttpStatus.OK);
    }
}
