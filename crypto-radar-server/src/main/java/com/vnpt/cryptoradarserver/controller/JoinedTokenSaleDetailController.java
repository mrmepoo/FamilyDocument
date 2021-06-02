package com.vnpt.cryptoradarserver.controller;

import com.vnpt.cryptoradarserver.dto.JoinedTokenSaleDetailDTO;
import com.vnpt.cryptoradarserver.model.JoinedTokenSaleDetail;
import com.vnpt.cryptoradarserver.repository.JoinedTokenSaleDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping(path = "joinedTokenSaleDetailController")
public class JoinedTokenSaleDetailController {

    @Autowired
    private JoinedTokenSaleDetailRepository joinedTokenSaleDetailRepository;

    @PostMapping(path = "/add")
    public @ResponseBody
    String addNewUser(@Valid @RequestBody JoinedTokenSaleDetail joinedTokenSaleDetail) {
        joinedTokenSaleDetailRepository.save(joinedTokenSaleDetail);
        return "200";
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<JoinedTokenSaleDetailDTO> getAll() {
        return joinedTokenSaleDetailRepository.getAll();
    }
}
