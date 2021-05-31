package com.vnpt.cryptoradarserver.controller;

import com.vnpt.cryptoradarserver.model.CryptoSaleType;
import com.vnpt.cryptoradarserver.model.CryptoToken;
import com.vnpt.cryptoradarserver.repository.CryptoSaleTypeRepository;
import com.vnpt.cryptoradarserver.repository.CryptoTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping(path = "cryptoSaleTypeController")
public class CryptoSaleTypeController {

    @Autowired
    private CryptoSaleTypeRepository cryptoSaleTypeRepository;

    @PostMapping(path = "/add")
    public @ResponseBody
    String addNewUser(@Valid @RequestBody CryptoSaleType cryptoToken) {
        cryptoSaleTypeRepository.save(cryptoToken);
        return "200";
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<CryptoSaleType> getAllUsers() {
        return cryptoSaleTypeRepository.findAll();
    }
}
