package com.example.demo4;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Meal {
    @Id
    @GeneratedValue
    private int id;

    private String name;
    private String description;

    public Meal(int id, String name, String Description)
    {
        this.id = id;
        this.name  = name;
    }

    public Meal() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public String getDescription()
    {
        return description;
    }

    public void setName(String Name)
    {
        this.name = Name;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
