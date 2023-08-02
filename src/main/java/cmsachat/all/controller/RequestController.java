package cmsachat.all.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import cmsachat.all.models.Request;
import cmsachat.all.services.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class RequestController {

	@Autowired
	private UserService serviceuser;
	
	@PostMapping("/addrequest")
	public Request addreq(@RequestBody Request request) {
		return serviceuser.addreq(request);
	}
	
	@GetMapping("req/useraproval/{groupename}")
	public List<Request> findReqByUserAprove(@PathVariable String groupename){
		return serviceuser.findAllByGroupeGroupenameAndApproveManagerIsTrueAndApproveUserAprovelIsNull(groupename);
	}
	
	@GetMapping("req/user/{id}")
	public List<Request> findReqByUser(@PathVariable Long id){
		return serviceuser.findReqByUser(id);
	}
	@GetMapping("req/manager/{id}")
	public List<Request> findReqByMnager(@PathVariable Long id){
		return serviceuser.findReqByusermanager(id);
	}
	@PutMapping("req/managertrue/{idmanager}/{id}")
	public Request updateAproveManager(@PathVariable Long idmanager,@PathVariable Long id) {
		return serviceuser.updateAproveManager(id);
	}
	@PutMapping("req/managerfalse/{idmanager}/{id}")
	public Request updateNoAproveManager(@PathVariable Long idmanager,@PathVariable Long id) {
		return serviceuser.updateNoAproveManager(id);
	}
	@PutMapping("req/useraprovaltrue/{iduser}/{id}")
	public Request updateAproveUserAprove(@PathVariable Long iduser,@PathVariable Long id) {
		return serviceuser.updateAproveUserAprove(id);
	}
	@PutMapping("req/useraprovalfalse/{iduser}/{id}")
	public Request updateNoAproveUserAprove(@PathVariable Long iduser,@PathVariable Long id) {
		return serviceuser.updateNoAproveUserAprove(id);
	}
}
