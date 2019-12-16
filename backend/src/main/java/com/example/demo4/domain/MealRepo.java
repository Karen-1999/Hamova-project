package com.example.demo4.domain;

import com.example.demo4.domain.Meal;
import org.springframework.data.repository.CrudRepository;


public interface MealRepo extends CrudRepository<Meal, Long>{

    public Meal findMealByName(String name);

    public Meal findMealById(int id);

}
