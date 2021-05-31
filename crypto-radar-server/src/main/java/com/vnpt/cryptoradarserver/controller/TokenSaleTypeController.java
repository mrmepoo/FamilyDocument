package com.vnpt.cryptoradarserver.controller;

import com.vnpt.cryptoradarserver.model.TokenSaleType;
import com.vnpt.cryptoradarserver.repository.TokenSaleTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping(path = "tokenSaleTypeController")
public class TokenSaleTypeController {

    @Autowired
    private TokenSaleTypeRepository tokenSaleTypeRepository;

    @PostMapping(path = "/add")
    public @ResponseBody
    String addNewUser(@Valid @RequestBody TokenSaleType cryptoToken) {
        tokenSaleTypeRepository.save(cryptoToken);
        return "200";
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<TokenSaleType> getAllUsers() {
        return tokenSaleTypeRepository.findAll();
    }
}
