package com.rahul.stockprice.application.feignclient;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import com.rahul.stockprice.application.dto.CompanyDto;
import com.rahul.stockprice.application.dto.StockPriceDto;

@FeignClient("company-service")
public interface CompanyClient 
{
	@GetMapping("/company-service/companies/{companyCode}/stockPrices")
	public List<CompanyDto> addStockPriceToCompany(@PathVariable String companyCode, @RequestBody StockPriceDto stockPriceDto);
}
