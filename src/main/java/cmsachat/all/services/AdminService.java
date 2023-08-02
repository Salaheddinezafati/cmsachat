package cmsachat.all.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import cmsachat.all.models.Groupe;
import cmsachat.all.models.Role;
import cmsachat.all.models.User;
import cmsachat.all.repository.GroupeRepo;
import cmsachat.all.repository.UserRepo;

@Service

public class AdminService {
	
	@Autowired
	private GroupeRepo groupeRepo;
	@Autowired
	private UserRepo userRepo;
	
	public Groupe AddGroupe(Groupe groupe) {
		Groupe groupeisHere = groupeRepo.findByNamegroupe(groupe.getNamegroupe());
		if(groupeisHere==null) {
			return groupeRepo.save(groupe);
		}
			return null;
	}
	
	public List<Groupe> GetAllGroups() {
		return groupeRepo.findAll();
	}
	
	public User AddUser(User User) {

		User userisHere = userRepo.findByEmail(User.getEmail());
		if(userisHere==null) {
			return userRepo.save(User);
		}
		return null;
	}
	
	public ResponseEntity<User> login(String email, String password) {
	    User user = userRepo.findByEmailAndPassword(email, password);
	    if (user == null) {
	        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	    }
	    
	    return new ResponseEntity<>(user, HttpStatus.OK);
	}
	
	public List<User> GetAllUsers() {
		return userRepo.findAll();
	}
	
	
}
