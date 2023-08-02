package cmsachat.all.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cmsachat.all.models.Admin;
import cmsachat.all.models.Role;

@Repository
public interface RoleRepo extends JpaRepository<Role, Long> {
	
	public Role findByNamerole(String namerole) ;

}
