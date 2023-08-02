package cmsachat.all.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cmsachat.all.models.Role;
import cmsachat.all.services.RoleService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class RoleController {
	
	@Autowired
	private RoleService roleService;
	
	@GetMapping("/allroles")
	public List<Role> getAllroles(){
		return roleService.getAllRoles();
	}
	
	@PostMapping("/addrole")
	public Role addRole(@RequestBody Role role){
		System.out.println(role);
		return roleService.addRole(role);
	}

}
