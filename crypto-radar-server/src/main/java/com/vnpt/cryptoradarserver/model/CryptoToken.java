package com.vnpt.cryptoradarserver.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class CryptoToken {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private String name;

    @Column(columnDefinition = "LONGTEXT")
    private String description;

    private Long createdBy;

    private Date createdTime;
}
