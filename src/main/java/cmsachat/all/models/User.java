package cmsachat.all.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private long id;
	
	private String email;
	
	private String password;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Admin admin;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Collaborator collaborator;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Manager manager;
	
	@OneToOne(cascade = CascadeType.ALL)
	private UserAprovel useraprovel;

	@ManyToOne
	private Role role;
	
	@OneToMany(mappedBy = "user")
	@JsonIgnore
	private List<Request> requests;
	
	
	
	
	
	
	
}
