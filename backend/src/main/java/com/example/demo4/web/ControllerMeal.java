package com.example.demo4.web;

import com.example.demo4.domain.Meal;
import com.example.demo4.domain.MealRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RequiredArgsConstructor
@RestController
public class ControllerMeal {
    private final MealRepo repository;

    @RequestMapping("/id/{userId}")
    @ResponseBody
    Meal idData(@PathVariable int userId)
    {
        return repository.findMealById(userId);
    }

    @RequestMapping("/{userName}")
    @ResponseBody
    Meal nameData(@PathVariable String userName)
    {
        return repository.findMealByName(userName);
    }

}
