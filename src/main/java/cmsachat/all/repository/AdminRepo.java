package cmsachat.all.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cmsachat.all.models.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Long> {

}
