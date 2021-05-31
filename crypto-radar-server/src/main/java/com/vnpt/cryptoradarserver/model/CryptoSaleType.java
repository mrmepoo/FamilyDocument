package com.vnpt.cryptoradarserver.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
public class CryptoSaleType {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private String code;

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
