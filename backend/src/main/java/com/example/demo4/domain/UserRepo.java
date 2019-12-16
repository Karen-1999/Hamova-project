package com.example.demo4.domain;

import com.example.demo4.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<User, Long> {
    User findByLogin(String username);

    boolean existsByLogin(String login);

    @Override
    <S extends User> S save(S s);
}
