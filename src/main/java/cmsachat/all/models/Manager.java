package cmsachat.all.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "manager")
public class Manager {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private long id;
	
    private String nom;
    private String prenom;
    private String number;

	@OneToOne
	private User user;
	
}
