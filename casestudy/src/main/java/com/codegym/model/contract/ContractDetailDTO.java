package com.codegym.model.contract;

import javax.persistence.ManyToOne;

public class ContractDetailDTO {
    private int id;
    private int contractId;
    private int attachId;
    private int quantity;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getContractId() {
        return contractId;
    }

    public void setContractId(int contractId) {
        this.contractId = contractId;
    }

    public int getAttachId() {
        return attachId;
    }

    public void setAttachId(int attachId) {
        this.attachId = attachId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
