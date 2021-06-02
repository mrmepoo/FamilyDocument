package com.vnpt.cryptoradarserver.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
public class JoinedTokenSaleDetail {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    private String tokenSaleId;

    @Getter
    @Setter
    private String telegramUserId;

    @Getter
    @Setter
    private String email;

    @Getter
    @Setter
    private String twitterUserId;

    @Getter
    @Setter
    private String bscAddress;

    @Getter
    @Setter
    private String instagramUserId;

    @Getter
    @Setter
    private String tiktokUserId;

    @Getter
    @Setter
    private String redditUserId;

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
