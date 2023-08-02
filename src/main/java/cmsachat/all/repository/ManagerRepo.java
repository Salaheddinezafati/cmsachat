package cmsachat.all.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cmsachat.all.models.Admin;
import cmsachat.all.models.Manager;

@Repository
public interface ManagerRepo extends JpaRepository<Manager, Long> {

}
