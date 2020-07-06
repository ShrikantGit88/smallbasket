package no.kantega.springandreact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class SpringAndReactApplication extends SpringBootServletInitializer{
	
	@Override
	public SpringApplicationBuilder configure(SpringApplicationBuilder appBuilder) {
		return appBuilder.sources(SpringAndReactApplication.class);
	}
	public static void main(String[] args) {
		SpringApplication.run(SpringAndReactApplication.class, args);
	}
}
