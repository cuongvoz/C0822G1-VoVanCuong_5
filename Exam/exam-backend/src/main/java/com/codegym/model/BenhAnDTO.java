package com.codegym.model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class BenhAnDTO {
    private String id;
    @NotBlank(message = "1 Vui lòng nhập mã bệnh nhân")
    private String patientID;
    @NotBlank(message = "2 Vui lòng nhập tên bệnh nhân")
    private String patientName;
    private String startDay;
    private String endDay;
    private String reason;
    private String method;
    private Doctor doctor;


    public BenhAnDTO() {
    }

    public BenhAnDTO(String id, String patientID, String patientName, String startDay, String endDay, String reason, String method, Doctor doctor) {
        this.id = id;
        this.patientID = patientID;
        this.patientName = patientName;
        this.startDay = startDay;
        this.endDay = endDay;
        this.reason = reason;
        this.method = method;
        this.doctor = doctor;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPatientID() {
        return patientID;
    }

    public void setPatientID(String patientID) {
        this.patientID = patientID;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getStartDay() {
        return startDay;
    }

    public void setStartDay(String startDay) {
        this.startDay = startDay;
    }

    public String getEndDay() {
        return endDay;
    }

    public void setEndDay(String endDay) {
        this.endDay = endDay;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    @Override
    public String toString() {
        return "BenhAnDTO{" +
                "id='" + id + '\'' +
                ", patientID='" + patientID + '\'' +
                ", patientName='" + patientName + '\'' +
                ", startDay='" + startDay + '\'' +
                ", endDay='" + endDay + '\'' +
                ", reason='" + reason + '\'' +
                ", method='" + method + '\'' +
                ", doctor=" + doctor.getId() +
                '}';
    }
}
