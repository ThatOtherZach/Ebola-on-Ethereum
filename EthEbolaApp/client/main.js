import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

contractAddr = "0xe16f391e860420e65c659111c9e1601c0f8e2818"

abiArray = [{"constant":true,"inputs":[],"name":"getEbola","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tipCreator","outputs":[{"name":"","type":"string"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];

Template.getEbola.helpers({
  url() {
  	var template = Template.instance();
    
  	ebolaContract = web3.eth.contract(abiArray).at(contractAddr);

  	ebolaContract.getEbola(function(err, res){
  		TemplateVar.set(template, "urllink", res)
  	})
  },
});


Template.getInfo.helpers({
  infoName() {
  	var template = Template.instance();
    
  	ebolaContract = web3.eth.contract(abiArray).at(contractAddr);

  	ebolaContract.getInfo(function(err, res){
  		TemplateVar.set(template, "name", res[0])
  	})
  },

  infoGenome() {
  	var template = Template.instance();
    
  	ebolaContract = web3.eth.contract(abiArray).at(contractAddr);

  	ebolaContract.getInfo(function(err, res){
  		TemplateVar.set(template, "genome", res[1])
  	})
  },
});


Template.tipCreator.helpers({
  CreatorMsg() {
  	var template = Template.instance();
    
  	ebolaContract = web3.eth.contract(abiArray).at(contractAddr);

  	ebolaContract.tipCreator(function(err, res){
  		TemplateVar.set(template, "msg", res[0])
  	})
  },

  CreatorAddr() {
  	var template = Template.instance();
    
  	ebolaContract = web3.eth.contract(abiArray).at(contractAddr);

  	ebolaContract.tipCreator(function(err, res){
  		TemplateVar.set(template, "addr", res[1])
  	})
  },
});
