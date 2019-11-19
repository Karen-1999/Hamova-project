package com.example.demo4;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


public interface MealRepo extends CrudRepository<Meal, Long>{
    public Meal findMealByName(String name);

    public Meal findMealById(int id);

}
