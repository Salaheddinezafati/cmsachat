package cmsachat.all.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cmsachat.all.models.Admin;
import cmsachat.all.models.Groupe;

@Repository
public interface GroupeRepo extends JpaRepository<Groupe, Long> {

	public Groupe findByNamegroupe(String namegroupe);
}
