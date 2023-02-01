package com.codegym.repository.customer;

import com.codegym.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICustomerRepository extends JpaRepository<Customer,Integer> {
    @Query(value = "select c.* from `customer` c join `customer_type` ct on c.customer_type = ct.id  where c.name like %:name% and c.email like %:email% and ct.name like %:type% and c.is_delete = false order by c.id" ,nativeQuery = true )
   Page<Customer> findByAll(@Param("name") String name,@Param("email") String email,@Param("type") String type, Pageable pageable);

   @Query(value = "select * from `customer` c where c.is_delete = false order by c.id",nativeQuery = true)
    Page<Customer> findAll(Pageable pageable);

   @Query(value = "select * from `customer` c where c.is_delete = false order by c.id",nativeQuery = true)
   List<Customer> findAllNew();
}
