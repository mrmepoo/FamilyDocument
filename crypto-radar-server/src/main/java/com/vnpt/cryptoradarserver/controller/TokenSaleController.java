package com.vnpt.cryptoradarserver.controller;

import com.vnpt.cryptoradarserver.model.TokenSale;
import com.vnpt.cryptoradarserver.repository.TokenSaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping(path = "tokenSaleController")
public class TokenSaleController {

    @Autowired
    private TokenSaleRepository tokenSaleRepository;

    @PostMapping(path = "/add")
    public @ResponseBody
    String addNewUser(@Valid @RequestBody TokenSale cryptoToken) {
        tokenSaleRepository.save(cryptoToken);
        return "200";
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<TokenSale> getAllUsers() {
        return tokenSaleRepository.findAll();
    }
}
