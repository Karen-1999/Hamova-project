package com.example.demo4;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailServiceImpl userDetailsService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .defaultSuccessUrl("http://localhost:3000", true)
                .permitAll()
                .and()
                .httpBasic()
                .and()
                .csrf().disable()
                .logout()
                .logoutSuccessUrl("/id/1");
    }

    @Autowired
    protected void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
       /* String s = "lol", p = "{noop}lol";
        UserRepoA some;

        Class.forName("com.mysql.jdbc.Driver");
        Connection con = DriverManager.getConnection(
                "jdbc:h2:mem:testdb", "", "");


        Statement st = con.createStatement();
        String sql = ("SELECT * FROM user LIMIT 1;");
        ResultSet rs = st.executeQuery(sql);
        if(rs.next()) {
            int id = rs.getInt("id");
            String login = rs.getString("login");
            String password = rs.getString("password");
            auth.inMemoryAuthentication()
                    .withUser(login).password(password).roles("USER");
        }

        con.close();



        auth.inMemoryAuthentication()
                .withUser("user").password("{noop}password").roles("USER")
                .and()
                .withUser("admin").password("{noop}password").roles("ADMIN");
        auth.inMemoryAuthentication()
                .withUser("new_user").password("{noop}password").roles("USER");
        auth.inMemoryAuthentication()
                .withUser(s).password(p).roles("USER");
        */

    }


}
