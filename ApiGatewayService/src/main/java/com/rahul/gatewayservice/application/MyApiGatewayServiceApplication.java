package com.rahul.gatewayservice.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class MyApiGatewayServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyApiGatewayServiceApplication.class, args);
	}

}
