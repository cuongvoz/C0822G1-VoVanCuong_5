package com.codegym.service;


import com.codegym.model.BenhAn;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IBenhAnService  {
    Page<BenhAn> getAll(Pageable pageable);
  void deleteByID(String id);
  void delete(String id);
  BenhAn findById(String id);
  void update(String startDay,String endDay,String reason,String method,int doctorID,String id);

  void addBenhAn(String id,String startDay,String endDay,String reason,String method,int doctorID,String patientID);
  List<BenhAn>search(String name);
}
