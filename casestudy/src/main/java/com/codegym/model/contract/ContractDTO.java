package com.codegym.model.contract;

public class ContractDTO {
    private int id;
    private String startDate;
    private String endDate;
    private double deposit;
    private int customer;
    public int employee;
    private int facility;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public double getDeposit() {
        return deposit;
    }

    public void setDeposit(double deposit) {
        this.deposit = deposit;
    }

    public int getCustomer() {
        return customer;
    }

    public void setCustomer(int customer) {
        this.customer = customer;
    }

    public int getEmployee() {
        return employee;
    }

    public void setEmployee(int employee) {
        this.employee = employee;
    }

    public int getFacility() {
        return facility;
    }

    public void setFacility(int facility) {
        this.facility = facility;
    }
}
