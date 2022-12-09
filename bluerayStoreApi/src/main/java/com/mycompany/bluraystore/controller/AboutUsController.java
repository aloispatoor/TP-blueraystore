package com.mycompany.bluraystore.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/blueray")
public class AboutUsController {

    @RequestMapping("/about-us")
    public String displayAboutUs(){
        return "";
    }
}
