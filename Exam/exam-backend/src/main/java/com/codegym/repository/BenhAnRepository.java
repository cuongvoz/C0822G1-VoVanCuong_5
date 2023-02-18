package com.codegym.repository;

import com.codegym.model.BenhAn;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
@Repository
public interface BenhAnRepository extends JpaRepository<BenhAn, String> {
   @Query(value = "select * from benh_an ",nativeQuery = true)
   Page<BenhAn> getAll(Pageable pageable);

   @Modifying
   @Transactional
   @Query(value = "delete from benh_an s where s.id =:id",nativeQuery = true)
   void deleteByID(@Param("id") String id);

   @Modifying
   @Transactional
   @Query(value = "update `benh_an` s set s.start_day = :startDay, s.end_day = :endDay, s.reason = :reason ,s.method = :method,doctor_id = :idD where s.id= :id ",nativeQuery = true)
    void update(@Param("startDay") String startDay,@Param("endDay") String endDay,@Param("reason") String reason,
                @Param("method") String method,@Param("idD") int doctorID,
                @Param("id") String id);

   @Modifying
    @Transactional
    @Query(value = "insert into benh_an (id,start_day,end_day,reason,method,doctor_id,patient_id) values (:id,:start_day,:end_day,:reason,:method,:doctor_id,:patient_id)",nativeQuery = true)
     void addBenhAn(@Param("id") String id,@Param("start_day") String startDay,@Param("end_day") String endDay,@Param("reason") String reason,@Param("method") String method,@Param("doctor_id") int doctorID,@Param("patient_id") String patientID);

   @Query(value = "select * from benh_an where id like %:name%",nativeQuery = true)
   List<BenhAn>search(@Param("name") String name);
}
