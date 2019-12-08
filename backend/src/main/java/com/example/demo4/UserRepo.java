package com.example.demo4;

import org.springframework.data.repository.CrudRepository;

import javax.jws.soap.SOAPBinding;

public interface UserRepo extends CrudRepository<User, Long> {
    User findByLogin(String username);

    boolean existsByLogin(String login);

    @Override
    <S extends User> S save(S s);
}
