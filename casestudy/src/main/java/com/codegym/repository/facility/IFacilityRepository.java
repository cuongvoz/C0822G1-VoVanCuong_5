package com.codegym.repository.facility;

import com.codegym.model.facility.Facility;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IFacilityRepository extends JpaRepository<Facility,Integer> {
    @Query(value = "select f.* from `facility` f join `facility_type` ft on f.facility_type_id = ft.id where f.name like %:name% and ft.name like %:namez% order by f.id",nativeQuery = true)
    Page<Facility> search(@Param("name") String name, @Param("namez") String type, Pageable pageable);

    @Query(value = "select * from facility order by id",nativeQuery = true)
    Page<Facility> findAll(Pageable pageable);

    @Query(value = "select * from facility order by id",nativeQuery = true)
    List<Facility> newFindAll();
}
