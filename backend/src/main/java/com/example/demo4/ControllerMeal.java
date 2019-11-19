package com.example.demo4;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerMeal {
    private final MealRepoAction some;

    public ControllerMeal(MealRepoAction _some)
    {
        some = _some;
    }

    @RequestMapping("/id/{userId}")
    @ResponseBody
    Meal idData(@PathVariable int userId)
    {
        return some.id(userId);
    }

    @RequestMapping("/{userName}")
    @ResponseBody
    Meal nameData(@PathVariable String userName)
    {
        return some.name(userName);
    }

}
