package com.codegym.repository;

import com.codegym.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface PatientRepository extends JpaRepository<Patient,String> {
  @Modifying
  @Transactional
  @Query(value = "update patient set name = :name where id = :id",nativeQuery = true)
    void update(@Param("name") String name,@Param("id") String id);

  @Modifying
  @Transactional
  @Query(value = "insert into patient (id,name) values (:id,:name)",nativeQuery = true)
  void addPatient(@Param("name") String name,@Param("id") String id);
}
