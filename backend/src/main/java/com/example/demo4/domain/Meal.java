package com.example.demo4.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.security.PrivateKey;

@Entity
@Getter
@Setter
public class Meal {
    @Id
    @GeneratedValue
    private int id;

    private String name;
    private String description;
    private String ingredients;

    public Meal() {}
}
