package cmsachat.all.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cmsachat.all.models.Role;
import cmsachat.all.repository.RoleRepo;

@Service
public class RoleService {
	
	@Autowired
	private RoleRepo repo;
	
	public List<Role> getAllRoles(){
		return repo.findAll();
	}
	
	public Role addRole(Role role){
		//System.out.println(role);
		
		Role roleisHere = repo.findByNamerole(role.getNamerole());
		if(roleisHere==null) {
			return repo.save(role);
		}
		return null;
	}
	
}
