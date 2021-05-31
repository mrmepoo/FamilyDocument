package com.vnpt.cryptoradarserver.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
public class TokenSale {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    private Long tokenId;

    @Getter
    @Setter
    private Long tokenSaleTypeId;

    @Getter
    @Setter
    private Date startTime;

    @Getter
    @Setter
    private Date endTime;

    @Getter
    @Setter
    private String saleLink;

    @Getter
    @Setter
    @Column(columnDefinition = "LONGTEXT")
    private String description;

    @Getter
    @Setter
    private Long createdBy;

    @Getter
    @Setter
    private Date createdTime;
}
