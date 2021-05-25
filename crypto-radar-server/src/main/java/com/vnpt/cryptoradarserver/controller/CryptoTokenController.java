package com.vnpt.cryptoradarserver.controller;

import com.vnpt.cryptoradarserver.model.CryptoToken;
import com.vnpt.cryptoradarserver.repository.CryptoTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping(path = "cryptoTokenController")
public class CryptoTokenController {

    @Autowired
    private CryptoTokenRepository cryptoTokenRepository;

    @PostMapping(path = "/add")
    public @ResponseBody
    String addNewUser(@Valid @RequestBody CryptoToken cryptoToken) {
        cryptoTokenRepository.save(cryptoToken);
        return "200";
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<CryptoToken> getAllUsers() {
        return cryptoTokenRepository.findAll();
    }
}
