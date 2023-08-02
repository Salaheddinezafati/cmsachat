package cmsachat.all.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cmsachat.all.models.Groupe;
import cmsachat.all.models.User;
import cmsachat.all.services.AdminService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@PostMapping("/addgroupe")
	public Groupe addNewGroupe(@RequestBody Groupe groupe) {
		return adminService.AddGroupe(groupe);
	}

	@PostMapping("/adduser")
	public User addNewUser(@RequestBody User User) {
		return adminService.AddUser(User);
	}
	  @PostMapping("/login")
	    public ResponseEntity<User> login(@RequestBody User loginRequest) {
	        String email = loginRequest.getEmail();
	        String password = loginRequest.getPassword();

	        ResponseEntity<User> response = adminService.login(email, password);
	        return response;
	    }
	@GetMapping("/allusers")
	public List<User> getAllUsers(){
		return adminService.GetAllUsers();
	}
	
	@GetMapping("/allgroups")
	public List<Groupe> getAllGroups(){
		return adminService.GetAllGroups();
	}

}
