package com.vnpt.cryptoradarserver.repository;

import com.vnpt.cryptoradarserver.model.Token;
import org.springframework.data.repository.CrudRepository;

public interface TokenRepository extends CrudRepository<Token, Long> {
}
