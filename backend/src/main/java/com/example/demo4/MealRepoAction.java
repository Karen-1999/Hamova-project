package com.example.demo4;

import org.springframework.stereotype.Service;

@Service
public class MealRepoAction {
    private final MealRepo RMeals;

    public MealRepoAction(MealRepo rMeals)
    {
        RMeals = rMeals;
    }

    Meal name(String name)
    {
        return RMeals.findMealByName(name);
    }

    Meal id(int id)
    {
        return RMeals.findMealById(id);
    }
}
