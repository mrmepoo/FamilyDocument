package com.vnpt.cryptoradarserver.repository;

import com.vnpt.cryptoradarserver.model.CryptoToken;
import org.springframework.data.repository.CrudRepository;

public interface CryptoTokenRepository extends CrudRepository<CryptoToken, Long> {
}
