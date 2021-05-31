package com.vnpt.cryptoradarserver.controller;

import com.vnpt.cryptoradarserver.model.Token;
import com.vnpt.cryptoradarserver.repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping(path = "tokenController")
public class TokenController {

    @Autowired
    private TokenRepository tokenRepository;

    @PostMapping(path = "/add")
    public @ResponseBody
    String addNewUser(@Valid @RequestBody Token cryptoToken) {
        tokenRepository.save(cryptoToken);
        return "200";
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<Token> getAllUsers() {
        return tokenRepository.findAll();
    }
}
