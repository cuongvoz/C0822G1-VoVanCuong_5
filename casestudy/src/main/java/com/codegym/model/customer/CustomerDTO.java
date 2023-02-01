package com.codegym.model.customer;

import com.codegym.service.customer.CustomerService;
import com.codegym.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Component
public class CustomerDTO implements Validator {

    private int id;
    private String name;
    @NotBlank(message = "Vui lòng nhập ngày sinh")
    private String dateOfBirth;
    private boolean gender;
    @NotBlank(message = "Vui lòng nhập CMND")
    private String iDCard;
    @NotBlank(message = "Vui lòng nhập Số Điện Thoại")
    private String phoneNumber;
    @NotBlank(message = "Vui lòng nhập Email")
    private String email;
    @NotBlank(message = "Vui lòng nhập Địa Chỉ")
    private String address;
    @Column(columnDefinition = "boolean default false")
    private boolean isDelete;
    private CustomerType customerType;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public String getiDCard() {
        return iDCard;
    }

    public void setiDCard(String iDCard) {
        this.iDCard = iDCard;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }


    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    public void check(List<Customer> list, CustomerDTO customerDTO, Errors errors) {
        String regexName = "^[a-z A-Z]+$";
        String notNumber = "^\\D+$";
        String phoneNumber1 = "^09[01][\\d]{7}$";
        String phoneNumber2 = "^(84)+9[01][\\d]{7}$";
        if (errors.getFieldError("phoneNumber") == null) {
            if (!customerDTO.getPhoneNumber().matches(phoneNumber1) && !customerDTO.getPhoneNumber().matches(phoneNumber2)){
                errors.rejectValue("phoneNumber", "phoneNumber", "Số điện thoại không đúng định dạng (84)+91xxxxxxx or 090xxxxxxx!");
            }
        }
        String emailRegex1 = "^[\\w]+@gmail.com$" ;
        String emailRegex2 = "^[\\w]+@yahoo.com$" ;
        if (errors.getFieldError("email") == null) {
         if (!customerDTO.getEmail().matches(emailRegex1) && !customerDTO.getEmail().matches(emailRegex2)) {
             errors.rejectValue("email", "email", "Email vừa nhập không đúng định dạng ");
         }
        }

        String iDCardRegex1 = "^[\\d]{9}$";
        String iDCardRegex2 = "^[\\d]{12}$";
        if (errors.getFieldError("iDCard") == null) {
            if (!customerDTO.getiDCard().matches(iDCardRegex1) && !customerDTO.getiDCard().matches(iDCardRegex2)) {
                errors.rejectValue("iDCard", "iDCard", "Mã CMND không đúng định dạng XXXXXXXXX hoặc XXXXXXXXXXXX (X là số 0-9)!");
            }

        }

        if (customerDTO.getName().equals("") || customerDTO.getName() == null) {
            errors.rejectValue("name", "name", "Tên không được bỏ trống");
        } else if (!customerDTO.getName().matches(regexName) || !customerDTO.getName().matches(notNumber)) {
            errors.rejectValue("name", "name", "Tên không đúng định dạng");
        }
        for (Customer customer : list) {
            if (customer.getId() == customerDTO.getId()) {
                continue;
            }
            if (errors.getFieldError("email") == null) {
                if (customer.getEmail().equals(customerDTO.getEmail())) {
                    errors.rejectValue("email", "email", "Email " + customerDTO.getEmail() + " đã có người sử dụng !");
                }
            }
            if (errors.getFieldError("phoneNumber") == null) {
                if (customer.getPhoneNumber().equals(customerDTO.getPhoneNumber())) {
                    errors.rejectValue("phoneNumber", "phoneNumber", "Số điện thoại " + customerDTO.getPhoneNumber() + " đã có người sử dụng rồi !");
                }
            }
            if (errors.getFieldError("iDCard") == null) {
                if (customer.getiDCard().equals(customerDTO.getiDCard())) {
                    errors.rejectValue("iDCard", "iDCard", "CMND " + customerDTO.getiDCard() + " đã có người dùng !");
                }
            }

        }
       if (errors.getFieldError("name") == null) {
           String[] nameCheck = customerDTO.getName().split(" ");
           for (int i = 0 ;i< nameCheck.length;i++){
               if (nameCheck[i].charAt(0) < 65 || nameCheck[i].charAt(0) > 90){
                   errors.rejectValue("name","name","Tên phải viết hoa chữ cái đầu tiên");
                  break;
               }
           }
       }

    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
