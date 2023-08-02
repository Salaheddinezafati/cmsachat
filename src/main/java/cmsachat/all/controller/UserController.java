package cmsachat.all.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cmsachat.all.exception.NotFoundException;
import cmsachat.all.models.User;
import cmsachat.all.services.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userservice;
	
	@GetMapping("searchuser/{id}")
	public User findById(@PathVariable Long id) {
		return userservice.findbyid(id);
	}
	@GetMapping("searchuser/managers")
	public List<User> getallusersmanager(){
		return userservice.getallusermanager("manager");
	}
	 @DeleteMapping("deleteuser/{id}")
	    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
	        try {
	            User deletedUser = userservice.deleteUserById(id);
	            return ResponseEntity.ok("User with ID " + id + " deleted successfully.");
	        } catch (NotFoundException e) {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while deleting the user.");
	        }
	    }

}
