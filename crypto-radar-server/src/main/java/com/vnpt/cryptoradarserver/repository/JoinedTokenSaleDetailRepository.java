package com.vnpt.cryptoradarserver.repository;

import com.vnpt.cryptoradarserver.dto.JoinedTokenSaleDetailDTO;
import com.vnpt.cryptoradarserver.model.JoinedTokenSaleDetail;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface JoinedTokenSaleDetailRepository extends CrudRepository<JoinedTokenSaleDetail, Long> {

    @Query(value = "SELECT jtsd.*, t.NAME AS tokenName "
            + " FROM JOINED_TOKEN_SALE_DETAIL jtsd "
            + " JOIN TOKEN_SALE ts ON jtsd.TOKEN_SALE_ID = ts.ID "
            + " JOIN TOKEN t ON ts.TOKEN_ID = t.ID "
            + " ORDER BY jtsd.CREATED_TIME",
            nativeQuery = true)
    List<JoinedTokenSaleDetailDTO> getAll();
}
