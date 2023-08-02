package cmsachat.all.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cmsachat.all.models.Admin;
import cmsachat.all.models.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

	public User findByEmail(String email);
	public User findByEmailAndPassword(String email,String password);
	public List<User> findAllByRoleNamerole(String namerole);
	
}
