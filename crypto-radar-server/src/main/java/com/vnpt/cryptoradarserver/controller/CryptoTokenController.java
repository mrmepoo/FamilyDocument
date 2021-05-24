package com.vnpt.cryptoradarserver.controller;

import com.vnpt.cryptoradarserver.model.CryptoToken;
import com.vnpt.cryptoradarserver.repository.CryptoTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "cryptoController")
public class CryptoTokenController {

    @Autowired
    private CryptoTokenRepository cryptoTokenRepository;

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<CryptoToken> getAllUsers() {
        return cryptoTokenRepository.findAll();
    }
}
