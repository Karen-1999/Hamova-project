package com.example.demo4.security;

import com.example.demo4.domain.User;
import com.example.demo4.domain.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * This class is used by spring security to authenticate and authorize user
 **/
@Service
public class UserDetailServiceImpl implements UserDetailsService  {
    private final UserRepo repository;

    @Autowired
    public UserDetailServiceImpl(UserRepo userRepository) {
        this.repository = userRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User curruser = repository.findByLogin(username);
        UserDetails user = new org.springframework.security.core.userdetails.User(username, curruser.getPassword(),
                AuthorityUtils.createAuthorityList(curruser.getRole()));
        return UserPrincipal.create(curruser);
    }

    @Transactional
    public UserDetails loadUserById(Long id)
    {
        User user = repository.findById(id).orElseThrow(() -> new UsernameNotFoundException("User not found. id:" + id));
        return UserPrincipal.create(user);
    }


}